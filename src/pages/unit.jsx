import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import TimelineList from '../data/timeline.js';
import Title from "../components/Title.jsx";
import UnitTimelineItem from "../components/unit/UnitTimelineItem.jsx";
function Unit() {
    let { unitId } = useParams();

    let item = TimelineList.find((item) => item.id === unitId)

    if (!item) {
        return <Navigate to="/" />;
    } else {
        return (
            <>

                <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
                    <h1 className="text-3xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">{item.title}</h1>

                       <div className="flex flex-row justify-center ">
                           <span className="inline-block px-2 py-1 mb-3 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                            Unit {item.unit}
                           </span>

                         <p className="py-1 mb-3 ml-2 italic text-gray-700">
                             {item.subtitle}
                         </p>
                       </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center my-16 p-3">
                    <div className="w-full md:w-7/12">
                        <Title>Unit Details</Title>
                        <p className="text-x max-w-xl">
                            {item.details}
                            <br />
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center my-16 p-3">
                    <div className="w-full md:w-7/12">
                        <Title>Acquired</Title>
                        <ol className="list-disc ml-5">
                            {item.acquired.map(acquired => (
                                <li className="text-x max-w-xl">
                                    {acquired}
                                    <br />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center my-16">
                    <div className="w-full md:w-7/12 p-3">
                        <Title>Unit Timeline</Title>
                        {item.timeline.map(item => (
                            <UnitTimelineItem
                                title={item.title}
                                name={item.name}
                                description={item.description}
                                files={item.files}
                            />
                        ))}
                    </div>
                </div>

            </>
        )
    }

}

export default Unit
