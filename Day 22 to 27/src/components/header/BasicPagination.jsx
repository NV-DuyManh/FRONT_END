import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ ITEMS_PER_PAGE, page, setPage, data }) {

    return (
        <Stack spacing={2}>
            <Pagination
                color="primary"
                count={Math.ceil(data.length / ITEMS_PER_PAGE)}
                page={page}
                onChange={(e, value) => setPage(value)} />
        </Stack>
    );
}
