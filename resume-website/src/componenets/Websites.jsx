import WebsitesData from '../data/websitesData.json'
import Card from './Card'

function Websites() {
  return (
    <>
        <section>
          <h2 className="text-center text-2xl font-semibold">
            Websites
          </h2>

          <div className="flex center justify-center items-center">
            {
              WebsitesData.map(({title,tags,description, picture, link, bannerText})=>(
                <Card
                  key={title}
                  title={title} 
                  tags={tags} 
                  description={description} 
                  picture={picture}
                  link={link}
                  bannerText={bannerText}>
                </Card>
              ))
            }
          </div>
        </section>
    </>
  )
}

export default Websites
