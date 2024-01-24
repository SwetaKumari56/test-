import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(name) {
    return (
        <nav className='flex flex-row justify-between bg-orange-300 p-5'>

            <div className='flex-row flex items-center'>
                <img className='h-10 w-10 rounded-full' src="../src/assets/logo 2.jpeg " alt="" />
                <p className='ms-5'>School website</p>
            </div>
            
            
            <div className='flex flex-row items-center'>
           
            <Link to={"/"}> 
                             
            <p>Contactus</p>
        </Link>


        
                  </div>
            </nav>
    )
    }