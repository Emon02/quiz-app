import React from 'react';
import avatar from '../../assets/images/reset-password.png';

const ResetPassword = () => {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto py-5">
                <h1 className='my-8 font-bold text-2xl text-center md:text-left md:text-4xl md:ml-10 text-gray-700'>Reset your password</h1>
                <div className="gap-5 pb-10 grid sm:grid-cols-1  md:grid-cols-2">
                    <div className="flex justify-center">
                        <img className='px-5' src={avatar} alt='Sign up' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <form className="gap-5 grid grid-cols-1 mx-auto px-5 md:m-0 md:pr-10 w-full" action="#">

                            <div className="w-full h-12 flex items-center border p-1 rounded-md border-slate-500 bg-white">
                                <input className='border-none outline-none	w-full h-full py-1 px-2 font-semibold' type="text" placeholder="Enter email" />
                                <span className="material-icons-outlined w-10 h-10 flex items-center justify-center"> alternate_email </span>
                            </div>

                            <button className='w-full h-12 p-1'>
                                <span className="w-full h-12 rounded-md flex items-center justify-center cursor-pointer bg-green-400  hover:bg-slate-800 font-semibold hover:text-slate-100">Next</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ResetPassword;