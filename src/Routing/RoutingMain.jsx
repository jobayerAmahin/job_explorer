import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import SpecificJob from '../Pages/SpecificJob';
import Private from './Private';
import ApplyJobForm from '../Pages/ApplyJobForm';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/job/:id',
                element:<Private><SpecificJob></SpecificJob></Private>,
                loader:({params})=>fetch(`http://localhost:3000/job/${params.id}`)
            },
            {
                path:'/apply/:id',
                element:<Private><ApplyJobForm></ApplyJobForm></Private>
            }
        ]
    }
])

export default router;