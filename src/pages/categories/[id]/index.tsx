import { Category as CategoryPage } from '@/app/modules/Category/Category';
import Layout from '@/layouts/layout';
import type { NextPageWithLayout } from '@/pages/_app';

import type { ReactElement } from 'react';

const SubCategory: NextPageWithLayout = () => {
  return <CategoryPage />;
};

const params = {
  title: 'title',
  description: 'dec',
};

SubCategory.getLayout = function getLayout(page: ReactElement) {
  return <Layout params={params}>{page}</Layout>;
};

export default SubCategory;
