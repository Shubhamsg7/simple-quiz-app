import React, { useEffect, Fragment, useState } from 'react'
import Logo from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../actions";
import jwt_decode from 'jwt-decode';
import Switcher from "../theme/Switcher";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [user, setUser] = useState({});
    const [msg, setMsg] = useState('');


    useEffect(() => {
        var today = new Date()
        var curHr = today.getHours()

        if (curHr < 12) {
            setMsg('Good Morning!')
        } else if (curHr < 18) {
            setMsg('Good Afternoon!')
        } else {
            setMsg('Good Evening!')
        }
    }, []);


    useEffect(() => {
        if (state.token !== null) {
            setUser(jwt_decode(state.token))
            //console.log(user.picture);
        }
    }, []);

    useEffect(() => {
        if (state.token === null) navigate('/login');
    }, [state.token, navigate]);

    const handleSignOut = (e) => {
        dispatch(logout());
        navigate('/login');
    }

    return (
        <div className='w-full p-8'>
            {state.token &&
                <div className='flex justify-between items-center'>
                    <div className="flex justify-start items-center gap-2">
                        <div className='border-2 border-dashed rounded-full p-1'>
                            <img referrerPolicy="no-referrer" src={user.picture} alt={user.name} className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full" />
                        </div>
                        <div className='flex flex-col '>
                            <h3 className='text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200'>{msg}</h3>
                            <div className='flex justify-start items-center gap-3 mt-1'>
                                <h3 className='text-xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300'>{user.given_name}</h3>
                                <button onClick={(e) => handleSignOut(e)} className='flex justify-center items-center gap-1 font-bold uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl py-1 px-1 sm:px-4 text-white'>
                                    <ArrowLeftOnRectangleIcon className="h-6 w-6 " />
                                    <span className='hidden sm:block'>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </div>
            }
            {/* <div className='bg-white p-2 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={Logo} alt="Quiz App" className='h-[40px]' />
                    </div>
                    <div className='flex'>
                        {state.token &&
                            <div className='flex justify-start items-center gap-2'>

                                {
                                    state.token.length != 0 &&
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex w-full justify-center rounded-lg bg-black/10 bg-opacity-20 px-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                                <div className='flex justify-start items-center gap-2'>
                                                    <img referrerPolicy="no-referrer" src={user.picture} alt={user.name} className="w-[30px] h-[30px]" />
                                                    <h3 className='font-bold'>{user.given_name}</h3>
                                                </div>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="px-1 py-1 ">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                onClick={(e) => handleSignOut(e)}
                                                            >
                                                                Logout
                                                            </button>
                                                        )}
                                                    </Menu.Item>

                                                </div>

                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                }

                            </div>
                        }

                    </div>
                </div>
            </div> */}
        </div >
    )
}

export default Header