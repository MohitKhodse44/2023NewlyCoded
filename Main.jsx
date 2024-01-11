import React from 'react'
import SimpleContainer from './Navbar'
import { Route, Routes } from 'react-router-dom'
import ViewData from './ViewData'
import { MyContext } from './UseContext'
import LoginPage from './LoginPage'

const Main = () => {

    return (
        <div>
            <>
                <Routes>
             <Route path="/" element={<SimpleContainer />} />
             <Route path="/viewdata" element={<ViewData />} />   
             <Route path="/loginpage" element={<LoginPage />} />   
                </Routes>
            </>

        </div>
    )
}

export default Main
