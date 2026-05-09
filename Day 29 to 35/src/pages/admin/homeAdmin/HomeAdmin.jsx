import React from 'react';
import MenuAdmin from '../../../components/admin/MenuAdmin';
import HeaderAdmin from '../../../components/admin/HeaderAdmin';
import Search from '../../../components/admin/Search';
import AdminRouters from '../../../routers/AdminRouters';

function HomeAdmin(props) {
    return (
        <div className='sm:flex'>
            <MenuAdmin />
            <div className='flex-1'>
                <HeaderAdmin />
                <AdminRouters />
            </div>
        </div>
    );
}

export default HomeAdmin;