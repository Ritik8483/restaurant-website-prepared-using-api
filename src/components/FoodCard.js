import React, { useState } from 'react'
import '../styles/GlobalStyle.css'
import styles from '../styles/NavBar.module.css'
import Button from '@mui/material/Button';
import { Menu } from './menuApi';
import MenuDetails from './MenuDetails';
import { Link } from 'react-router-dom';
import NavbarButton from './NavbarButton';

const uniqueList=[...new Set(
  Menu.map((currElement)=>
  {
    return currElement.title
}
)),"All"];
console.log('Current Titles : ',uniqueList);

const FoodCard = () => {
  const[menuData,setMenuData]=useState(Menu);
  const[menuList,setMenuList]=useState(uniqueList);

  const filterFood=(title)=>{
    if(title==="All"){
      setMenuData(Menu);
      return;
    }
    const filteredData=Menu.filter((item)=>{
      return item.title===title;
    });
    setMenuData(filteredData);
  }
  return (
    <div>
      <NavbarButton filterFood={filterFood} menuList={menuList}/>
      <MenuDetails menuData={menuData}/>
    </div>
  )
}

export default FoodCard