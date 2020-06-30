import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/home/navbar'
import Footer from './components/home/navbar'

export const RouteWithNavbarFooter = ({ component: Component , ...rest})=>{
    return (
        <Route 
            {...rest}  
            component={(props)=>(
                <div>
                    <Navbar /> {/* HEADER ALWAYS VISIBLE */}
                    <Component {...props} />
                    <Footer /> {/* FOOTER ALWAYS VISIBLE */}
                </div>
            )}
        />
    )
}
export const RouteWithFooter = ({ component: Component , ...rest})=>{
    return (
        <Route 
            {...rest}  
            component={(props)=>(
                <div>
                    <Component {...props} />
                    <Footer />
                </div>
            )}
        />
    )
}

export const RouteWithNavbar = ({ component: Component , ...rest})=>{
    return (
        <Route 
            {...rest}  
            component={(props)=>(
                <div>
                    <Navbar />
                    <Component {...props} />
                </div>
            )}
        />
    )
}
export const PlainRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props)=> (<Component {...props} />)}
        />
    );
};
