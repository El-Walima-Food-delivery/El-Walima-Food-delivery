import React, { useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlineFileExclamation, AiOutlineFileDone } from 'react-icons/ai'; // Import des icônes
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import swal from 'sweetalert';
import Heading from './Heading';
import axios from 'axios';

interface Food {
    id: string;
    name: string;
    price: number;
    category_Id: string;
    imageUrl: string;
    available: boolean;
}

interface MenuItem {
    id: string; 
}

const ManageProductScreen: React.FC = () => {
    const [foods, setFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [dep,setDep]=useState(false) ;

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/api/menu-items/owner/restaurant`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                setFoods(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.response?.data?.message || 'An error occurred');
                setLoading(false);
            });
    }, [dep]);

    const handleUpdateAvailble = async (item: MenuItem) => { // Changement de l'orthographe
        try {
            const response = await axios.patch(`http://localhost:3000/api/menu-items/${item.id}/availability`);
            
            if (response.status === 200) {
                swal("Succès !", "Disponibilité mise à jour avec succès !", "success");
                setFoods(prevFoods => prevFoods.map(food => 
                    food.id === item.id ? { ...food, available: response.data.newAvailability } : food
                ));
                setDep(!dep)
            } else {
                throw new Error('Réponse inattendue du serveur');
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la disponibilité:', error);
            swal("Erreur", "Échec de la mise à jour de la disponibilité", "error");
        }
    };

    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = '/path/to/fallback/image.jpg';
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = foods.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="w-11/12 pl-8 pr-4">
            <Heading text="Manage Products" />
            
            <div className="my-8">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <table className="min-w-full">
                                <thead className="bg-primary poppins">
                                    <tr>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Image</th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Name</th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Price</th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Category</th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item, index) => {
                                        const key = item.id ? `food-${item.id}` : `food-${index}`;
                                        return (
                                            <tr className="bg-white border-b poppins" key={key}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <img 
                                                        className="w-16" 
                                                        src={item.imageUrl} 
                                                        alt={item.name} 
                                                        onError={handleImageError}
                                                    />
                                                </td>
                                                <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{item.name}</td>
                                                <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap"> {item.price} TND</td>
                                                <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{item.category_Id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                                                    <button 
                                                        onClick={() => {
                                                            console.log(item); // Add this line to debug
                                                            handleUpdateAvailble(item);
                                                        }}
                                                        className={`px-4 py-2 rounded ${item.available ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                                                    >
                                                        {item.available ? <AiOutlineFileExclamation /> : <AiOutlineFileDone />}
                                                    </button>
                                                    <Link 
                                                        to={`/dashboard/updateProduct/${item.id}`} // Navigation vers le chemin avec l'ID
                                                        className="px-4 py-2 rounded bg-blue-500 text-white flex items-center justify-center"
                                                    >
                                                        <AiOutlineEdit />
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    {Array.from({ length: Math.ceil(foods.length / itemsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageProductScreen;