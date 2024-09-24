import React from 'react';
import AddProductForm from './AddProductForm';
import SideNav from './sideNav';

const AddProductScreen: React.FC = () => {
    return (
        <section className="flex">
            <SideNav />
            <div className="flex-grow mt-10">
                <AddProductForm />
            </div>
        </section>
    );
};

export default AddProductScreen;