export interface User {
  name: string;
  id: number;
  email: string;
  role: string;
  location?: {
    type: string;
    coordinates: [number, number];
  };
}
