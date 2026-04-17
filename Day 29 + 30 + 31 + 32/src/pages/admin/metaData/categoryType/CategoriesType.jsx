// import React from 'react';

// function CategoriesType(props) {
//     return (
//         <div>
//             Categories Type
//         </div>
//     );
// }

// export default CategoriesType;

import React, { useState } from 'react';
import ModalCategoryType from './ModalCategoryType';
import Search from "../../../../components/admin/Search";
import { addDocument } from '../../../../services/firebaseService';

const inner = { name: "", description: "" };

function CategoriesType(props) {
    const [open, setOpen] = React.useState(false);
    const [categoryType, setCategoryType] = useState(inner);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChangeInput = (e) => {
        setCategoryType({
            ...categoryType,
            [e.target.name]: e.target.value
        });
    };

    const addCategoryType = async () => {
        console.log(categoryType);
        await addDocument("CategoryTypes", categoryType);
        handleClose();
    };

    return (
        <div>
            <Search
            name = {"Categories Type"}
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
            />

            <ModalCategoryType
                addCategoryType={addCategoryType}
                onChangeInput={onChangeInput}
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
            />
        </div>
    );
}

export default CategoriesType;