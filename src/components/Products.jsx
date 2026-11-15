
import ProductCard from './ProductCard'
import products from '../data/products'

export default function Products() {

   return (
    <div className="w-full max-w-[1360px] mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}
