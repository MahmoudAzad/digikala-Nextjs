export interface IGallery {
  id: number | string;
  image: string;
  name: string;
  slug: string;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  mainCategory: string;
  createdAt: Date;
  updatedAt: Date;
  subCategory: IGallery[];
}
export interface IMainCategory {
  id: number;
  name: string;
  icon: string;
  thumbnail: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  AmazingOfferSliderColor: string;
  slider: IGallery[];
  banner: IGallery[];
}

export interface ISubCategory {
  id: string;
  name: string;
  image: string;
  description: string;
  group: boolean;
}
