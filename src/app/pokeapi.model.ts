export interface ApiResponse {
  count: number;
  next: null;
  previous: null;
  results: Pokemon[]
}

export interface Pokemon {
  name: string;
  url: string;
}
