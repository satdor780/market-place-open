import Link from 'next/link';
import { FC } from 'react';

import { Subcategory } from '@/app/types/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn/ui/accordion';

interface CategoryItemProps {
  category: Subcategory;
  parentSlug: string;
}

export const CategoryItem: FC<CategoryItemProps> = ({ category, parentSlug }) => {
  const fullSlug = `${parentSlug}/${category.slug}`;

  return (
    <>
      {category.subcategories ? (
        <Accordion type="single" collapsible>
          <AccordionItem value={`subcategory-${category.slug}`} className="border-0">
            <AccordionTrigger className="py-0 hover:no-underline">
              <div className="flex items-center gap-2 font-normal pb-0">{category.name}</div>
            </AccordionTrigger>

            <AccordionContent className="pl-6">
              <div className="flex flex-col gap-2">
                <Link href={`/categories/${fullSlug}`} className="font-medium pt-3 pb-1">
                  Все товары категории
                </Link>

                {category.subcategories?.map((nestedSubcategory) => (
                  // <CategoryItem
                  //     key={`${nestedSubcategory.slug}-${category.slug}`}
                  //     category={nestedSubcategory}
                  //     parentSlug={fullSlug}
                  // />
                  <Link
                    key={nestedSubcategory.slug}
                    href={`/categories/${fullSlug}`}
                    className="font-normal pt-3 pb-1"
                  >
                    {nestedSubcategory.name}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <Link href={`/categories/${fullSlug}`} className="">
          {category.name}
        </Link>
      )}
    </>
  );
};
