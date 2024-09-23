import React from 'react';
import ArchivedProductForm from './ArchivedProductForm';
import Heading from './Heading';
import SideNav from './sideNav';
const ArchivedProductScreen: React.FC = () =>  {
    return (
        <section>
            {/* heading  */}
            <Heading text="Add Product" />
            <div className="col-span-1">
                <SideNav />
            </div>
            {/* form  */}
            <div>
                <ArchivedProductForm />
            </div>
        </section>
    );
};
export default ArchivedProductScreen;