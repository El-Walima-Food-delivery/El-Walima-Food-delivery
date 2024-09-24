export interface User {
<<<<<<< HEAD
  name: string;
=======
  photoURL: string;
  name: string;
  id: number;
>>>>>>> origin/main
  email: string;
  role: string;

  imageUrl: string;
  location?: {
    type: string;
    coordinates: [number, number];
  };
}
