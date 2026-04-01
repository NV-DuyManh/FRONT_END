import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; import React, { useContext, useEffect, useState } from 'react';
import Categories from './Categories';
import axios from 'axios';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Modal_Delete from '../header/Modal_Delete';
import { CategoriesContext } from '../contexts/CategoryProvider';
import BasicPagination from '../header/BasicPagination';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function TableCategory({ setCategory, handleOpen,search }) {
    const [open, setOpen] = React.useState(false);
    const [delelteCategory, setdelelteCategory] = useState(null);
    const { categories, handleUpdate } = useContext(CategoriesContext);
    const ITEMS_PER_PAGE = 5;
    const [page, setPage] = useState(1);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const currentData = categories.filter((e) => e?.name.toLowerCase().includes(search.toLowerCase())).slice(start, start + ITEMS_PER_PAGE);

    // ham mo modal xoa => id 
    const handleClickOpen = (id) => {
        setdelelteCategory(id);
        setOpen(true);
    };

    // ham xoa  await axios.delete(`https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/categories/{bien xoa}`);
    const xoaCate = async () => {
        await axios.delete(`https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/categories/${delelteCategory}`);
        handleClose();
        handleUpdate();
    }
    // ham dong modal 
    const handleClose = () => {
        setOpen(false);
    };

    // ham handleEdit => (row) => handleOpen => setCategory(row)
    const handleEdit = (row) => {
        handleOpen();
        setCategory(row);
    }
    return (
        <div className='p-5'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Description</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentData.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                                <StyledTableCell>{row.name}</StyledTableCell>
                                <StyledTableCell>{row.description}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <button onClick={() => handleEdit(row)} className="bg-blue-500  text-white px-3 py-1 rounded mr-2"><CiEdit /></button>
                                    <button onClick={() => handleClickOpen(row.id)} className="bg-red-600 px-3  text-white py-1 rounded"><RiDeleteBin6Fill /></button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal_Delete open={open} handleClose={handleClose} handleDeleted={xoaCate} />
            <BasicPagination ITEMS_PER_PAGE={ITEMS_PER_PAGE} page={page} setPage={setPage} data={categories} />

        </div>
    );
}

export default TableCategory;