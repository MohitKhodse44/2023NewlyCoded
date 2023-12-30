import React from 'react';
import { Link } from 'react-router-dom';


export const LoginPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
    };

    return (
        <div id='loginpagediv' className='d-flex justify-content-center '>
            <div id='loginpageinnerdiv' className='container d-flex justify-content-center align-items-center'>
                <div className=''>
                    <h3 className='d-flex justify-content-center'>  Login</h3>
                    <p>Don’t have an account yet? <Link to='/signup'>Sign up</Link></p>
                    <button className="btn btn-secondary">
                    <i class="fa-brands fa-google-plus-g"></i><small> Login with Google</small>
                    </button><br /><br />
                    <button className="btn btn-secondary">
                        <small>Login with Facebook</small>
                    </button>
                    <form onSubmit={handleSubmit} className='mt-3'>
                        <label htmlFor="email">Email ID</label>
                        <input type="text" className='form-control mt-2' id="email" placeholder="Email" />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password" className='form-control mt-2 ' id="password" placeholder="Password" />
                        <br />
                        <button type="submit" style={{backgroundColor:'#25396c',color:'white'}} className="btn  px-5 ">Login</button>
                        <p className='mt-2'><Link to='/forgot-password'>Forgot Password</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};
