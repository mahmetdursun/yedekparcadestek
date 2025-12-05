// === Marka Grupları ===
// Üst strip’te gözüken ana grup sırası:
// === Marka Grupları ===
// brandsModels.ts

export const GROUPS_ORDER = [
  "vw","fiat","ford","hyundai","opel",
  "renault","volvo","mercedes","bmw","toyota",
  "kia","nissan","honda",
] as const;

export type BrandGroupKey = (typeof GROUPS_ORDER)[number];

export type BrandGroup = {
  id: number;
  label: string;
  members: string[];   // toSlug’lu marka anahtarları
  logo?: string;       // ✅ grup logosu (opsiyonel)
};


export type Brand = {
  name: string;
  slug: string;
  count: string;
  logo: string;
};

export const BRAND_GROUPS: Record<BrandGroupKey, BrandGroup> = {
  vw: {
    id: 1,
    label: "VAG",
    members: ["volkswagen", "audi", "seat", "skoda", "cupra"],
    logo: "/images/car-logo/vag.png",
  },
  fiat: {
    id: 2,
    label: "FIAT",
    members: ["fiat", "lancia", "alfa", "jeep"],
    logo: "/images/car-logo/fiat.png",
  },
  ford: {
    id: 3,
    label: "FORD",
    members: ["ford"],
    logo: "/images/car-logo/ford.png",
  },
  hyundai: {
    id: 4,
    label: "HYUNDAI",
    members: ["hyundai"],
    logo: "/images/car-logo/hyundai.png",
  },
  opel: {
    id: 5,
    label: "PSA",
    members: ["opel", "peugeot", "citroen", "ds", "chevrolet"],
    logo: "/images/car-logo/psa.png",
  },
  renault: {
    id: 6,
    label: "RENAULT",
    members: ["renault", "dacia"],
    logo: "/images/car-logo/renault.png",
  },
  volvo: {
    id: 7,
    label: "VOLVO",
    members: ["volvo"],
    logo: "/images/car-logo/volvo.png",
  },
  mercedes: {
    id: 8,
    label: "MERCEDES",
    members: ["mercedes", "smart"],
    logo: "/images/car-logo/mercedes-benz.png",
  },
  bmw: {
    id: 9,
    label: "BMW",
    members: ["bmw", "land-rover", "range-rover", "mini"],
    logo: "/images/car-logo/bmw.png",
  },
  toyota: {
    id: 10,
    label: "TOYOTA",
    members: ["toyota", "lexus"],
    logo: "/images/car-logo/toyota.png",
  },
  kia: {
    id: 11,
    label: "KIA",
    members: ["kia"],
    logo: "/images/car-logo/kia.png",
  },
  nissan: {
    id: 12,
    label: "NISSAN",
    members: ["nissan", "infiniti"],
    logo: "/images/car-logo/nissan.png",
  },
  honda: {
    id: 13,
    label: "HONDA",
    members: ["honda"],
    logo: "/images/car-logo/honda.png",
  },
} satisfies Record<BrandGroupKey, BrandGroup>;

// === Markalar (mevcut listen aynı) ===
export const BRANDS: Brand[] = [
  {
    name: "Abarth",
    slug: "Abarth",
    count: "13.582",
    logo: "/images/car-logo/abarth.png",
  },
  {
    name: "Alfa Romeo",
    slug: "alfa",
    count: "13.582",
    logo: "/images/car-logo/alfa.png",
  },
  {
    name: "Audi",
    slug: "audi",
    count: "13.582",
    logo: "/images/car-logo/audi.png",
  },
  {
    name: "BMW",
    slug: "bmw",
    count: "24.860",
    logo: "/images/car-logo/bmw.png",
  },
  {
    name: "Chevrolet",
    slug: "chevrolet",
    count: "102",
    logo: "/images/car-logo/chevrolet.png",
  },
  {
    name: "Chrysler",
    slug: "chrysler",
    count: "102",
    logo: "/images/car-logo/chrysler.png",
  },
  {
    name: "Citroen",
    slug: "citroen",
    count: "9.140",
    logo: "/images/car-logo/citroen.png",
  },
  {
    name: "Cupra",
    slug: "cupra",
    count: "198",
    logo: "/images/car-logo/cupra.png",
  },
  {
    name: "Dacia",
    slug: "dacia",
    count: "3.704",
    logo: "/images/car-logo/dacia.png",
  },
  { name: "DS", slug: "ds", count: "3.704", logo: "/images/car-logo/ds.png" },
  {
    name: "Fiat",
    slug: "fiat",
    count: "33.918",
    logo: "/images/car-logo/fiat.png",
  },
  {
    name: "Ford",
    slug: "ford",
    count: "22.940",
    logo: "/images/car-logo/ford.png",
  },
  {
    name: "Honda",
    slug: "honda",
    count: "11.298",
    logo: "/images/car-logo/honda.png",
  },
  {
    name: "Hyundai",
    slug: "hyundai",
    count: "18.102",
    logo: "/images/car-logo/hyundai.png",
  },
  {
    name: "Infiniti",
    slug: "infiniti",
    count: "18.102",
    logo: "/images/car-logo/infiniti.png",
  },
  {
    name: "Jeep",
    slug: "jeep",
    count: "18.102",
    logo: "/images/car-logo/jeep.png",
  },
  {
    name: "Kia",
    slug: "kia",
    count: "3.012",
    logo: "/images/car-logo/kia.png",
  },
  {
    name: "Lancia",
    slug: "lancia",
    count: "3.012",
    logo: "/images/car-logo/lancia.png",
  },
  {
    name: "Land Rover",
    slug: "land rover",
    count: "3.012",
    logo: "/images/car-logo/land-rover.png",
  },
  {
    name: "Lexus",
    slug: "lexus",
    count: "3.012",
    logo: "/images/car-logo/lexus.png",
  },
  {
    name: "Mercedes-Benz",
    slug: "mercedes",
    count: "19.992",
    logo: "/images/car-logo/mercedes-benz.png",
  },
  {
    name: "Mini",
    slug: "mini",
    count: "19.992",
    logo: "/images/car-logo/mini.png",
  },
  {
    name: "Nissan",
    slug: "nissan",
    count: "2.132",
    logo: "/images/car-logo/nissan.png",
  },
  {
    name: "Opel",
    slug: "opel",
    count: "30.201",
    logo: "/images/car-logo/opel.png",
  },
  {
    name: "Peugeot",
    slug: "peugeot",
    count: "14.893",
    logo: "/images/car-logo/peugeot.png",
  },
  {
    name: "Range Rover",
    slug: "range rover",
    count: "55.783",
    logo: "/images/car-logo/range-rover.png",
  },
  {
    name: "Renault",
    slug: "renault",
    count: "55.783",
    logo: "/images/car-logo/renault.png",
  },
  {
    name: "Seat",
    slug: "seat",
    count: "6.637",
    logo: "/images/car-logo/seat.png",
  },
  {
    name: "Skoda",
    slug: "skoda",
    count: "9.594",
    logo: "/images/car-logo/skoda.png",
  },
  {
    name: "Smart",
    slug: "smart",
    count: "9.594",
    logo: "/images/car-logo/smart.png",
  },
  {
    name: "Tofaş",
    slug: "tofas",
    count: "10.829",
    logo: "/images/car-logo/tofas.png",
  },
  {
    name: "Toyota",
    slug: "toyota",
    count: "16.080",
    logo: "/images/car-logo/toyota.png",
  },
  {
    name: "Volkswagen",
    slug: "volkswagen",
    count: "43.918",
    logo: "/images/car-logo/volkswagen.png",
  },
  {
    name: "Volvo",
    slug: "volvo",
    count: "2.890",
    logo: "/images/car-logo/volvo.png",
  },
];

export const MODELS: Record<
  string,
  { name: string; slug: string; img?: string }[]
