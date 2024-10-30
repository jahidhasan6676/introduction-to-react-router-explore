import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>Welcome to my website</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;