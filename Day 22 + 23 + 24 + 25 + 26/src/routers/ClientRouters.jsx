import React from 'react';
import Main from '../components/main/Main';
import Products from '../components/products/Products';
import Categories from '../components/categories/Categories';
import Todolist from '../components/todolist/Todolist';
import { Route, Routes } from 'react-router-dom';

function ClientRouters(props) {
    const routers = [
        {
            path: "/",
            element : <Main/>
        },
        {
            path : "/products",
            element : <Products/>
        },{
            path : "/categories",
            element : <Categories/>
        },
        {
            path : "/todolist",
            element : <Todolist/>
        }
    ]
    return (
            <Routes>
                {routers.map((p,index) => (
                    <Route path={p.path}  element={p.element} />
                ))}
            </Routes>
    );
}

export default ClientRouters;