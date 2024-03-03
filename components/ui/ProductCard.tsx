"use client";

import { Product } from '@/types';
import React from 'react';
import Image from 'next/image';
import IconButton from '@/components/ui/IconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from '@/components/ui/Currency';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`product/${product?.id}`)
  }

  return (
    <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4' onClick={handleClick}>
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={product?.images?.[0]?.url}
          fill
          alt='Image'
          className='aspect-square object-cover rounded-md'
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={() => {}}
              icon={<Expand size={20} className='text-gray-600'/>}
              className=''
            />
            <IconButton 
              onClick={() => {}}
              icon={<ShoppingCart size={20} className='text-gray-600'/>}
              className=''
            />
          </div>
        </div>
      </div>
      <div>
        <p className='font-semibold text-lg'>{product.name}</p>
        <p className='text-sm text-gray-500'>{product.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
}

export default ProductCard;
