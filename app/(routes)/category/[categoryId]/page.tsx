import getCategory from '@/actions/get-category';
import getRoastTypes from '@/actions/get-roast-types';
import getProducts from '@/actions/get-products';
import getSizes from '@/actions/get-sizes';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/container';
import Filter from './components/Filter';
import NoResults from '@/components/ui/NoResults';
import ProductCard from '@/components/ui/ProductCard';
import MobileFilters from './components/MobileFilters';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    roastTypeId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    roastTypeId: searchParams.roastTypeId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const roastTypes = await getRoastTypes();
  const category = await getCategory(params.categoryId);
  
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} roastTypes={roastTypes} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="roastTypeId" name="Roast Types" data={roastTypes} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
