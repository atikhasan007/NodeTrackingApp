import React, { useState } from 'react';

const NodeList = () => {

const [noteTitle, setNodeTitle] = useState('');
const [notes, setNotes] = useState([
    {
        id: 1 , 
        title: 'Note 1'
    }
])

const changeTitleHandler = (e) =>{
  setNodeTitle(e.target.value);



}

const submitHandler = (e) =>{
    
    e.preventDefault();

    if(noteTitle.trim() === ""){
        return alert(`Please provide a valid title`)
      }


      const newNode = {
        id:  Date.now() + "",
        title: noteTitle
      }

      setNotes([...notes, newNode])
      setNodeTitle("")

}

  return (
    <div className='App' >
      <form onSubmit={submitHandler}>
        <input type='text'
        value={noteTitle}
        onChange={changeTitleHandler}
        />
        <button type='submit'>Add Node</button>
      </form>

      <div>
         <h2>All Node</h2>
         {
            notes.map((note)=>(
                <ul>
                    <li key={note.id}>
                        <span>
                            {note.title}
                            <button>Edit</button>
                            <button >Delete</button>
                        </span>
                    </li>
                </ul>
            ))

         }
      </div>
    </div>
  )
}

export default NodeList
