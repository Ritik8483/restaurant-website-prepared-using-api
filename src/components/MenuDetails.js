import React, { useState } from 'react'
import '../styles/GlobalStyle.css'
import styles from '../styles/FoodCard.module.css'
import Button from '@mui/material/Button';

const MenuDetails = ({menuData}) => {
    
  return (
    <div>
        <div className={styles.design} >
      {
        menuData.map((item)=>(
        
        <div className={styles.menuBox} key={item.id}>
            <span className={styles.circle}>{item.id}</span>
            <h4 className={styles.label}>{item.title}</h4>
            <h2>{item.name}</h2>
            <p className={styles.detail}>{item.text}</p>
            <div className={styles.dishImg}>  
              <img className={styles.image} src={item.image} />
            </div>
            <div className={styles.btn}>
              <Button variant="outlined">Order Now</Button>
            </div>
        </div>
        
        ))
      }
      </div>
    </div>
  )
}

export default MenuDetails