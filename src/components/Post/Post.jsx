import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header>
                {/*Autor com imagem e texto*/}
                <div className={style}>
                    <img className={style} src="https://github.com/GuiTorres3000.png"/>
                    <div className={style}>
                        <strong>Guilherme Towers</strong>
                        <span>Web Dev - Full Stack</span>
                    </div>

                    
                    <time title="05 de Maio às 20:30" dateTime="2025-05-05 08:20:32">Publicado a 10h</time>
                </div>
            </header>
            <h2>Post</h2>
        </article>
    )
}