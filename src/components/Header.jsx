import style from './Header.module.css';
import logo from '../assets/logo.png';

export function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="" />
            <h1>TODO</h1>
        </header>
    )
}