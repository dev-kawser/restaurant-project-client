import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const Login = () => {

    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);

    const { loginUser } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
            })
    }

    const handleValidateCaptcha = () => {

        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }

    }



    return (
        <>
            <Helmet>
                <title>BISTRO BOSS | Login</title>
            </Helmet>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="Type the captcha" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                            </div>
                            <div>
                                <p className='text-sm'>Do not have an account? Create <Link className='text-base text-blue-500 font-medium' to="/register">Account</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} value={"Login"} type="submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;