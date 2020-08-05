import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/home/navbar'
import Footer from './components/home/footer'

export const RouteWithNavbarFooter = ({ component: Component , ...rest})=>{
    return (
        <Route 
            {...rest}  
            component={(props)=>(
                <div>
                    <Navbar {...props}/> {/* HEADER ALWAYS VISIBLE */}
                    <Component {...props} />
                    <Footer {...props}/> {/* FOOTER ALWAYS VISIBLE */}
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
                    <Footer {...props}/>
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
                    <Navbar {...props}/>
                    <Component {...props} />
                </div>
            )}
        />
    )
}
