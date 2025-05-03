import { Header } from './components/Header/Header.jsx'
import style from './App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar.jsx'
function App() {
  return (
    <div>
      <Header message="Hello Vite + React!"/>

      <div className={style.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          Post
        </main>
      </div>
    </div>
  )
}

export default App