interface IPossitiveComments {
  id: number;
  description: string;
}

export interface IComment {
  title: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  positiveComments: IPossitiveComments[];
  negativeComments: [];
  unknown: boolean;
  slug: string;
  rate: string;
  productName: string;
  id: number;
}

export interface IQuestion {
  id: number;
  questionsBox: string;
  slug: string;
}
