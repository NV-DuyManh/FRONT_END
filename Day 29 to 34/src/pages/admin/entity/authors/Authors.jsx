import React, { useState } from 'react';
import Search from '../../../../components/admin/Search';
import ModalAuthors from './ModalAuthors';
import TableAuthors from './TableAuthors';
import { addDocument, updateDocument } from '../../../../services/firebaseService';
import LOGO from "../../../../assets/Logo.png";

const inner = { name: "", description: "", imgUrl: LOGO, sexID: "", countriesID: "" };

const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result;
            resolve(base64data);
        };
    });
};

function Authors() {
    const [open, setOpen] = useState(false);
    const [author, setAuthor] = useState(inner);
    const [error, setError] = useState(inner);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setAuthor(inner);
        setError(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChangeInput = (e) => {
        setAuthor({ ...author, [e.target.name]: e.target.value })
    }

    const validation = () => {
        const newError = {};
        newError.name = author.name ? "" : "Please enter your name";
        newError.description = author.description ? "" : "Please enter your description";
        newError.imgUrl = author.imgUrl ? "" : "Please enter your image";
        newError.sexID = author.sexID ? "" : "Please enter your sex";
        newError.countriesID = author.countriesID ? "" : "Please enter your country";
        setError(newError);
        return Object.values(newError).some(e => e !== "");
    }

    const addauthor = async () => {
        if (validation()) {
            return;
        }
        setLoading(true);

        let submitData = { ...author };

        if (submitData.imgUrl === LOGO) {
            submitData.imgUrl = await getBase64FromUrl(LOGO);
        }

        !author.id ? await addDocument("Author", submitData) : await updateDocument("Author", submitData);
        
        handleClose();
        setLoading(false);
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAuthor({ ...author, imgUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Search
                handleClickOpen={handleClickOpen}
                name={"List Authors"}
                tuKhoa={"Search Author by Name"}
                onSearch={setSearchQuery}
            />
            <ModalAuthors
                handleImageChange={handleImageChange}
                addauthor={addauthor}
                onChangeInput={onChangeInput}
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                error={error}
                loading={loading}
                author={author}
            />
            <TableAuthors
                setAuthor={setAuthor}
                handleClickOpen={handleClickOpen}
                author={author}
                searchQuery={searchQuery}
            />
        </div>
    );
}

export default Authors;