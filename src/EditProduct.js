


import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Input, Button } from "@mui/material";
import "./App.css";
function EditProduct() {
    const { id } = useParams();
    const location = useLocation();
    const editedProduct = location.state.editedProduct;


    const [formData, setFormData] = useState({
        category: editedProduct.category,
        title: editedProduct.title,
        price: editedProduct.price,
        description: editedProduct.description,
        rating: { rate: 4.7, count: 130 }
        // image: editedProduct.image,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {

    }


    return (
        <div div className="editform">
            <form onSubmit={handleSubmit} className="editformmain">
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category:
                    </label>
                    <Input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <Input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price:
                    </label>
                    <Input

                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        discription:
                    </label>
                    <Input

                        type="text"
                        className="form-control"
                        id="discription"
                        name="discription"
                        value={formData.discription}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Image :
                    </label>
                    <Input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Button type="submit" variant={"contained"} fullWidth sx={{ marginTop: "20px", marginBottom: "20px" }}>
                    save
                </Button>
            </form>

        </div>

    );

}
export default EditProduct;
