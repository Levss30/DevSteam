import Image from 'next/image'
import styles from './logo.module.css'

function Logo() {
    return(
        <div className={styles.logo}>
            <Image src='/logo.svg' width={60} height={60} /> 
            <h1>Steam</h1>
        </div>
    )
}

export default Logo