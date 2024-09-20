import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


interface MenuItem {

    id: number;
    text: string;
    to: string;
}




const SideNav: React.FC = () => {
    
    const [sidenav, setSidenav] = useState(true);

    //toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    };

    // auto hide 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1098) {
                setSidenav(false);
            } else {
                setSidenav(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menu: MenuItem[] = [
        { id: 1, text: 'Dashboard', to: "/admin" },
        { id: 2, text: 'Manage Products', to: "/admin/manage-products" },
        { id: 3, text: 'Add Product', to: "/admin/add" },
    ];

    return (
        <div>
            {sidenav && (
                <>
                    <nav className="flex fixed flex-col w-64 bg-primary h-screen px-4">
                        <div className="flex flex-col items-center flex-wrap mt-8 pt-12">
                            <div className="">
                                <img
                                    src={user?.photoURL}
                                    className="mx-auto w-20 h-20 rounded-full"
                                    alt={user?.displayName}
                                />
                            </div>
                            <div className="pt-2">
                                <span className="font-semibold text-lg text-white">{user?.displayName}</span>
                            </div>
                        </div>
                        <div className="mt-10 mb-4">
                            <ul className="ml-4">
                                {menu.map(item => (
                                    <li className="flex items-center" key={item.id}>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                `p-3 ${isActive ? 'border-l-2 border-white w-full' : ''}`

  }>

                                            <div className="flex items-center space-x-3">
                                                <span className="ml-2 text-white poppins">{item.text}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </>
            )}

            {/* menu icons  */}
            <div className="lg:hidden block fixed bottom-10 left-10 bg-white p-2 rounded-full cursor-pointer shadow-xl border border-primary" onClick={handlenav}>
                <MdOutlineArrowForwardIos className="text-2xl text-primary" />
            </div>
        </div>
    );
};

export default SideNav;