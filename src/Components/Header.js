import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import useAuth from "../services/firebase/useAuth";

function Header(props){

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if(isAuthenticated){
          console.log("AUTHENTICATED!");
        }
        return;
      }, [isAuthenticated])

    return (
        <section className='header'>
            <div className='header__container mw'>
                <div className='header__container--logo'>
                    <Link to='/'>
                        <img src={logo} alt='Logo' />
                    </Link>
                </div>
                <div className='header__container--access'>
                        {isAuthenticated &&
                            <nav>
                                <Link to='/dashboard'>Dashboard</Link>
                                <Link className='btn red-btn' to='/logout'>Sign Out</Link>
                            </nav>
                        }

                        {!isAuthenticated &&
                            <nav>
                                <Link to='/login'>Sign In</Link>
                                <Link to='/register'>Register</Link>
                            </nav>
                        }
                </div>
            </div>
        </section>
      );
    
}

export default Header;