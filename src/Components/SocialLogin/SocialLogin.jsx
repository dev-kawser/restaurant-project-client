import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleUser } = useAuth()

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleUser()
            .then(result => {
                const name = result.user?.displayName
                const email = result.user?.email
                const userInfo = { name, email }

                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/")
                    })
            })


    }


    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="btn bg-green-500 text-yellow-500">
                <FaGoogle></FaGoogle> Google
            </button>
        </div>
    );
};

export default SocialLogin;