import React from 'react'
import "./Note.css"
import {MdDeleteForever} from "react-icons/md"
import useRequestResource from '../hooks/useRequestResources'
import { Link } from 'react-router-dom'
const Note = ({id,content,title,date}) => {
  const {deleteResource}=useRequestResource({noteId:id})
  // delete a note
  const handleDelete=()=>{
   deleteResource()
 window.location.reload()
  }
  return (
    <div className='w-full h-full transform hover:scale-[101%] duration-75  note bg-notesColor rounded-[10px] p-4 min-h-[170px] flex flex-col items-center justify-between'>
       <h2     
         className="w-full font-semibold border-b-2 focus:outline-none 
         " > 
         {title.toLocaleUpperCase()} 
         </h2>
         <Link to={`/${id}`} className='whitespace-pre-wrap note-content relative w-full flex flex-1 cursor-pointer  pt-4 overflow-hidden max-h-[200px]'>
      
          <span className='popup h-full w-full bg-notesColor bg-opacity-75 transition-all duration-75 flex items-center z-10 justify-center  absolute '>
            <button className='save hover:bg-opacity-70 transition-all duration-75 bg-buttonColor h-fit w-fit border-none rounded-[15px] py-[5px] px-[10px]'>View Notes</button>
            </span>
          {content}
    </Link>
        <div className='note-footer w-full flex items-center justify-between z-10'>
            <small>{date}</small>
            <MdDeleteForever onClick={handleDelete} className=' delete-icon cursor-pointer  hover:text-[red] ' size="1.3em" />
        </div>
    </div>

  )
}

export default Note