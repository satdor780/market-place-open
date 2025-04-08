import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import { toast } from 'sonner';

import favoritesStore from '@/app/stores/favorites-store';
import { Product } from '@/app/types/types';

export const FavoriteButton: FC<{
  product: Product;
}> = ({ product }) => {
  const { addItem, removeItem, favorites } = favoritesStore;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const isProductFavorite = favorites.some((p) => p.id === product.id);
    setIsFavorite(isProductFavorite);
  }, [product.id, favorites]);

  const toggleFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isAnimating) return;

    setIsAnimating(true);

    if (isFavorite) {
      removeItem(product);
      toast('товар удален из избранного(');
    } else {
      addItem(product);
      toast('товар добавлен в избранное!');
    }

    setIsFavorite(!isFavorite);

    setIsAnimating(false);
  };

  return (
    <div>
      <motion.div
        key={isFavorite ? 'filled' : 'outline'}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: 1,
          color: isFavorite ? '#7C3AED' : '#000000',
        }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FontAwesomeIcon
          icon={isFavorite ? faHeartSolid : faHeart}
          className="text-[18px] bg-transparent"
          onClick={toggleFavorite}
        />
      </motion.div>
    </div>
  );
};
