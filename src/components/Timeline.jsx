import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-7/12">
            <Title>College Timeline</Title>
             <h4 className="text-s font-thin text-stone-500 mb-5">
                 Click on unit to read more about it!
             </h4>
            {timeline.map(item => (
               <TimelineItem
                  id={item.id}
                  unit={item.unit}
                  title={item.title}
                  status={item.status}
                  details={item.details}
                  grade={item.grade}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;