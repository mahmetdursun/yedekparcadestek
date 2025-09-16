// 'use client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// const BRANDS = [
//   '/images/brands/bosch-logo.jpg','/images/brands/liquiMoly-logo.png','/images/brands/valeo-logo.png','/images/brands/valeo-logo.png',
//   '/images/brands/bosch-logo.jpg','/images/brands/liquiMoly-logo.png','/images/brands/valeo-logo.png','/images/brands/bosch-logo.jpg','/images/brands/liquiMoly-logo.png','/images/brands/valeo-logo.png','images/brands/valeo-logo.png',
//   '/images/brands/bosch-logo.jpg','/images/brands/liquiMoly-logo.png','/images/brands/valeo-logo.png',
// ];

// export default function PopularBrands(){
//   return (
//     <section className="card shadow-sm p-3 brand-carousel">
//       <div className="d-flex align-items-center justify-content-between mb-2">
//         <h2 className="h6 m-0">Popüler Markalar</h2>
//       </div>
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 2000 }}
//         loop
//         slidesPerView={6}
//         spaceBetween={16}
//         breakpoints={{
//           0:{ slidesPerView:3 },
//           576:{ slidesPerView:4 },
//           768:{ slidesPerView:6 },
//           1200:{ slidesPerView:8 }
//         }}
//       >
//         {BRANDS.map((src,i)=>(
//           <SwiperSlide key={i}>
//             <div className="brand-carousel__item">
//               <img src={src} alt="brand" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
