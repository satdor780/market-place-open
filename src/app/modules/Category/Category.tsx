import { useRouter } from 'next/router';

import { Products } from '@/app/components/widgets/Products/Products';
import productsStore from '@/app/stores/products-store';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/shadcn/ui/breadcrumb';

export const Category = () => {
  const router = useRouter();
  const { id: category } = router.query;

  const { getProductsFromCategory } = productsStore;

  const categoryParam =
    typeof category === 'string' ? category : Array.isArray(category) ? category[0] : '';

  const categoryData = getProductsFromCategory(categoryParam);

  if (!categoryData) {
    return <p className="text-center text-gray-500">Категория не найдена</p>;
  }

  return (
    <>
      <Breadcrumb className="py-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Все категории</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={categoryData.slug}>{categoryData.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Products cards={categoryData} />
    </>
  );
};
