
import style from './Sidebar.module.css';
export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img src="https://images.unsplash.com/photo-1607706189992-eae578626c86?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className={style.profile}>
                <img src="https://github.com/GuiTorres3000.png" alt="" />
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>

            </footer>
        </aside>
    )
}