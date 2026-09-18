import React from 'react'

const NameCategory = ({title}) => {
  return (
    <div className="flex w-full flex-col items-start gap-2 xs:gap-3 sm:flex-row sm:items-center sm:gap-4 md:gap-10">
    <h2 className="text-xl font-medium text-black xs:text-2xl md:ml-10 md:text-3xl">
      {title}
    </h2>
 
  </div>  )
}

export default NameCategory