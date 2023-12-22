import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/miniComponents/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;