import '../index.css';

function Card({ title, tags, description, picture, link, bannerText }) {
    return(
        <>
            <div className="p-4 mx-4 border border-black h-90 w-xs relative">
                {bannerText && (
                  <span>
                    {bannerText}
                  </span>
                )}
                <img src={picture} alt={title + " picture"}></img>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <ul>
                    {tags.map((tag , index) => (
                    <li key={index} className="inline-block pr-4">#{tag}</li>
                    ))}
                </ul>
                <hr/>
                <p>{description}</p>
                <a className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200' 
                    href={link}
                    target="_blank" 
                    rel="noopener noreferrer">
                    View
                </a>
                
            </div>
        </>
    )
}
export default Card