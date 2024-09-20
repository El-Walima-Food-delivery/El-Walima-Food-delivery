import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Heading from './Heading';

interface Food {
    _id: string;
    name: string;
    price: number;
    category_Id: string;
    imageUrl: string;
}

const ManageProductScreen: React.FC = () => {
    const [foods, setFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/api/menu-items')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setFoods(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    console.log('Foods:', foods); // Add this line to log the foods array

    const handleDelete = (id: string) => {
        fetch(`http://localhost:3000/api/menu-items/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Successful!", "Deleted successfully!", "success");
                    setFoods(foods.filter(item => item._id !== id));
                }
            });
    };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = '/path/to/fallback/image.jpg'; // Replace with a valid fallback image path
    };
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Heading text="Manage Products" />
            <div className="flex flex-col my-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden sm:rounded-lg shadow-md">
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
                                    {foods.map((item, index) => {
                                        console.log(`Rendering item ${index}:`, item); // Add this line
                                        const key = item._id ? `food-${item._id}` : `food-${index}`;
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
                                                <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">$ {item.price}</td>
                                                <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{item.category_Id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                                                    <div className="flex items-center justify-center space-x-3">
                                                        <Link to={`/admin/edit/${item._id}`}>
                                                            <FiEdit className="cursor-pointer text-2xl text-green-600" />
                                                        </Link>
                                                        <AiOutlineDelete className="cursor-pointer text-2xl text-red-600" onClick={() => handleDelete(item._id)} />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductScreen;