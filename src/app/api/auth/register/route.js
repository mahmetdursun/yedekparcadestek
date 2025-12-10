import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const form = await req.formData();

    const email = String(form.get("email") || "")
      .trim()
      .toLowerCase();
    const password = String(form.get("password") || "");
    const password2 = String(form.get("password2") || "");
    const firstName = String(form.get("firstName") || "").trim();
    const lastName = String(form.get("lastName") || "").trim();

    // 1) Zorunlu alanlar
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { message: "Zorunlu alanlar eksik." },
        { status: 400 }
      );
    }

    // 2) Şifre tekrar
    if (password !== password2) {
      return NextResponse.json(
        { message: "Şifreler eşleşmiyor." },
        { status: 400 }
      );
    }

    // 3) Parola politikası
    const strong =
      /^(?=.*[a-z])(?=.*[A-ZÇĞİÖŞÜ])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/u;

    if (!strong.test(password)) {
      return NextResponse.json(
        { message: "Şifre yeterince güçlü değil." },
        { status: 400 }
      );
    }

    // 4) E-posta zaten var mı?
    const exists = await prisma.user.findUnique({ where: { email } });

    if (exists) {
      // a) Google ile daha önce açılmış, password null
      if (!exists.password) {
        return NextResponse.json(
          {
            message:
              "Bu e-posta ile Google üzerinden bir hesap oluşturulmuş. Şifre belirlemek için 'Şifremi Unuttum' kısmını kullanabilirsiniz.",
          },
          { status: 409 }
        );
      }

      // b) Normal kayıtlı kullanıcı
      return NextResponse.json(
        { message: "Bu e-posta zaten kayıtlı." },
        { status: 409 }
      );
    }

    // 5) Şifreyi hash'le
    const hash = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: { email, firstName, lastName, password: hash },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("REGISTER_ERROR", err);
    return NextResponse.json(
      { message: "Sunucu hatası. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
