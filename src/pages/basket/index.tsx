import { Basket as BasketPage } from '@/app/modules/Basket/Basket';
import Layout from '@/layouts/layout';
import type { NextPageWithLayout } from '@/pages/_app';

import type { ReactElement } from 'react';

const Basket: NextPageWithLayout = () => {
  return <BasketPage />;
};

const params = {
  title: 'title',
  description: 'dec',
};

Basket.getLayout = function getLayout(page: ReactElement) {
  return <Layout params={params}>{page}</Layout>;
};

export default Basket;
