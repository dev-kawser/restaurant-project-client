import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {

    const { user } = useAuth()

    return (
        <div>
            <h1>Hi, Welcome
                <span> {user ? user.displayName : 'back'} </span></h1>
            <div>

            </div>
        </div>
    );
};

export default AdminHome;