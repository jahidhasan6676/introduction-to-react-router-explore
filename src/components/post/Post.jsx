
import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();

    const handlePostInfo = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div style={{border:'2px solid green', borderRadius:'10px', padding:'10px', margin:'10px'}}>
            <h5>Post of id: {id}</h5>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Posts Details</Link>
            <Link to={`/post/${id}`}>
            <button>Post information</button>
            </Link>
            <button onClick={handlePostInfo}>Post Info</button>
            
        </div>
    );
};

export default Post;