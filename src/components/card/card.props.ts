import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
  img: string;
  price: number;
  title: string;
  id: number;
  like: boolean;
  handleLikeAdd: Function;
}
