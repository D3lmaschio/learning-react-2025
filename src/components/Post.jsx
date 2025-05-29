import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ post }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div> 

        <time title={'impl. tempo'} dateTime={post.publishedAt}>Publicado há {'impl. tempo'}</time>
      </header>
      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') 
            return <p>{line.content}</p>
          if (line.type === 'link')
            return <a href={line.content}>{line.content}</a>
        })}
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

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}