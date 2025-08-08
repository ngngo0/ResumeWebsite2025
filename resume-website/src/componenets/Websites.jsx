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
              ProjectsData.map(({title,tags,description, picture})=>(
                <Card
                  title={title} 
                  tags={tags} 
                  description={description} 
                  picture={picture}>
                </Card>
              ))
            }
          </div>
        </section>
    </>
  )
}

export default Projects
