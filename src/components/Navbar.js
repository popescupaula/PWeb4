import React, {useState} from "react";
import {Nav, NavDropdown} from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    function logOut()
    {
        localStorage.clear();
        navigate("/register")
    }
    return(
        <div className="header header-bg">
           <Link to='/'><h1>KWIZZER</h1></Link>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {
                        localStorage.getItem('user-info') ?
                        <>
                        <Link to="/aboutUs">About US</Link>
                        <Link to="/quizes">Quizzes</Link>
                        <Link to="/add">Create Quiz</Link>
                        </>
                        :
                        <>
                        <Link to="/register">Register</Link>
                        </>
                    }
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
                </div>

                {
                localStorage.getItem('user-info') ?

                    <Nav>
                        <NavDropdown className="float-md-right" title={user && user.surname}>
                            <NavDropdown.Item className="bg-dark" onClick={logOut}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :null
                }
        </div>
    )
}

export default Header;