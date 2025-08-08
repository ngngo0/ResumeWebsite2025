import '../index.css';

function Card({ title, tags, description, picture }) {
    return(
        <>
            <div className="p-4 mx-4 border border-black h-50 w-xs">
                <img src={picture} alt={title + " picture"}></img>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <ul>
                    {tags.map((tag , index) => (
                    <li key={index} className="inline-block pr-4">#{tag}</li>
                    ))}
                </ul>
                <hr/>
                <p>{description}</p>
            </div>
        </>
    )
}
export default Card