// === Marka Grupları ===
// Üst strip’te gözüken ana grup sırası:
export const GROUPS_ORDER = [
  "vw","fiat","ford","hyundai","opel","renault",
  "volvo","mercedes","bmw","toyota","kia","nissan","honda",
] as const;

export type BrandGroupKey = typeof GROUPS_ORDER[number];

export type BrandGroup = {
  id: number;            // ✅ sabit ID
  label: string;
  members: string[];     // toSlug’lu marka anahtarları (örn: "audi","land-rover")
};

export type Brand = {
  name: string;
  slug: string;
  count: string;
  logo: string;
  // country?: CountryCode; // ileride tekrar kullanacaksan opsiyonel bırakabilirsin
};

export const BRAND_GROUPS: Record<BrandGroupKey, BrandGroup> = {
  // 1) VW/AUDI/SEAT/SKODA/CUPRA
  vw: {
    id: 1,
    label: "VAG",
    members: ["volkswagen","audi","seat","skoda","cupra"],
  },

  // 2) FIAT/LANCIA/ALFAROMEO/JEEP
  // Not: BRANDS içinde Alfa Romeo'nun slug'ı "Alfa" -> toSlug("Alfa") === "alfa"
  fiat: {
    id: 2,
    label: "FIAT",
    members: ["fiat","lancia","alfa","jeep"],
  },

  // 3) FORD
  ford: {
    id: 3,
    label: "FORD",
    members: ["ford"],
  },

  // 4) HYUNDAI
  hyundai: {
    id: 4,
    label: "HYUNDAI",
    members: ["hyundai"],
  },

  // 5) OPEL/PEUGEOT/CITROEN/DS/CHEVROLET
  opel: {
    id: 5,
    label: "PSA",
    members: ["opel","peugeot","citroen","ds","chevrolet"],
  },

  // 6) RENAULT/DACIA
  renault: {
    id: 6,
    label: "RENAULT",
    members: ["renault","dacia"],
  },

  // 7) VOLVO
  volvo: {
    id: 7,
    label: "VOLVO",
    members: ["volvo"],
  },

  // 8) MERCEDES/SMART
  mercedes: {
    id: 8,
    label: "MERCEDES",
    members: ["mercedes","smart"],
  },

  // 9) BMW/LANDROVER/RANGEROVER/MINI
  // Not: "land rover" -> toSlug => "land-rover"; "range rover" -> "range-rover"
  bmw: {
    id: 9,
    label: "BMW",
    members: ["bmw","land-rover","range-rover","mini"],
  },

  // 10) TOYOTA/LEXUS
  toyota: {
    id: 10,
    label: "TOYOTA",
    members: ["toyota","lexus"],
  },

  // 11) KIA
  kia: {
    id: 11,
    label: "KIA",
    members: ["kia"],
  },

  // 12) NISSAN/INFINITI
  nissan: {
    id: 12,
    label: "NISSAN",
    members: ["nissan","infiniti"],
  },

  // 13) HONDA
  honda: {
    id: 13,
    label: "HONDA",
    members: ["honda"],
  },
};


