import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function PaginationAdmin({
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalItems
}) {
    const totalPages = Math.ceil(totalItems / rowsPerPage);

    return (
        <div className="flex items-center justify-end gap-4">

            <div className="flex items-center gap-2 text-white text-sm">
                <span>Rows:</span>

                <Select
                    value={rowsPerPage}
                    onChange={(e) => {
                        setRowsPerPage(e.target.value);
                        setPage(1);
                    }}
                    size="small"
                    sx={{
                        minWidth: 10,
                        height: 30,
                        color: "white",

                        "& .MuiSelect-select": {
                            padding: "4px 24px 4px 8px",
                            fontSize: 12
                        },

                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        },
                        "& .MuiSvgIcon-root": {
                            color: "white",
                            fontSize: 16
                        }
                    }}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
            </div>

            <Stack>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    color="secondary"
                    sx={{
                        "& .MuiPaginationItem-root": {
                            fontSize: 12,
                            minWidth: 28,
                            height: 28,
                            color: "white",
                        },
                        "& .Mui-selected": {
                            backgroundColor: "#a855f7",
                            color: "white",
                        }
                    }}
                />
            </Stack>
        </div>
    );
}