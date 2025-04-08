import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { ReviewsList } from '@/app/types/types';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const Reviews: FC<{
  reviews: ReviewsList[];
}> = ({ reviews }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {reviews.map((review) => (
        <div className="w-full p-3 rounded-lg border border-[rgba(54,55,64,.2)]" key={review.id}>
          <div className="flex justify-between pb-3">
            <div className="">
              <span className="font-medium pb-2 block">{review.user}</span>
              <span className="block text-gray text-[13px] font-medium">
                {formatDate(review.date)}
              </span>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: Number(review.rating) }).map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="w-4 text-orange" />
              ))}
            </div>
          </div>
          <p className="leading-5">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};
