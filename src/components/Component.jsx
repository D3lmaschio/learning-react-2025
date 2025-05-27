import styles from './Component.module.css'

export function Comment() {
  return (
    <div className={styles.commentBox}>
        <img className={styles.avatar} src="https://github.com/D3lmaschio.png" />
        <div>
          <div className={styles.comment}>
            <strong>D3lmaschio</strong>
            <time title="26 de Maio às 15h53" dateTime="2025-05-26 15:50:00">Publicado há 1h</time>
            <p>Blá blá blá...</p>
          </div>
          <button>Aplaudir</button>
        </div>        
    </div>
  );
}