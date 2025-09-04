'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SLIDES = [
  { id: 1, img: '/images/banners/markalar.png', alt: 'Tüm Markalar Tek Platformda' },
  { id: 2, img: '/images/banners/urunler.png', alt: 'Parcalar' },
  { id: 3, img: '/images/banners/yaglar.png', alt: 'Yağ & Aksesuar Kampanyaları' },
];

export default function HeroSlider() {
  return (
    <div className="banner-hero card shadow-sm">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3500 }}
        loop
        pagination={{ clickable: true }}
        navigation
      >
        {SLIDES.map(s => (
          <SwiperSlide key={s.id}>
            <div className="banner-hero__media">
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
