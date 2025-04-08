import { Product as ProductPage } from '@/app/modules/Product/Product';
import Layout from '@/layouts/layout';
import type { NextPageWithLayout } from '@/pages/_app';

import type { ReactElement } from 'react';

const Product: NextPageWithLayout = () => {
  return <ProductPage />;
};

const params = {
  title: 'title',
  description: 'dec',
};

Product.getLayout = function getLayout(page: ReactElement) {
  return <Layout params={params}>{page}</Layout>;
};

export default Product;
