import React, { useState } from 'react';
import ModalCategoryType from './ModalCategoryType';
import Search from "../../../../components/admin/Search";
import { addDocument, updateDocument } from '../../../../services/firebaseService';
import TableCategoryType from './TableCategoryType';

const inner = { name: "", description: "" };

function CategoriesType(props) {
    const [open, setOpen] = useState(false);
    const [categoryType, setCategoryType] = useState(inner);
    const [error, setError] = useState(inner);
    const [loading, setLoading] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setCategoryType(inner);
        setError(inner);
    };

    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleClose = () => {
        setOpen(false);
    };

    const onChangeInput = (e) => {
        setCategoryType({ ...categoryType, [e.target.name]: e.target.value })
    }

    const validation = () => {
        const newError = {};
        newError.name = categoryType.name ? "" : "Please enter your name";
        newError.description = categoryType.description ? "" : "Please enter your description";
        setError(newError);
        return Object.values(newError).some(e => e !== "");
    }

    const addCategoryType = async () => {
        if (validation()) {
            return;
        }
        setLoading(true);
        !categoryType.id
            ? await addDocument("CategoryTypes", categoryType)
            : await updateDocument("CategoryTypes", categoryType);
        handleClose();
        setLoading(false);
    }

    return (
        <div>
            <Search
                name={"List Categories Type"}
                tuKhoa={"Search Category Type"}
                handleClickOpen={handleClickOpen}
                onChangeSearch={onChangeSearch}
            />
            <ModalCategoryType
                addCategoryType={addCategoryType}
                onChangeInput={onChangeInput}
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                error={error}
                loading={loading}
                categoryType={categoryType}
            />
            <TableCategoryType
                setCategoryType={setCategoryType}
                handleClickOpen={handleClickOpen}
                categoryType={categoryType}
                search={search}
            />
        </div>
    );
}

export default CategoriesType;