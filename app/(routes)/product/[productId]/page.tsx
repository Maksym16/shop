import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/ProductList"
import Gallery from "@/components/gallery"
import Info from "@/components/info"
import Container from "@/components/ui/container"


interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({params}) => {
  const product = await getProduct(params.productId)
  const suggestedProduct = await getProducts({
    categoryId: product?.category.id
  })

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
           <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" items={suggestedProduct}/>
        </div>
      </Container>
    </div>
  )
}

export default ProductPage;