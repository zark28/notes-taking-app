import { useCallback, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { NoteData } from '../context/noteDataContext';
const useRequestResource = ({ endpoint='notes', body, noteId }) => {
  const URI = 'http://localhost:4000';
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState([]);
  const {noteData,setNoteData}=useContext(NoteData)
  const getResources = useCallback(() => {
    axios
      .get(`${URI}/${endpoint}`)
      .then((res) => {
        const data = res.data;
         setResources(data);  
         setNoteData(data)      
      })
      .catch((err) => console.error(err));
  }, [URI, endpoint]);
 
  const getOneResource = useCallback(() => {
    axios
      .get(`${URI}/${endpoint}/${noteId}`)

      .then((res) => {
        // console.log(noteId);
        const data = res.data;
        setResource(data);
      })
      .catch((err) => console.error(err));
  }, [endpoint, noteId]);


  const addResource = useCallback(() => {
    axios
      .post(`${URI}/${endpoint}`, {
        ...body,
      })
      .then((res) => {
        res.statusText==="Created"&&
        alert("Note Saved")
      })
      .catch((err) => console.error(err));
  }, [endpoint, body, URI]);


  const updateResource = useCallback(() => {
    axios
      .patch(`${URI}/${endpoint}/${noteId}`, { ...body })
      .then((res) => {
        console.log(res);
        res.statusText=="OK" &&
        alert("Note Updated")
       
      })
      .catch((err) => console.error(err));
  }, [endpoint, noteId, URI, body]);


  const deleteResource = useCallback(() => {
    axios
      .delete(`${URI}/${endpoint}/${noteId}`)
      .then((res) => {
        // console.log(res);
        alert(res.data?.message)
      })
      .catch((err) => console.error(err));
  }, [endpoint, URI, noteId]);

  return {
    resources,
    getResources,
    getOneResource,
    resource,
    addResource,
    updateResource,
    deleteResource,
  };
};

export default useRequestResource;