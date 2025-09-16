'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import styles from './style.module.scss';

const DEALS = [
  { id:'d1', img:'/images/deals/parcalar.png', title:'Sachs Debriyaj Seti', price:5243.45, slug:'sachs-debriyaj-seti' },
  { id:'d2', img:'/images/deals/parcalar.png', title:'TRW Fren Balatası',   price:1321.79, slug:'trw-fren-balatasi' },
  { id:'d3', img:'/images/deals/parcalar.png', title:'Bosch Silecek Seti',  price:248.90,  slug:'bosch-silecek' }
];

export default function DealsSlider(){
  return (
    <div className={`card shadow-sm ${styles.deals}`}>
      <div className="card-header py-2 fw-semibold small">Haftanın Fırsatları</div>
      <div className="card-body">
        <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop>
          {DEALS.map(d=>(
            <SwiperSlide key={d.id}>
              <Link href={`/parca/${d.slug}`} className="text-decoration-none text-reset d-block">
                <img src={d.img} alt={d.title} className={styles.deals__img} /> {/* ✅ */}
                <div className="small mt-2 fw-bold">{d.title}</div>
                <div className="fw-bold">{d.price.toLocaleString('tr-TR')} TL</div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
