import React from 'react';
import Container from '@/components/ui/container';
import Link from 'next/link';
import MainNav from '@/components/MainNav';
import getCategories from '@/actions/get-categories';
import NavbarActions from '@/components/NavbarActions';


export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();

  if (!categories) {
    return null;
  }

  return (
    <div className='border-b'>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/" className='ml-4 flex lg:ml-0 gap-x-2'>
          <p className='font-bold text-xl'>Coffee Shop</p>
        </Link>
        <MainNav data={categories}/>
        <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
