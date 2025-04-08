import { Support as SupportPage } from '@/app/modules/Support/Support';
import Layout from '@/layouts/layout';
import type { NextPageWithLayout } from '@/pages/_app';

import type { ReactElement } from 'react';

const Support: NextPageWithLayout = () => {
  return <SupportPage />;
};

const params = {
  title: 'title',
  description: 'dec',
};

Support.getLayout = function getLayout(page: ReactElement) {
  return <Layout params={params}>{page}</Layout>;
};

export default Support;
