import { Home as HomePage } from '@/app/modules/Home/Home';
import Layout from '@/layouts/layout';

import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';

const Page: NextPageWithLayout = () => {
  return <HomePage />;
};

const params = {
  title: 'title',
  description: 'dec',
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout params={params}>{page}</Layout>;
};

export default Page;
