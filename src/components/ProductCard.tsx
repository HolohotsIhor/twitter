import Image from 'next/image';

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductCard({ id, title, price, thumbnail }: Product) {
  return (
    <div
      className='flex flex-col overflow-hidden rounded-xl border w-[300px] border-white/10 bg-black text-white shadow-md transition hover:border-white/20'
      aria-labelledby={`product-title-${id}`}
    >
      <div className='relative aspect-square w-full bg-white/5'>
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-contain p-4'
        />
      </div>
      <div className='flex flex-1 flex-col gap-2 p-4'>
        <h2 id={`product-title-${id}`} className='line-clamp-2 text-sm font-semibold leading-snug text-white/95'>
          {title}
        </h2>
        <p className='mt-auto text-lg font-bold tabular-nums text-white'>{priceFormatter.format(price)}</p>
      </div>
    </div>
  );
}
