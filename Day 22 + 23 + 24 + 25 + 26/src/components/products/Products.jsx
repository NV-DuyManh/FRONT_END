import React, { useContext, useState } from 'react';
import Search from '../header/Search';
import TableProduct from './TableProduct';
import ModalProduct from './ModalProduct';
import axios from 'axios';
import { ProductContext } from '../contexts/ProductProvider';
import { uploadImageToCloudinary } from '../config/cloudiartConfig';


const inner = { name: "", price: "", image: "", categoryID: "", description: "" };

function Products(props) {
    const [product, setProduct] = useState(inner);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(inner);
    const { handleUpdate } = useContext(ProductContext);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const onchangSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleOpen = () => {
        setOpen(true);
        setProduct(inner);
    };

    const handleClose = () => setOpen(false);

    const onchangInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const validation = () => {
        const newError = {};
        newError.name = product.name ? "" : "Please enter your name";
        newError.price = product.price ? "" : "Please enter your price";
        newError.image = product.image ? "" : "Please enter your image URL";
        newError.categoryID = product.categoryID ? "" : "Please enter your Category ID";
        newError.description = product.description ? "" : "Please enter your description";
        setError(newError);
        return Object.values(newError).some(e => e !== ""); // true co loi
    }

    const addProduct = async () => {
        if (validation()) {
            return;
        }
        setLoading(true);
        const urlImg = await uploadImageToCloudinary(product.image, "imgReact");
        product.image = urlImg;
        !product.id ? await axios.post("https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/Product", product)
            : await axios.put(`https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/Product/${product.id}`, product);
        handleClose();
        handleUpdate();
        setLoading(false);
    }

    const handleInputImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProduct(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            <Search
                handleOpen={handleOpen}
                type={"PRODUCTS"}
                name={"PRODUCT"}
                onchangSearch={onchangSearch} />
            <TableProduct
                setProduct={setProduct}
                handleOpen={handleOpen}
                search={search} />
            <ModalProduct
                error={error}
                addProduct={addProduct}
                onchangInput={onchangInput}
                product={product}
                open={open}
                handleClose={handleClose}
                handleInputImg={handleInputImg}
                loading={loading}
            />
        </div>
    );
}

export default Products;