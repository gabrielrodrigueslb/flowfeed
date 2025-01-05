import { Avatar } from './Avatar'
import styles from './css/Sidebar.module.css'
import Editar from '../assets/pencil-simple-line.svg'


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1672957581550-6b37dcdbf6ff?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <div className={styles.profile}>
                <Avatar src='https://github.com/gabrielrodrigueslb.png' />
                <strong>Gabriel Eduardo</strong>
                <span>Web Developer</span>        
            </div>

            <footer>
                <a href="#"><img src={Editar} /> Editar seu perfil</a>
            </footer>
        </aside>
    )
}