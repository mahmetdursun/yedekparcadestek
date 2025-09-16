'use client';

import Image from 'next/image';
import Link from 'next/link';
import { toSlug } from '@/data/brandsModels';
import styles from './style.module.scss';

export default function BrandTilesRow({ items = [] }) {
  const six = items.slice(0, 6);

  return (
    <section className="my-4">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3">
        {six.map((b) => {
          const slug = b.slug || toSlug(b.name);
          return (
            <div key={slug} className="col">
              <Link
                href={`/marka/${slug}`}
                className={`card shadow-sm ${styles.tile}`}
                title={b.name}
              >
                <span className={styles.tile__img}>
                  <Image
                    src={b.img}
                    alt={`${b.name} yedek parça`}
                    fill
                    sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 16vw"
                    priority={false}
                  />
                </span>

                <span className={styles.tile__cap}>
                  <i className={styles.tile__bar} />
                  <span className={styles.tile__text}>
                    <span className={styles.t1}>{b.name}</span>
                    <span className={styles.t2}>
                      <strong>Yedek</strong> Parça
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
