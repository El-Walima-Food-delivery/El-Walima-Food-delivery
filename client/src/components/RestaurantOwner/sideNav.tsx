import React, { useState, useEffect } from 'react';
import { MdDashboard, MdOutlineAddBox, MdArchive, MdOutlineArrowForwardIos, MdOutlineMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface MenuItem {
    id: number;
    text: string;
    to: string;
    icon: React.ReactNode;
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
        { id: 1, text: 'Dashboard', to: "/dashboard/restaurantowner/dashboard", icon: <MdDashboard /> },
        { id: 2, text: 'Manage Products', to: "/dashboard/restaurantowner", icon: <MdOutlineMenu /> },
        { id: 3, text: 'Add Product', to: "/dashboard/add-product", icon: <MdOutlineAddBox /> },
        { id: 4, text: 'Archive Products', to: "/dashboard/Archived-Product", icon: <MdArchive /> },
    ];

    return (
        <div>
            {sidenav && (
                <>
                    <nav className="flex fixed flex-col w-64 bg-gradient-to-b from-teal-400 to-cyan-500 h-screen px-4 shadow-lg">
                        <div className="flex flex-col items-center flex-wrap mt-8 pt-12">
                            <div className="">
                                <img
                                    src={user?.imageUrl}
                                    className="mx-auto w-20 h-20 rounded-full border-2 border-gray-300"
                                    alt={user?.email}
                                />
                            </div>
                            <div className="pt-2">
                                <span className="font-semibold text-lg text-white">{user?.name}</span>
                            </div>
                        </div>

                        <div className="mt-10 mb-4">
                            <ul className="ml-4">
                                {menu.map(item => (
                                    <li className="flex items-center mb-2" key={item.id}>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                `p-2 rounded-md transition-colors duration-200 flex items-center space-x-2 ${isActive ? 'bg-purple-500 text-white' : 'text-white hover:bg-purple-300'}`

  }>
                                            <span className="text-lg">{item.icon}</span>
                                            <span className="ml-1 poppins text-sm">{item.text}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </>
            )}

            {/* Menu icon */}
            <div className="lg:hidden block fixed bottom-10 left-10 bg-purple-500 p-2 rounded-full cursor-pointer shadow-xl border border-gray-300" onClick={handlenav}>
                <MdOutlineArrowForwardIos className="text-2xl text-white" />
            </div>
        </div>
    );
};

export default SideNav;