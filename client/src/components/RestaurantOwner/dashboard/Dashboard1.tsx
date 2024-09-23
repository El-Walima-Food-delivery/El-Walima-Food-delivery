import React from 'react';
import Dashboard1 from './Dashboardform';
import Heading from '../Heading';

import RestaurantOwner from '../RestaurantOwner';
const DashboardScreen: React.FC = () =>  {
    return (
        <section className="space-y-4">
            {/* heading  */}
            <Heading text="Add Product" />
            <div className="flex flex-col gap-2">
                <Dashboard1 />
                <RestaurantOwner />
            </div>
        </section>
    );
};
export default DashboardScreen;