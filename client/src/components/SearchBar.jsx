
import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchBar = ({searchNote}) => {
  return (
    <div className='search flex items-center bg-buttonColor  rounded-[10px] p-[5px] mb-[1.5rem]  '>
        <MdSearch className='search-icon dark:text-bgColor-dark mr-2' size='1.3em'/>
        <input onChange={(event)=>searchNote(event.target.value)} className='  flex-1 focus:outline-none border-none bg-buttonColor'  type='text' placeholder='type to search ..'/>
    </div>
  )
}

export default SearchBar