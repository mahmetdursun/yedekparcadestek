export const BRANDS = [
  { name: 'Abarth', slug: 'Abarth', count: '13.582', logo: '/images/car-logo/abarth.png' },
  { name: 'Alfa Romeo', slug: 'Alfa', count: '13.582', logo: '/images/car-logo/alfa.png' },
  { name: 'Audi', slug: 'audi', count: '13.582', logo: '/images/car-logo/audi.png' },
  { name: 'BMW', slug: 'bmw', count: '24.860', logo: '/images/car-logo/bmw.png' },
  { name: 'Chevrolet', slug: 'chevrolet', count: '102', logo: '/images/car-logo/chevrolet.png' },
  { name: 'Chrysler', slug: 'chrysler', count: '102', logo: '/images/car-logo/chrysler.png' },
  { name: 'Citroen', slug: 'citroen', count: '9.140', logo: '/images/car-logo/citroen.png' },
  { name: 'Cupra', slug: 'cupra', count: '198', logo: '/images/car-logo/cupra.png' },
  { name: 'Dacia', slug: 'dacia', count: '3.704', logo: '/images/car-logo/dacia.png' },
  { name: 'DS', slug: 'ds', count: '3.704', logo: '/images/car-logo/ds.png' },
  { name: 'Fiat', slug: 'fiat', count: '33.918', logo: '/images/car-logo/fiat.png' },
  { name: 'Ford', slug: 'ford', count: '22.940', logo: '/images/car-logo/ford.png' },
  { name: 'Honda', slug: 'honda', count: '11.298', logo: '/images/car-logo/honda.png' },
  { name: 'Hyundai', slug: 'hyundai', count: '18.102', logo: '/images/car-logo/hyundai.png' },
  { name: 'Infiniti', slug: 'infiniti', count: '18.102', logo: '/images/car-logo/infiniti.png' },
  { name: 'Jeep', slug: 'jeep', count: '18.102', logo: '/images/car-logo/jeep.png' },
  { name: 'Kia', slug: 'kia', count: '3.012', logo: '/images/car-logo/kia.png' },
  { name: 'Lancia', slug: 'lancia', count: '3.012', logo: '/images/car-logo/lancia.png' },
  { name: 'Land Rover', slug: 'land rover', count: '3.012', logo: '/images/car-logo/land-rover.png' },
  { name: 'Lexus', slug: 'lexus', count: '3.012', logo: '/images/car-logo/lexus.png' },
  { name: 'Mercedes-Benz', slug: 'mercedes', count: '19.992', logo: '/images/car-logo/mercedes-benz.png' },
  { name: 'Mini', slug: 'mini', count: '19.992', logo: '/images/car-logo/mini.png' },
  { name: 'Nissan', slug: 'nissan', count: '2.132', logo: '/images/car-logo/nissan.png' },
  { name: 'Opel', slug: 'opel', count: '30.201', logo: '/images/car-logo/opel.png' },
  { name: 'Peugeot', slug: 'peugeot', count: '14.893', logo: '/images/car-logo/peugeot.png' },
  { name: 'Range Rover', slug: 'range rover', count: '55.783', logo: '/images/car-logo/range-rover.png' },
  { name: 'Renault', slug: 'renault', count: '55.783', logo: '/images/car-logo/renault.png' },
  { name: 'Seat', slug: 'seat', count: '6.637', logo: '/images/car-logo/seat.png' },
  { name: 'Skoda', slug: 'skoda', count: '9.594', logo: '/images/car-logo/skoda.png' },
  { name: 'Smart', slug: 'smart', count: '9.594', logo: '/images/car-logo/smart.png' },
  { name: 'Tofaş', slug: 'tofas', count: '10.829', logo: '/images/car-logo/tofas.png' },
  { name: 'Toyota', slug: 'toyota', count: '16.080', logo: '/images/car-logo/toyota.png' },
  { name: 'Volkswagen', slug: 'volkswagen', count: '43.918', logo: '/images/car-logo/volkswagen.png' },
  { name: 'Volvo', slug: 'volvo', count: '2.890', logo: '/images/car-logo/volvo.png' },
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
    { name: 'Q5 (2017-)', slug: 'q5-2015', img: '/images/car-models/audi-q5(2015).jpg' },

    { name: 'Q7 (2006-2014)', slug: 'q7-2006', img: '/images/car-models/audi-q7(2006).jpg' },
    { name: 'Q7 (2015-)', slug: 'q7-2015', img: '/images/car-models/audi-q7(2015).jpg' },

    { name: 'Q8', slug: 'q8', img: '/images/car-models/audi-q8.jpg' },
  ],

  'mercedes-benz': [
    { name: 'C W204', slug: 'c-w204', img: '/images/models/mercedes/c-w204.jpg' },
    { name: 'E W212', slug: 'e-w212', img: '/images/models/mercedes/e-w212.jpg' },
  ],
  volkswagen: [
    { name: 'Golf 7', slug: 'golf-7', img: '/images/models/vw/golf7.jpg' },
    { name: 'Passat B8', slug: 'passat-b8', img: '/images/models/vw/passat-b8.jpg' },
  ],
}

// Türkçe normalize (senin fonksiyonun)
export const norm = (s: string = ""): string =>
  s.toLowerCase()
   .split("ç").join("c")
   .split("ğ").join("g")
   .split("ı").join("i")
   .split("ö").join("o")
   .split("ş").join("s")
   .split("ü").join("u");

// URL için güvenli slug üret (boşluk → -, vs.)
export const toSlug = (s='') =>
  norm(s).replace(/\s+/g,'-');

// BRANDS’teki slug’lar karışıksa (Abarth/Audi vs) burada tekilleştiriyoruz
export const brandKey = (slugOrName='') => norm(slugOrName);