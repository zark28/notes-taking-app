import React ,{useState}from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import ViewNote from './components/ViewNote'
import { NoteData } from './context/noteDataContext'



const App = () => {
 const [noteData,setNoteData]=useState() 
  return (
   <BrowserRouter>
    <NoteData.Provider value={{noteData,setNoteData}}>
    <div className='container m-auto '>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/:noteId' element={<ViewNote/>}/>  
    </Routes>  
    </div>
   </NoteData.Provider>
   </BrowserRouter>
  
  )
}

export default App