import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className='header'>
      <div className='header__left'>
      <IconButton>
      <MenuIcon/>
      </IconButton>
      <img src='https://i.pinimg.com/736x/ae/47/fa/ae47fa9a8fd263aa364018517020552d.jpg' alt=''></img>
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input placeholder='Search Mail' input="text"/>
        <ArrowDropDownIcon className="header__inputCaret"/>
      </div>
      <div className='header__right'>
      <IconButton>
      <HelpOutlineIcon/>
      </IconButton>
      <IconButton>
      <SettingsIcon/>
      </IconButton>
      <IconButton>
      <AppsIcon/>
      </IconButton>
      <Avatar onClick={signOut} src={user?.photoUrl} className='avatar'/>
      </div>
    </div>
  )
}

export default Header