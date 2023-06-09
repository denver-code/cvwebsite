import React from 'react';

function Title({ children, id }) {
   return (
      <h1
         id={id && id}
         className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-2 text-stone-900 dark:text-white"
      >
         &lt;{children} /&gt;
      </h1>
   )
}

export default Title;