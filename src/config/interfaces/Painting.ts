export interface Painting {
  id: number;
  image: string;
  author: string;
  name: string;
  material: string;
  price: number;

  country: "France" | "Germany" | "England";
}
