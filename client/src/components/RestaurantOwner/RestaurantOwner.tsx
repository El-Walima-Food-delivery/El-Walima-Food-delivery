import React from 'react';
// import { Route } from 'react-router-dom';

// import AddProductScreen from './AddProduct';

// import EditProductScreen from './EditProduct';
import ManageProductScreen from './ManageProduct'; // Ensure this file exists
// import SideNav from './sideNav';

const RestaurantOwner: React.FC = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10">
            {/* <div className="col-span-1">
                <SideNav />
            </div> */}
            <div className="col-span-4 my-24 px-6">
                <h1>hello</h1>
                <ManageProductScreen />
                {/* <AddProductScreen />

                <EditProductScreen /> */}
            
            </div>
        </main>
    );
};

export default RestaurantOwner;