import ThumbsUp from '../assets/thumbs-up.svg';
import Trash from '../assets/trash.svg';
import styles from './css/Comments.module.css';
import { Avatar } from './Avatar.jsx';

export function Commment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/codewithmiguel.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Miguel</strong>
              <time
                title="06 de Junho de 2022 às 15h30"
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <img src={Trash} alt="Lixeira" />
            </button>
          </header>
          <p>Muito bom Gabriel, parabéns!! </p>
        </div>
        <footer>
          <button>
            <img src={ThumbsUp} alt="Aplaudir" /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
