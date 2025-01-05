import styles from './css/Header.module.css'
import flowLogo from '../assets/Flow-logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={ flowLogo } alt="Flow feed logo" />
        </header>
    );
}