// === Markalar (mevcut listen aynı) ===
export const BRANDS: Brand[] = [
  { name:'Abarth',         slug:'Abarth',        count:'13.582', logo:'/images/car-logo/abarth.png',         },
  { name:'Alfa Romeo',     slug:'Alfa',          count:'13.582', logo:'/images/car-logo/alfa.png',           },
  { name:'Audi',           slug:'audi',          count:'13.582', logo:'/images/car-logo/audi.png',           },
  { name:'BMW',            slug:'bmw',           count:'24.860', logo:'/images/car-logo/bmw.png',            },
  { name:'Chevrolet',      slug:'chevrolet',     count:'102',    logo:'/images/car-logo/chevrolet.png',      },
  { name:'Chrysler',       slug:'chrysler',      count:'102',    logo:'/images/car-logo/chrysler.png',       },
  { name:'Citroen',        slug:'citroen',       count:'9.140',  logo:'/images/car-logo/citroen.png',        },
  { name:'Cupra',          slug:'cupra',         count:'198',    logo:'/images/car-logo/cupra.png',          },
  { name:'Dacia',          slug:'dacia',         count:'3.704',  logo:'/images/car-logo/dacia.png',          },
  { name:'DS',             slug:'ds',            count:'3.704',  logo:'/images/car-logo/ds.png',             },
  { name:'Fiat',           slug:'fiat',          count:'33.918', logo:'/images/car-logo/fiat.png',           },
  { name:'Ford',           slug:'ford',          count:'22.940', logo:'/images/car-logo/ford.png',           },
  { name:'Honda',          slug:'honda',         count:'11.298', logo:'/images/car-logo/honda.png',          },
  { name:'Hyundai',        slug:'hyundai',       count:'18.102', logo:'/images/car-logo/hyundai.png',        },
  { name:'Infiniti',       slug:'infiniti',      count:'18.102', logo:'/images/car-logo/infiniti.png',       },
  { name:'Jeep',           slug:'jeep',          count:'18.102', logo:'/images/car-logo/jeep.png',           },
  { name:'Kia',            slug:'kia',           count:'3.012',  logo:'/images/car-logo/kia.png',            },
  { name:'Lancia',         slug:'lancia',        count:'3.012',  logo:'/images/car-logo/lancia.png',         },
  { name:'Land Rover',     slug:'land rover',    count:'3.012',  logo:'/images/car-logo/land-rover.png',     },
  { name:'Lexus',          slug:'lexus',         count:'3.012',  logo:'/images/car-logo/lexus.png',          },
  { name:'Mercedes-Benz',  slug:'mercedes',      count:'19.992', logo:'/images/car-logo/mercedes-benz.png',  },
  { name:'Mini',           slug:'mini',          count:'19.992', logo:'/images/car-logo/mini.png',           },
  { name:'Nissan',         slug:'nissan',        count:'2.132',  logo:'/images/car-logo/nissan.png',         },
  { name:'Opel',           slug:'opel',          count:'30.201', logo:'/images/car-logo/opel.png',           },
  { name:'Peugeot',        slug:'peugeot',       count:'14.893', logo:'/images/car-logo/peugeot.png',        },
  { name:'Range Rover',    slug:'range rover',   count:'55.783', logo:'/images/car-logo/range-rover.png',    },
  { name:'Renault',        slug:'renault',       count:'55.783', logo:'/images/car-logo/renault.png',        },
  { name:'Seat',           slug:'seat',          count:'6.637',  logo:'/images/car-logo/seat.png',           },
  { name:'Skoda',          slug:'skoda',         count:'9.594',  logo:'/images/car-logo/skoda.png',          },
  { name:'Smart',          slug:'smart',         count:'9.594',  logo:'/images/car-logo/smart.png',          },
  { name:'Tofaş',          slug:'tofas',         count:'10.829', logo:'/images/car-logo/tofas.png',          },
  { name:'Toyota',         slug:'toyota',        count:'16.080', logo:'/images/car-logo/toyota.png',         },
  { name:'Volkswagen',     slug:'volkswagen',    count:'43.918', logo:'/images/car-logo/volkswagen.png',     },
  { name:'Volvo',          slug:'volvo',         count:'2.890',  logo:'/images/car-logo/volvo.png',          },
];

