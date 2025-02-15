export interface ResultsType {
  id: string;
  code: string;
  state: string;
  tags: string[];
  type: string;
  owner: string;
  bound_order: string | null;
  products: {
    id: string;
    bound_order_item: string | null;
    price: {
      with_vat: string;
      without_vat: string | null;
      vat: string | null;
    };
    files: any[];
    name: string;
    manufacturer: string;
    category: string;
    product_id: string;
    variant: string;
    ean: string;
    serial: string | null;
    amount: string;
    custom_fields: {
      [key: string]: string;
    };
  }[];
  shipping: any[];
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  currency: string;
  language: string;
  country: string;
  order_id: string;
  order_date: string;
  customer_rating: string | null;
  customer_rating_comment: string | null;
  custom_fields: {
    resolve_by: string;
  };
  verification_state: string;
  is_unread: boolean;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
}

export interface ResponseType {
  count: number;
  current_page: number;
  total_pages: number;
  results: ResultsType[];
}
