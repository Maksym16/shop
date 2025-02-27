export interface Billboard {
  id: string;
  label: string;
  imageUrl: string
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  coffeeType: string;
  roastType: RoastType;
  region: Region;
  images: Image[];
  description: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface RoastType {
  id: string;
  name: string;
  value: string;
}

export interface Region {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}