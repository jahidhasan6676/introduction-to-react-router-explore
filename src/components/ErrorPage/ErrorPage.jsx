import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oops !!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h4>Page not found</h4>
                    <h6>Go back where you from</h6>
                    <Link to="/">
                    <button>Home</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;