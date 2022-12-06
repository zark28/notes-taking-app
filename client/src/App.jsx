import React ,{useState}from 'react'
import { useEffect } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import ViewNote from './components/ViewNote'
import { NoteData } from './context/noteDataContext'



const App = () => {
 const [noteData,setNoteData]=useState() 
 const [theme,setTheme]=useState()
 useEffect(()=>{
 
  setTheme(localStorage.getItem("theme"))
 
 },[])
 
 const handleThemeToggle=()=>{
  if(!theme){
    localStorage.setItem("theme","dark")

  }else{
    localStorage.setItem("theme","")
  }

  setTheme(localStorage.getItem("theme"))
 }
  return (
   <BrowserRouter>
    <NoteData.Provider value={{noteData,setNoteData}}>
    <div className={` transition-all duration-75 w-full h-full m-auto ${theme}`}>
    <Routes>
    <Route index element={<Home themeToggle={handleThemeToggle}/>}/>
    <Route path='/:noteId' element={<ViewNote/>}/>  
    </Routes>  
    </div>
   </NoteData.Provider>
   </BrowserRouter>
  
  )
}

export default App