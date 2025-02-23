'use client';

import { Product } from '@/types';
import React, { MouseEventHandler } from 'react';
import Currency from './ui/Currency';
import Button from './ui/Button';
import { ShoppingCart } from 'lucide-react';
import useCart from '@/hooks/use-cart';


interface InfoProps {
  data: Product;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Info: React.FC<InfoProps> = ({ data, onClick }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      onClick(event);
      return;
    }
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div className="">{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Roast Type:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.roastType?.value }}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Region:</h3>
          <div className="">{data?.region?.name}</div>
        </div>
        <div>
          <h3 className="font-semibold text-black">Description:</h3>
          <div className="">
            {data?.description.split('- ').map((item) => {
              return !!item.length && <p key={item}>{`- ${item}`}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={(e) => onAddToCart(e)}>
          <ShoppingCart />
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Info;
