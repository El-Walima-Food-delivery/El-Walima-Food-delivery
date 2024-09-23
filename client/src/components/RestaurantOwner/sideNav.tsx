import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface MenuItem {
    id: number;
    text: string;
    to: string;
}

const SideNav: React.FC = () => {
    const user = useSelector((state: RootState) => state.users.user);
    const [sidenav, setSidenav] = useState(true);

    // Toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    };

    // Auto hide 
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
        { id: 1, text: 'Dashboard', to: "/dashboard/restaurantowner/dashboard" },
        { id: 2, text: 'Manage Products', to: "/dashboard/restaurantowner" },
        { id: 3, text: 'Add Product', to: "/dashboard/add-product" },
        { id: 4, text: 'Archive Products', to: "/dashboard/Archived-Product" },
    ];

    return (
        <div>
            {sidenav && (
                <>
                    <nav className="flex fixed flex-col w-64 bg-gray-800 h-screen px-4">
                        <div className="flex flex-col items-center flex-wrap mt-8 pt-12">
                            <div className="">
                                <img
                                    src={user?.imageUrl}
                                    className="mx-auto w-20 h-20 rounded-full border-2 border-gray-300"
                                    alt={user?.email}
                                />
                            </div>
                            <div className="pt-2">
                                <span className="font-semibold text-lg text-gray-300">{user?.name}</span>
                            </div>
                        </div>

                        <div className="mt-10 mb-4">
                            <ul className="ml-4">
                                {menu.map(item => (
                                    <li className="flex items-center mb-2" key={item.id}>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                `p-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-gray-700 text-blue-400' : 'text-gray-300 hover:bg-gray-700'}`

  }>

                                            <div className="flex items-center space-x-3">
                                                <span className="ml-2 poppins">{item.text}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </>
            )}

            {/* Menu icon */}
            <div className="lg:hidden block fixed bottom-10 left-10 bg-gray-800 p-2 rounded-full cursor-pointer shadow-xl border border-gray-300" onClick={handlenav}>
                <MdOutlineArrowForwardIos className="text-2xl text-gray-300" />
            </div>
        </div>
    );
};

export default SideNav;