import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://i.pinimg.com/736x/4c/82/da/4c82dad04930f2622860b78c398c8908.jpg" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/D3lmaschio.png" />
                <strong>D3lmaschio</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    );
}