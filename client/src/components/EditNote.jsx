import React, { useState } from 'react'

const EditNote = ({handleAddNote}) => {
    const [noteData,setNoteData]=useState()
    const charLimit =200;
const handleChange=(event)=>{
    if(charLimit-event.target.value.length>=0){

        setNoteData(event.target.value)
    }
}

const handleSaveClick=()=>{
    if(noteData.trim().length>0){

        handleAddNote(noteData)
        setNoteData('');        
    }
}

  return (
    <div className="add-note bg-newNotesColor rounded-[10px] p-4 min-h-[170px] flex flex-col items-center justify-between" >
        {/* <title> <input type="text" name="note-title" id="" placeholder='Add title here' /> </title> */}
        <textarea 
        className=' w-full border-none resize-none focus:outline-none 
        bg-newNotesColor' name="note" id="" cols="10" rows="8" placeholder='Type to add a note'
        onChange={handleChange}
        value={noteData}
        >

        </textarea>
        <div className="addnote-footer w-full flex items-center justify-between ">
            <small>{charLimit- noteData?.length} remaining</small>
            <button onClick={handleSaveClick} className='save hover:bg-opacity-70 transition-all duration-75 bg-buttonColor border-none rounded-[15px] py-[5px] px-[10px] '>Save</button>
        </div>
    </div>
  )
}

export default EditNote