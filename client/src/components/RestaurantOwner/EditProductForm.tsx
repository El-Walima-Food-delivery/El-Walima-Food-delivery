import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Button from '../Form/Button';
import Label from '../Form/Label';
import TextField from '../Form/TextField';

interface Food {
    name: string;
    price: number;
    imageUrl: string;
    category_Id: string;
}

const EditProductForm: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`http://localhost:3000/api/menu-items/${id}`)
            .then(res => res.json())
            .then(data => {
                setName(data.name);
                setPrice(data.price.toString());
                setImageUrl(data.imageUrl);
                setCategoryId(data.category_Id);
            });
    }, [id]);

    const handleFoodType = (e: ChangeEvent<HTMLSelectElement>) => {
        const categoryMap: { [key: string]: string } = {
            "Pizza": "1", "Burger": "2", "Tunisian": "3", "Salad": "4",
            "Desserts": "5", "Pasta": "6", "Chicken": "7", "Sandwich": "8"
        };
        setCategoryId(categoryMap[e.target.value] || "");
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedFood: Food = {
            name,
            price: parseFloat(price),
            imageUrl,
            category_Id: categoryId
        };

        fetch(`http://localhost:3000/api/menu-items/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedFood)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                swal("Updated", "Food item updated successfully!", "success");
            } else {
                swal("Unsuccessful", "Failed to update food item!", "error");
            }
        });
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="w-1/12 bg-white p-4">
                {/* Side navigation content goes here */}
               
            </div>
            <div className="w-11/12 flex justify-center items-center p-8">
                <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-4">
                            <Label htmlFor="title" text="Food Title" />
                            <TextField
                                id="title"
                                type="text"
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex flex-col space-y-4">
                            <Label htmlFor="price" text="Food Price" />
                            <TextField
                                id="price"
                                type="number"
                                value={price}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                                required
                            />
                            <Label htmlFor="image" text="Food Image URL" />
                            <TextField
                                id="image"
                                type="text"
                                value={imageUrl}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)}
                                required
                            />
                            <Label htmlFor="type" text="Select the type of food" />
                            <select
                                id="type"
                                className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4"
                                value={categoryId}
                                onChange={handleFoodType}
                                title="Select the type of food"
                            >
                                <option value="Pizza">Pizza</option>
                                <option value="Burger">Burger</option>
                                <option value="Tunisian">Tunisian</option>
                                <option value="Salad">Salad</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Chicken">Chicken</option>
                                <option value="Sandwich">Sandwich</option>
                            </select>

                            <div className="mt-8">
                                <Button text="Update" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProductForm;