export type Root = { results: Root2[] };

export interface Root2 {
  id: number;
  title: string;
  image: string;
  imageType: string;
  nutrition: Nutrition;
}

export interface Nutrition {
  nutrients: Nutrient[];
}

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}
