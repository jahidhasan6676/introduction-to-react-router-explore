import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email,phone} = user;
 
    return (
        <div style={{border: '2px solid goldenrod', margin: '10px', borderRadius:'10px', padding:'10px' }}>
           
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;