export interface User {
  id: number;
  email: string;
  role: string;
  location?: {
    type: string;
    coordinates: [number, number];
  };
}
