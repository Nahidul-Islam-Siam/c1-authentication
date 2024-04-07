import {Outlet} from 'react-router-dom'
import Navbar from './Navbar';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
          <div className=''>
          <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Root;