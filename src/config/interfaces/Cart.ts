import type { Painting } from "./Painting";

export interface CartItem {
  painting: Painting;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: Painting }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" };
