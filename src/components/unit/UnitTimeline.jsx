import React from "react";
import Title from "../Title.jsx";
import UnitTimelineItem from "./UnitTimelineItem.jsx";

function UnitTimeline({timeline}){
    if(timeline.length !== 0){
        return (
            <div className="flex flex-col md:flex-row justify-center my-16">
                <div className="w-full md:w-7/12 p-3">
                    <Title>Unit Timeline</Title>
                    {timeline.map(item => (
                        <UnitTimelineItem
                            title={item.title}
                            name={item.name}
                            description={item.description}
                            files={item.files}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default UnitTimeline;