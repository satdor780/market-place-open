import React, { FC } from 'react';

import { Card } from '@/app/components/shared/Card/Card';
import { Emptiness } from '@/app/components/shared/Emptiness/Emptiness';
import favoritesStore from '@/app/stores/favorites-store';
import { Separator } from '@/shadcn/ui/separator';

export const Favorites: FC = () => {
  const { favorites } = favoritesStore;

  if (favorites.length === 0) {
    return (
      <Emptiness
        title="Добавьте то, что понравилось"
        subtitle="Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится"
      />
    );
  }

  return (
    <div className="mb-10">
      <h3 className="py-3 flex font-medium text-2xl items-center">Мои желания</h3>
      <Separator />
      <div className="max-sm:grid-cols-2 max-lg:grid-cols-4 grid grid-cols-5 gap-3 pt-4">
        {favorites.map((product) => (
          <Card key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};
