import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {MdDeleteForever} from "react-icons/md"
import { useNavigate, useParams } from 'react-router-dom'
import { NoteData } from '../context/noteDataContext'
import useRequestResource from '../hooks/useRequestResources'
import Header from './Header'
const ViewNote = () => {
  const params=useParams()
  const {noteId}=params
  
  const [readOnly,setReadOnly]=useState(true)
  const [newNoteData,setNewNoteData]=useState({})
  const {noteData,setNoteData}=useContext(NoteData)
  const {deleteResource,updateResource,getResources}=useRequestResource({
    noteId:noteId,
    body:newNoteData
  })
 
  const navigate =useNavigate()
 
    const activeNote =noteData?.notes?.find((note)=>note._id===noteId)
  

  const handleChange=(event)=>{
    
    if(!readOnly){
      setNewNoteData({...newNoteData,[event.target.name]:event.target.value})
    }
    
}
useEffect(()=>{
     getResources()
  
},[])

console.log(newNoteData);
// console.log(resources);

const handleEditNote=()=>{
  setReadOnly(!readOnly)
  setNewNoteData(activeNote)
}
const handleSaveNote=()=>{
  updateResource()
  console.log(newNoteData);
}

//delete note
const handleDelete=()=>{
  deleteResource()
navigate('/')
 }

  return (
    <div>
     <Header onclick={()=>navigate('/')} btnText='Back to Notes'/>
      <div className="add-note bg-newNotesColor gap-4 rounded-[10px] p-4 min-h-[170px] flex flex-col items-center justify-between" >
    <input  
    type="text" 
    name="title" 
    id="title" 
    readOnly={readOnly}
    placeholder='Add title here ..' 
    value={ readOnly? activeNote?.title?.toLocaleUpperCase():newNoteData?.title.toLocaleUpperCase()} 
    onChange={handleChange}
    className="w-full font-semibold border-b-2 focus:outline-none 
    bg-newNotesColor"
    />
   <textarea 
   className=' w-full border-none resize-none focus:outline-none 
   bg-newNotesColor' name="content" id="" cols="10" rows="8" placeholder='Type to add a note....'
   onChange={handleChange}
   value={readOnly? activeNote?.content:newNoteData?.content}
   readOnly={readOnly}
   >

   </textarea>
   <div className="addnote-footer w-full flex items-center justify-between ">
       <MdDeleteForever onClick={handleDelete} className=' delete-icon cursor-pointer z-10 hover:text-[red] ' size="1.3em" />
      <span className='flex items-center justify-center gap-4'>

       <button onClick={handleEditNote} className='save hover:bg-opacity-70 transition-all duration-75 bg-notesColor border-none rounded-[15px] py-[5px] px-[10px] '> {`${readOnly?"Enable Edit":"Disable Edit"}`}</button>
       <button onClick={handleSaveNote} className='save hover:bg-opacity-70 transition-all duration-75 bg-buttonColor border-none rounded-[15px] py-[5px] px-[10px] '>Save</button>
      </span>
        </div>
    </div>
    </div>
    
  )
}

export default ViewNote