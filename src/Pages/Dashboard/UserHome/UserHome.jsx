import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {

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

export default UserHome;