import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/D3lmaschio.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>D3lmaschio</strong>
              <time title="26 de Maio às 15h53" dateTime="2025-05-26 15:50:00">Cerca de 1h atrás</time>
            </div>
            <button title="Delete comment">
              <Trash size={24}/>
            </button>
          </header>
          <p>Blá blá blá...</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={16}/>{' '}
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}