import React, { useEffect } from 'react'
import Logo from '../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from "../actions";
import jwt_decode from 'jwt-decode';

const LoginScreen = () => {
    const dispatch = useDispatch();
    //const [user, setUser] = useState({});
    const navigate = useNavigate();
    const state = useSelector(state => state);
    // console.log(state.token);

    useEffect(() => {
        if (state.token !== null) navigate('/');
    }, [state.token, navigate]);

    function handleCallbackResponse(response) {
        //console.log("Encoded JWT Id Token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        //console.log(userObject);
        //setUser(userObject);
        dispatch(setLogin(response.credential));
        document.getElementById("signInDiv").hidden = true;

    }


    useEffect(() => {
        //const google = window.google;

        window.google.accounts.id.initialize({
            client_id: "811906188496-g83qlfjjikn2v4tab9bcvhhfna8f05vo.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );

        //window.google.accounts.id.prompt();
    }, [handleCallbackResponse]);


    return (
        <div className='w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='flex justify-center items-center h-screen '>
                <div className='border-2 border-dashed p-1 rounded-3xl' >
                    <div className='bg-slate-100 dark:bg-gray-900 p-8 rounded-3xl shadow-lg'>
                        <div className='flex flex-col justify-center items-center mb-4'>
                            <div className='bg-slate-200 dark:bg-gray-800 p-2 rounded-2xl'>
                                <img src={Logo} alt="Quiz App" className='h-[40px]' />
                            </div>
                            <h5 className='text-2xl font-semibold text-gray-800 dark:text-white mb-0'>Welcome Back!</h5>
                            <p className='text-gray-700 dark:text-gray-300'>Sign in to continue</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div id="signInDiv"></div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default LoginScreen