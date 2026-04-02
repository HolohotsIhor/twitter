import ProductCard, { type Product } from "@/components/ProductCard";
import { API_URL } from "@/constants/constants";
import type { DummyJsonProductsResponse } from "@/shared/types/product.type";

// export const dynamic = 'force-dynamic';

export default async function PageSSG() {
  const response = await fetch(`${API_URL}`, { cache: 'no-store' }); // SSR: cache: 'no-store'
  const data = (await response.json()) as DummyJsonProductsResponse;
  const products: Product[] = data.products;

  return (
    <div>
      <h1 className='text-3xl mb-3'>SSG</h1>
      <ul className='flex flex-col gap-4 items-center'>
        {products.map((product) => (
          <li key={product.id} className='list-none'>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  )
}