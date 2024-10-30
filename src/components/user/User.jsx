import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email,phone} = user;
    const navigate = useNavigate();
    const handleUsersInfo = () =>{
        navigate(`/user/${id}`)
    }
 
    return (
        <div style={{border: '2px solid goldenrod', margin: '10px', borderRadius:'10px', padding:'10px' }}>
           
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
            <button>Show information</button>
                </Link>
                <button onClick={handleUsersInfo}>Users Info</button>
        </div>
    );
};

export default User;