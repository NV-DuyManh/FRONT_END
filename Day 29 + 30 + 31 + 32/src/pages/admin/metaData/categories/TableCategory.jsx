import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../../../../contexts/CategoryProvider';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import ModalDelete from '../../../../components/admin/ModalDelete';
import { deleteDocument } from '../../../../services/firebaseService';
import PaginationAdmin from '../../../../components/admin/PaginationAdmin';
import "../../../../app.css";

function TableCategory({ handleClickOpen, setCategory, category }) {
    const categories = useContext(CategoriesContext);
    const [open, setOpen] = useState(false);

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const start = (page - 1) * rowsPerPage;
    const currentData = categories?.slice(start, start + rowsPerPage) || [];

    const handleClickOpenDele = (row) => {
        setOpen(true);
        setCategory(row);
    };

    const handleClose = () => setOpen(false);

    const handleEdit = (row) => {
        handleClickOpen();
        setCategory(row);
    };

    const handleDeleted = async () => {
        await deleteDocument("Categories", category);

        if (page > 1 && currentData.length === 1) {
            setPage(page - 1);
        }

        handleClose();
    };

    return (
        <div className="p-5">

            <div className="table-wrapper">
                <div className="table-container">

                    <table className="w-full text-left">

                        <thead className="table-header">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th className="text-right">ACTIONS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentData.map((row, index) => (
                                <tr key={index} className="table-row">

                                    <td className="table-cell">
                                        {start + index + 1}
                                    </td>

                                    <td className="table-cell">
                                        {row.name}
                                    </td>

                                    <td className="table-cell">
                                        {row.description}
                                    </td>

                                    <td className="table-cell text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => handleEdit(row)}
                                                className="action-btn btn-edit"
                                            >
                                                <CiEdit />
                                            </button>

                                            <button
                                                onClick={() => handleClickOpenDele(row)}
                                                className="action-btn btn-delete"
                                            >
                                                <RiDeleteBin6Fill />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                    <div className="table-footer">
                        <PaginationAdmin
                            page={page}
                            setPage={setPage}
                            rowsPerPage={rowsPerPage}
                            setRowsPerPage={setRowsPerPage}
                            totalItems={categories?.length || 0}
                        />
                    </div>

                </div>
            </div>

            <ModalDelete
                handleClose={handleClose}
                open={open}
                handleDeleted={handleDeleted}
            />
        </div>
    );
}

export default TableCategory;