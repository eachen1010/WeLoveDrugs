import React from 'react';
import styles from './Navbar.css';
import { useState } from 'react';
import NavBarLogo from './NavBarLogo.png';
import { useNavigate } from 'react-router-dom';
import { Menu, Button, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import avatar from './Avatar.png';

const Navbar = () => {

  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleClick = async data => {
    try {
      navigate('/dashboard');
      
    } catch (e) {
      console.log(e); //setError('Failed to log in');
    }
  };

  const handleMenuClick = async data => {
    try {
      navigate('/');
    } catch (e) {
      console.log(e); //setError('Failed to log in');
    }
  };

  return (
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&display=swap')
    </style>
    <nav style={{ width: '100vw', height: '75px', backgroundColor: '#44ACCF', display: 'flex', justifyContent:'space-between' }} className="navbar">
      <ul style={{ paddingLeft: '1vw', paddingBottom: '0.5vw', paddingTop: '1vw'}}>
        <li style={{ backgroundColor: '#44ACCF', color: 'white', display: 'inline', alignItems: 'center' }}>
          <img onClick={handleClick} src={ NavBarLogo } alt="Home" width="200px" className="iconStyle" />
        </li>
      </ul>
      <div style={{ display:'flex', width: '15%', marginBottom: '1vh', borderRadius: '6px', color: 'white' }}>
        <Menu>
          <MenuButton display='flex' justify-Content='center' flex-direction='row' style={{ borderTopLeftRadius: '60px 60px', borderBottomLeftRadius: '60px 60px', fontSize: '20px', marginRight: '0px', width: '100%', height: '75px', backgroundColor: '#3892b0'}}> 
            <p>TheMillers</p>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleMenuClick} background='#747474'>
              <span color="black">Log Out</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
    </>
  );
};

export default Navbar;