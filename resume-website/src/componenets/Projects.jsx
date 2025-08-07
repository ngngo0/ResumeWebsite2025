import './Projects.css'
import ProjectsData from '../data/projectsData.json'
import Cards from './Cards'

function Projects() {
  return (
    <>
        <section>
            <h2>Projects</h2>
            {
              ProjectsData.map(({title,tags,description, picture})=>(
                <Cards 
                  title={title} 
                  tags={tags} 
                  description={description} 
                  picture={picture}>
                </Cards>
              ))
            }
        </section>
    </>
  )
}

export default Projects
