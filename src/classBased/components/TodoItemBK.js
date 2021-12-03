import React from "react"
import styles from "./TodoItem.module.css"


function TodoItem(props){

    function handleEditing(){
        console.log("edit mode activated")
    }
    
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

      const {completed, id, title} = props.todo;
      
     

return <li  className={styles.item}>
    <div onDoubleClick={handleEditing()}>
    <input
    className={styles.checkbox}
    checked={completed}
    onChange={()=> props.handleChangeProps(id)} 
    type="checkbox" />
    <button onClick={() => props.deleteTodoProps(id)} >Delete</button>
    <span style={completed ? completedStyle : null}>{title}</span>
    </div>
</li>;
}

export default TodoItem