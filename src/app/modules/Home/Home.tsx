import { observer } from 'mobx-react-lite';
import { FC } from 'react';

import { Banner } from '@/app/components/widgets/Banner/Banner';
import { Products } from '@/app/components/widgets/Products/Products';
import productsStore from '@/app/stores/products-store';

import { Intro } from './components/Intro/Intro';

export const Home: FC = observer(() => {
  const { products } = productsStore;

  return (
    <>
      <Intro />
      {products.categories.map((category) => (
        <div className="" key={category.title}>
          <Products key={category.title} cards={category} />
          <Banner />
        </div>
      ))}
    </>
  );
});
