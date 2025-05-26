import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css';

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Matheus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero harum commodi inventore cupiditate modi sunt sint molestiae minus eius explicabo nisi iste nesciunt officia, obcaecati, quas, distinctio voluptatum unde?" 
          />
          <Post
            author="Yasmin"
            content="Lol"
          />
        </main>
      </div>
    </>
  );
}
;