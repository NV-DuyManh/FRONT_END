import React, { useState, useContext, useMemo } from 'react';
import { CategoryTypeContext } from '../../../../contexts/CategoryTypeProvider';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import ModalDelete from '../../../../components/admin/ModalDelete';
import { deleteDocument } from '../../../../services/firebaseService';
import PaginationAdmin from '../../../../components/admin/PaginationAdmin';
import "../../../../App.css";

function TableCategoryType({ handleClickOpen, setCategoryType, categoryType, search }) {
    const categoryTypes = useContext(CategoryTypeContext);
    const [open, setOpen] = useState(false);

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const start = (page - 1) * rowsPerPage;
    const dataSearch = useMemo(() => categoryTypes.filter(e => e?.name.toLowerCase().includes(search.toLowerCase())), [search, categoryTypes])
    const currentData = dataSearch?.slice(start, start + rowsPerPage) || [];

    const handleClickOpenDele = (row) => {
        setOpen(true);
        setCategoryType(row);
    };

    const handleClose = () => setOpen(false);

    const handleEdit = (row) => {
        handleClickOpen();
        setCategoryType(row);
    };

    const handleDeleted = async () => {
        await deleteDocument("CategoryTypes", categoryType);

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
                            totalItems={dataSearch?.length || 0}
                        />
                    </div>
                </div>
            </div>

            <ModalDelete
                handleClose={handleClose}
                open={open}
                handleDeleted={handleDeleted}
                titleDelete={"DELETE CATEGORY TYPE"}
                contentDelete={"Are you sure you want to delete this category type?"}
            />
        </div>
    );
}

export default TableCategoryType;