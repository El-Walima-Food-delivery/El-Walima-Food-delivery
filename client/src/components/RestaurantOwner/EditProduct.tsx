import React from 'react';
import EditProductForm from './EditProductForm';
import Heading from './Heading';

const EditProductScreen: React.FC = () => {
    return (
        <section>
            {/* heading  */}
            <Heading text="Edit Food" />
            {/* form  */}
            <EditProductForm />
        </section>
    );
};

export default EditProductScreen;