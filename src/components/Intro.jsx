import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Ihor Savenko</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & ICR Student</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm an indie software developer and building my
            version of the digital world one step at a time. All coding projects
            are built to solving real-life problems with code.
            <br />
         </p>
      </div>
   )
}

export default Intro;