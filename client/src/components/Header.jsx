import React from 'react'

const Header = ({onclick,btnText}) => {
  return (
    <div className='header w-full flex items-center justify-between dark:text-text-dark my-5'>
        <h1>KNotes App</h1>
        <button onClick={onclick} className='hover:bg-opacity-70 transition-all duration-75 bg-buttonColor dark:bg-bgColor-dark dark:text-text-dark dark:border-2 dark:border-text-dark  rounded-[15px] py-[5px] px-[10px]'>{btnText}</button>
        </div>
  )
}

export default Header