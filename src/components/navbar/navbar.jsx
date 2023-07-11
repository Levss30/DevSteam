import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import Logo from '@/components/logo/logo'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Logo />
            <inpuut />
            <BsCart4 size={40}/>
        </nav>
    )
}

export default Navbar