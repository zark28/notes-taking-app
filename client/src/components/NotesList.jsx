import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({notes}) => {
  
  
   
  return (
    <main className='notes-list w-full grid gap-4 grid-cols-autonotes'>
    { notes?.map((note, i)=>(
    <Note 
    key={i} 
    id={note._id} 
    title={note.title}
    content={note.content} 
    date={note.date}
   
    />
        ))}

    <AddNote />
   
    </main>
  )
}

export default NotesList