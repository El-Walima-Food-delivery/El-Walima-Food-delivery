export interface User {
    id: string;
    name: string;
    email: string;
    token:string;
    role: 'admin' |'seller' | 'customer';
    // Add other user fields as needed
  }