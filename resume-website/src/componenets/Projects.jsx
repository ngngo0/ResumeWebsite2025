import ProjectsData from '../data/projectsData.json'
import Card from './Card'

function Projects() {
  return (
    <>
        <section>
          <h2 className="text-center text-2xl font-semibold">
            Projects
          </h2>

          <div className="flex center justify-center items-center">
            {
              ProjectsData.map(({title,tags,description, picture, bannerText})=>(
                <Card
                  key={title}
                  title={title} 
                  tags={tags} 
                  description={description} 
                  picture={picture}
                  bannerText={bannerText}>
                </Card>
              ))
            }
          </div>
        </section>
    </>
  )
}

export default Projects
