import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CategoryItem } from '@/app/modules/Category/components';
import { categoriesData } from '@/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn/ui/accordion';

export const MobileCategory: FC = () => {
  return (
    <div>
      {categoriesData.categories.map((category) => (
        <Accordion type="single" collapsible key={category.id}>
          <AccordionItem value={`category-${category.id}`}>
            <AccordionTrigger>
              <div className="flex gap-3">
                <Image src={category.icon} width={20} height={20} alt={`${category.name} icon`} />
                {category.name}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {category.subcategories ? (
                <div className="flex flex-col pl-6 gap-3">
                  <Link href={`/categories/${category.slug}`} className="font-medium pb-1">
                    Все товары категории
                  </Link>

                  {category.subcategories.map((subcategory) => (
                    <CategoryItem
                      key={`${subcategory.slug}-${category.id}`}
                      category={subcategory}
                      parentSlug={category.slug}
                    />
                  ))}
                </div>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
