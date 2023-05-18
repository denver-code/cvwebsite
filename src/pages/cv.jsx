import React from 'react';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Intro from '../components/Intro.jsx';
import Timeline from '../components/Timeline.jsx';

function Main() {
    return (
        <>
            <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
                <div className="max-w-5xl w-11/12 mx-auto">
                    <Intro />
                    <Timeline />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Main
