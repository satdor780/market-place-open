import { Emptiness } from '@/app/components/shared/Emptiness/Emptiness';
import Layout from '@/layouts/layout';
import type { NextPageWithLayout } from '@/pages/_app';

import type { ReactElement } from 'react';

const MyOrders: NextPageWithLayout = () => {
  return (
    <Emptiness
      title="У вас пока нету заказов"
      subtitle="Начните с главной страницы — нужный товар можно заказать через поиск или заглянуть в подборки. Мы поможем вам найти то, что нужно!"
    />
  );
};

const params = {
  title: 'title',
  description: 'dec',
};

MyOrders.getLayout = function getLayout(page: ReactElement) {
  return <Layout params={params}>{page}</Layout>;
};

export default MyOrders;
