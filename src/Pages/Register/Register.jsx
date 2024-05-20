import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";


const Register = () => {

    const { registerUser, user } = useContext(AuthContext);
    console.log(user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {

        // e.preventDefault()

        // const form = e.target;
        // const email = form.email.value
        // const password = form.password.value

        const displayName = data.displayName
        const email = data.email
        const password = data.password

        // const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        // if (!regex.test(data.password)) {
        //     return;
        // }

        console.log(displayName, email, password);

        registerUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: displayName,
                })
                    .then()
                    .catch()
            })
    }

    return (
        <>
            <Helmet>
                <title>BISTRO BOSS | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required {...register("displayName")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required {...register("email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })} />
                                {errors.password?.type === "required" && <span>This field is required</span>}
                                {errors.password?.type === "minLength" && <span>minimum 6</span>}
                                {errors.password?.type === "maxLength" && <span>maximum 20</span>}
                                {errors.password?.type === "pattern" && <span>pattern</span>}
                            </div>
                            <div>
                                <p className='text-sm'>Already have an account? <Link className='text-base text-blue-500 font-medium' to="/login">Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <input value={"Register"} type="submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;