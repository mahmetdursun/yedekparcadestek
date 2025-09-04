import HeroSlider from '@/components/layout/hero-slider/HeroSlider';
import DealsSlider from '@/components/layout/deals-slider/DealsSlider';
import PopularBrands from '@/components/layout/popular-brands/PopularBrands';
import CategoryBanners from '@/components/layout/category-banners/CategoryBanners';
import ProductCard from '@/components/product/ProductCard';

const DEMO = [
  { id:'1', brand:'Sachs',  title:'Ön Amortisör Sağ - BMW 1 Serisi E87', price:3062, img:'/images/products/amortisor.jpg' },
  { id:'2', brand:'Depo',   title:'Stop Lambası Sol Dış - BMW E87',      price:3135, img:'/images/products/amortisor.jpg' },
  { id:'3', brand:'Castrol',title:'Edge 5W-30 4L Motor Yağı',            price:1290, img:'/images/products/amortisor.jpg' },
  { id:'4', brand:'Bosch',  title:'Hava Filtresi - VW Golf 7',           price:380,  img:'/images/products/amortisor.jpg' },
  { id:'5', brand:'Valeo',  title:'Silecek Seti 600/400mm',              price:420,  img:'/images/products/amortisor.jpg' },
  { id:'6', brand:'TRW',    title:'Fren Balatası Ön - Accent Blue',      price:1321, img:'/images/products/amortisor.jpg' }
];

export default function Home(){
  return (
    <div className="container">
      {/* Hero + Haftanın Fırsatları */}
      <div className="row g-3 mb-3">
        <div className="col-lg-9"><HeroSlider /></div>
        <div className="col-lg-3"><DealsSlider /></div>
      </div>

      <PopularBrands />

      <div className="mt-4">
        <CategoryBanners />
      </div>

      <section className="mt-4">
        <h2 className="h6 mb-2">Öne Çıkan Yedek Parçalar</h2>
        <div className="product-grid">
          {DEMO.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </div>
  );
}
