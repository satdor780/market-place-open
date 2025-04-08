import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { FC } from 'react';

import { Card } from '@/app/components/shared/Card/Card';
import { Category } from '@/app/types/types';

export const Products: FC<{
  cards: Category;
}> = observer(({ cards }) => {
  return (
    <div className="mb-10 max-md:mb-5">
      <Link href="/" className="font-medium text-[19px]">
        {cards.title}
      </Link>
      <div className="max-sm:grid-cols-2 max-lg:grid-cols-4 grid grid-cols-5 gap-3 pt-4">
        {cards.products.map((product) => (
          <Card key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
});
