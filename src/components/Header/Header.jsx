import style from './Header.module.css';

export function Header({ message }) {
    return (
        <header className={style.header}>

            <h1>{message}</h1>
        </header>
    )
}