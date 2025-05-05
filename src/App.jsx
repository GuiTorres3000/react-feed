import { Header } from './components/Header/Header.jsx'
import style from './App.module.css'
import { Post } from './components/Post/Post.jsx'
function App() {
  return (
    <div>
      <Header message="Hello Vite + React!"/>

      <div className={style.wrapper}>
        <Post/>
      </div>
    </div>
  )
}

export default App