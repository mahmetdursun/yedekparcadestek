'use client';

import Image from 'next/image';
import Link from 'next/link';
import { toSlug } from '@/data/brandsModels';

export default function BrandTilesRow({ items = [] }) {
  const six = items.slice(0, 6);
  return (
    <section className="brand-tiles my-4">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3">
        {six.map((b) => {
          const slug = b.slug || toSlug(b.name);
          return (
            <div key={slug} className="col">
              <Link href={`/marka/${slug}`} className="tile card shadow-sm" title={b.name}>
                <span className="tile__img">
                  <Image
                    src={b.img}
                    alt={`${b.name} yedek parça`}
                    fill
                    sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 16vw"
                    priority={false}
                  />
                </span>
                <span className="tile__cap">
                  <i className="tile__bar" />
                  <span className="tile__text">
                    <span className="t1">{b.name}</span>
                    <span className="t2"><strong>Yedek</strong> Parça</span>
                  </span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        /* Kart */
        .tile{
          position: relative;
          display: block;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          background: #000;
          transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
        }
        .tile:hover{ transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0,0,0,.16); border-color:#d1d5db; }

        /* Sabit oran + sabit yükseklik => hepsi eşit */
        .tile__img{
          position: relative;
          display: block;
          height: 320px;                 /* ⬅️ tüm kartların yüksekliği */
          aspect-ratio: 3 / 5;           /* dikey görünüm; farklı resimler eşit kırpılır */
        }
        .tile__img :global(img){
          object-fit: cover;
        }

        /* Üstte görünen siyah gölgelendirme */
        .tile__img::after{
          content:"";
          position:absolute; inset:0;
          z-index:1;
          background: linear-gradient(180deg, rgba(0,0,0,.10) 0%, rgba(0,0,0,.35) 55%, rgba(0,0,0,.80) 100%);
          pointer-events:none;
        }

        /* Alttaki başlık bandı */
        .tile__cap{
          position: absolute; left: 0; right: 0; bottom: 0;
          z-index: 2;
          display: grid; grid-template-columns: auto 1fr; align-items: end; column-gap: 10px;
          padding: 14px 16px 16px;
          color: #fff;
        }
        .tile__bar{ width: 6px; height: 26px; background: #ffc107; border-radius: 3px; }
        .tile__text{ display:flex; flex-direction:column; line-height:1.05; }
        .t1{ font-weight:800; font-size:20px; letter-spacing:.2px; }
        .t2{ font-weight:700; font-size:18px; opacity:.95; }

        /* Responsive yükseklik */
        @media (max-width: 991.98px){
          .tile__img{ height: 280px; }
          .t1{ font-size:18px; } .t2{ font-size:16px; }
        }
        @media (max-width: 575.98px){
          .tile__img{ height: 240px; }
          .t1{ font-size:16px; } .t2{ font-size:15px; }
        }
      `}</style>
    </section>
  );
}
