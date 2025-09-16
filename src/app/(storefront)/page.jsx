import HeroSlider from '@/components/layout/hero-slider/HeroSlider';
import DealsSlider from '@/components/layout/deals-slider/DealsSlider';
import PopularBrands from '@/components/layout/popular-brands/PopularBrands';
import CategoryBanners from '@/components/layout/category-banners/CategoryBanners';
import ProductCard from '@/components/product/ProductCard';
import BrandShowcase from '@/components/layout/car-show-case/BrandShowcase';
import { MOCK_PRODUCTS } from '@/data/mockProducts'; // 👈

export default function Home(){
  const tiles = [
    { name: 'Opel',       img: '/images/brand-tiles/opel.jpg' },
    { name: 'Mercedes',   img: '/images/brand-tiles/mercedes-benz.jpg' },
    { name: 'Ford',       img: '/images/brand-tiles/ford.jpg' },
    { name: 'Volkswagen', img: '/images/brand-tiles/vw.jpg' },
    { name: 'BMW',        img: '/images/brand-tiles/bmw.jpg' },
    { name: 'Peugeot',    img: '/images/brand-tiles/peugeot.jpg' },
  ];

  const DEMO = MOCK_PRODUCTS.slice(0, 6); // 👈 Aynı kaynaktan gelsin

  return (
    <div className="container">
      <div className="row g-3 mb-3">
        <div className="col-lg-9"><HeroSlider /></div>
        <div className="col-lg-3"><DealsSlider /></div>
      </div>

      <div className="mt-4">
        <CategoryBanners />
      </div>

      <section className="mt-4">
        <h2 className="h6 mb-2">Öne Çıkan Yedek Parçalar</h2>
        <div className="product-grid">
          {DEMO.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <BrandShowcase items={tiles} />
    </div>
  );
}
