
export default function ProductCard({ product }) {

    return (
        <div className="p-4 max-w-[400px] ">
            {product.isFeatured && (
                <span className="bg-yellow-300 text-xs font-bold px-2 py-1 rounded">
                    Featured
                </span>
            )}

            <img className="w-full h-48 object-cover rounded-lg"
                src={product.thumbnail}
                alt={product.title}
            />
            <h3 className='text-lg font-bold text-gray-900'>{product.title}</h3>
            <p className='text-sm text-gray-600 mt-[4px]'>{product.description}</p>
            <p className='text-md font-bold text-gray-600'>${product.price.toFixed(2)}</p>

            {product.inStock ? (
                <span className="text-green-600 text-xs font-bold">In Stock</span>
            ) : (
                <span className="text-red-600 text-xs font-bold ">Out of Stock</span>
            )}
        </div>

    )
}
