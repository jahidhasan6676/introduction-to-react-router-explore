import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const userDetails = useLoaderData();
    const navigate = useNavigate();
    const {name,email,website} = userDetails;
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Details about users: {name}</h3>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}>Go Back</button>
           
        </div>
    );
};

export default UserDetails;