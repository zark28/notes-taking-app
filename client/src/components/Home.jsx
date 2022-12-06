import React ,{useState,useEffect } from 'react'
import NotesList from './NotesList'
import SearchBar from './SearchBar'
import Header from './Header'
import useRequestResource from '../hooks/useRequestResources'

const Home = () => {

  
  const {getResources,resources} =useRequestResource({})
  useEffect(()=>{
    getResources()
   
  },[])

  const [searchText,setSearchText]=useState('')

console.log(resources);

  return (
    <div className='w-full flex flex-col  m-auto px-[15px] py-10 relative '>
        <div className='w-full flex flex-col sticky top-0 bg-[white] z-50 '>
        <Header btnText='Toggle Mode'/>
          <SearchBar searchNote={setSearchText}/>
        </div>
            <NotesList 
            notes={resources.notes?.filter((note)=>note.content.toLowerCase().includes(searchText)||note.title.toLocaleLowerCase().includes(searchText) )} 
            /> 
           
    </div>
  )
}

export default Home