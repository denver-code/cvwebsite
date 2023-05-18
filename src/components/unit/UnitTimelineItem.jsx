import React from 'react';

function UnitTimelineItem({ name, title, description, files }) {
   function displayFile(file){
      switch(file.type) {
         case "Document":
            return <div className="flex flex-row pt-6">
               <a href={file.file} >
                  <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-800 dark:bg-white rounded-md">
                     Download {file.filename}
                  </span>
               </a>
                  <p className="px-2 py-1 text-stone-500"> {file.description}</p>
            </div>
         case "Picture":
            return <div className="flex flex-col pt-6">
               <img src={file.file} alt="picture" className="border max-w-xs"/>
                <p className="px-2 py-1 text-stone-500 italic text-xs"> {file.description}</p>
            </div>
            case "Link":
               return <div className="flex flex-row pt-6">
                  <a href={file.url} target="_blank">
                  <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-800 dark:bg-white rounded-md">
                    Open Link
                  </span>
                  </a>
                  <p className="px-2 py-1 text-stone-500"> {file.description}</p>
               </div>
         default: return;
      }
   }
   return (

         <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
               <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
               <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                   &lt;{name} /&gt;
               </span>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                     {title}
                  </h3>
               </p>
               <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400 max-w-xl">
                  {description}
               </p>
               <div className="">
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white pt-6">
                     Assets:
                  </h3>
                     {files.map(item => (
                        displayFile(item)
                     ))}
               </div>
            </li>
         </ol>

   )
}

export default UnitTimelineItem;