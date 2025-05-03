import style from './Header.module.css';
import logo from '../../assets/logo.png';

export function Header({ message }) {
    return (
        <header className={style.header}>
            <img src={logo} alt="" />
            <h1>{message}</h1>
        </header>
    )
}