import React ,{useState,useEffect } from 'react'
import NotesList from './NotesList'
import SearchBar from './SearchBar'
import Header from './Header'
import useRequestResource from '../hooks/useRequestResources'

const Home = ({themeToggle}) => {

  
  const {getResources,resources} =useRequestResource({})
  useEffect(()=>{
    getResources()
   
  },[])

  const [searchText,setSearchText]=useState('')

// console.log(resources);

  return (
    <div className='dark:bg-bgColor-dark w-full h-[100vh] flex flex-col  px-[15px] py-10  relative '>
        <div className='w-full flex flex-col sticky top-0 bg-[white] dark:bg-bgColor-dark z-50 '>
        <Header onclick={themeToggle} btnText='Toggle Mode'/>
          <SearchBar searchNote={setSearchText}/>
        </div>
            <NotesList 
            notes={resources.notes?.filter((note)=>note.content.toLowerCase().includes(searchText)||note.title.toLocaleLowerCase().includes(searchText) )} 
            /> 
           
    </div>
  )
}

export default Home