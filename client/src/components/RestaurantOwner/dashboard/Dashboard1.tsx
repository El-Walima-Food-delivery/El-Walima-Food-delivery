import React from 'react';
import Dashboard1 from './Dashboardform';




const DashboardScreen: React.FC = () => {
    return (
      
        <section className="space-y-4">
         
        
            <div className="flex flex-col gap-2 ml-80 mb-80">
           
                <Dashboard1 />
                {/* <ManageProductScreen />
                <AddProductForm />
                <ArchivedProductForm /> */}
            </div>
            
        </section>
    );
};

export default DashboardScreen;