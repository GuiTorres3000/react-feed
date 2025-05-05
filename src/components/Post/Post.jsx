import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header className={style.header}>
                <div className={style.author}>
                    <img 
                        className={style.avatar} 
                        src="https://github.com/GuiTorres3000.png"
                        alt="Foto de perfil"
                    />
                    <div className={style.authorInfo}>
                        <strong>Guilherme Towers</strong>
                        <span>Web Dev - Full Stack</span>
                    </div>

                    <time 
                        className={style.time}
                        title="05 de Maio às 20:30" 
                        dateTime="2025-05-05 08:20:32"
                    >
                        Publicado a 10h
                    </time>
                </div>
            </header>
            
            <div className={style.content}>
                <h2>Post</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique metus nec ligula finibus, in malesuada sapien finibus.</p>
            </div>
        </article>
    )
}