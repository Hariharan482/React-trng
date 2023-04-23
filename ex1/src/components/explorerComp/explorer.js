import React from 'react';
import styles from './explorer.module.css'
class ManyWonders extends React.Component{
    render(){
        return(
            <>
                <section className={styles.explorerContainer}>
                    <div className={styles.explorertext}>
                        <h4>WELCOME TO EXPLORER</h4>
                        <h2>Your Adventure Travel Expert in the <span>SOUTH</span></h2>
                        <select name="city" id="city" className={styles.dropdown}>
                            <option value="" hidden>Choose</option>
                            <option value="">Thanjavur</option>
                            <option value="">Pollachi</option>
                            <option value="">Chidambaram</option>
                            <option value="">Masinagudi</option>
                            <option value="">Kumbakkonam</option>
                            <option value="">Tirunelveli</option>
                        </select>
                        <button className={styles.exploreBtn}>EXPLORE</button>
                    </div>
                    <div className={styles.coverimg}>
                        <img src='./assests/cover.png'></img>
                    </div>
                </section>
            </>
        )
    }
}

export default ManyWonders;