// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <>
      <h1>
        MY JOURNEY OF <br />
        <span>CCBP 4.0</span>
      </h1>
      <ul>{timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}</ul>
    </>
  )
}

export default TimelineView
