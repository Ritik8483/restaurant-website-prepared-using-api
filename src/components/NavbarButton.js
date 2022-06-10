import React from 'react'
import styles from '../styles/NavBar.module.css'

const NavbarButton = ({filterFood,menuList}) => {
  return (
    <div>
        <div className={styles.navContainer}>
            <div className={styles.navBox}>
                <div className={styles.navLinks}>
                {
                            
                    menuList.map((currElement)=>{
                        return(
                                <div key={currElement.id} className={styles.anchor} >
                                    <button onClick={()=>filterFood(currElement)} className={styles.link}>{currElement}</button>
                                </div>
                            )
                    })
                }
                </div>
            </div>     
        </div>
    </div>
  )
}

export default NavbarButton