import { Favorites as FavoritesPage } from '@/app/modules/Favorites/Favorites';
import Layout from '@/layouts/layout';
import type { NextPageWithLayout } from '@/pages/_app';

import type { ReactElement } from 'react';

const Favorites: NextPageWithLayout = () => {
  return <FavoritesPage />;
};

const params = {
  title: 'title',
  description: 'dec',
};

Favorites.getLayout = function getLayout(page: ReactElement) {
  return <Layout params={params}>{page}</Layout>;
};

export default Favorites;
