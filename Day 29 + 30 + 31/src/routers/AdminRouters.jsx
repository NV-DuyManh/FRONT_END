import React from 'react';
import DashBoard from '../pages/admin/dashBoard/DashBoard';
import Categories from '../pages/admin/metaData/categories/Categories';
import CategoriesType from '../pages/admin/metaData/categoryType/CategoriesType';
import MoviesList from '../pages/admin/movies/moviesList/MoviesList';
import Episodes from '../pages/admin/movies/episodes/Episodes';
import ShowTimes from '../pages/admin/movies/showTimes/ShowTimes';
import Users from '../pages/admin/community/users/Users';
import Reviews from '../pages/admin/community/reviews/Reviews';
import Comments from '../pages/admin/community/comments/Comments';
import Actors from '../pages/admin/cast/actors/Actors';
import Authors from '../pages/admin/cast/authors/Authors';
import Characters from '../pages/admin/cast/characters/Characters';
import Plans from '../pages/admin/billing/plans/Plans';
import Features from '../pages/admin/billing/features/Features';
import Packages from '../pages/admin/billing/packages/Packages';
import RentMovies from '../pages/admin/vip/rentMovies/RentMovies';
import Subscriptions from '../pages/admin/vip/subscriptions/Subscriptions';
import { Route, Routes } from 'react-router-dom';

function AdminRouters(props) {
    const adminRouter = [
        {
            path: "/",
            element: <DashBoard/>
        },
        {
            path: "/categories",
            element: <Categories />
        },
        {
            path: "/categoriesType",
            element: <CategoriesType />
        },
        {
            path: "/movies",
            element: <MoviesList />
        },
        {
            path: "episodes",
            element: <Episodes />
        },
        {
            path: "/showTimes",
            element: <ShowTimes />
        },
        {
            path: "/users",
            element: <Users />
        },
        {
            path: "/reviews",
            element: <Reviews />
        },
        {
            path: "/comments",
            element: <Comments />
        },
        {
            path: "/actors",
            element: <Actors />
        },
        {
            path: "/authors",
            element: <Authors />
        },
        {
            path: "/characters",
            element: <Characters />
        },
        {
            path: "/plans",
            element: <Plans />
        },
        {
            path: "/features",
            element: <Features />
        },
        {
            path: "/packages",
            element: <Packages />
        },
        {
            path: "/rentMovies",
            element: <RentMovies />
        },
        {
            path: "/subscriptions",
            element: <Subscriptions />
        }
    ]
    return (
        <Routes>
            {adminRouter.map((p, index) => (
                <Route key={index} path={p.path} element={p.element} />
            ))}
        </Routes>
    );
}

export default AdminRouters;