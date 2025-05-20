import { Post } from "./Post"
import { Header } from "./components/Header"

export function App() {
  return (
    <>
      <Header />

      <Post 
        author="Matheus"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero harum commodi inventore cupiditate modi sunt sint molestiae minus eius explicabo nisi iste nesciunt officia, obcaecati, quas, distinctio voluptatum unde?" 
      />
      <Post
        author="Yasmin"
        content="Lol"
      />
    </>
  )
}