> = {
  audi: [
    { name: "A1", slug: "a1", img: "/images/car-models/audi-a1.jpg" },
    {
      name: "A3 (1997-2003)",
      slug: "a3-1997",
      img: "/images/car-models/audi-a3(1997).png",
    },
    {
      name: "A3 (2004-2013)",
      slug: "a3-2004",
      img: "/images/car-models/audi-a3(2010).jpg",
    },
    {
      name: "A3 (2013-2020)",
      slug: "a3-2014",
      img: "/images/car-models/audi-a3(2013).png",
    },
    {
      name: "A3 (2021-)",
      slug: "a3-2020",
      img: "/images/car-models/audi-a3(2021).jpg",
    },

    {
      name: "A4 (1994-2001)",
      slug: "a4-1994",
      img: "/images/car-models/audi-a4(1994).png",
    },
    {
      name: "A4 (2000-2004)",
      slug: "a4-2000",
      img: "/images/car-models/audi-a4(2000).png",
    },
    {
      name: "A4 (2004-2008)",
      slug: "a4-2004",
      img: "/images/car-models/audi-a4(2005).jpg",
    },
    {
      name: "A4 (2008-2015)",
      slug: "a4-2008",
      img: "/images/car-models/audi-a4(2010).jpg",
    },
    {
      name: "A4 (2015-2023)",
      slug: "a4-2015",
      img: "/images/car-models/audi-a4(2016).jpg",
    },
    {
      name: "A4 (2023-)",
      slug: "a4-2019",
      img: "/images/car-models/audi-a4(2023).jpg",
    },

    {
      name: "A5 (2008-2016)",
      slug: "a5-2008",
      img: "/images/car-models/audi-a5(2010).jpg",
    },
    {
      name: "A5 (2017-2023)",
      slug: "a5-2017",
      img: "/images/car-models/audi-a5(2018).jpg",
    },
    {
      name: "A5 (2023-)",
      slug: "a5-2023",
      img: "/images/car-models/audi-a5(2023).jpg",
    },

    {
      name: "A6 (1994-1997)",
      slug: "a6-1994",
      img: "/images/car-models/audi-a6(1995).png",
    },
    {
      name: "A6 (1997-2004)",
      slug: "a6-1997",
      img: "/images/car-models/audi-a6(1999).jpg",
    },
    {
      name: "A6 (2004-2011)",
      slug: "a6-2004",
      img: "/images/car-models/audi-a6(2004).jpg",
    },
    {
      name: "A6 (2011-2018)",
      slug: "a6-2011",
      img: "/images/car-models/audi-a6(2011).jpg",
    },
    {
      name: "A6 (2018-2024)",
      slug: "a6-2018",
      img: "/images/car-models/audi-a6(2018).png",
    },
    {
      name: "A6 (Yeni)",
      slug: "a6-2025",
      img: "/images/car-models/audi-a6(2025).jpg",
    },

    {
      name: "A7 (2011-2017)",
      slug: "a7-2011",
      img: "/images/car-models/audi-a7(2011).jpg",
    },
    {
      name: "A7 (2018-)",
      slug: "a7-2018",
      img: "/images/car-models/audi-a7(2018).jpg",
    },

    {
      name: "A8 (1994-2002)",
      slug: "a8-1994",
      img: "/images/car-models/audi-a8(1994).png",
    },
    {
      name: "A8 (2002-2009)",
      slug: "a8-2002",
      img: "/images/car-models/audi-a8(2002).jpg",
    },
    {
      name: "A8 (2010-2017)",
      slug: "a8-2010",
      img: "/images/car-models/audi-a8(2010).jpg",
    },
    {
      name: "A8 (2017-)",
      slug: "a8-2017",
      img: "/images/car-models/audi-a8(2017).jpg",
    },

    { name: "Q2", slug: "q2", img: "/images/car-models/audi-q2.png" },

    {
      name: "Q3 (2008-2013)",
      slug: "q3-2008",
      img: "/images/car-models/audi-q3(2008).jpg",
    },
    {
      name: "Q3 (2013-)",
      slug: "q3-2020",
      img: "/images/car-models/audi-q3(2020).jpg",
    },

    {
      name: "Q5 (2008-2016)",
      slug: "q5-2008",
      img: "/images/car-models/audi-q5(2008).png",
    },
    {
      name: "Q5 (2017-)",
      slug: "q5-2015",
      img: "/images/car-models/audi-q5(2017).png",
    },

    {
      name: "Q7 (2006-2014)",
      slug: "q7-2006",
      img: "/images/car-models/audi-q7(2006).jpg",
    },
    {
      name: "Q7 (2015-)",
      slug: "q7-2015",
      img: "/images/car-models/audi-q7(2015).jpg",
    },

    { name: "Q8", slug: "q8", img: "/images/car-models/audi-q8.jpg" },
  ],

  volkswagen: [
    // Polo
    {
      name: "Polo (1994-2002)",
      slug: "polo-1994",
      img: "/images/car-models/vw-polo(1994).png",
    },
    {
      name: "Polo (2002-2009)",
      slug: "polo-2002",
      img: "/images/car-models/vw-polo(2002).png",
    },
    {
      name: "Polo (2009-2017)",
      slug: "polo-2009",
      img: "/images/car-models/vw-polo(2010).png",
    },
    {
      name: "Polo (2017-2021)",
      slug: "polo-2017",
      img: "/images/car-models/vw-polo(2017).png",
    },
    {
      name: "Polo (2021-)",
      slug: "polo-2021",
      img: "/images/car-models/vw-polo(2022).jpg",
    },

    // Golf
    {
      name: "Golf (1992-1997)",
      slug: "golf-1992",
      img: "/images/car-models/vw-golf(1992).png",
    },
    {
      name: "Golf (1997-2003)",
      slug: "golf-1997",
      img: "/images/car-models/vw-golf(1997).png",
    },
    {
      name: "Golf (2003-2008)",
      slug: "golf-2003",
      img: "/images/car-models/vw-golf(2003).jpg",
    },
    {
      name: "Golf (2008-2012)",
      slug: "golf-2008",
      img: "/images/car-models/vw-golf(2008).png",
    },
    {
      name: "Golf (2012-2019)",
      slug: "golf-2012",
      img: "/images/car-models/vw-golf(2012).jpg",
    },
    {
      name: "Golf (2020-)",
      slug: "golf-2020",
      img: "/images/car-models/vw-golf(2020).jpg",
    },

    // Jetta
    {
      name: "Jetta (1999-2005)",
      slug: "jetta-1999",
      img: "/images/car-models/vw-jetta(1999).png",
    },
    {
      name: "Jetta (2005-2010)",
      slug: "jetta-2005",
      img: "/images/car-models/vw-jetta(2005).png",
    },
    {
      name: "Jetta (2010-2018)",
      slug: "jetta-2010",
      img: "/images/car-models/vw-jetta(2010).png",
    },

    // Passat
    {
      name: "Passat (1996-2005)",
      slug: "passat-1996",
      img: "/images/car-models/vw-passat(1996).png",
    },
    {
      name: "Passat (2005-2010)",
      slug: "passat-2005",
      img: "/images/car-models/vw-passat(2005).png",
    },
    {
      name: "Passat (2010-2014)",
      slug: "passat-2010",
      img: "/images/car-models/vw-passat(2010).png",
    },
    {
      name: "Passat (2015-2022)",
      slug: "passat-2015",
      img: "/images/car-models/vw-passat(2015).png",
    },
    {
      name: "Passat (2023-)",
      slug: "passat-2023",
      img: "/images/car-models/vw-passat(2023).png",
    },

    // Beetle
    {
      name: "Beetle (1950-1980)",
      slug: "beetle-1950",
      img: "/images/car-models/vw-beetle(1950).png",
    },
    {
      name: "New Beetle (1998-2010)",
      slug: "beetle-1998",
      img: "/images/car-models/vw-beetle(1998).jpg",
    },
    {
      name: "Beetle (2011-2019)",
      slug: "beetle-2011",
      img: "/images/car-models/vw-beetle(2011).png",
    },

    // Scirocco
    {
      name: "Scirocco (2008-2017)",
      slug: "scirocco-2008",
      img: "/images/car-models/vw-scirocco(2009).png",
    },

    // Tiguan
    {
      name: "Tiguan (2007-2016)",
      slug: "tiguan-2007",
      img: "/images/car-models/vw-tiguan(2008).jpg",
    },
    {
      name: "Tiguan (2016-)",
      slug: "tiguan-2016",
      img: "/images/car-models/vw-tiguan(2016).jpg",
    },

    // Touareg
    {
      name: "Touareg (2002-2010)",
      slug: "touareg-2002",
      img: "/images/car-models/vw-touareg(2002).png",
    },
    {
      name: "Touareg (2010-2018)",
      slug: "touareg-2010",
      img: "/images/car-models/vw-touareg(2010).png",
    },
    {
      name: "Touareg (2018-)",
      slug: "touareg-2018",
      img: "/images/car-models/vw-touareg(2018).png",
    },

    // T-Roc
    {
      name: "T-Roc (2017-)",
      slug: "t-roc-2017",
      img: "/images/car-models/vw-troc(2018).jpg",
    },

    // T-Cross
    {
      name: "T-Cross (2019-)",
      slug: "t-cross-2019",
      img: "/images/car-models/vw-tcross(2019).png",
    },

    // Taigo
    {
      name: "Taigo (2021-)",
      slug: "taigo-2021",
      img: "/images/car-models/vw-taigo(2021).jpg",
    },
  ],

  seat: [
    // Ibiza
    {
      name: "Ibiza (1993-2002)",
      slug: "ibiza-1993",
      img: "/images/car-models/seat-ibiza(1993).png",
    },
    {
      name: "Ibiza (2002-2008)",
      slug: "ibiza-2002",
      img: "/images/car-models/seat-ibiza(2002).jpg",
    },
    {
      name: "Ibiza (2008-2017)",
      slug: "ibiza-2008",
      img: "/images/car-models/seat-ibiza(2008).jpg",
    },
    {
      name: "Ibiza (2017-)",
      slug: "ibiza-2017",
      img: "/images/car-models/seat-ibiza(2017).jpg",
    },

    // León
    {
      name: "León (1999-2005)",
      slug: "leon-1999",
      img: "/images/car-models/seat-leon(1999).jpg",
    },
    {
      name: "León (2005-2012)",
      slug: "leon-2005",
      img: "/images/car-models/seat-leon(2005).jpg",
    },
    {
      name: "León (2012-2020)",
      slug: "leon-2012",
      img: "/images/car-models/seat-leon(2012).jpg",
    },
    {
      name: "León (2020-)",
      slug: "leon-2020",
      img: "/images/car-models/seat-leon(2020).jpg",
    },

    // Toledo
    {
      name: "Toledo (1993-1998)",
      slug: "toledo-1993",
      img: "/images/car-models/seat-toledo(1993).jpg",
    },
    {
      name: "Toledo (1998-2004)",
      slug: "toledo-1998",
      img: "/images/car-models/seat-toledo(1998).jpg",
    },
    {
      name: "Toledo (2004-2009)",
      slug: "toledo-2004",
      img: "/images/car-models/seat-toledo(2004).jpg",
    },
    {
      name: "Toledo (2012-2019)",
      slug: "toledo-2012",
      img: "/images/car-models/seat-toledo(2012).png",
    },

    // Córdoba (Ibiza sedan)
    {
      name: "Córdoba (1998-2002)",
      slug: "cordoba-1998",
      img: "/images/car-models/seat-cordoba(1998).jpg",
    },
    {
      name: "Córdoba (2002-2009)",
      slug: "cordoba-2002",
      img: "/images/car-models/seat-cordoba(2002).jpg",
    },

    // Altea
    {
      name: "Altea (2004-2015)",
      slug: "altea-2004",
      img: "/images/car-models/seat-altea(2004).jpg",
    },

    // Alhambra
    {
      name: "Alhambra (2002-2010)",
      slug: "alhambra-2002",
      img: "/images/car-models/seat-alhambra(2002).jpg",
    },
    {
      name: "Alhambra (2010-2020)",
      slug: "alhambra-2010",
      img: "/images/car-models/seat-alhambra(2010).jpg",
    },

    // Ateca (SUV)
    {
      name: "Ateca (2016-2020)",
      slug: "ateca-2016",
      img: "/images/car-models/seat-ateca(2016).jpg",
    },
    {
      name: "Ateca (2020-)",
      slug: "ateca-2020",
      img: "/images/car-models/seat-ateca(2020).jpg",
    },

    // Arona (SUV)
    {
      name: "Arona (2017-2021)",
      slug: "arona-2017",
      img: "/images/car-models/seat-arona(2017).jpg",
    },
    {
      name: "Arona (2021-)",
      slug: "arona-2021",
      img: "/images/car-models/seat-arona(2021).jpg",
    },

    // Tarraco (SUV)
    {
      name: "Tarraco (2018-)",
      slug: "tarraco-2018",
      img: "/images/car-models/seat-tarraco(2018).jpg",
    },

    // Mii / Mii Electric
    {
      name: "Mii (2011-2021)",
      slug: "mii-2011",
      img: "/images/car-models/seat-mii(2011).jpg",
    },
  ],

  skoda: [
    // Fabia
    {
      name: "Fabia (1999-2007)",
      slug: "fabia-1999",
      img: "/images/car-models/skoda-fabia(1999).jpg",
    },
    {
      name: "Fabia (2007-2014)",
      slug: "fabia-2007",
      img: "/images/car-models/skoda-fabia(2007).jpg",
    },
    {
      name: "Fabia (2014-2021)",
      slug: "fabia-2014",
      img: "/images/car-models/skoda-fabia(2014).jpg",
    },
    {
      name: "Fabia (2021-)",
      slug: "fabia-2021",
      img: "/images/car-models/skoda-fabia(2021).jpg",
    },

    // Octavia
    {
      name: "Octavia (1996-2004)",
      slug: "octavia-1996",
      img: "/images/car-models/skoda-octavia(1996).jpg",
    },
    {
      name: "Octavia (2004-2013)",
      slug: "octavia-2004",
      img: "/images/car-models/skoda-octavia(2004).jpg",
    },
    {
      name: "Octavia (2013-2020)",
      slug: "octavia-2013",
      img: "/images/car-models/skoda-octavia(2013).jpg",
    },
    {
      name: "Octavia (2020-)",
      slug: "octavia-2020",
      img: "/images/car-models/skoda-octavia(2020).jpg",
    },

    // Superb
    {
      name: "Superb (2001-2008)",
      slug: "superb-2001",
      img: "/images/car-models/skoda-superb(2001).jpg",
    },
    {
      name: "Superb (2008-2015)",
      slug: "superb-2008",
      img: "/images/car-models/skoda-superb(2008).jpg",
    },
    {
      name: "Superb (2015-2023)",
      slug: "superb-2015",
      img: "/images/car-models/skoda-superb(2015).jpg",
    },
    {
      name: "Superb (2024-)",
      slug: "superb-2024",
      img: "/images/car-models/skoda-superb(2024).jpg",
    },

    // Rapid / Scala
    {
      name: "Rapid (2012-2019)",
      slug: "rapid-2012",
      img: "/images/car-models/skoda-rapid(2012).jpg",
    },
    {
      name: "Scala (2019-)",
      slug: "scala-2019",
      img: "/images/car-models/skoda-scala(2019).jpg",
    },

    // Citigo
    {
      name: "Citigo (2011-2020)",
      slug: "citigo-2011",
      img: "/images/car-models/skoda-citigo(2011).jpg",
    },

    // Roomster
    {
      name: "Roomster (2006-2015)",
      slug: "roomster-2006",
      img: "/images/car-models/skoda-roomster(2006).jpg",
    },

    // Yeti
    {
      name: "Yeti (2009-2017)",
      slug: "yeti-2009",
      img: "/images/car-models/skoda-yeti(2009).jpg",
    },

    // SUV Serisi
    {
      name: "Kodiaq (2016-2023)",
      slug: "kodiaq-2016",
      img: "/images/car-models/skoda-kodiaq(2016).jpg",
    },
    {
      name: "Kodiaq (2024-)",
      slug: "kodiaq-2024",
      img: "/images/car-models/skoda-kodiaq(2024).jpg",
    },

    {
      name: "Karoq (2017-2021)",
      slug: "karoq-2017",
      img: "/images/car-models/skoda-karoq(2017).jpg",
    },
    {
      name: "Karoq (2022-)",
      slug: "karoq-2022",
      img: "/images/car-models/skoda-karoq(2022).jpg",
    },

    {
      name: "Kamiq (2019-)",
      slug: "kamiq-2019",
      img: "/images/car-models/skoda-kamiq(2019).jpg",
    },

    // Elektrikli
    {
      name: "Enyaq iV (2020-)",
      slug: "enyaq-2020",
      img: "/images/car-models/skoda-enyaq(2020).jpg",
    },
    {
      name: "Elroq (2025-)",
      slug: "elroq-2025",
      img: "/images/car-models/skoda-elroq(2025).webp",
    },
  ],

  cupra: [
    // Ateca
    {
      name: "Ateca (2018-2020)",
      slug: "ateca-2018",
      img: "/images/car-models/cupra-ateca(2018).jpg",
    },
    {
      name: "Ateca (2020-)",
      slug: "ateca-2020",
      img: "/images/car-models/cupra-ateca(2020).png",
    },

    // Formentor
    {
      name: "Formentor (2020-2023)",
      slug: "formentor-2020",
      img: "/images/car-models/cupra-formentor(2020).jpg",
    },
    {
      name: "Formentor (2024-)",
      slug: "formentor-2024",
      img: "/images/car-models/cupra-formentor(2024).png",
    },

    // Leon
    {
      name: "Leon (2020-2023)",
      slug: "leon-2020",
      img: "/images/car-models/cupra-leon(2020).jpg",
    },
    {
      name: "Leon (2024-)",
      slug: "leon-2024",
      img: "/images/car-models/cupra-leon(2024).jpg",
    },

    // Born (tam elektrikli)
    {
      name: "Born (2021-2023)",
      slug: "born-2021",
      img: "/images/car-models/cupra-born(2021).jpg",
    },
    {
      name: "Born (2024-)",
      slug: "born-2024",
      img: "/images/car-models/cupra-born(2024).png",
    },

    // Tavascan
    {
      name: "Tavascan (2024-)",
      slug: "tavascan-2024",
      img: "/images/car-models/cupra-tavascan(2024).jpg",
    },

    // Terramar
    {
      name: "Terramar (2024-)",
      slug: "terramar-2024",
      img: "/images/car-models/cupra-terramar(2024).jpg",
    },
  ],

  fiat: [
    // Punto
    {
      name: "Punto (1993-1999)",
      slug: "punto-1993",
      img: "/images/car-models/fiat-punto(1993).png",
    },
    {
      name: "Punto (1999-2005)",
      slug: "punto-1999",
      img: "/images/car-models/fiat-punto(1999).png",
    },
    {
      name: "Grande Punto (2005-2010)",
      slug: "grande-punto-2005",
      img: "/images/car-models/fiat-punto(2005).jpg",
    },
    {
      name: "Punto Evo (2010-2012)",
      slug: "punto-evo-2010",
      img: "/images/car-models/fiat-punto(2010).jpg",
    },
    {
      name: "Punto (2012-2018)",
      slug: "punto-2012",
      img: "/images/car-models/fiat-punto(2012).jpg",
    },

    // Tipo / Egea
    {
      name: "Tipo (1988-2000)",
      slug: "tipo-1988",
      img: "/images/car-models/fiat-tipo(1989).png",
    },
    {
      name: "Egea (2015-2020)",
      slug: "egea-2015",
      img: "/images/car-models/fiat-egea(2016).jpg",
    },
    {
      name: "Egea (2020-)",
      slug: "egea-2020",
      img: "/images/car-models/fiat-egea(2020).jpg",
    },

    // 500 Serisi
    {
      name: "Nuova 500 (2009-2020)",
      slug: "500-2007",
      img: "/images/car-models/fiat-500(2009).jpg",
    },
    {
      name: "500 (Elektrik, 2021-)",
      slug: "500-2021",
      img: "/images/car-models/fiat-500(2021).jpg",
    },
    {
      name: "500L (2012-2022)",
      slug: "500l-2012",
      img: "/images/car-models/fiat-500l(2012).jpg",
    },
    {
      name: "500c (2014-2024)",
      slug: "500c-2014",
      img: "/images/car-models/fiat-500c(2014).jpg",
    },
    {
      name: "600e (2023-)",
      slug: "600e-2023",
      img: "/images/car-models/fiat-600e(2024).png",
    },

    // Bravo / Brava
    {
      name: "Bravo/Brava (1995-2001)",
      slug: "bravo-1995",
      img: "/images/car-models/fiat-bravo(1995).jpg",
    },
    {
      name: "Stilo (2001-2007)",
      slug: "stilo-2001",
      img: "/images/car-models/fiat-stilo(2001).jpg",
    },
    {
      name: "Bravo (2007-2014)",
      slug: "bravo-2007",
      img: "/images/car-models/fiat-bravo(2007).png",
    },

    // Linea
    {
      name: "Linea (2007-2018)",
      slug: "linea-2007",
      img: "/images/car-models/fiat-linea(2007).jpg",
    },

    // Albea
    {
      name: "Albea (2002-2012)",
      slug: "albea-2002",
      img: "/images/car-models/fiat-albea(2002).jpg",
    },

    // Panda
    {
      name: "Panda (2003-2012)",
      slug: "panda-2003",
      img: "/images/car-models/fiat-panda(2003).jpg",
    },
    {
      name: "Panda (2012-)",
      slug: "panda-2012",
      img: "/images/car-models/fiat-panda(2012).jpg",
    },

    // Uno
    {
      name: "Uno (1990-2002)",
      slug: "uno-1990",
      img: "/images/car-models/fiat-uno(1991).png",
    },

    // Doblo
    {
      name: "Doblo (2000-2010)",
      slug: "doblo-2000",
      img: "/images/car-models/fiat-doblo(2000).jpg",
    },
    {
      name: "Doblo (2010-2021)",
      slug: "doblo-2010",
      img: "/images/car-models/fiat-doblo(2010).jpg",
    },
    {
      name: "Doblo (2022-)",
      slug: "doblo-2022",
      img: "/images/car-models/fiat-doblo(2022).jpg",
    },

    // Fiorino
    {
      name: "Fiorino (2007-)",
      slug: "fiorino-2007",
      img: "/images/car-models/fiat-fiorino(2007).jpg",
    },

    // Palio
    {
      name: "Palio (1996-2017)",
      slug: "palio-1996",
      img: "/images/car-models/fiat-palio(1996).jpg",
    },

    // Siena
    {
      name: "Siena (1999-2012)",
      slug: "siena-1999",
      img: "/images/car-models/fiat-siena(1999).jpg",
    },

    // Tempra
    {
      name: "Tempra (1990-1998)",
      slug: "tempra-1990",
      img: "/images/car-models/fiat-tempra(1990).jpg",
    },
  ],

  lancia: [
    // Ypsilon
    {
      name: "Ypsilon (2006-2013)",
      slug: "ypsilon-2006",
      img: "/images/car-models/lancia-ypsilon(2006).png",
    },

    // Delta
    {
      name: "Delta (1990-1999)",
      slug: "delta-1990",
      img: "/images/car-models/lancia-delta(1990).png",
    },
    {
      name: "Delta (2008-2014)",
      slug: "delta-2008",
      img: "/images/car-models/lancia-delta(2008).jpg",
    },

    // Thema
    {
      name: "Thema (2011-2014)",
      slug: "thema-2011",
      img: "/images/car-models/lancia-thema(2011).jpg",
    },

    // Phedra
    {
      name: "Phedra (2002-2010)",
      slug: "phedra-2002",
      img: "/images/car-models/lancia-phedra(2002).png",
    },
  ],

  alfa: [
    // Giulietta
    {
      name: "Giulietta (2010-2020)",
      slug: "giulietta-2010",
      img: "/images/car-models/alfa-giulietta(2010).jpg",
    },

    // MiTo
    {
      name: "MiTo (2008-2018)",
      slug: "mito-2008",
      img: "/images/car-models/alfa-mito(2008).jpg",
    },

    // 147
    {
      name: "147 (2000-2010)",
      slug: "147-2000",
      img: "/images/car-models/alfa-147(2000).png",
    },

    // 156
    {
      name: "156 (1997-2007)",
      slug: "156-1997",
      img: "/images/car-models/alfa-156(1997).png",
    },

    // 159
    {
      name: "159 (2005-2011)",
      slug: "159-2005",
      img: "/images/car-models/alfa-159(2005).png",
    },

    // Giulia
    {
      name: "Giulia (2016-)",
      slug: "giulia-2016",
      img: "/images/car-models/alfa-giulia(2016).jpg",
    },

    // Stelvio
    {
      name: "Stelvio (2017-)",
      slug: "stelvio-2017",
      img: "/images/car-models/alfa-stelvio(2017).jpg",
    },

    // Tonale
    {
      name: "Tonale (2022-)",
      slug: "tonale-2022",
      img: "/images/car-models/alfa-tonale(2022).jpg",
    },

    // Brera
    {
      name: "Brera (2005-2010)",
      slug: "brera-2005",
      img: "/images/car-models/alfa-brera(2005).png",
    },

    // GT
    {
      name: "GT (2003-2010)",
      slug: "gt-2003",
      img: "/images/car-models/alfa-gt(2003).jpg",
    },

    // Spider
    {
      name: "Spider (1995-2006)",
      slug: "spider-1995",
      img: "/images/car-models/alfa-spider(1995).png",
    },
    {
      name: "Spider (2006-2010)",
      slug: "spider-2006",
      img: "/images/car-models/alfa-spider(2006).png",
    },

    // GTV
    {
      name: "GTV (1995-2006)",
      slug: "gtv-1995",
      img: "/images/car-models/alfa-gtv(1995).png",
    },
  ],

  jeep: [
    // Wrangler
    {
      name: "Wrangler (1980-1995)",
      slug: "wrangler-1980",
      img: "/images/car-models/jeep-wrangler(1980).png",
    }, // YJ
    {
      name: "Wrangler (1997-2006)",
      slug: "wrangler-1997",
      img: "/images/car-models/jeep-wrangler(1997).jpg",
    }, // TJ
    {
      name: "Wrangler (2007-2018)",
      slug: "wrangler-2007",
      img: "/images/car-models/jeep-wrangler(2007).jpg",
    }, // JK
    {
      name: "Wrangler (2018-)",
      slug: "wrangler-2018",
      img: "/images/car-models/jeep-wrangler(2018).jpg",
    }, // JL

    // Grand Cherokee
    {
      name: "Grand Cherokee (1993-1998)",
      slug: "grand-cherokee-1993",
      img: "/images/car-models/jeep-grand-cherokee(1993).png",
    }, // ZJ
    {
      name: "Grand Cherokee (1999-2004)",
      slug: "grand-cherokee-1999",
      img: "/images/car-models/jeep-grand-cherokee(1999).png",
    }, // WJ
    {
      name: "Grand Cherokee (2005-2010)",
      slug: "grand-cherokee-2005",
      img: "/images/car-models/jeep-grand-cherokee(2005).jpg",
    }, // WK
    {
      name: "Grand Cherokee (2011-2021)",
      slug: "grand-cherokee-2011",
      img: "/images/car-models/jeep-grand-cherokee(2011).jpg",
    }, // WK2
    {
      name: "Grand Cherokee (2021-)",
      slug: "grand-cherokee-2021",
      img: "/images/car-models/jeep-grand-cherokee(2021).jpg",
    }, // WL

    // Compass
    {
      name: "Compass (2007-2016)",
      slug: "compass-2007",
      img: "/images/car-models/jeep-compass(2007).jpg",
    }, // MK49
    {
      name: "Compass (2017-2020)",
      slug: "compass-2017",
      img: "/images/car-models/jeep-compass(2017).jpg",
    }, // MP
    {
      name: "Compass (2021-)",
      slug: "compass-2021",
      img: "/images/car-models/jeep-compass(2021).jpg",
    }, // MP FL

    // Renegade
    {
      name: "Renegade (2014-2018)",
      slug: "renegade-2014",
      img: "/images/car-models/jeep-renegade(2014).jpg",
    },
    {
      name: "Renegade (2019-)",
      slug: "renegade-2019",
      img: "/images/car-models/jeep-renegade(2019).jpg",
    },

    // Patriot
    {
      name: "Patriot (2007-2017)",
      slug: "patriot-2007",
      img: "/images/car-models/jeep-patriot(2007).jpg",
    },

    // Commander
    {
      name: "Commander (2005-2010)",
      slug: "commander-2005",
      img: "/images/car-models/jeep-commander(2005).jpg",
    },
  ],

  ford: [
    // B-HB / B-MPV
    {
      name: "Fiesta (1996-2002)",
      slug: "fiesta-1996",
      img: "/images/car-models/ford-fiesta(1996).jpg",
    },
    {
      name: "Fiesta (2002-2008)",
      slug: "fiesta-2002",
      img: "/images/car-models/ford-fiesta(2002).jpg",
    },
    {
      name: "Fiesta (2008-2017)",
      slug: "fiesta-2008",
      img: "/images/car-models/ford-fiesta(2008).jpg",
    },
    {
      name: "Fiesta (2017-2023)",
      slug: "fiesta-2017",
      img: "/images/car-models/ford-fiesta(2017).png",
    },

    {
      name: "Fusion (2002-2012)",
      slug: "fusion-2002",
      img: "/images/car-models/ford-fusion(2002).png",
    }, // B-MPV (TR’de satıldı)
    {
      name: "B-MAX (2012-2017)",
      slug: "b-max-2012",
      img: "/images/car-models/ford-b-max(2012).jpg",
    },

    // C-HB / Sedan / MPV
    {
      name: "Focus (1998-2004)",
      slug: "focus-1998",
      img: "/images/car-models/ford-focus(1998).jpg",
    },
    {
      name: "Focus (2005-2011)",
      slug: "focus-2005",
      img: "/images/car-models/ford-focus(2005).jpg",
    },
    {
      name: "Focus (2011-2018)",
      slug: "focus-2011",
      img: "/images/car-models/ford-focus(2011).jpg",
    },
    {
      name: "Focus (2018-)",
      slug: "focus-2018",
      img: "/images/car-models/ford-focus(2018).png",
    },

    {
      name: "C-MAX (2003-2010)",
      slug: "c-max-2003",
      img: "/images/car-models/ford-c-max(2003).png",
    },
    {
      name: "C-MAX (2010-2015)",
      slug: "c-max-2010",
      img: "/images/car-models/ford-c-max(2010).jpg",
    },
    {
      name: "C-MAX (2015-2019)",
      slug: "c-max-2015",
      img: "/images/car-models/ford-c-max(2015).jpg",
    },

    // D-Sedan
    {
      name: "Mondeo (1993-2000)",
      slug: "mondeo-1993",
      img: "/images/car-models/ford-mondeo(1993).png",
    },
    {
      name: "Mondeo (2000-2007)",
      slug: "mondeo-2000",
      img: "/images/car-models/ford-mondeo(2000).png",
    },
    {
      name: "Mondeo (2007-2014)",
      slug: "mondeo-2007",
      img: "/images/car-models/ford-mondeo(2007).png",
    },
    {
      name: "Mondeo (2014-2022)",
      slug: "mondeo-2014",
      img: "/images/car-models/ford-mondeo(2014).jpg",
    },

    // SUV / Crossover
    {
      name: "Kuga (2008-2012)",
      slug: "kuga-2008",
      img: "/images/car-models/ford-kuga(2008).png",
    },
    {
      name: "Kuga (2013-2019)",
      slug: "kuga-2013",
      img: "/images/car-models/ford-kuga(2013).png",
    },
    {
      name: "Kuga (2020-)",
      slug: "kuga-2020",
      img: "/images/car-models/ford-kuga(2020).png",
    },

    {
      name: "EcoSport (2014-2022)",
      slug: "ecosport-2014",
      img: "/images/car-models/ford-ecosport(2014).jpg",
    },

    {
      name: "Puma (2019-)",
      slug: "puma-2019",
      img: "/images/car-models/ford-puma(2019).jpg",
    }, // TR’de satılıyor

    // Pick-up
    {
      name: "Ranger (1999-2010)",
      slug: "ranger-1999",
      img: "/images/car-models/ford-ranger(1999).jpg",
    }, // T6
    {
      name: "Ranger (2011-2015)",
      slug: "ranger-2011",
      img: "/images/car-models/ford-ranger(2011).png",
    }, // T6
    {
      name: "Ranger (2016-2022)",
      slug: "ranger-2016",
      img: "/images/car-models/ford-ranger(2016).png",
    },
    {
      name: "Ranger (2023-)",
      slug: "ranger-2023",
      img: "/images/car-models/ford-ranger(2023).jpg",
    },

    // Ticari (TR’de çok önemli)
    {
      name: "Transit (2006-2013)",
      slug: "transit-2006",
      img: "/images/car-models/ford-transit(2006).png",
    },
    {
      name: "Transit (2014-)",
      slug: "transit-2014",
      img: "/images/car-models/ford-transit(2014).jpg",
    },
    {
      name: "Transit Custom (2012-2023)",
      slug: "transit-custom-2012",
      img: "/images/car-models/ford-transit-custom(2012).jpg",
    },
    {
      name: "Transit Custom (2024-)",
      slug: "transit-custom-2024",
      img: "/images/car-models/ford-transit-custom(2024).png",
    },

    {
      name: "Tourneo Custom (2012-2023)",
      slug: "tourneo-custom-2012",
      img: "/images/car-models/ford-tourneo-custom(2012).jpg",
    },
    {
      name: "Tourneo Custom (2024-)",
      slug: "tourneo-custom-2024",
      img: "/images/car-models/ford-tourneo-custom(2024).jpg",
    },

    {
      name: "Transit Connect (2002-2021)",
      slug: "transit-connect-2002",
      img: "/images/car-models/ford-transit-connect(2002).png",
    },
    {
      name: "Tourneo Connect (2022-)",
      slug: "tourneo-connect-2022",
      img: "/images/car-models/ford-tourneo-connect(2022).jpg",
    },

    {
      name: "Transit Courier (2014-2023)",
      slug: "transit-courier-2014",
      img: "/images/car-models/ford-transit-courier(2014).jpg",
    },
    {
      name: "Transit/Tourneo Courier (2024-)",
      slug: "courier-2024",
      img: "/images/car-models/ford-courier(2024).png",
    },

    // Spor (resmi ithalat, sınırlı)
    {
      name: "Mustang (2015-)",
      slug: "mustang-2015",
      img: "/images/car-models/ford-mustang(2015).jpg",
    },
  ],

  hyundai: [
    // i10
    {
      name: "i10 (2008-2013)",
      slug: "i10-2008",
      img: "/images/car-models/hyundai-i10(2008).jpg",
    },
    {
      name: "i10 (2014-2019)",
      slug: "i10-2014",
      img: "/images/car-models/hyundai-i10(2014).jpg",
    },
    {
      name: "i10 (2020-)",
      slug: "i10-2020",
      img: "/images/car-models/hyundai-i10(2020).jpg",
    },

    // i20 & i20 N
    {
      name: "i20 (2009-2014)",
      slug: "i20-2009",
      img: "/images/car-models/hyundai-i20(2009).jpg",
    },
    {
      name: "i20 (2015-2020)",
      slug: "i20-2015",
      img: "/images/car-models/hyundai-i20(2015).jpg",
    },
    {
      name: "i20 (2020-)",
      slug: "i20-2020",
      img: "/images/car-models/hyundai-i20(2020).jpg",
    },
    {
      name: "i20 N (2021-)",
      slug: "i20n-2021",
      img: "/images/car-models/hyundai-i20n(2021).jpg",
    },

    // i30
    {
      name: "i30 (2007-2011)",
      slug: "i30-2007",
      img: "/images/car-models/hyundai-i30(2007).jpg",
    },
    {
      name: "i30 (2012-2016)",
      slug: "i30-2012",
      img: "/images/car-models/hyundai-i30(2012).jpg",
    },
    {
      name: "i30 (2017-)",
      slug: "i30-2017",
      img: "/images/car-models/hyundai-i30(2017).jpg",
    },

    // Elantra
    {
      name: "Elantra (2011-2016)",
      slug: "elantra-2011",
      img: "/images/car-models/hyundai-elantra(2011).jpg",
    },
    {
      name: "Elantra (2016-2020)",
      slug: "elantra-2016",
      img: "/images/car-models/hyundai-elantra(2016).jpg",
    },
    {
      name: "Elantra (2021-)",
      slug: "elantra-2021",
      img: "/images/car-models/hyundai-elantra(2021).jpg",
    },

    // Accent
    {
      name: "Accent Era (2006-2012)",
      slug: "accent-era-2006",
      img: "/images/car-models/hyundai-accent-era(2006).png",
    },
    {
      name: "Accent Blue (2011-2017)",
      slug: "accent-blue-2011",
      img: "/images/car-models/hyundai-accent-blue(2011).jpg",
    },
    {
      name: "Accent Admire",
      slug: "accent-admire",
      img: "/images/car-models/hyundai-accent-admire.jpg",
    },

    // SUV
    {
      name: "Bayon (2021-)",
      slug: "bayon-2021",
      img: "/images/car-models/hyundai-bayon(2021).jpg",
    },

    {
      name: "Kona (2018-2023)",
      slug: "kona-2018",
      img: "/images/car-models/hyundai-kona(2018).jpg",
    },
    {
      name: "Kona (2023-)",
      slug: "kona-2023",
      img: "/images/car-models/hyundai-kona(2023).jpg",
    },

    {
      name: "Tucson (2004-2009)",
      slug: "tucson-2004",
      img: "/images/car-models/hyundai-tucson(2004).jpg",
    },
    {
      name: "Tucson (2010-2015)",
      slug: "tucson-2010",
      img: "/images/car-models/hyundai-tucson(2010).jpg",
    },
    {
      name: "Tucson (2015-2020)",
      slug: "tucson-2015",
      img: "/images/car-models/hyundai-tucson(2015).jpg",
    },
    {
      name: "Tucson (2021-)",
      slug: "tucson-2021",
      img: "/images/car-models/hyundai-tucson(2021).jpg",
    },

    {
      name: "Santa Fe (2000-2012)",
      slug: "santa-fe-2000",
      img: "/images/car-models/hyundai-santa-fe(2000).jpg",
    },
    {
      name: "Santa Fe (2013-2018)",
      slug: "santa-fe-2013",
      img: "/images/car-models/hyundai-santa-fe(2013).jpg",
    },
    {
      name: "Santa Fe (2019-2023)",
      slug: "santa-fe-2019",
      img: "/images/car-models/hyundai-santa-fe(2019).jpg",
    },
    {
      name: "Santa Fe (2024-)",
      slug: "santa-fe-2024",
      img: "/images/car-models/hyundai-santa-fe(2024).jpg",
    },

    // D-Sedan
    {
      name: "Sonata (1992-2000)",
      slug: "sonata-1999",
      img: "/images/car-models/hyundai-sonata(1999).jpg",
    },
    {
      name: "Sonata (2000-2011)",
      slug: "sonata-2000",
      img: "/images/car-models/hyundai-sonata(2000).jpg",
    },

    // Elektrikli
    {
      name: "IONIQ (2016-2022)",
      slug: "ioniq-2016",
      img: "/images/car-models/hyundai-ioniq(2016).jpg",
    },
    {
      name: "IONIQ 5 (2021-)",
      slug: "ioniq5-2021",
      img: "/images/car-models/hyundai-ioniq5(2021).jpg",
    },
    {
      name: "IONIQ 6 (2023-)",
      slug: "ioniq6-2023",
      img: "/images/car-models/hyundai-ioniq6(2023).png",
    },
  ],

  opel: [
    // Corsa
    {
      name: "Corsa (1993-2000)",
      slug: "corsa-1993",
      img: "/images/car-models/opel-corsa(1993).png",
    }, // B
    {
      name: "Corsa (2000-2006)",
      slug: "corsa-2000",
      img: "/images/car-models/opel-corsa(2000).png",
    }, // C
    {
      name: "Corsa (2006-2014)",
      slug: "corsa-2006",
      img: "/images/car-models/opel-corsa(2006).png",
    }, // D
    {
      name: "Corsa (2014-2019)",
      slug: "corsa-2014",
      img: "/images/car-models/opel-corsa(2014).jpg",
    }, // E
    {
      name: "Corsa (2019-)",
      slug: "corsa-2019",
      img: "/images/car-models/opel-corsa(2019).jpg",
    }, // F (MC: 2023)

    // Astra
    {
      name: "Astra (1991-1998)",
      slug: "astra-1991",
      img: "/images/car-models/opel-astra(1991).jpg",
    }, // F
    {
      name: "Astra (1998-2004)",
      slug: "astra-1998",
      img: "/images/car-models/opel-astra(1998).jpg",
    }, // G
    {
      name: "Astra (2004-2009)",
      slug: "astra-2004",
      img: "/images/car-models/opel-astra(2004).png",
    }, // H
    {
      name: "Astra (2009-2015)",
      slug: "astra-2009",
      img: "/images/car-models/opel-astra(2009).png",
    }, // J
    {
      name: "Astra (2015-2021)",
      slug: "astra-2015",
      img: "/images/car-models/opel-astra(2015).jpg",
    }, // K
    {
      name: "Astra (2021-)",
      slug: "astra-2021",
      img: "/images/car-models/opel-astra(2021).jpg",
    }, // L

    // Insignia (D-Sedan)
    {
      name: "Insignia (2008-2017)",
      slug: "insignia-2008",
      img: "/images/car-models/opel-insignia(2008).png",
    }, // A
    {
      name: "Insignia (2017-2022)",
      slug: "insignia-2017",
      img: "/images/car-models/opel-insignia(2017).png",
    }, // B

    // Vectra (D-Sedan)
    {
      name: "Vectra (1988-1995)",
      slug: "vectra-1988",
      img: "/images/car-models/opel-vectra(1988).jpg",
    }, // A
    {
      name: "Vectra (1995-2002)",
      slug: "vectra-1995",
      img: "/images/car-models/opel-vectra(1995).jpg",
    }, // B
    {
      name: "Vectra (2002-2008)",
      slug: "vectra-2002",
      img: "/images/car-models/opel-vectra(2002).png",
    }, // C

    // SUV / Crossover
    {
      name: "Mokka (2012-2016)",
      slug: "mokka-2012",
      img: "/images/car-models/opel-mokka(2012).jpg",
    },
    {
      name: "Mokka X (2016-2019)",
      slug: "mokka-x-2016",
      img: "/images/car-models/opel-mokka-x(2016).jpg",
    },
    {
      name: "Mokka (2020-)",
      slug: "mokka-2020",
      img: "/images/car-models/opel-mokka(2020).jpg",
    },

    {
      name: "Crossland X (2017-2020)",
      slug: "crossland-x-2017",
      img: "/images/car-models/opel-crossland-x(2017).png",
    },
    {
      name: "Crossland (2021-)",
      slug: "crossland-2021",
      img: "/images/car-models/opel-crossland(2021).jpg",
    },

    {
      name: "Grandland X (2017-2021)",
      slug: "grandland-x-2017",
      img: "/images/car-models/opel-grandland-x(2017).jpg",
    },
    {
      name: "Grandland (2021-2024)",
      slug: "grandland-2021",
      img: "/images/car-models/opel-grandland(2021).jpg",
    },
    {
      name: "Grandland (2024-)",
      slug: "grandland-2024",
      img: "/images/car-models/opel-grandland(2024).jpg",
    }, // yeni nesil

    // MPV
    {
      name: "Zafira (1999-2005)",
      slug: "zafira-1999",
      img: "/images/car-models/opel-zafira(1999).jpg",
    },
    {
      name: "Zafira (2005-2011)",
      slug: "zafira-2005",
      img: "/images/car-models/opel-zafira(2005).jpg",
    },
    {
      name: "Zafira (2011-2019)",
      slug: "zafira-2011",
      img: "/images/car-models/opel-zafira(2011).jpg",
    },
    {
      name: "Zafira Life (2019-)",
      slug: "zafira-life-2019",
      img: "/images/car-models/opel-zafira-life(2019).jpg",
    },

    {
      name: "Meriva (2003-2010)",
      slug: "meriva-2003",
      img: "/images/car-models/opel-meriva(2003).jpg",
    },
    {
      name: "Meriva (2010-2017)",
      slug: "meriva-2010",
      img: "/images/car-models/opel-meriva(2010).jpg",
    },

    // Ticari
    {
      name: "Combo (2001-2011)",
      slug: "combo-2001",
      img: "/images/car-models/opel-combo(2001).jpg",
    }, // C
    {
      name: "Combo (2011-2018)",
      slug: "combo-2011",
      img: "/images/car-models/opel-combo(2011).png",
    }, // D
    {
      name: "Combo (2018-)",
      slug: "combo-2018",
      img: "/images/car-models/opel-combo(2018).jpg",
    }, // E

    {
      name: "Vivaro (2001-2014)",
      slug: "vivaro-2001",
      img: "/images/car-models/opel-vivaro(2001).png",
    },
    {
      name: "Vivaro (2014-2018)",
      slug: "vivaro-2014",
      img: "/images/car-models/opel-vivaro(2014).png",
    },
    {
      name: "Vivaro (2019-)",
      slug: "vivaro-2019",
      img: "/images/car-models/opel-vivaro(2019).jpg",
    },
  ],

  peugeot: [
    // B segmenti – 106 / 206 / 207 / 208 / 301
    {
      name: "106 (1991-2003)",
      slug: "106-1991",
      img: "/images/car-models/peugeot-106(1991).png",
    },
    {
      name: "206 (1998-2009)",
      slug: "206-1998",
      img: "/images/car-models/peugeot-206(1998).png",
    },
    {
      name: "206+ (2009-2012)",
      slug: "206plus-2009",
      img: "/images/car-models/peugeot-206plus(2009).png",
    },
    {
      name: "207 (2006-2012)",
      slug: "207-2006",
      img: "/images/car-models/peugeot-207(2006).jpg",
    },
    {
      name: "208 (2012-2019)",
      slug: "208-2012",
      img: "/images/car-models/peugeot-208(2012).jpg",
    },
    {
      name: "208 (2019-)",
      slug: "208-2019",
      img: "/images/car-models/peugeot-208(2019).jpg",
    },
    {
      name: "301 (2012-2016)",
      slug: "301-2012",
      img: "/images/car-models/peugeot-301(2012).png",
    },
    {
      name: "301 (2017-)",
      slug: "301-2017",
      img: "/images/car-models/peugeot-301(2017).png",
    },

    // C segmenti – 306 / 307 / 308
    {
      name: "306 (1993-2002)",
      slug: "306-1993",
      img: "/images/car-models/peugeot-306(1993).png",
    },
    {
      name: "307 (2001-2008)",
      slug: "307-2001",
      img: "/images/car-models/peugeot-307(2001).png",
    },
    {
      name: "308 (2007-2013)",
      slug: "308-2007",
      img: "/images/car-models/peugeot-308(2007).jpg",
    },
    {
      name: "308 (2013-2021)",
      slug: "308-2013",
      img: "/images/car-models/peugeot-308(2013).jpg",
    },
    {
      name: "308 (2021-)",
      slug: "308-2021",
      img: "/images/car-models/peugeot-308(2021).jpg",
    },

    // D segmenti – 405 / 406 / 407 / 508
    {
      name: "405 (1990-2006)",
      slug: "405-1990",
      img: "/images/car-models/peugeot-405(1990).jpg",
    },
    {
      name: "406 (1995-2004)",
      slug: "406-1995",
      img: "/images/car-models/peugeot-406(1995).jpg",
    },
    {
      name: "407 (2004-2011)",
      slug: "407-2004",
      img: "/images/car-models/peugeot-407(2004).jpg",
    },
    {
      name: "508 (2011-2018)",
      slug: "508-2011",
      img: "/images/car-models/peugeot-508(2011).jpg",
    },
    {
      name: "508 (2019-)",
      slug: "508-2019",
      img: "/images/car-models/peugeot-508(2019).jpg",
    },

    // Fastback crossover – 408
    {
      name: "408 (2022-)",
      slug: "408-2022",
      img: "/images/car-models/peugeot-408(2022).jpg",
    },

    // SUV / Crossover – 2008 / 3008 / 5008
    {
      name: "2008 (2013-2019)",
      slug: "2008-2013",
      img: "/images/car-models/peugeot-2008(2013).jpg",
    },
    {
      name: "2008 (2019-)",
      slug: "2008-2019",
      img: "/images/car-models/peugeot-2008(2019).jpg",
    },

    {
      name: "3008 (2009-2016)",
      slug: "3008-2009",
      img: "/images/car-models/peugeot-3008(2009).jpg",
    },
    {
      name: "3008 (2016-2023)",
      slug: "3008-2016",
      img: "/images/car-models/peugeot-3008(2016).jpg",
    },
    {
      name: "3008 (2024-)",
      slug: "3008-2024",
      img: "/images/car-models/peugeot-3008(2024).jpg",
    }, // yeni nesil / e-3008

    {
      name: "5008 (2009-2016)",
      slug: "5008-2009",
      img: "/images/car-models/peugeot-5008(2009).png",
    }, // MPV nesli
    {
      name: "5008 (2017-)",
      slug: "5008-2017",
      img: "/images/car-models/peugeot-5008(2017).jpg",
    }, // SUV nesli

    // Coupe – RCZ
    {
      name: "RCZ (2010-2015)",
      slug: "rcz-2010",
      img: "/images/car-models/peugeot-rcz(2010).jpg",
    },

    // Hafif ticari – Partner / Rifter / Bipper / Expert / Boxer / Traveller
    {
      name: "Partner Tepee (2008-2018)",
      slug: "partner-tepee-2008",
      img: "/images/car-models/peugeot-partner-tepee(2008).jpg",
    },
    {
      name: "Rifter (2018-)",
      slug: "rifter-2018",
      img: "/images/car-models/peugeot-rifter(2018).jpg",
    },
    {
      name: "Bipper (2008-2017)",
      slug: "bipper-2008",
      img: "/images/car-models/peugeot-bipper(2008).jpg",
    },
    {
      name: "Expert (2007-2016)",
      slug: "expert-2007",
      img: "/images/car-models/peugeot-expert(2007).jpg",
    },
    {
      name: "Expert (2016-)",
      slug: "expert-2016",
      img: "/images/car-models/peugeot-expert(2016).jpg",
    },
    {
      name: "Boxer (2006-)",
      slug: "boxer-2006",
      img: "/images/car-models/peugeot-boxer(2006).jpg",
    },
    {
      name: "Traveller (2016-)",
      slug: "traveller-2016",
      img: "/images/car-models/peugeot-traveller(2016).png",
    },
  ],

  citroen: [
    // B segmenti – Saxo / C2 / C3 / C3 Picasso
    {
      name: "Saxo (1996-2003)",
      slug: "saxo-1996",
      img: "/images/car-models/citroen-saxo(1996).jpg",
    },
    {
      name: "C2 (2003-2009)",
      slug: "c2-2003",
      img: "/images/car-models/citroen-c2(2003).jpg",
    },
    {
      name: "C3 (2002-2009)",
      slug: "c3-2002",
      img: "/images/car-models/citroen-c3(2002).jpg",
    },
    {
      name: "C3 (2009-2016)",
      slug: "c3-2009",
      img: "/images/car-models/citroen-c3(2009).jpg",
    },
    {
      name: "C3 (2016-2023)",
      slug: "c3-2016",
      img: "/images/car-models/citroen-c3(2016).jpg",
    },
    {
      name: "C3 (2024-)",
      slug: "c3-2024",
      img: "/images/car-models/citroen-c3(2024).jpg",
    },
    {
      name: "C3 Picasso (2009-2017)",
      slug: "c3-picasso-2009",
      img: "/images/car-models/citroen-c3-picasso(2009).jpg",
    },

    // C3 Aircross (B-SUV)
    {
      name: "C3 Aircross (2017-2020)",
      slug: "c3-aircross-2017",
      img: "/images/car-models/citroen-c3-aircross(2017).jpg",
    },
    {
      name: "C3 Aircross (2021-2024)",
      slug: "c3-aircross-2021",
      img: "/images/car-models/citroen-c3-aircross(2021).jpg",
    },
    {
      name: "C3 Aircross (2024-)",
      slug: "c3-aircross-2024",
      img: "/images/car-models/citroen-c3-aircross(2024).jpg",
    },

    // C4 ailesi – C4 / C4 Cactus / C4X
    {
      name: "C4 (2004-2010)",
      slug: "c4-2004",
      img: "/images/car-models/citroen-c4(2004).jpg",
    },
    {
      name: "C4 (2010-2018)",
      slug: "c4-2010",
      img: "/images/car-models/citroen-c4(2010).jpg",
    },
    {
      name: "C4 (2020-)",
      slug: "c4-2020",
      img: "/images/car-models/citroen-c4(2020).jpg",
    },
    {
      name: "C4 Cactus (2014-2017)",
      slug: "c4-cactus-2014",
      img: "/images/car-models/citroen-c4-cactus(2014).jpg",
    },
    {
      name: "C4 Cactus (2018-2020)",
      slug: "c4-cactus-2018",
      img: "/images/car-models/citroen-c4-cactus(2018).jpg",
    },
    {
      name: "C4 X (2022-)",
      slug: "c4x-2022",
      img: "/images/car-models/citroen-c4x(2022).jpg",
    },

    // C5 Aircross / C5 X
    {
      name: "C5 Aircross (2018-2021)",
      slug: "c5-aircross-2018",
      img: "/images/car-models/citroen-c5-aircross(2018).jpg",
    },
    {
      name: "C5 Aircross (2022-)",
      slug: "c5-aircross-2022",
      img: "/images/car-models/citroen-c5-aircross(2022).jpg",
    },
    {
      name: "C5 X (2022-)",
      slug: "c5x-2022",
      img: "/images/car-models/citroen-c5x(2022).jpg",
    },

    // C-Elysée (TR’de önemli)
    {
      name: "C-Elysée (2012-)",
      slug: "c-elysee-2012",
      img: "/images/car-models/citroen-c-elysee(2012).jpg",
    },

    // Eski C-Serisi – C1 / C5 (eski) / Xsara / Xsara Picasso
    {
      name: "C1 (2005-2014)",
      slug: "c1-2005",
      img: "/images/car-models/citroen-c1(2005).jpg",
    },
    {
      name: "C1 (2014-2022)",
      slug: "c1-2014",
      img: "/images/car-models/citroen-c1(2014).jpg",
    },
    {
      name: "C5 (2001-2008)",
      slug: "c5-2001",
      img: "/images/car-models/citroen-c5(2001).jpg",
    },
    {
      name: "C5 (2008-2017)",
      slug: "c5-2008",
      img: "/images/car-models/citroen-c5(2008).jpg",
    },
    {
      name: "Xsara (1997-2004)",
      slug: "xsara-1997",
      img: "/images/car-models/citroen-xsara(1997).jpg",
    },
    {
      name: "Xsara Picasso (1999-2012)",
      slug: "xsara-picasso-1999",
      img: "/images/car-models/citroen-xsara-picasso(1999).jpg",
    },

    // MPV – C4 Picasso / Grand C4 Picasso / C4 SpaceTourer
    {
      name: "Grand C4 Picasso (2006-2018)",
      slug: "grand-c4-picasso-2006",
      img: "/images/car-models/citroen-c4-picasso(2013).jpg",
    },
    {
      name: "Grand C4 SpaceTourer (2018-2022)",
      slug: "grand-c4-spacetourer-2018",
      img: "/images/car-models/citroen-grand-c4-spacetourer(2018).jpg",
    },

    // Hafif ticari – Berlingo / Nemo / Jumpy / Jumper
    {
      name: "Berlingo (2008-2018)",
      slug: "berlingo-2008",
      img: "/images/car-models/citroen-berlingo(2008).jpg",
    },
    {
      name: "Berlingo (2018-)",
      slug: "berlingo-2018",
      img: "/images/car-models/citroen-berlingo(2018).jpg",
    },
    {
      name: "Nemo (2008-2017)",
      slug: "nemo-2008",
      img: "/images/car-models/citroen-nemo(2008).jpg",
    },
    {
      name: "Jumpy (2007-2016)",
      slug: "jumpy-2007",
      img: "/images/car-models/citroen-jumpy(2007).jpg",
    },
    {
      name: "Jumpy (2016-)",
      slug: "jumpy-2016",
      img: "/images/car-models/citroen-jumpy(2016).jpg",
    },
    {
      name: "Jumper (2006-)",
      slug: "jumper-2006",
      img: "/images/car-models/citroen-jumper(2006).png",
    },
  ],

  ds: [
    // DS3
    {
      name: "DS3 (2010-2015)",
      slug: "ds3-2010",
      img: "/images/car-models/ds3(2011).jpg",
    },
    {
      name: "DS3 Crossback (2019-2022)",
      slug: "ds3-crossback-2019",
      img: "/images/car-models/ds3-crossback(2019).jpg",
    },
    {
      name: "DS3 (2023-)",
      slug: "ds3-2023",
      img: "/images/car-models/ds3(2023).jpg",
    },

    // DS4
    {
      name: "DS4 (2011-2015)",
      slug: "ds4-2011",
      img: "/images/car-models/ds4(2011).jpg",
    },
    {
      name: "DS4 (2015-2018)",
      slug: "ds4-2015",
      img: "/images/car-models/ds4(2015).jpg",
    },
    {
      name: "DS4 (2021-)",
      slug: "ds4-2021",
      img: "/images/car-models/ds4(2021).jpg",
    },

    // DS5
    {
      name: "DS5 (2012-2018)",
      slug: "ds5-2012",
      img: "/images/car-models/ds5(2012).jpg",
    },

    // DS7 Crossback
    {
      name: "DS7 Crossback (2017-2022)",
      slug: "ds7-2017",
      img: "/images/car-models/ds7(2017).jpg",
    },
    {
      name: "DS7 (2023-)",
      slug: "ds7-2023",
      img: "/images/car-models/ds7(2023).jpg",
    },

    // DS9
    {
      name: "DS9 (2020-)",
      slug: "ds9-2020",
      img: "/images/car-models/ds9(2020).jpg",
    },
  ],

  chevrolet: [
    // A/B segment – Spark / Kalos / Aveo
    {
      name: "Spark (2010-2015)",
      slug: "spark-2010",
      img: "/images/car-models/chevrolet-spark(2010).jpg",
    },

    {
      name: "Kalos (2002-2008)",
      slug: "kalos-2002",
      img: "/images/car-models/chevrolet-kalos(2002).jpg",
    }, // Aveo’nun ilk nesli
    {
      name: "Aveo (2006-2011)",
      slug: "aveo-2006",
      img: "/images/car-models/chevrolet-aveo(2006).jpg",
    },
    {
      name: "Aveo (2011-2015)",
      slug: "aveo-2011",
      img: "/images/car-models/chevrolet-aveo(2011).jpg",
    },

    // C segment – Lacetti / Cruze
    {
      name: "Lacetti (2003-2011)",
      slug: "lacetti-2003",
      img: "/images/car-models/chevrolet-lacetti(2003).jpg",
    },
    {
      name: "Cruze (2009-2013)",
      slug: "cruze-2009",
      img: "/images/car-models/chevrolet-cruze(2009).jpg",
    },

    // D segment – Epica
    {
      name: "Epica (2006-2011)",
      slug: "epica-2006",
      img: "/images/car-models/chevrolet-epica(2006).png",
    },

    // MPV – Rezzo / Orlando
    {
      name: "Rezzo (2004-2008)",
      slug: "rezzo-2004",
      img: "/images/car-models/chevrolet-rezzo(2004).jpg",
    },

    // SUV / Crossover – Captiva / Trax
    {
      name: "Captiva (2007-2010)",
      slug: "captiva-2007",
      img: "/images/car-models/chevrolet-captiva(2007).jpg",
    },
    {
      name: "Captiva (2011-2015)",
      slug: "captiva-2011",
      img: "/images/car-models/chevrolet-captiva(2011).jpg",
    }, // FL
    {
      name: "Trax (2013)",
      slug: "trax-2013",
      img: "/images/car-models/chevrolet-trax(2013).jpg",
    },
  ],

  renault: [
    // B segmenti – Clio
    {
      name: "Clio I (1990-1998)",
      slug: "clio-1990",
      img: "/images/car-models/renault-clio(1990).jpg",
    },
    {
      name: "Clio II (1998-2005)",
      slug: "clio-1998",
      img: "/images/car-models/renault-clio(1998).jpg",
    },
    {
      name: "Clio III (2005-2012)",
      slug: "clio-2005",
      img: "/images/car-models/renault-clio(2005).PNG",
    },
    {
      name: "Clio IV (2012-2019)",
      slug: "clio-2012",
      img: "/images/car-models/renault-clio(2012).PNG",
    },
    {
      name: "Clio V (2019-)",
      slug: "clio-2019",
      img: "/images/car-models/renault-clio(2019).jpg",
    },

    // Sedan – Symbol / Thalia
    {
      name: "Symbol I (1999-2008)",
      slug: "symbol-1999",
      img: "/images/car-models/renault-symbol(1999).jpg",
    },
    {
      name: "Symbol II (2008-2012)",
      slug: "symbol-2008",
      img: "/images/car-models/renault-symbol(2008).jpg",
    },
    {
      name: "Symbol III (2013-2020)",
      slug: "symbol-2013",
      img: "/images/car-models/renault-symbol(2013).jpg",
    },

    // Sedan – Fluence / Megane Sedan
    {
      name: "Fluence (2009-2016)",
      slug: "fluence-2009",
      img: "/images/car-models/renault-fluence(2009).jpg",
    },
    {
      name: "Megane Sedan (2016-2023)",
      slug: "megane-sedan-2016",
      img: "/images/car-models/renault-megane-sedan(2016).jpg",
    },

    // C segmenti – Megane HB
    {
      name: "Megane I (1995-2002)",
      slug: "megane-1995",
      img: "/images/car-models/renault-megane(1995).PNG",
    },
    {
      name: "Megane II (2002-2009)",
      slug: "megane-2002",
      img: "/images/car-models/renault-megane(2002).jpg",
    },
    {
      name: "Megane III (2009-2016)",
      slug: "megane-2009",
      img: "/images/car-models/renault-megane(2009).jpg",
    },
    {
      name: "Megane IV (2016-2023)",
      slug: "megane-2016",
      img: "/images/car-models/renault-megane(2016).png",
    },

    // Crossover – Captur
    {
      name: "Captur I (2013-2019)",
      slug: "captur-2013",
      img: "/images/car-models/renault-captur(2013).jpg",
    },
    {
      name: "Captur II (2020-)",
      slug: "captur-2020",
      img: "/images/car-models/renault-captur(2020).jpg",
    },

    // SUV – Kadjar / Austral
    {
      name: "Kadjar (2015-2022)",
      slug: "kadjar-2015",
      img: "/images/car-models/renault-kadjar(2015).jpg",
    },
    {
      name: "Austral (2022-)",
      slug: "austral-2022",
      img: "/images/car-models/renault-austral(2022).png",
    },

    // SUV – Koleos
    {
      name: "Koleos I (2008-2015)",
      slug: "koleos-2008",
      img: "/images/car-models/renault-koleos(2008).jpg",
    },
    {
      name: "Koleos II (2017-)",
      slug: "koleos-2017",
      img: "/images/car-models/renault-koleos(2017).jpg",
    },

    // D sedan – Laguna / Talisman
    {
      name: "Laguna I (1994-2000)",
      slug: "laguna-1994",
      img: "/images/car-models/renault-laguna(1994).png",
    },
    {
      name: "Laguna II (2000-2007)",
      slug: "laguna-2000",
      img: "/images/car-models/renault-laguna(2000).jpg",
    },
    {
      name: "Laguna III (2007-2015)",
      slug: "laguna-2007",
      img: "/images/car-models/renault-laguna(2007).jpg",
    },
    {
      name: "Talisman (2015-2022)",
      slug: "talisman-2015",
      img: "/images/car-models/renault-talisman(2015).jpg",
    },

    // Ticari – Kangoo
    {
      name: "Kangoo I (1997-2008)",
      slug: "kangoo-1997",
      img: "/images/car-models/renault-kangoo(1997).jpg",
    },
    {
      name: "Kangoo II (2008-2021)",
      slug: "kangoo-2008",
      img: "/images/car-models/renault-kangoo(2008).jpg",
    },
    {
      name: "Kangoo III (2021-)",
      slug: "kangoo-2021",
      img: "/images/car-models/renault-kangoo(2021).jpg",
    },

    // Hafif ticari – Trafic / Master
    {
      name: "Trafic (2001-2014)",
      slug: "trafic-2001",
      img: "/images/car-models/renault-trafic(2001).jpg",
    },
    {
      name: "Trafic (2015-)",
      slug: "trafic-2015",
      img: "/images/car-models/renault-trafic(2015).jpg",
    },

    {
      name: "Master (1998-2010)",
      slug: "master-1998",
      img: "/images/car-models/renault-master(1998).jpg",
    },
    {
      name: "Master (2010-)",
      slug: "master-2010",
      img: "/images/car-models/renault-master(2010).jpg",
    },
  ],

  dacia: [
    // Logan
    {
      name: "Logan I (2004-2012)",
      slug: "logan-2004",
      img: "/images/car-models/dacia-logan(2004).jpg",
    },
    {
      name: "Logan II (2013-2020)",
      slug: "logan-2013",
      img: "/images/car-models/dacia-logan(2013).jpg",
    },
    {
      name: "Logan III (2021-)",
      slug: "logan-2021",
      img: "/images/car-models/dacia-logan(2021).jpg",
    },

    // Sandero
    {
      name: "Sandero I (2008-2012)",
      slug: "sandero-2008",
      img: "/images/car-models/dacia-sandero(2008).jpg",
    },
    {
      name: "Sandero II (2013-2020)",
      slug: "sandero-2013",
      img: "/images/car-models/dacia-sandero(2013).jpg",
    },
    {
      name: "Sandero III (2021-)",
      slug: "sandero-2021",
      img: "/images/car-models/dacia-sandero(2021).jpg",
    },

    // Sandero Stepway
    {
      name: "Sandero Stepway I (2009-2012)",
      slug: "sandero-stepway-2009",
      img: "/images/car-models/dacia-sandero-stepway(2009).jpg",
    },
    {
      name: "Sandero Stepway II (2013-2020)",
      slug: "sandero-stepway-2013",
      img: "/images/car-models/dacia-sandero-stepway(2013).jpg",
    },
    {
      name: "Sandero Stepway III (2021-)",
      slug: "sandero-stepway-2021",
      img: "/images/car-models/dacia-sandero-stepway(2021).jpg",
    },

    // Duster
    {
      name: "Duster I (2010-2017)",
      slug: "duster-2010",
      img: "/images/car-models/dacia-duster(2010).jpg",
    },
    {
      name: "Duster II (2018-2023)",
      slug: "duster-2018",
      img: "/images/car-models/dacia-duster(2018).jpg",
    },
    {
      name: "Duster III (2024-)",
      slug: "duster-2024",
      img: "/images/car-models/dacia-duster(2024).jpg",
    },

    // Lodgy
    {
      name: "Lodgy (2012-2022)",
      slug: "lodgy-2012",
      img: "/images/car-models/dacia-lodgy(2012).jpg",
    },

    // Dokker
    {
      name: "Dokker (2012-2021)",
      slug: "dokker-2012",
      img: "/images/car-models/dacia-dokker(2012).jpg",
    },

    // Ticari – Logan MCV / Van
    {
      name: "Logan MCV (2006-2012)",
      slug: "logan-mcv-2006",
      img: "/images/car-models/dacia-logan-mcv(2006).jpg",
    },
    {
      name: "Logan MCV (2013-2020)",
      slug: "logan-mcv-2013",
      img: "/images/car-models/dacia-logan-mcv(2013).png",
    },
    {
      name: "Logan Van (2006-2012)",
      slug: "logan-van-2006",
      img: "/images/car-models/dacia-logan-van(2006).jpg",
    },
  ],

  volvo: [
    // S40
    {
      name: "S40 I (1995-2004)",
      slug: "s40-1995",
      img: "/images/car-models/volvo-s40(1995).jpg",
    },
    {
      name: "S40 II (2004-2012)",
      slug: "s40-2004",
      img: "/images/car-models/volvo-s40(2004).jpg",
    },

    // S60
    {
      name: "S60 I (2000-2009)",
      slug: "s60-2000",
      img: "/images/car-models/volvo-s60(2000).jpg",
    },
    {
      name: "S60 II (2010-2018)",
      slug: "s60-2010",
      img: "/images/car-models/volvo-s60(2010).jpg",
    },
    {
      name: "S60 III (2019-)",
      slug: "s60-2019",
      img: "/images/car-models/volvo-s60(2019).jpg",
    },

    // S80
    {
      name: "S80 I (1998-2006)",
      slug: "s80-1998",
      img: "/images/car-models/volvo-s80(1998).jpg",
    },
    {
      name: "S80 II (2006-2016)",
      slug: "s80-2006",
      img: "/images/car-models/volvo-s80(2006).jpg",
    },

    // S90
    {
      name: "S90 (2016-2024)",
      slug: "s90-2016",
      img: "/images/car-models/volvo-s90(2016).jpg",
    },
    {
      name: "S90 (2025-)",
      slug: "s90-2025",
      img: "/images/car-models/volvo-s90(2025).jpg",
    },

    // V40
    {
      name: "V40 (2012-2019)",
      slug: "v40-2012",
      img: "/images/car-models/volvo-v40(2012).jpg",
    },

    // V60
    {
      name: "V60 I (2010-2018)",
      slug: "v60-2010",
      img: "/images/car-models/volvo-v60(2010).jpg",
    },
    {
      name: "V60 II (2018-)",
      slug: "v60-2018",
      img: "/images/car-models/volvo-v60(2018).jpg",
    },

    // V90
    {
      name: "V90 (2016-)",
      slug: "v90-2016",
      img: "/images/car-models/volvo-v90(2016).png",
    },

    // XC40
    {
      name: "XC40 (2018-2024)",
      slug: "xc40-2018",
      img: "/images/car-models/volvo-xc40(2018).jpg",
    },
    {
      name: "EX40 (2024-)",
      slug: "ex40-2024",
      img: "/images/car-models/volvo-ex40(2024).jpg",
    }, // elektrikli adı EX40

    // XC60
    {
      name: "XC60 I (2008-2017)",
      slug: "xc60-2008",
      img: "/images/car-models/volvo-xc60(2008).jpg",
    },
    {
      name: "XC60 II (2017-)",
      slug: "xc60-2017",
      img: "/images/car-models/volvo-xc60(2017).jpg",
    },

    // XC70
    {
      name: "XC70 (2002-2016)",
      slug: "xc70-2002",
      img: "/images/car-models/volvo-xc70(2002).jpg",
    },

    // XC90
    {
      name: "XC90 I (2002-2014)",
      slug: "xc90-2002",
      img: "/images/car-models/volvo-xc90(2002).jpg",
    },
    {
      name: "XC90 II (2015-)",
      slug: "xc90-2015",
      img: "/images/car-models/volvo-xc90(2015).jpg",
    },

    // Elektrikli yeni nesil
    {
      name: "EX30 (2023-)",
      slug: "ex30-2023",
      img: "/images/car-models/volvo-ex30(2023).png",
    },
    {
      name: "EX90 (2024-)",
      slug: "ex90-2024",
      img: "/images/car-models/volvo-ex90(2024).jpg",
    },
  ],

  "mercedes-benz": [
    // A-Serisi
    {
      name: "A-Serisi W168 (1997-2004)",
      slug: "a-w168",
      img: "/images/car-models/mercedes-a-w168.jpg",
    },
    {
      name: "A-Serisi W169 (2004-2012)",
      slug: "a-w169",
      img: "/images/car-models/mercedes-a-w169.jpg",
    },
    {
      name: "A-Serisi W176 (2012-2018)",
      slug: "a-w176",
      img: "/images/car-models/mercedes-a-w176.jpg",
    },
    {
      name: "A-Serisi W177 (2018-)",
      slug: "a-w177",
      img: "/images/car-models/mercedes-a-w177.jpg",
    },

    // B-Serisi
    {
      name: "B-Serisi W245 (2005-2011)",
      slug: "b-w245",
      img: "/images/car-models/mercedes-b-w245.png",
    },
    {
      name: "B-Serisi W246 (2011-2018)",
      slug: "b-w246",
      img: "/images/car-models/mercedes-b-w246.jpg",
    },
    {
      name: "B-Serisi W247 (2019-)",
      slug: "b-w247",
      img: "/images/car-models/mercedes-b-w247.jpg",
    },

    // C-Serisi
    {
      name: "C-Serisi W202 (1993-2000)",
      slug: "c-w202",
      img: "/images/car-models/mercedes-c-w202.png",
    },
    {
      name: "C-Serisi W203 (2000-2007)",
      slug: "c-w203",
      img: "/images/car-models/mercedes-c-w203.jpg",
    },
    {
      name: "C-Serisi W204 (2007-2014)",
      slug: "c-w204",
      img: "/images/car-models/mercedes-c-w204.jpg",
    },
    {
      name: "C-Serisi W205 (2014-2021)",
      slug: "c-w205",
      img: "/images/car-models/mercedes-c-w205.jpg",
    },
    {
      name: "C-Serisi W206 (2021-)",
      slug: "c-w206",
      img: "/images/car-models/mercedes-c-w206.png",
    },

    // E-Serisi
    {
      name: "E-Serisi W210 (1995-2002)",
      slug: "e-w210",
      img: "/images/car-models/mercedes-e-w210.png",
    },
    {
      name: "E-Serisi W211 (2002-2009)",
      slug: "e-w211",
      img: "/images/car-models/mercedes-e-w211.png",
    },
    {
      name: "E-Serisi W212 (2009-2016)",
      slug: "e-w212",
      img: "/images/car-models/mercedes-e-w212.jpg",
    },
    {
      name: "E-Serisi W213 (2016-2023)",
      slug: "e-w213",
      img: "/images/car-models/mercedes-e-w213.jpg",
    },
    {
      name: "E-Serisi W214 (2024-)",
      slug: "e-w214",
      img: "/images/car-models/mercedes-e-w214.png",
    },

    // S-Serisi
    {
      name: "S-Serisi W220 (1998-2005)",
      slug: "s-w220",
      img: "/images/car-models/mercedes-s-w220.png",
    },
    {
      name: "S-Serisi W221 (2005-2013)",
      slug: "s-w221",
      img: "/images/car-models/mercedes-s-w221.jpg",
    },
    {
      name: "S-Serisi W222 (2013-2020)",
      slug: "s-w222",
      img: "/images/car-models/mercedes-s-w222.jpg",
    },
    {
      name: "S-Serisi W223 (2020-)",
      slug: "s-w223",
      img: "/images/car-models/mercedes-s-w223.jpg",
    },

    // CLA
    {
      name: "CLA C117 (2013-2019)",
      slug: "cla-c117",
      img: "/images/car-models/mercedes-cla-c117.jpg",
    },
    {
      name: "CLA C118 (2019-)",
      slug: "cla-c118",
      img: "/images/car-models/mercedes-cla-c118.jpg",
    },

    // CLS
    {
      name: "CLS C219 (2004-2010)",
      slug: "cls-c219",
      img: "/images/car-models/mercedes-cls-c219.jpg",
    },
    {
      name: "CLS C218 (2011-2018)",
      slug: "cls-c218",
      img: "/images/car-models/mercedes-cls-c218.png",
    },
    {
      name: "CLS C257 (2018-)",
      slug: "cls-c257",
      img: "/images/car-models/mercedes-cls-c257.jpg",
    },

    // GLA
    {
      name: "GLA X156 (2014-2019)",
      slug: "gla-x156",
      img: "/images/car-models/mercedes-gla-x156.jpg",
    },
    {
      name: "GLA H247 (2020-)",
      slug: "gla-h247",
      img: "/images/car-models/mercedes-gla-h247.png",
    },

    // GLC
    {
      name: "GLC X253 (2015-2022)",
      slug: "glc-x253",
      img: "/images/car-models/mercedes-glc-x253.jpg",
    },
    {
      name: "GLC X254 (2023-)",
      slug: "glc-x254",
      img: "/images/car-models/mercedes-glc-x254.png",
    },

    // GLE
    {
      name: "GLE W166 (2015-2019)",
      slug: "gle-w166",
      img: "/images/car-models/mercedes-gle-w166.jpg",
    },
    {
      name: "GLE V167 (2019-)",
      slug: "gle-v167",
      img: "/images/car-models/mercedes-gle-v167.jpg",
    },

    // GLS
    {
      name: "GLS X166 (2016-2019)",
      slug: "gls-x166",
      img: "/images/car-models/mercedes-gls-x166.jpg",
    },
    {
      name: "GLS X167 (2019-)",
      slug: "gls-x167",
      img: "/images/car-models/mercedes-gls-x167.jpg",
    },

    // G Serisi (G-Wagen)
    {
      name: "G W463 (1990-2018)",
      slug: "g-w463",
      img: "/images/car-models/mercedes-g-w463.png",
    },
    {
      name: "G W464 (2018-)",
      slug: "g-w464",
      img: "/images/car-models/mercedes-g-w464.jpg",
    },

    // Elektrikli EQ Serisi
    {
      name: "EQA (2021-)",
      slug: "eqa-2021",
      img: "/images/car-models/mercedes-eqa(2021).jpg",
    },
    {
      name: "EQB (2021-)",
      slug: "eqb-2021",
      img: "/images/car-models/mercedes-eqb(2021).png",
    },
    {
      name: "EQC (2019-)",
      slug: "eqc-2019",
      img: "/images/car-models/mercedes-eqc(2019).jpg",
    },
    {
      name: "EQS (2021-)",
      slug: "eqs-2021",
      img: "/images/car-models/mercedes-eqs(2021).png",
    },
    {
      name: "EQE (2022-)",
      slug: "eqe-2022",
      img: "/images/car-models/mercedes-eqe(2022).jpg",
    },
  ],

  smart: [
    // ForTwo
    {
      name: "ForTwo I (1998-2007)",
      slug: "fortwo-1998",
      img: "/images/car-models/smart-fortwo(1998).PNG",
    },
    {
      name: "ForTwo II (2007-2014)",
      slug: "fortwo-2007",
      img: "/images/car-models/smart-fortwo(2007).jpg",
    },
    {
      name: "ForTwo III (2014-2022)",
      slug: "fortwo-2014",
      img: "/images/car-models/smart-fortwo(2014).jpg",
    },
    {
      name: "ForTwo EV (2020-)",
      slug: "fortwo-ev-2020",
      img: "/images/car-models/smart-fortwo-ev(2020).jpg",
    },

    // ForFour
    {
      name: "ForFour I (2004-2006)",
      slug: "forfour-2004",
      img: "/images/car-models/smart-forfour(2004).jpg",
    },
    {
      name: "ForFour II (2014-2021)",
      slug: "forfour-2014",
      img: "/images/car-models/smart-forfour(2014).jpg",
    },

    // Roadster (niş model)
    {
      name: "Roadster (2003-2006)",
      slug: "roadster-2003",
      img: "/images/car-models/smart-roadster(2003).jpg",
    },
  ],

  bmw: [
    // 1 Serisi
    {
      name: "1 Serisi E87 (2004-2011)",
      slug: "1-e87",
      img: "/images/car-models/bmw-1-e87(2004).png",
    },
    {
      name: "1 Serisi F20 (2011-2019)",
      slug: "1-f20",
      img: "/images/car-models/bmw-1-f20(2011).jpg",
    },
    {
      name: "1 Serisi F40 (2019-)",
      slug: "1-f40",
      img: "/images/car-models/bmw-1-f40(2019).jpg",
    },

    // 3 Serisi
    {
      name: "3 Serisi E36 (1990-2000)",
      slug: "3-e36",
      img: "/images/car-models/bmw-3-e36(1990).png",
    },
    {
      name: "3 Serisi E46 (1998-2006)",
      slug: "3-e46",
      img: "/images/car-models/bmw-3-e46(1998).png",
    },
    {
      name: "3 Serisi E90 (2005-2012)",
      slug: "3-e90",
      img: "/images/car-models/bmw-3-e90(2005).png",
    },
    {
      name: "3 Serisi F30 (2012-2018)",
      slug: "3-f30",
      img: "/images/car-models/bmw-3-f30(2012).png",
    },
    {
      name: "3 Serisi G20 (2019-)",
      slug: "3-g20",
      img: "/images/car-models/bmw-3-g20(2019).png",
    },

    // 5 Serisi
    {
      name: "5 Serisi E39 (1995-2003)",
      slug: "5-e39",
      img: "/images/car-models/bmw-5-e39(1995).png",
    },
    {
      name: "5 Serisi E60 (2003-2010)",
      slug: "5-e60",
      img: "/images/car-models/bmw-5-e60(2003).png",
    },
    {
      name: "5 Serisi F10 (2010-2016)",
      slug: "5-f10",
      img: "/images/car-models/bmw-5-f10(2010).jpg",
    },
    {
      name: "5 Serisi G30 (2017-2023)",
      slug: "5-g30",
      img: "/images/car-models/bmw-5-g30(2017).jpg",
    },
    {
      name: "5 Serisi G60 (2023-)",
      slug: "5-g60",
      img: "/images/car-models/bmw-5-g60(2023).jpg",
    },

    // 7 Serisi
    {
      name: "7 Serisi E38 (1994-2001)",
      slug: "7-e38",
      img: "/images/car-models/bmw-7-e38(1994).jpg",
    },
    {
      name: "7 Serisi E65 (2001-2008)",
      slug: "7-e65",
      img: "/images/car-models/bmw-7-e65(2001).jpg",
    },
    {
      name: "7 Serisi F01 (2008-2015)",
      slug: "7-f01",
      img: "/images/car-models/bmw-7-f01(2008).png",
    },
    {
      name: "7 Serisi G11 (2015-2022)",
      slug: "7-g11",
      img: "/images/car-models/bmw-7-g11(2015).jpg",
    },
    {
      name: "7 Serisi G70 (2022-)",
      slug: "7-g70",
      img: "/images/car-models/bmw-7-g70(2022).jpg",
    },

    // SUV – X Serisi
    {
      name: "X1 (2009-2015)",
      slug: "x1-2009",
      img: "/images/car-models/bmw-x1(2009).jpg",
    },
    {
      name: "X1 (2016-2022)",
      slug: "x1-2016",
      img: "/images/car-models/bmw-x1(2016).jpg",
    },
    {
      name: "X1 (2023-)",
      slug: "x1-2023",
      img: "/images/car-models/bmw-x1(2023).jpg",
    },

    {
      name: "X3 (2003-2010)",
      slug: "x3-2003",
      img: "/images/car-models/bmw-x3(2003).jpg",
    },
    {
      name: "X3 (2011-2017)",
      slug: "x3-2011",
      img: "/images/car-models/bmw-x3(2011).jpg",
    },
    {
      name: "X3 (2018-)",
      slug: "x3-2018",
      img: "/images/car-models/bmw-x3(2018).jpg",
    },

    {
      name: "X5 (1999-2006)",
      slug: "x5-1999",
      img: "/images/car-models/bmw-x5(1999).png",
    },
    {
      name: "X5 (2007-2013)",
      slug: "x5-2007",
      img: "/images/car-models/bmw-x5(2007).jpg",
    },
    {
      name: "X5 (2014-2018)",
      slug: "x5-2014",
      img: "/images/car-models/bmw-x5(2014).jpg",
    },
    {
      name: "X5 (2019-)",
      slug: "x5-2019",
      img: "/images/car-models/bmw-x5(2019).jpg",
    },

    // Coupe – 4 Serisi / 8 Serisi
    {
      name: "4 Serisi F32 (2013-2020)",
      slug: "4-f32",
      img: "/images/car-models/bmw-4-f32(2013).jpg",
    },
    {
      name: "4 Serisi G22 (2020-)",
      slug: "4-g22",
      img: "/images/car-models/bmw-4-g22(2020).jpg",
    },

    {
      name: "8 Serisi G15 (2018-)",
      slug: "8-g15",
      img: "/images/car-models/bmw-8-g15(2018).jpg",
    },

    // Elektrikli i Serisi
    {
      name: "i3 (2013-2022)",
      slug: "i3-2013",
      img: "/images/car-models/bmw-i3(2013).jpg",
    },
    {
      name: "i4 (2021-)",
      slug: "i4-2021",
      img: "/images/car-models/bmw-i4(2021).jpg",
    },
    {
      name: "iX (2021-)",
      slug: "ix-2021",
      img: "/images/car-models/bmw-ix(2021).jpg",
    },
  ],

  "land-rover": [
    // Defender
    {
      name: "Defender (2020-)",
      slug: "defender-2020",
      img: "/images/car-models/land-rover-defender(2020).jpg",
    },

    // Discovery
    {
      name: "Discovery (1998-2004)",
      slug: "discovery-1998",
      img: "/images/car-models/land-rover-discovery(1998).jpg",
    },
    {
      name: "Discovery 3 (2004-2009)",
      slug: "discovery-2004",
      img: "/images/car-models/land-rover-discovery(2004).jpg",
    },
    {
      name: "Discovery 4 (2009-2016)",
      slug: "discovery-2009",
      img: "/images/car-models/land-rover-discovery(2009).jpg",
    },
    {
      name: "Discovery 5 (2017-)",
      slug: "discovery-2017",
      img: "/images/car-models/land-rover-discovery(2017).jpg",
    },

    // Discovery Sport
    {
      name: "Discovery Sport (2015-2019)",
      slug: "discovery-sport-2015",
      img: "/images/car-models/land-rover-discovery-sport(2015).jpg",
    },
    {
      name: "Discovery Sport (2020-)",
      slug: "discovery-sport-2020",
      img: "/images/car-models/land-rover-discovery-sport(2020).jpg",
    },

    // Freelander
    {
      name: "Freelander (1997-2006)",
      slug: "freelander-1997",
      img: "/images/car-models/land-rover-freelander(1997).jpg",
    },
    {
      name: "Freelander 2 (2006-2014)",
      slug: "freelander-2006",
      img: "/images/car-models/land-rover-freelander(2006).jpg",
    },
  ],

  "range-rover": [
    // Range Rover (flagship)
    {
      name: "Range Rover L322 (2002-2012)",
      slug: "rr-l322",
      img: "/images/car-models/range-rover-l322(2002).jpg",
    },
    {
      name: "Range Rover L405 (2012-2021)",
      slug: "rr-l405",
      img: "/images/car-models/range-rover-l405(2012).jpg",
    },
    {
      name: "Range Rover L460 (2022-)",
      slug: "rr-l460",
      img: "/images/car-models/range-rover-l460(2022).png",
    },

    // Range Rover Sport
    {
      name: "Range Rover Sport L320 (2005-2013)",
      slug: "rrs-l320",
      img: "/images/car-models/range-rover-sport-l320(2005).jpg",
    },
    {
      name: "Range Rover Sport L494 (2013-2022)",
      slug: "rrs-l494",
      img: "/images/car-models/range-rover-sport-l494(2013).jpg",
    },
    {
      name: "Range Rover Sport L461 (2023-)",
      slug: "rrs-l461",
      img: "/images/car-models/range-rover-sport-l461(2023).jpg",
    },

    // Range Rover Velar
    {
      name: "Range Rover Velar (2017-2023)",
      slug: "velar-2017",
      img: "/images/car-models/range-rover-velar(2017).jpg",
    },
    {
      name: "Range Rover Velar (2024-)",
      slug: "velar-2024",
      img: "/images/car-models/range-rover-velar(2024).jpg",
    },

    // Range Rover Evoque
    {
      name: "Range Rover Evoque I (2011-2018)",
      slug: "evoque-2011",
      img: "/images/car-models/range-rover-evoque(2011).jpg",
    },
    {
      name: "Range Rover Evoque II (2019-)",
      slug: "evoque-2019",
      img: "/images/car-models/range-rover-evoque(2019).jpg",
    },
  ],

  mini: [
    // Hatch – 3 Kapı
    {
      name: "Hatch 3K (R50/R53, 2001-2006)",
      slug: "hatch-r50-2001",
      img: "/images/car-models/mini-hatch-r50(2001).jpg",
    },
    {
      name: "Hatch 3K (R56, 2006-2013)",
      slug: "hatch-r56-2006",
      img: "/images/car-models/mini-hatch-r56(2006).jpg",
    },
    {
      name: "Hatch 3K (F56, 2014-2023)",
      slug: "hatch-f56-2014",
      img: "/images/car-models/mini-hatch-f56(2014).jpg",
    },
    {
      name: "Hatch 3K (F66, 2024-)",
      slug: "hatch-f66-2024",
      img: "/images/car-models/mini-hatch-f66(2024).png",
    },

    // Hatch – 5 Kapı
    {
      name: "Hatch 5K (F55, 2014-2023)",
      slug: "hatch5-f55-2014",
      img: "/images/car-models/mini-hatch5-f55(2014).jpg",
    },
    {
      name: "Hatch 5K (F65, 2024-)",
      slug: "hatch5-f65-2024",
      img: "/images/car-models/mini-hatch5-f65(2024).jpg",
    },

    // Cabrio
    {
      name: "Cabrio (R52, 2004-2008)",
      slug: "cabrio-r52-2004",
      img: "/images/car-models/mini-cabrio-r52(2004).jpg",
    },
    {
      name: "Cabrio (R57, 2009-2015)",
      slug: "cabrio-r57-2009",
      img: "/images/car-models/mini-cabrio-r57(2009).jpg",
    },
    {
      name: "Cabrio (F57, 2016-2024)",
      slug: "cabrio-f57-2016",
      img: "/images/car-models/mini-cabrio-f57(2016).jpg",
    },

    // Clubman
    {
      name: "Clubman (R55, 2007-2014)",
      slug: "clubman-r55-2007",
      img: "/images/car-models/mini-clubman-r55(2007).jpg",
    },
    {
      name: "Clubman (F54, 2015-2023)",
      slug: "clubman-f54-2015",
      img: "/images/car-models/mini-clubman-f54(2015).jpg",
    },

    // Countryman (SUV)
    {
      name: "Countryman (R60, 2010-2016)",
      slug: "countryman-r60-2010",
      img: "/images/car-models/mini-countryman-r60(2010).jpg",
    },
    {
      name: "Countryman (F60, 2017-2023)",
      slug: "countryman-f60-2017",
      img: "/images/car-models/mini-countryman-f60(2017).jpg",
    },
    {
      name: "Countryman (U25, 2024-)",
      slug: "countryman-u25-2024",
      img: "/images/car-models/mini-countryman-u25(2024).jpg",
    },

    // Paceman (niş coupe-SUV)
    {
      name: "Paceman (R61, 2012-2016)",
      slug: "paceman-r61-2012",
      img: "/images/car-models/mini-paceman-r61(2012).jpg",
    },

    // Elektrik
    {
      name: "Cooper SE (F56 EV, 2020-2023)",
      slug: "cooper-se-f56-2020",
      img: "/images/car-models/mini-cooper-se-f56(2020).jpg",
    },
    {
      name: "Cooper Electric (J01, 2024-)",
      slug: "cooper-electric-j01-2024",
      img: "/images/car-models/mini-cooper-electric-j01(2024).png",
    },

    // Yeni elektrikli crossover
    {
      name: "Aceman (2024-)",
      slug: "aceman-2024",
      img: "/images/car-models/mini-aceman(2024).jpg",
    },
  ],

  toyota: [
    // Corolla (Sedan)
    {
      name: "Corolla E100 (1992-1998)",
      slug: "corolla-e100-1992",
      img: "/images/car-models/toyota-corolla-e100(1992).png",
    },
    {
      name: "Corolla E110 (1997-2002)",
      slug: "corolla-e110-1997",
      img: "/images/car-models/toyota-corolla-e110(1997).png",
    },
    {
      name: "Corolla E120 (2002-2006)",
      slug: "corolla-e120-2002",
      img: "/images/car-models/toyota-corolla-e120(2002).png",
    },
    {
      name: "Corolla E150 (2006-2013)",
      slug: "corolla-e150-2006",
      img: "/images/car-models/toyota-corolla-e150(2006).png",
    },
    {
      name: "Corolla E170 (2013-2018)",
      slug: "corolla-e170-2013",
      img: "/images/car-models/toyota-corolla-e170(2013).jpg",
    },
    {
      name: "Corolla E210 (2019-)",
      slug: "corolla-e210-2019",
      img: "/images/car-models/toyota-corolla-e210(2019).jpg",
    },

    // Corolla HB / Auris
    {
      name: "Auris I (2006-2012)",
      slug: "auris-2006",
      img: "/images/car-models/toyota-auris(2006).png",
    },
    {
      name: "Auris II (2012-2018)",
      slug: "auris-2012",
      img: "/images/car-models/toyota-auris(2012).png",
    },
    {
      name: "Corolla HB (2019-)",
      slug: "corolla-hb-2019",
      img: "/images/car-models/toyota-corolla-hb(2019).jpg",
    },

    // Corolla Cross
    {
      name: "Corolla Cross (2022-)",
      slug: "corolla-cross-2022",
      img: "/images/car-models/toyota-corolla-cross(2022).jpg",
    },

    // Yaris
    {
      name: "Yaris XP10 (1999-2005)",
      slug: "yaris-xp10-1999",
      img: "/images/car-models/toyota-yaris-xp10(1999).jpg",
    },
    {
      name: "Yaris XP90 (2005-2011)",
      slug: "yaris-xp90-2005",
      img: "/images/car-models/toyota-yaris-xp90(2005).jpg",
    },
    {
      name: "Yaris XP130 (2011-2020)",
      slug: "yaris-xp130-2011",
      img: "/images/car-models/toyota-yaris-xp130(2011).jpg",
    },
    {
      name: "Yaris XP210 (2020-)",
      slug: "yaris-xp210-2020",
      img: "/images/car-models/toyota-yaris-xp210(2020).jpg",
    },

    // Yaris Cross
    {
      name: "Yaris Cross (2021-)",
      slug: "yaris-cross-2021",
      img: "/images/car-models/toyota-yaris-cross(2021).jpg",
    },

    // C-HR
    {
      name: "C-HR (2016-2023)",
      slug: "c-hr-2016",
      img: "/images/car-models/toyota-chr(2016).jpg",
    },
    {
      name: "C-HR (2024-)",
      slug: "c-hr-2024",
      img: "/images/car-models/toyota-chr(2024).png",
    },

    // RAV4
    {
      name: "RAV4 (2006-2012)",
      slug: "rav4-2006",
      img: "/images/car-models/toyota-rav4(2006).jpg",
    },
    {
      name: "RAV4 (2013-2018)",
      slug: "rav4-2013",
      img: "/images/car-models/toyota-rav4(2013).jpg",
    },
    {
      name: "RAV4 (2019-)",
      slug: "rav4-2019",
      img: "/images/car-models/toyota-rav4(2019).jpg",
    },

    // Avensis
    {
      name: "Avensis I (1997-2003)",
      slug: "avensis-1997",
      img: "/images/car-models/toyota-avensis(1997).png",
    },
    {
      name: "Avensis II (2003-2009)",
      slug: "avensis-2003",
      img: "/images/car-models/toyota-avensis(2003).png",
    },
    {
      name: "Avensis III (2009-2018)",
      slug: "avensis-2009",
      img: "/images/car-models/toyota-avensis(2009).jpg",
    },

    // Camry (yeniden TR)
    {
      name: "Camry XV70 (2019-2023)",
      slug: "camry-2019",
      img: "/images/car-models/toyota-camry(2019).jpg",
    },

    // Verso / Corolla Verso (MPV)
    {
      name: "Corolla Verso (2004-2009)",
      slug: "corolla-verso-2004",
      img: "/images/car-models/toyota-corolla-verso(2004).png",
    },
    {
      name: "Verso (2009-2018)",
      slug: "verso-2009",
      img: "/images/car-models/toyota-verso(2009).jpg",
    },

    // Hilux (Pick-up)
    {
      name: "Hilux (1997-2005)",
      slug: "hilux-1997",
      img: "/images/car-models/toyota-hilux(1997).png",
    },
    {
      name: "Hilux (2005-2015)",
      slug: "hilux-2005",
      img: "/images/car-models/toyota-hilux(2005).png",
    },
    {
      name: "Hilux (2016-)",
      slug: "hilux-2016",
      img: "/images/car-models/toyota-hilux(2016).jpg",
    },
  ],

  lexus: [
    // IS (D-segment spor sedan)
    {
      name: "IS II (2005-2013)",
      slug: "is-2005",
      img: "/images/car-models/lexus-is(2005).jpg",
    },
    {
      name: "IS III (2013-2020)",
      slug: "is-2013",
      img: "/images/car-models/lexus-is(2013).jpg",
    },
    {
      name: "IS Makyaj (2020-)",
      slug: "is-2020",
      img: "/images/car-models/lexus-is(2020).jpg",
    },

    // ES (geniş konfor sedan)
    {
      name: "ES (2006-2012)",
      slug: "es-2006",
      img: "/images/car-models/lexus-es(2006).png",
    },
    {
      name: "ES (2012-2018)",
      slug: "es-2012",
      img: "/images/car-models/lexus-es(2012).jpg",
    },
    {
      name: "ES (2018-)",
      slug: "es-2018",
      img: "/images/car-models/lexus-es(2018).jpg",
    },

    // GS (2012’de TR’de görünürlük; artık üretimde değil)
    {
      name: "GS (2005-2011)",
      slug: "gs-2005",
      img: "/images/car-models/lexus-gs(2005).jpg",
    },
    {
      name: "GS (2012-2020)",
      slug: "gs-2012",
      img: "/images/car-models/lexus-gs(2012).jpg",
    },

    // LS (amiral sedan)
    {
      name: "LS (2006-2017)",
      slug: "ls-2006",
      img: "/images/car-models/lexus-ls(2006).jpg",
    },
    {
      name: "LS (2017-)",
      slug: "ls-2017",
      img: "/images/car-models/lexus-ls(2017).jpg",
    },

    // RX (D-SUV)
    {
      name: "RX (2008-2015)",
      slug: "rx-2008",
      img: "/images/car-models/lexus-rx(2008).jpg",
    },
    {
      name: "RX (2015-2022)",
      slug: "rx-2015",
      img: "/images/car-models/lexus-rx(2015).jpg",
    },
    {
      name: "RX (2022-)",
      slug: "rx-2022",
      img: "/images/car-models/lexus-rx(2022).jpg",
    },

    // NX (C/D-SUV)
    {
      name: "NX (2014-2021)",
      slug: "nx-2014",
      img: "/images/car-models/lexus-nx(2014).jpg",
    },
    {
      name: "NX (2021-)",
      slug: "nx-2021",
      img: "/images/car-models/lexus-nx(2021).jpg",
    },

    // UX (B/C-SUV)
    {
      name: "UX (2019-)",
      slug: "ux-2019",
      img: "/images/car-models/lexus-ux(2019).png",
    },

    // LBX (B-SUV, yeni)
    {
      name: "LBX (2024-)",
      slug: "lbx-2024",
      img: "/images/car-models/lexus-lbx(2024).jpg",
    },

    // RC (coupe)
    {
      name: "RC (2014-)",
      slug: "rc-2014",
      img: "/images/car-models/lexus-rc(2014).jpg",
    },

    // CT 200h (HB, geçmiş)
    {
      name: "CT 200h (2011-2017)",
      slug: "ct-200h-2011",
      img: "/images/car-models/lexus-ct200h(2011).jpg",
    },

    // LC (grand tourer)
    {
      name: "LC (2017-)",
      slug: "lc-2017",
      img: "/images/car-models/lexus-lc(2017).png",
    },
  ],

  kia: [
    // Rio (B-HB/Sedan)
    {
      name: "Rio (2005-2011)",
      slug: "rio-2005",
      img: "/images/car-models/kia-rio(2005).jpg",
    },
    {
      name: "Rio (2012-2016)",
      slug: "rio-2012",
      img: "/images/car-models/kia-rio(2012).jpg",
    },
    {
      name: "Rio (2017-)",
      slug: "rio-2017",
      img: "/images/car-models/kia-rio(2017).jpg",
    },

    // Ceed (C-HB)
    {
      name: "Ceed (2007-2012)",
      slug: "ceed-2007",
      img: "/images/car-models/kia-ceed(2007).png",
    },
    {
      name: "Ceed (2012-2018)",
      slug: "ceed-2012",
      img: "/images/car-models/kia-ceed(2012).jpg",
    },
    {
      name: "Ceed (2018-)",
      slug: "ceed-2018",
      img: "/images/car-models/kia-ceed(2018).jpg",
    },

    // Cerato (C-Sedan, bazı pazarlarda Forte)
    {
      name: "Cerato (2004-2009)",
      slug: "cerato-2004",
      img: "/images/car-models/kia-cerato(2004).jpg",
    },
    {
      name: "Cerato (2009-2013)",
      slug: "cerato-2009",
      img: "/images/car-models/kia-cerato(2009).jpg",
    },
    {
      name: "Cerato (2013-2018)",
      slug: "cerato-2013",
      img: "/images/car-models/kia-cerato(2013).jpg",
    },
    {
      name: "Cerato (2019-)",
      slug: "cerato-2019",
      img: "/images/car-models/kia-cerato(2019).jpg",
    },

    // Picanto (A segmenti HB)
    {
      name: "Picanto (2004-2011)",
      slug: "picanto-2004",
      img: "/images/car-models/kia-picanto(2004).png",
    },
    {
      name: "Picanto (2011-2017)",
      slug: "picanto-2011",
      img: "/images/car-models/kia-picanto(2011).jpg",
    },
    {
      name: "Picanto (2017-)",
      slug: "picanto-2017",
      img: "/images/car-models/kia-picanto(2017).jpg",
    },

    // Sportage (C-SUV)
    {
      name: "Sportage (2005-2010)",
      slug: "sportage-2005",
      img: "/images/car-models/kia-sportage(2005).jpg",
    },
    {
      name: "Sportage (2010-2015)",
      slug: "sportage-2010",
      img: "/images/car-models/kia-sportage(2010).jpg",
    },
    {
      name: "Sportage (2016-2020)",
      slug: "sportage-2016",
      img: "/images/car-models/kia-sportage(2016).jpg",
    },
    {
      name: "Sportage (2021-)",
      slug: "sportage-2021",
      img: "/images/car-models/kia-sportage(2021).jpg",
    },

    // Sorento (D-SUV)
    {
      name: "Sorento (2002-2009)",
      slug: "sorento-2002",
      img: "/images/car-models/kia-sorento(2002).jpg",
    },
    {
      name: "Sorento (2010-2014)",
      slug: "sorento-2010",
      img: "/images/car-models/kia-sorento(2010).jpg",
    },
    {
      name: "Sorento (2015-2020)",
      slug: "sorento-2015",
      img: "/images/car-models/kia-sorento(2015).jpg",
    },
    {
      name: "Sorento (2021-)",
      slug: "sorento-2021",
      img: "/images/car-models/kia-sorento(2021).jpg",
    },

    // Stonic (B-SUV)
    {
      name: "Stonic (2017-)",
      slug: "stonic-2017",
      img: "/images/car-models/kia-stonic(2017).jpg",
    },

    // Niro (Crossover – hibrit & elektrikli)
    {
      name: "Niro (2016-2021)",
      slug: "niro-2016",
      img: "/images/car-models/kia-niro(2016).jpg",
    },
    {
      name: "Niro (2022-)",
      slug: "niro-2022",
      img: "/images/car-models/kia-niro(2022).jpg",
    },

    // EV6 (tam elektrikli)
    {
      name: "EV6 (2021-)",
      slug: "ev6-2021",
      img: "/images/car-models/kia-ev6(2021).jpg",
    },
  ],

  nissan: [
    // Micra (B-HB)
    {
      name: "Micra (2003-2010)",
      slug: "micra-2003",
      img: "/images/car-models/nissan-micra(2003).png",
    },
    {
      name: "Micra (2011-2016)",
      slug: "micra-2011",
      img: "/images/car-models/nissan-micra(2011).png",
    },
    {
      name: "Micra (2017-)",
      slug: "micra-2017",
      img: "/images/car-models/nissan-micra(2017).png",
    },

    // Almera (C-Sedan/HB – eski popüler)
    {
      name: "Almera (2000-2006)",
      slug: "almera-2000",
      img: "/images/car-models/nissan-almera(2000).png",
    },

    // Juke (B-SUV)
    {
      name: "Juke (2010-2019)",
      slug: "juke-2010",
      img: "/images/car-models/nissan-juke(2010).jpg",
    },
    {
      name: "Juke (2020-)",
      slug: "juke-2020",
      img: "/images/car-models/nissan-juke(2020).png",
    },

    // Qashqai (C-SUV)
    {
      name: "Qashqai (2007-2013)",
      slug: "qashqai-2007",
      img: "/images/car-models/nissan-qashqai(2007).png",
    },
    {
      name: "Qashqai (2014-2020)",
      slug: "qashqai-2014",
      img: "/images/car-models/nissan-qashqai(2014).jpg",
    },
    {
      name: "Qashqai (2021-)",
      slug: "qashqai-2021",
      img: "/images/car-models/nissan-qashqai(2021).jpg",
    },

    // X-Trail (D-SUV)
    {
      name: "X-Trail (2001-2007)",
      slug: "xtrail-2001",
      img: "/images/car-models/nissan-xtrail(2001).jpg",
    },
    {
      name: "X-Trail (2008-2013)",
      slug: "xtrail-2008",
      img: "/images/car-models/nissan-xtrail(2008).jpg",
    },
    {
      name: "X-Trail (2014-2021)",
      slug: "xtrail-2014",
      img: "/images/car-models/nissan-xtrail(2014).jpg",
    },
    {
      name: "X-Trail (2022-)",
      slug: "xtrail-2022",
      img: "/images/car-models/nissan-xtrail(2022).jpg",
    },

    // Navara (Pick-up)
    {
      name: "Navara (1997-2004)",
      slug: "navara-1997",
      img: "/images/car-models/nissan-navara(1997).jpg",
    },
    {
      name: "Navara (2005-2015)",
      slug: "navara-2005",
      img: "/images/car-models/nissan-navara(2005).jpg",
    },
    {
      name: "Navara (2016-2022)",
      slug: "navara-2016",
      img: "/images/car-models/nissan-navara(2016).jpg",
    },
  ],

  infiniti: [
    // Sedan & Coupe
    {
      name: "G35/G37 (2006-2013)",
      slug: "g-2006",
      img: "/images/car-models/infiniti-g(2006).png",
    }, // G sedan/coupe
    {
      name: "Q50 (2013-2016)",
      slug: "q50-2013",
      img: "/images/car-models/infiniti-q50(2013).jpg",
    },
    {
      name: "Q60 (2016-)",
      slug: "q60-2016",
      img: "/images/car-models/infiniti-q60(2016).jpg",
    },

    // Kompakt (Avrupa odaklı)
    {
      name: "Q30 (2016)",
      slug: "q30-2016",
      img: "/images/car-models/infiniti-q30(2016).jpg",
    },

    {
      name: "I30(1996-2000)",
      slug: "i30-1996",
      img: "/images/car-models/infiniti-i30(1996).jpg",
    },

    // Orta sınıf crossover/SUV
    {
      name: "EX(2010)",
      slug: "ex-2010",
      img: "/images/car-models/infiniti-ex(2010).jpg",
    },

    {
      name: "QX(1999-2015)",
      slug: "qx-1999",
      img: "/images/car-models/infiniti-qx(1999).jpg",
    },

    // Spor SUV
    {
      name: "FX(2003-2013)",
      slug: "fx70-2003",
      img: "/images/car-models/infiniti-fx(2003).jpg",
    },
  ],

  honda: [
    // Civic (C-Sedan / HB)
    {
      name: "Civic EK/MB (1996-2000)",
      slug: "civic-1996",
      img: "/images/car-models/honda-civic(1996).png",
    },
    {
      name: "Civic ES (2001-2005)",
      slug: "civic-2001",
      img: "/images/car-models/honda-civic(2001).png",
    },
    {
      name: "Civic FD/FA (2006-2011)",
      slug: "civic-2006",
      img: "/images/car-models/honda-civic(2006).png",
    },
    {
      name: "Civic FB (2012-2016)",
      slug: "civic-2012",
      img: "/images/car-models/honda-civic(2012).png",
    },
    {
      name: "Civic FC (2016-2021)",
      slug: "civic-2016",
      img: "/images/car-models/honda-civic(2016).jpg",
    },
    {
      name: "Civic FE (2021-)",
      slug: "civic-2021",
      img: "/images/car-models/honda-civic(2021).jpg",
    },

    // Civic Type R (niş, resmi ithalat sınırlı)
    {
      name: "Civic Type R FK2 (2015-2017)",
      slug: "civic-type-r-fk2-2015",
      img: "/images/car-models/honda-civic-type-r-fk2(2015).jpg",
    },
    {
      name: "Civic Type R FK8 (2017-2021)",
      slug: "civic-type-r-fk8-2017",
      img: "/images/car-models/honda-civic-type-r-fk8(2017).jpg",
    },
    {
      name: "Civic Type R FL5 (2022-)",
      slug: "civic-type-r-fl5-2022",
      img: "/images/car-models/honda-civic-type-r-fl5(2022).jpg",
    },

    // City (B+/C-Sedan)
    {
      name: "City (2003-2008)",
      slug: "city-2003",
      img: "/images/car-models/honda-city(2003).jpg",
    },
    {
      name: "City (2008-2014)",
      slug: "city-2008",
      img: "/images/car-models/honda-city(2008).png",
    },
    {
      name: "City (2014-2021)",
      slug: "city-2014",
      img: "/images/car-models/honda-city(2014).jpg",
    },
    {
      name: "City (2021-)",
      slug: "city-2021",
      img: "/images/car-models/honda-city(2021).jpg",
    },

    // Jazz (B-MPV/HB)
    {
      name: "Jazz (2002-2008)",
      slug: "jazz-2002",
      img: "/images/car-models/honda-jazz(2002).jpg",
    },
    {
      name: "Jazz (2008-2015)",
      slug: "jazz-2008",
      img: "/images/car-models/honda-jazz(2008).jpg",
    },
    {
      name: "Jazz (2015-2020)",
      slug: "jazz-2015",
      img: "/images/car-models/honda-jazz(2015).jpg",
    },
    {
      name: "Jazz (2020-)",
      slug: "jazz-2020",
      img: "/images/car-models/honda-jazz(2020).jpg",
    },

    // Accord (D-Sedan – dönemsel)
    {
      name: "Accord (1998-2002)",
      slug: "accord-1998",
      img: "/images/car-models/honda-accord(1998).jpg",
    },
    {
      name: "Accord (2003-2008)",
      slug: "accord-2003",
      img: "/images/car-models/honda-accord(2003).jpg",
    },
    {
      name: "Accord (2008-2012)",
      slug: "accord-2008",
      img: "/images/car-models/honda-accord(2008).jpg",
    },
    {
      name: "Accord (2019-)",
      slug: "accord-2019",
      img: "/images/car-models/honda-accord(2019).jpg",
    },

    // CR-V (C/D-SUV)
    {
      name: "CR-V I (1997-2001)",
      slug: "crv-1997",
      img: "/images/car-models/honda-crv(1997).jpg",
    },
    {
      name: "CR-V II (2002-2006)",
      slug: "crv-2002",
      img: "/images/car-models/honda-crv(2002).jpg",
    },
    {
      name: "CR-V III (2007-2012)",
      slug: "crv-2007",
      img: "/images/car-models/honda-crv(2007).jpg",
    },
    {
      name: "CR-V IV (2012-2016)",
      slug: "crv-2012",
      img: "/images/car-models/honda-crv(2012).jpg",
    },
    {
      name: "CR-V V (2017-2022)",
      slug: "crv-2017",
      img: "/images/car-models/honda-crv(2017).jpg",
    },
    {
      name: "CR-V VI (2023-)",
      slug: "crv-2023",
      img: "/images/car-models/honda-crv(2023).png",
    },

    // HR-V (B/C-SUV)
    {
      name: "HR-V I (1999-2006)",
      slug: "hrv-1999",
      img: "/images/car-models/honda-hrv(1999).jpg",
    },
    {
      name: "HR-V II (2015-2021)",
      slug: "hrv-2015",
      img: "/images/car-models/honda-hrv(2015).jpg",
    },
    {
      name: "HR-V III (2022-)",
      slug: "hrv-2022",
      img: "/images/car-models/honda-hrv(2022).png",
    },

    // CR-Z (hibrit coupe – niş)
    {
      name: "CR-Z (2010-2016)",
      slug: "crz-2010",
      img: "/images/car-models/honda-crz(2010).jpg",
    },

    // S2000 (roadster – ikon)
    {
      name: "S2000 (1999-2009)",
      slug: "s2000-1999",
      img: "/images/car-models/honda-s2000(1999).png",
    },
  ],
};

// Türkçe normalize
export const norm = (s: string = ""): string =>
  s
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u");

// URL-uyumlu
export const toSlug = (s = "") => norm(s).replace(/\s+/g, "-");

// MODELS anahtarı için kanonikleştir
const BRAND_ALIAS: Record<string, string> = {
  mercedes: "mercedes-benz",
  "land-rover": "land-rover",
  "alfa-romeo": "alfa",
  "ds-automobiles": "ds",
};

export const brandKey = (slugOrName = "") => {
  const s = toSlug(slugOrName);
  return BRAND_ALIAS[s] || s;
};
