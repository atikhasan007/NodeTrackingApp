import React, { useState } from 'react';

const NodeList = () => {

const [noteTitle, setNodeTitle] = useState('');
const [notes, setNotes] = useState([
    {
        id: 1 , 
        title: 'Note 1'
    }
])
const [editMode, setEditMode] = useState(false);
const [editableNode, setEditableNode] = useState(null); // type of null is object 





const changeTitleHandler = (e) =>{
  setNodeTitle(e.target.value);
}



const submitHandler = (e) =>{
    
    e.preventDefault();

    if(noteTitle.trim() === ""){
        return alert(`Please provide a valid title`)
      }


    editMode ? updateHandler() : createHandler();
}



const createHandler = ()=>{ 
    const newNode = {
        id:  Date.now() + "",
        title: noteTitle
      }

      setNotes([...notes, newNode])
      setNodeTitle("")
 

}



const removeHandler = (noteId) =>{

    const updateNode = notes.filter((item) => item.id !== noteId)
    setNotes(updateNode)

}

const editHandler = (note) => {
  setEditMode(true);
  setEditableNode(note);
  setNodeTitle(note.title)
}



const updateHandler = () => {
   const updateNodes = notes.map(item =>{
    if(item.id === editableNode.id){
        return {...item, title: noteTitle}
    }

    return item;

   })
   setNotes(updateNodes);
   setEditMode(false);
   setNodeTitle("")
}


  return (
    <div className='App' >
      <form onSubmit={submitHandler}>
        <input type='text'
        value={noteTitle}
        onChange={changeTitleHandler}
        />
        <button type='submit'>{editMode===true? "Update Node":"Add Node"}</button>
      </form>

      <div>
  <h2>All Notes</h2>
  <ul> 
    {notes.map((note) => (
      <li key={note.id}> 
        <span>
          {note.title}
          <button onClick={() => editHandler(note)}>Edit</button>
          <button onClick={() => removeHandler(note.id)}>Delete</button>
        </span>
      </li>
    ))}
  </ul>
</div>

    </div>
  )
}

export default NodeList