export const MODELS: Record<string, {name:string; slug:string; img?:string}[]> = {
  chevrolet: [
    { name: 'Aveo', slug: 'aveo', img: '/images/models/chevrolet/aveo.jpg' },
    { name: 'Yeni Aveo', slug: 'yeni-aveo', img: '/images/models/chevrolet/aveo-new.jpg' },
    { name: 'Cruze', slug: 'cruze', img: '/images/models/chevrolet/cruze.jpg' },
    { name: 'Kalos', slug: 'kalos', img: '/images/models/chevrolet/kalos.jpg' },
    { name: 'Lacetti', slug: 'lacetti', img: '/images/models/chevrolet/lacetti.jpg' },
    { name: 'Rezzo', slug: 'rezzo', img: '/images/models/chevrolet/rezzo.jpg' },
    { name: 'Spark', slug: 'spark', img: '/images/models/chevrolet/spark.jpg' },
    { name: 'Epica', slug: 'epica', img: '/images/models/chevrolet/epica.jpg' },
    { name: 'Captiva', slug: 'captiva', img: '/images/models/chevrolet/captiva.jpg' },
    { name: 'Yeni Captiva', slug: 'yeni-captiva', img: '/images/models/chevrolet/captiva-new.jpg' },
    { name: 'Trax', slug: 'trax', img: '/images/models/chevrolet/trax.jpg' },
  ],
  bmw: [
    { name: '1 Serisi E87', slug: '1-e87', img: '/images/models/bmw/1-e87.jpg' },
    { name: '3 Serisi F30', slug: '3-f30', img: '/images/models/bmw/3-f30.jpg' },
    { name: '5 Serisi G30', slug: '5-g30', img: '/images/models/bmw/5-g30.jpg' },
  ],
  
  audi: [
    { name: 'A1', slug: 'a1', img: '/images/car-models/audi-a1.jpg' },
    { name: 'A3 (1997-2003)', slug: 'a3-1997', img: '/images/car-models/audi-a3(1997).jpg' },
    { name: 'A3 (2004-2013)', slug: 'a3-2004', img: '/images/car-models/audi-a3(2004).jpg' },
    { name: 'A3 (2013-2020)', slug: 'a3-2014', img: '/images/car-models/audi-a3(2014).jpg' },
    { name: 'A3 (2021-)', slug: 'a3-2020', img: '/images/car-models/audi-a3(2020).jpg' },

    { name: 'A4 (1994-2001)', slug: 'a4-1994', img: '/images/car-models/audi-a4(1994).jpg' },
    { name: 'A4 (2000-2004)', slug: 'a4-2000', img: '/images/car-models/audi-a4(2000).jpg' },
    { name: 'A4 (2004-2008)', slug: 'a4-2004', img: '/images/car-models/audi-a4(2004).jpg' },
    { name: 'A4 (2008-2015)', slug: 'a4-2008', img: '/images/car-models/audi-a4(2008).jpg' },
    { name: 'A4 (2015-2023)', slug: 'a4-2015', img: '/images/car-models/audi-a4(2015).jpg' },
    { name: 'A4 (2023-)', slug: 'a4-2019', img: '/images/car-models/audi-a4(2023).jpg' },

    { name: 'A5 (2008-2016)', slug: 'a5-2008', img: '/images/car-models/audi-a5(2008).jpg' },
    { name: 'A5 (2017-2023)', slug: 'a5-2017', img: '/images/car-models/audi-a5(2017).jpg' },
    { name: 'A5 (2023-)', slug: 'a5-2023', img: '/images/car-models/audi-a5(2023).jpg' },

    { name: 'A6 (1994-1997)', slug: 'a6-1994', img: '/images/car-models/audi-a6(1994).jpg' },
    { name: 'A6 (1997-2004)', slug: 'a6-1997', img: '/images/car-models/audi-a6(1998).jpg' },
    { name: 'A6 (2004-2011)', slug: 'a6-2004', img: '/images/car-models/audi-a6(2004).jpg' },
    { name: 'A6 (2011-2018)', slug: 'a6-2011', img: '/images/car-models/audi-a6(2011).jpg' },
    { name: 'A6 (2018-)', slug: 'a6-2018', img: '/images/car-models/audi-a6(2018).jpg' },
    { name: 'A6 (Yeni)', slug: 'a6-2025', img: '/images/car-models/audi-a6(2025).jpg' },

    { name: 'A7 (2011-2017)', slug: 'a7-2011', img: '/images/car-models/audi-a7(2011).jpg' },
    { name: 'A7 (2018-)', slug: 'a7-2018', img: '/images/car-models/audi-a7(2018).jpg' },

    { name: 'A8 (1994-2002)', slug: 'a8-1994', img: '/images/car-models/audi-a8(1994).jpg' },
    { name: 'A8 (2002-2009)', slug: 'a8-2002', img: '/images/car-models/audi-a8(2002).jpg' },
    { name: 'A8 (2010-2017)', slug: 'a8-2010', img: '/images/car-models/audi-a8(2010).jpg' },
    { name: 'A8 (2017-)', slug: 'a8-2017', img: '/images/car-models/audi-a8(2017).jpg' },

    { name: 'Q2', slug: 'q2', img: '/images/car-models/audi-q2.jpg' },

    { name: 'Q3 (2008-2018)', slug: 'q3-2008', img: '/images/car-models/audi-q3(2008).jpg' },
    { name: 'Q3 (2013-)', slug: 'q3-2020', img: '/images/car-models/audi-q3(2020).jpg' },

    { name: 'Q5 (2008-2016)', slug: 'q5-2008', img: '/images/car-models/audi-q5(2008).jpg' },
    { name: 'Q5 (2017-)', slug: 'q5-2015', img: '/images/car-models/audi-q5(2017).jpg' },

    { name: 'Q7 (2006-2014)', slug: 'q7-2006', img: '/images/car-models/audi-q7(2006).jpg' },
    { name: 'Q7 (2015-)', slug: 'q7-2015', img: '/images/car-models/audi-q7(2015).jpg' },

    { name: 'Q8', slug: 'q8', img: '/images/car-models/audi-q8.jpg' },
  ],

  'mercedes-benz': [
    { name: 'C W204', slug: 'c-w204', img: '/images/models/mercedes/c-w204.jpg' },
    { name: 'E W212', slug: 'e-w212', img: '/images/models/mercedes/e-w212.jpg' },
  ],

  volkswagen: [
  // Polo
  { name: 'Polo (1994-2002)', slug: 'polo-1994', img: '/images/car-models/vw-polo(1994).jpg' },
  { name: 'Polo (2002-2009)', slug: 'polo-2002', img: '/images/car-models/vw-polo(2002).jpg' },
  { name: 'Polo (2009-2017)', slug: 'polo-2009', img: '/images/car-models/vw-polo(2009).jpg' },
  { name: 'Polo (2017-2021)', slug: 'polo-2017', img: '/images/car-models/vw-polo(2017).jpg' },
  { name: 'Polo (2021-)', slug: 'polo-2021', img: '/images/car-models/vw-polo(2021).jpg' },

  // Golf
  { name: 'Golf (1992-1997)', slug: 'golf-1992', img: '/images/car-models/vw-golf(1992).jpg' },
  { name: 'Golf (1997-2003)', slug: 'golf-1997', img: '/images/car-models/vw-golf(1997).jpg' },
  { name: 'Golf (2003-2008)', slug: 'golf-2003', img: '/images/car-models/vw-golf(2003).jpg' },
  { name: 'Golf (2008-2012)', slug: 'golf-2008', img: '/images/car-models/vw-golf(2008).jpg' },
  { name: 'Golf (2012-2019)', slug: 'golf-2012', img: '/images/car-models/vw-golf(2012).jpg' },
  { name: 'Golf (2020-)', slug: 'golf-2020', img: '/images/car-models/vw-golf(2020).jpg' },

  // Jetta
  { name: 'Jetta (1999-2005)', slug: 'jetta-1999', img: '/images/car-models/vw-jetta(1999).jpg' },
  { name: 'Jetta (2005-2010)', slug: 'jetta-2005', img: '/images/car-models/vw-jetta(2005).jpg' },
  { name: 'Jetta (2010-2018)', slug: 'jetta-2010', img: '/images/car-models/vw-jetta(2010).jpg' },

  // Passat
  { name: 'Passat (1996-2005)', slug: 'passat-1996', img: '/images/car-models/vw-passat(1996).jpg' },
  { name: 'Passat (2005-2010)', slug: 'passat-2005', img: '/images/car-models/vw-passat(2005).jpg' },
  { name: 'Passat (2010-2014)', slug: 'passat-2010', img: '/images/car-models/vw-passat(2010).jpg' },
  { name: 'Passat (2015-2022)', slug: 'passat-2015', img: '/images/car-models/vw-passat(2015).jpg' },
  { name: 'Passat (2023-)', slug: 'passat-2023', img: '/images/car-models/vw-passat(2023).jpg' },

  // Beetle
  { name: 'Beetle (1950-1980)', slug: 'beetle-1950', img: '/images/car-models/vw-beetle(1950).jpg' },
  { name: 'New Beetle (1998-2010)', slug: 'beetle-1998', img: '/images/car-models/vw-beetle(1998).jpg' },
  { name: 'Beetle (2011-2019)', slug: 'beetle-2011', img: '/images/car-models/vw-beetle(2011).jpg' },

  // Scirocco
  { name: 'Scirocco (2008-2017)', slug: 'scirocco-2008', img: '/images/car-models/vw-scirocco(2009).jpg' },

  // Tiguan
  { name: 'Tiguan (2007-2016)', slug: 'tiguan-2007', img: '/images/car-models/vw-tiguan(2007).jpg' },
  { name: 'Tiguan (2016-)', slug: 'tiguan-2016', img: '/images/car-models/vw-tiguan(2016).jpg' },

  // Touareg
  { name: 'Touareg (2002-2010)', slug: 'touareg-2002', img: '/images/car-models/vw-touareg(2002).jpg' },
  { name: 'Touareg (2010-2018)', slug: 'touareg-2010', img: '/images/car-models/vw-touareg(2010).jpg' },
  { name: 'Touareg (2018-)', slug: 'touareg-2018', img: '/images/car-models/vw-touareg(2018).jpg' },

  // T-Roc
  { name: 'T-Roc (2017-)', slug: 't-roc-2017', img: '/images/car-models/vw-troc(2017).jpg' },

  // T-Cross
  { name: 'T-Cross (2019-)', slug: 't-cross-2019', img: '/images/car-models/vw-tcross(2019).jpg' },

  // Taigo
  { name: 'Taigo (2021-)', slug: 'taigo-2021', img: '/images/car-models/vw-taigo(2021).jpg' },
],

seat: [
  // Ibiza
  { name: 'Ibiza (1993-2002)', slug: 'ibiza-1993', img: '/images/car-models/seat-ibiza(1993).jpg' },
  { name: 'Ibiza (2002-2008)', slug: 'ibiza-2002', img: '/images/car-models/seat-ibiza(2002).jpg' },
  { name: 'Ibiza (2008-2017)', slug: 'ibiza-2008', img: '/images/car-models/seat-ibiza(2008).jpg' },
  { name: 'Ibiza (2017-)',     slug: 'ibiza-2017', img: '/images/car-models/seat-ibiza(2017).jpg' },

  // León
  { name: 'León (1999-2005)', slug: 'leon-1999', img: '/images/car-models/seat-leon(1999).jpg' },
  { name: 'León (2005-2012)', slug: 'leon-2005', img: '/images/car-models/seat-leon(2005).jpg' },
  { name: 'León (2012-2020)', slug: 'leon-2012', img: '/images/car-models/seat-leon(2012).jpg' },
  { name: 'León (2020-)',     slug: 'leon-2020', img: '/images/car-models/seat-leon(2020).jpg' },

  // Toledo
  { name: 'Toledo (1993-1998)', slug: 'toledo-1993', img: '/images/car-models/seat-toledo(1993).jpg' },
  { name: 'Toledo (1998-2004)', slug: 'toledo-1998', img: '/images/car-models/seat-toledo(1998).jpg' },
  { name: 'Toledo (2004-2009)', slug: 'toledo-2004', img: '/images/car-models/seat-toledo(2004).jpg' },
  { name: 'Toledo (2012-2019)', slug: 'toledo-2012', img: '/images/car-models/seat-toledo(2012).png' },

  // Córdoba (Ibiza sedan)
  { name: 'Córdoba (1998-2002)', slug: 'cordoba-1998', img: '/images/car-models/seat-cordoba(1998).jpg' },
  { name: 'Córdoba (2002-2009)', slug: 'cordoba-2002', img: '/images/car-models/seat-cordoba(2002).jpg' },

  // Altea
  { name: 'Altea (2004-2015)', slug: 'altea-2004', img: '/images/car-models/seat-altea(2004).jpg' },

  // Alhambra
  { name: 'Alhambra (2002-2010)', slug: 'alhambra-2002', img: '/images/car-models/seat-alhambra(2002).jpg' },
  { name: 'Alhambra (2010-2020)', slug: 'alhambra-2010', img: '/images/car-models/seat-alhambra(2010).jpg' },

  // Ateca (SUV)
  { name: 'Ateca (2016-2020)', slug: 'ateca-2016', img: '/images/car-models/seat-ateca(2016).jpg' },
  { name: 'Ateca (2020-)',     slug: 'ateca-2020', img: '/images/car-models/seat-ateca(2020).jpg' },

  // Arona (SUV)
  { name: 'Arona (2017-2021)', slug: 'arona-2017', img: '/images/car-models/seat-arona(2017).jpg' },
  { name: 'Arona (2021-)',     slug: 'arona-2021', img: '/images/car-models/seat-arona(2021).jpg' },

  // Tarraco (SUV)
  { name: 'Tarraco (2018-)', slug: 'tarraco-2018', img: '/images/car-models/seat-tarraco(2018).jpg' },

  // Mii / Mii Electric
  { name: 'Mii (2011-2021)', slug: 'mii-2011', img: '/images/car-models/seat-mii(2011).jpg' },
],

skoda: [
  // Fabia
  { name: 'Fabia (1999-2007)', slug: 'fabia-1999', img: '/images/car-models/skoda-fabia(1999).jpg' },
  { name: 'Fabia (2007-2014)', slug: 'fabia-2007', img: '/images/car-models/skoda-fabia(2007).jpg' },
  { name: 'Fabia (2014-2021)', slug: 'fabia-2014', img: '/images/car-models/skoda-fabia(2014).jpg' },
  { name: 'Fabia (2021-)',     slug: 'fabia-2021', img: '/images/car-models/skoda-fabia(2021).jpg' },

  // Octavia
  { name: 'Octavia (1996-2004)', slug: 'octavia-1996', img: '/images/car-models/skoda-octavia(1996).jpg' },
  { name: 'Octavia (2004-2013)', slug: 'octavia-2004', img: '/images/car-models/skoda-octavia(2004).jpg' },
  { name: 'Octavia (2013-2020)', slug: 'octavia-2013', img: '/images/car-models/skoda-octavia(2013).jpg' },
  { name: 'Octavia (2020-)',     slug: 'octavia-2020', img: '/images/car-models/skoda-octavia(2020).jpg' },

  // Superb
  { name: 'Superb (2001-2008)', slug: 'superb-2001', img: '/images/car-models/skoda-superb(2001).jpg' },
  { name: 'Superb (2008-2015)', slug: 'superb-2008', img: '/images/car-models/skoda-superb(2008).jpg' },
  { name: 'Superb (2015-2023)', slug: 'superb-2015', img: '/images/car-models/skoda-superb(2015).jpg' },
  { name: 'Superb (2024-)',     slug: 'superb-2024', img: '/images/car-models/skoda-superb(2024).jpg' },

  // Rapid / Scala
  { name: 'Rapid (2012-2019)', slug: 'rapid-2012', img: '/images/car-models/skoda-rapid(2012).jpg' },
  { name: 'Scala (2019-)',     slug: 'scala-2019', img: '/images/car-models/skoda-scala(2019).jpg' },

  // Citigo
  { name: 'Citigo (2011-2020)', slug: 'citigo-2011', img: '/images/car-models/skoda-citigo(2011).jpg' },

  // Roomster
  { name: 'Roomster (2006-2015)', slug: 'roomster-2006', img: '/images/car-models/skoda-roomster(2006).jpg' },

    // Yeti
  { name: 'Yeti (2009-2017)', slug: 'yeti-2009', img: '/images/car-models/skoda-yeti(2009).jpg' },

   // SUV Serisi
  { name: 'Kodiaq (2016-2023)', slug: 'kodiaq-2016', img: '/images/car-models/skoda-kodiaq(2016).jpg' },
  { name: 'Kodiaq (2024-)',     slug: 'kodiaq-2024', img: '/images/car-models/skoda-kodiaq(2024).jpg' },

  { name: 'Karoq (2017-2021)', slug: 'karoq-2017', img: '/images/car-models/skoda-karoq(2017).jpg' },
  { name: 'Karoq (2022-)',     slug: 'karoq-2022', img: '/images/car-models/skoda-karoq(2022).jpg' },

  { name: 'Kamiq (2019-)', slug: 'kamiq-2019', img: '/images/car-models/skoda-kamiq(2019).jpg' },

  // Elektrikli
  { name: 'Enyaq iV (2020-)', slug: 'enyaq-2020', img: '/images/car-models/skoda-enyaq(2020).jpg' },
  { name: 'Elroq (2025-)',    slug: 'elroq-2025', img: '/images/car-models/skoda-elroq(2025).webp' }
],

cupra: [
  // Ateca
  { name: 'Ateca (2018-2020)', slug: 'ateca-2018', img: '/images/car-models/cupra-ateca(2018).jpg' },
  { name: 'Ateca (2020-)', slug: 'ateca-2020', img: '/images/car-models/cupra-ateca(2020).jpg' },

  // Formentor
  { name: 'Formentor (2020-2023)', slug: 'formentor-2020', img: '/images/car-models/cupra-formentor(2020).jpg' },
  { name: 'Formentor (2024-)', slug: 'formentor-2024', img: '/images/car-models/cupra-formentor(2024).jpg' },

  // Leon
  { name: 'Leon (2020-2023)', slug: 'leon-2020', img: '/images/car-models/cupra-leon(2020).jpg' },
  { name: 'Leon (2024-)', slug: 'leon-2024', img: '/images/car-models/cupra-leon(2024).jpg' },

  // Born (tam elektrikli)
  { name: 'Born (2021-2023)', slug: 'born-2021', img: '/images/car-models/cupra-born(2021).jpg' },
  { name: 'Born (2024-)', slug: 'born-2024', img: '/images/car-models/cupra-born(2024).png' },

  // Tavascan
  { name: 'Tavascan (2024-)', slug: 'tavascan-2024', img: '/images/car-models/cupra-tavascan(2024).jpg' },

  // Terramar
  { name: 'Terramar (2024-)', slug: 'terramar-2024', img: '/images/car-models/cupra-terramar(2024).jpg' },
]

};


// Türkçe normalize
export const norm = (s: string = ""): string =>
  s.toLowerCase()
   .replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i")
   .replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u");

// URL-uyumlu
export const toSlug = (s = "") => norm(s).replace(/\s+/g, "-");

// MODELS anahtarı için kanonikleştir
const BRAND_ALIAS: Record<string, string> = {
  "mercedes": "mercedes-benz",
  "land-rover": "land-rover",
  "range-rover": "land-rover",   // Range Rover → Land Rover modellerini kullan
  "alfa": "alfa-romeo",          // istersen ekledim; MODELS ekleyince işine yarar
};

export const brandKey = (slugOrName = "") => {
  const s = toSlug(slugOrName);
  return BRAND_ALIAS[s] || s;
};
