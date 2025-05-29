import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css';

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/D3lmaschio.png",
      name: "D3lmaschio",
      role: "Field Service Support Trainee"
    },
    content: [
      { type: 'paragraph', content: 'Blá blá blá...' },
      { type: 'paragraph', content: 'One Piece é o melhor anime de todos os tempos' },
      { type: 'link', content: 'https://github.com/D3lmaschio' },
    ],
    publishedAt: new Date('2025-05-29 15:27:00'),  
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/akitaonrails.png",
      name: "Fabio Akita",
      role: "Codeminer 42 co-founder"
    },
    content: [
      { type: 'paragraph', content: 'Sou foda' },
      { type: 'paragraph', content: 'Dig din dig din' },
      { type: 'link', content: 'https://github.com/akitaonrails' },
    ],
    publishedAt: new Date('2025-05-29 15:27:00'),  
  }
];

export function App() {
  return (
    <div>
      <Header />
  
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post post={post} />
          })}
        </main>
      </div>
    </div>
  );
}
;