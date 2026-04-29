import React, { useState } from 'react';
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
    const from = totalItems === 0 ? 0 : (page - 1) * rowsPerPage + 1;
    const to = Math.min(page * rowsPerPage, totalItems);

    const [jumpValue, setJumpValue] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const executeJump = () => {
        if (!jumpValue.trim()) return;

        const pageNumber = parseInt(jumpValue, 10);

        if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
            setErrorMsg(`Please enter 1 - ${totalPages}`);
            
            setTimeout(() => {
                setErrorMsg('');
            }, 3000);
            return;
        }

        setErrorMsg('');
        setPage(pageNumber);
        setJumpValue('');
    };

    const handleJump = (e) => {
        if (e.key === 'Enter') {
            executeJump();
        }
    };

    return (
<div className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[rgba(15,23,42,0.1)] px-6 py-2 backdrop-blur-[2px]">            
            <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Rows</span>
                <Select
                    labelId="rows-per-page-label"
                    id="rows-per-page-select"
                    value={rowsPerPage}
                    onChange={(e) => {
                        setRowsPerPage(e.target.value);
                        setPage(1);
                    }}
                    size="small"
                    sx={{
                        height: 28,
                        bgcolor: "rgba(255, 255, 255, 0.03)",
                        color: "#fbbf24",
                        fontSize: 12,
                        fontWeight: "700",
                        borderRadius: "6px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(251, 191, 36, 0.2)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fbbf24",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fbbf24",
                            borderWidth: "1px",
                        },
                        "& .MuiSvgIcon-root": {
                            color: "#fbbf24",
                            fontSize: 18
                        }
                    }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: "#1e293b",
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.1)",
                                "& .MuiMenuItem-root:hover": {
                                    bgcolor: "rgba(251, 191, 36, 0.1)",
                                    color: "#fbbf24"
                                }
                            }
                        }
                    }}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                <span 
                    aria-hidden="true" 
                    className="w-6" 
                    style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(251, 191, 36, 0.5))' }}
                />
                <p className="text-xs font-medium tracking-tight text-gray-300">
                    Showing <span className="font-bold text-amber-400">{from}</span> 
                    <span className="mx-1 text-gray-500">to</span> 
                    <span className="font-bold text-amber-400">{to}</span> 
                    <span className="mx-1 text-gray-500">of</span> 
                    <span className="font-bold text-white">{totalItems}</span>
                </p>
                <span 
                    aria-hidden="true" 
                    className="w-6" 
                    style={{ height: '1px', background: 'linear-gradient(to left, transparent, rgba(251, 191, 36, 0.5))' }}
                />
            </div>

            <div className="flex items-center gap-4">
                <Stack spacing={2}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(e, value) => setPage(value)}
                        shape="rounded"
                        siblingCount={1}
                        boundaryCount={1} 
                        sx={{
                            "& .MuiPaginationItem-root": {
                                color: "rgba(255, 255, 255, 0.6)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                bgcolor: "transparent",
                                fontSize: 12,
                                fontWeight: "600",
                                minWidth: 26,
                                height: 26,
                                margin: "0 1px",
                                borderRadius: "6px",
                                transition: "all 0.2s ease-in-out",
                                "&:hover": {
                                    bgcolor: "rgba(251, 191, 36, 0.1)",
                                    borderColor: "#fbbf24",
                                    color: "#fbbf24",
                                }
                            },
                            "& .Mui-selected": {
                                bgcolor: "rgba(251, 191, 36, 0.2) !important",
                                color: "#fbbf24 !important",
                                borderColor: "#fbbf24 !important",
                                boxShadow: "0 0 10px rgba(251, 191, 36, 0.3)",
                            },
                            "& .MuiPaginationItem-ellipsis": {
                                color: "gray",
                                border: "none",
                                minWidth: 18,
                            },
                            "& .MuiPaginationItem-previousNext": {
                                bgcolor: "rgba(255, 255, 255, 0.03)",
                                "& svg": {
                                    fontSize: 16,
                                    color: "#fbbf24"
                                }
                            }
                        }}
                    />
                </Stack>

                <div className="flex items-center gap-2 pl-4 border-l border-white/10 relative">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Page</span>
                    <div className="flex gap-1 relative">
                        
                        {errorMsg && (
                            <div className="absolute -top-10 right-0 z-10 whitespace-nowrap rounded border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-bold text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)] backdrop-blur-md animate-bounce">
                                {errorMsg}
                            </div>
                        )}

                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={jumpValue}
                            onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, '');
                                setJumpValue(val);
                                if (errorMsg) setErrorMsg('');
                            }}
                            onKeyDown={handleJump}
                            placeholder=""
                            className={`w-10 h-7 bg-white/5 border ${errorMsg ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-amber-400'} rounded-md text-amber-400 text-xs font-bold text-center focus:outline-none focus:bg-amber-400/10 transition-all placeholder:text-gray-600`}
                        />
                        <button
                            onClick={executeJump}
                            className="flex h-7 items-center justify-center rounded-md border border-amber-400/30 bg-amber-400/10 px-2 text-[10px] font-bold uppercase tracking-wider text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-400/20 active:scale-95"
                        >
                            GO
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}