import React, {useState} from 'react';

export default function Todo (props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    function handleChange(e){
        setNewName(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }
    const editingTemplate = (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={props.id}>
              New name for {props.name}
            </label>
            <input id={props.id} type="text" />
          </div>
          <div>
            <button onClick={() => setEditing(false)} type="button">
              Cancel
              <span> renaming {props.name}</span>
            </button>
            <button type="submit">
              Save
              <span> new name for {props.name}</span>
            </button>
          </div>
        </form>
      );
      const viewTemplate = (
          <>
        <div>
            <input onChange={handleChange} id={props.id} type="checkbox" defaultChecked={props.check}/>
            {props.name}
            </div>
            <div>
                <button onClick={() => setEditing(true)} type="button">Edit</button>
                <button onClick={() => props.deleteTask(props.id)} type="button">Delete</button>
            </div>
            </>
      );
      
    return<li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}