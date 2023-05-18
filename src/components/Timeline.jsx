import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-7/12">
            <Title>College Timeline</Title>
            {timeline.map(item => (
               <TimelineItem
                  id={item.id}
                  unit={item.unit}
                  title={item.title}
                  status={item.status}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;