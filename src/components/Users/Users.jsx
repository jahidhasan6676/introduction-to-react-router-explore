import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2> My Users: {users.length}</h2>
            <p>Awesome and honest users</p>
           <div className="header-grid">
           {
                users.map(user => <User key={user.id} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;