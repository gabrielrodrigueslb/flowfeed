import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Gabriel Lopes" content="Um novo Post" avatar="https://github.com/gabrielrodrigueslb.png" />
        </main>
      </div>
    </>
  );
}
