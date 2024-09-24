import React from 'react';
import ArchivedProductForm from './ArchivedProductForm';
import SideNav from './sideNav';

const ArchivedProductScreen: React.FC = () => {
    return (
        <section className="flex">
            <SideNav />
            <div className="flex-grow mt-10">
                <ArchivedProductForm />
            </div>
        </section>
    );
};

export default ArchivedProductScreen;