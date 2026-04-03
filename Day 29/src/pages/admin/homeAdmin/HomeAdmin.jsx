import React from 'react';
import MenuAdmin from '../../../components/admin/MenuAdmin';
import HeaderAdmin from '../../../components/admin/HeaderAdmin';

function HomeAdmin(props) {
    return (
        <div className='flex'>
            <MenuAdmin />
            <div className='flex-1'>
                <HeaderAdmin />
            </div>
        </div>
    );
}

export default HomeAdmin;