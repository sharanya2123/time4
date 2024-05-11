// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <>
      <div>
        <img src={imageUrl} alt="project" />
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <h1>{description}</h1>
      <ul href={projectUrl}>Visit</ul>
    </>
  )
}

export default ProjectTimelineCard
