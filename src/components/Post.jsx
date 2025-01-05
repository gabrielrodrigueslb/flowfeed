import styles from './css/Post.module.css';
import { Commment } from './Comments.jsx';
import { Avatar } from './Avatar.jsx';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/gabrielrodrigueslb.png'/>
          <div className={styles.authorInfo}>
            <strong>Gabriel</strong>
            <span>Frontend Developer</span>
          </div>
        </div>
        <time
          title="03 de Janeiro de 2025 às 16h5"
          dateTime="2025-01-03 16:05:00"
        >
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href=""> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
          <a href=""> #nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Commment />
      </div>
    </article>
  );
}
