import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          {/* <img className={styles.avatar} src="https://github.com/D3lmaschio.png" /> */}
          <div className={styles.authorInfo}>
            <strong>D3lmaschio</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>

        <time title="26 de Maio às 15h53" dateTime="2025-05-26 15:50:00">Publicado há 1h</time>
      </header>
    </article>
  );
}