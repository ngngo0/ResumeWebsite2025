function Cards({ title, tags, description, picture }) {
    return(
        <>
            <div>
                <img src={picture} alt={title + " picture"}></img>
                <h3>{title}</h3>
                <p>{tags.map((tag , index) => (
                    <span key={index} className="tag">#{tag}</span>
                    ))}
                </p>
                <hr/>
                <p>{description}</p>
            </div>
        </>
    )
}
export default Cards