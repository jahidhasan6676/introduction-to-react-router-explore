import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name,email,website} = userDetails;
    return (
        <div>
            <h3>Details about users: {name}</h3>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
           
        </div>
    );
};

export default UserDetails;