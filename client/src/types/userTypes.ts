export interface User {
  name: string;
  email: string;
  role: string;

  imageUrl: string;
  location?: {
    type: string;
    coordinates: [number, number];
  };
}
