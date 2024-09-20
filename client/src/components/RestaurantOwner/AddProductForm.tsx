import React, { useState, FormEvent, ChangeEvent } from 'react';

import swal from 'sweetalert';
import Button from '../Form/Button';
import Label from '../Form/Label';
import TextField from '../Form/TextField';

interface NewFood {

    name: string;
    
    price: number;
    imageUrl: string;
    category_Id: string;
}






const AddProductForm: React.FC = () => {
    const [name, setName] = useState('')
    // const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    const [imageUrl, setImageUrl] = useState('')
    
    const [categoryId, setCategoryId] = useState("")



    const handleFoodType = (e: ChangeEvent<HTMLSelectElement>) => {
        
        if (e.target.value === "Pizza") {
            setCategoryId("1")
        }
        if (e.target.value === "Burger") {




            setCategoryId("2")
        }
        if (e.target.value === "Tunisian") {


            setCategoryId("3")
        }
        if (e.target.value === "Salad") {
            setCategoryId("4")
        }
        if (e.target.value === "Desserts") {
            setCategoryId("5")
        }
        if (e.target.value === "Pasta") {
            setCategoryId("6")
        }
        if (e.target.value === "Chicken") {
            setCategoryId("7")
        }
        if (e.target.value === "Sandwich") {
            setCategoryId("8")
        }
    }






    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newFood: NewFood = { 
            name, 
            price: parseFloat(price), 
            imageUrl:imageUrl, 
            category_Id: categoryId 
        }

        fetch("http://localhost:3000/api/menu-items/", {


            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        }).then((res) => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Food Added!", "Food is added to the store!", "success");
                    
                } else {
                    swal("Unsuccessful !", "Food is not added to the store!", "error");
                }
            })
    }

    return (
        <>
            <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6" onSubmit={handleSubmit}>
                {/* title and description  */}
                <div className="flex flex-col space-y-4">
                    <Label htmlFor="title" text="Food Title" />
                    <TextField
                        id="title"
                        type="text"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        required />


                    {/* description  */}
                    {/* <Label htmlFor="description" text="Food Description" />
                    <textarea
                        id="description"
                        aria-labelledby="description-label"
                        
                        cols={30} rows={9}
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
                        required
                        value={description}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                    >
                    </textarea> */}
                </div>

                {/* price , image , type  */}
                <div className="flex flex-col space-y-4">
                    {/* price  */}
                    <Label htmlFor="price" text="Food Price" />
                    <TextField
                        id="price"
                        type="number"
                        value={price}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                        required />
                    {/* image url  */}
                    <Label htmlFor="image" text="Food Image URL" />
                    <TextField
                        id="image"
                        type="text"
                        value={imageUrl}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)} required />
                    {/* type  */}

                    <Label htmlFor="type" text="Select the type of food" />
<select
    id="type"
    className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4"
    value={categoryId}
    onChange={handleFoodType}
    title="Select the type of food"

>

                        <option  value="Pizza">Pizza</option>
                        <option value="Burger">Burger</option>
                        <option value="Tunisian">Tunisian</option>

                        <option value="Salad">Salad</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Chicken">Chicken</option>


                        <option value="Sandwich">Sandwich</option>
                    </select>


                    {/* button  */}

                    <div className="mt-8">
                        <Button text="Add" />
                    </div>
                </div>

            </form>
        </>
    )
}

export default AddProductForm