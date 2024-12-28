import { useState } from "react"
import PropTypes from 'prop-types';


export default function Auth() {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            {
                toggle ? <Login onChange={() => { setToggle(!toggle) }} /> : <Register onChange={() => { setToggle(!toggle) }} />
            }
        </>
    )
}

function Login({ onChange }) {
    return (
        <div className="h-dvh  w-dvw flex justify-center items-center p-4">
            <div
                className="w-96 rounded-lg h-fit shadow  p-6 bg-white relative overflow-hidden"
            >
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h2 className="text-2xl font-medium text-slate-700">Login</h2>
                    <p className="text-slate-500 text-lg">Enter details below.</p>
                </div>
                <form className="w-full mt-4 space-y-3" method="post">
                    <div>
                        <label htmlFor="email" className="text-lg text-[#aaa]" >Email</label>
                        <input
                            className="outline-none border-2 text-lg rounded-md px-2 py-1 mt-1 text-slate-500 w-full focus:border-blue-300"
                            placeholder="Email"
                            id="email"
                            name="email"
                            type="email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-lg text-[#aaa]" >Password</label>
                        <input
                            className="outline-none border-2 rounded-md px-2 text-lg py-1 mt-1 text-slate-500 w-full focus:border-blue-300"
                            placeholder="Password"
                            id="password"
                            name="password"
                            type="password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                className="mr-2 w-4 h-4"
                                id="remember"
                                name="remember"
                                type="checkbox"
                            />
                            <span className="text-slate-500">Remember me </span>
                        </div>
                        <a className="text-blue-500 font-medium hover:underline" href="#"
                        >Forgot Password</a >
                    </div>
                    <button
                        className="w-full justify-center py-1 bg-blue-500 text-lg hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                        id="login"
                        // name="login"
                        type="submit"
                    >
                        login
                    </button>
                    <p className="flex justify-center space-x-1">
                        <span className="text-slate-700"> Have an account? </span>
                        <button className="text-blue-500 hover:underline" onClick={onChange}>Sign Up</button>
                    </p>
                </form>
            </div>
        </div>
    )
}

function Register({ onChange }) {
    return (
        <div className="h-dvh  w-dvw flex justify-center items-center p-4">
            <div
                className="w-96 rounded-lg h-fit shadow  p-6 bg-white relative overflow-hidden"
            >
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h2 className="text-2xl font-medium text-slate-700">Create New Account</h2>
                    <p className="text-slate-500 text-lg">Enter details below.</p>
                </div>
                <form className="w-full mt-4 space-y-3" method="post">
                    <div>
                        <label htmlFor="email" className="text-lg text-[#aaa]" >Email</label>
                        <input
                            className="outline-none border-2 text-lg rounded-md px-2 py-1 mt-1 text-slate-500 w-full focus:border-blue-300"
                            placeholder="Email"
                            id="email"
                            name="email"
                            required
                            type="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-lg text-[#aaa]" >Password</label>
                        <input
                            className="outline-none border-2 rounded-md px-2 text-lg py-1 mt-1 text-slate-500 w-full focus:border-blue-300"
                            placeholder="Password"
                            id="password"
                            name="password"
                            type="password"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-lg text-[#aaa]" >Confirm Password</label>
                        <input
                            className="outline-none border-2 rounded-md px-2 text-lg py-1 mt-1 text-slate-500 w-full focus:border-blue-300"
                            placeholder="Password"
                            id="password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                className="mr-2 w-4 h-4"
                                id="remember"
                                name="remember"
                                type="checkbox"
                            />
                            <span className="text-slate-500">Remember me </span>
                        </div>
                        <a className="text-blue-500 font-medium hover:underline" href="#"
                        >Forgot Password</a >
                    </div>
                    <button
                        className="w-full justify-center py-1 bg-blue-500 text-lg hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                        id="login"
                        // name="login"
                        type="submit"
                    >
                        login
                    </button>
                    <p className="flex justify-center space-x-1">
                        <span className="text-slate-700"> Have an account? </span>
                        <button className="text-blue-500 hover:underline" onClick={onChange}>Sign in</button>
                    </p>
                </form>
            </div>
        </div>
    )
}
Login.propTypes = {
    onChange: PropTypes.func.isRequired
}

Register.propTypes = {
    onChange: PropTypes.func.isRequired
}