import { Comment } from './Component';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/D3lmaschio.png" />
          <div className={styles.authorInfo}>
            <strong>D3lmaschio</strong>
            <span>Fullstack Developer</span>
          </div>
        </div> 

        <time title="26 de Maio às 15h53" dateTime="2025-05-26 15:50:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Oi mãe</p>
        <p>Olha o link <a href='#'>Link pra clicar</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Comente</strong>

        <textarea
          placeholder='Bla bla bla...'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <Comment/>
    </article>
  );
}