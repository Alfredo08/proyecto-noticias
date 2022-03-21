
function Noticia( props ){
    return(
        <div>
            <h2>
                {props.noticia.title}
            </h2>
            <img src={props.noticia.urlToImage} alt={props.noticia.title} />
            <h5>
                {props.noticia.author}
            </h5>
            <p>
                {props.noticia.content}
            </p>
        </div>
    )
}

export default Noticia;