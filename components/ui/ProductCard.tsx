"use client";

import { Product } from '@/types';
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import IconButton from '@/components/ui/IconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from '@/components/ui/Currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${product?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product);
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    
    cart.addItem(product)
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
              onClick={onPreview}
              icon={<Expand size={20} className='text-gray-600'/>}
              className=''
            />
            <IconButton 
              onClick={onAddToCart}
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
