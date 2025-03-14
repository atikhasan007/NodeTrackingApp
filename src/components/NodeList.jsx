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
      <form onSubmit={submitHandler} className='form-d'>
        <input type='text'
        value={noteTitle}
        onChange={changeTitleHandler}
        className='input-d'
        />
        <button  className="form-btn" type='submit'>{editMode===true? "Update Node":"Add Node"}</button>
      </form>

<div className='second-div'>
  <h2>All Notes</h2>
  <ul> 
    {notes.map((note) => (
      <li className='list' key={note.id}> 
        <span className='spant'>
            {note.title}
            <div><button className='b2' onClick={() => editHandler(note)}>Edit</button>
            <button className="b1" onClick={() => removeHandler(note.id)}>Delete</button></div>
        </span>
      </li>
    ))}
  </ul>
</div>

    </div>
  )
}

export default NodeList;
