import React from 'react';
import AddProductForm from './AddProductForm';
import Heading from './Heading';
import SideNav from './sideNav';
const AddProductScreen: React.FC = () =>  {
    return (
        <section>
            {/* heading  */}
            <Heading text="Add Product" />
            <div className="col-span-1">
                <SideNav />
            </div>
            {/* form  */}
            <div>
                <AddProductForm />
            </div>
        </section>
    );
};
export default AddProductScreen;