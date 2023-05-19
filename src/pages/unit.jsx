import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import TimelineList from '../data/timeline.js';
import Title from "../components/Title.jsx";
import UnitTimelineItem from "../components/unit/UnitTimelineItem.jsx";
import UnitTimeline from "../components/unit/UnitTimeline.jsx";
import Acquired from "../components/unit/Acquired.jsx";
import {Details} from "../components/unit/Details.jsx";
import UnitIntro from "../components/unit/UnitIntro.jsx";
function Unit() {
    let { unitId } = useParams();

    let item = TimelineList.find((item) => item.id === unitId)

    if (!item) {
        return <Navigate to="/" />;
    } else {
        return (
            <>

            <UnitIntro unitNumber={item.unit} unitTitle={item.title} unitSubtitle={item.subtitle} />
            <Details unitDetails={item.details} />
            <Acquired acquired={item.acquired} />
            <UnitTimeline timeline={item.timeline} />

            </>
        )
    }

}

export default Unit
