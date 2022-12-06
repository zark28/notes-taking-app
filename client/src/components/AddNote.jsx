import React, { useState } from 'react'
import useRequestResource from '../hooks/useRequestResources';

const AddNote = () => {
    const date=new Date()
    const [noteData,setNoteData]=useState({title:'',content:'',date:date.toLocaleDateString()})
    const {addResource} =useRequestResource({body:{...noteData}})
    const charLimit =200;
const handleChange=(event)=>{
    
        setNoteData({...noteData,[event.target.name]:event.target.value})
    
}


const handleAddNote=()=>{
    if(noteData.content?.trim().length>0){
        addResource()
    
    }else{
        alert('Note can not be empty')
    }
        setNoteData({title:'',content:'',date:''}); 
        window.location.reload()     
        
        
    }


  return (
    <div className="add-note bg-newNotesColor   gap-4 rounded-[10px] p-4 min-h-[170px] flex flex-col items-center justify-between" >
         <input  
         type="text" 
         name="title" 
         id="title" 
         placeholder='Add title here ..' 
         value={noteData.title?.toLocaleUpperCase()} 
         onChange={handleChange}
         className="w-full font-semibold border-b-2 focus:outline-none placeholder:text-buttonColor
         bg-newNotesColor"
         />
        <textarea 
        className=' w-full border-none resize-none focus:outline-none placeholder:text-buttonColor     bg-newNotesColor' name="content" id="" cols="10" rows="8" placeholder='Type to add a note....'
        onChange={handleChange}
        value={noteData.content}
        >

        </textarea>
        <div className="addnote-footer w-full flex items-center justify-between ">
            <small>{charLimit - (noteData.content?.length)}</small>
            <button onClick={handleAddNote} className='save hover:bg-opacity-70 transition-all duration-75 bg-buttonColor  border-none rounded-[15px] py-[5px] px-[10px] '>Save</button>
        </div>
    </div>
  )
}

export default AddNote