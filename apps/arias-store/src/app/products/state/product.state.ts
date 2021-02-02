import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

export interface Product {
  id: number | null;
  productName: string;
  productCode: string;
  description: string;
  starRating: number;
}
