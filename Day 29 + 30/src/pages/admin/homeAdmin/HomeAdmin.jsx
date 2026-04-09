import React from 'react';
import MenuAdmin from '../../../components/admin/MenuAdmin';
import HeaderAdmin from '../../../components/admin/HeaderAdmin';
import Search from '../../../components/admin/Search';

function HomeAdmin(props) {
    return (
        <div className='md:flex'>
            <MenuAdmin />
            <div className='flex-1'>
                <HeaderAdmin />
                <Search/>
            </div>
        </div>
    );
}

export default HomeAdmin;