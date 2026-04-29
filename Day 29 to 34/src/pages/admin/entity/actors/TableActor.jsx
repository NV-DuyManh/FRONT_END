import React, { useContext, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import ModalDelete from '../../../../components/admin/ModalDelete';
import { deleteDocument } from '../../../../services/firebaseService';
import PaginationAdmin from '../../../../components/admin/PaginationAdmin';
import "../../../../app.css";
import { ActorContext } from '../../../../contexts/ActorProvider';

function TableActor({ handleClickOpen, setActor, actor }) {
    const actors = useContext(ActorContext);
    const [open, setOpen] = useState(false);

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const start = (page - 1) * rowsPerPage;
    const currentData = actors?.slice(start, start + rowsPerPage) || [];

    const handleClickOpenDele = (row) => {
        setOpen(true);
        setActor(row);
    };

    const handleClose = () => setOpen(false);

    const handleEdit = (row) => {
        handleClickOpen();
        setActor(row);
    };

    const handleDeleted = async () => {
        await deleteDocument("Actor", actor);

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
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th>SEX</th>
                                <th>COUNTRY</th>
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
                                        {row.imgUrl && <img src={row.imgUrl} alt={row.name} className="w-10 h-10 object-cover rounded-full" />}
                                    </td>
                                    <td className="table-cell">
                                        {row.name}
                                    </td>
                                    <td className="table-cell">
                                        {row.description}
                                    </td>
                                    <td className="table-cell">
                                        {row.sexID}
                                    </td>
                                    <td className="table-cell">
                                        {row.countriesID}
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
                            totalItems={actors?.length || 0}
                        />
                    </div>
                </div>
            </div>
            <ModalDelete
                handleClose={handleClose}
                open={open}
                handleDeleted={handleDeleted}
                titleDelete={"DELETE CATEGORY"}
                contentDelete={"Are you sure you want to delete this category?"}
            />
        </div>
    );
}

export default TableActor;