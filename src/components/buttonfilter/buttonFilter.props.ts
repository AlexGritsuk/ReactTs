import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonFilterProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}
