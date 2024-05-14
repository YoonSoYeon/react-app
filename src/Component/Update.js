import React, {useState} from "react";

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return(
    <article>
      <h2>Update</h2>
      <form onSubmit={(event)=> {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input className="text-input" type="text" name="title" placeholder="title" value={title} onChange={(event)=> {
          setTitle(event.target.value);
        }}></input></p>
        <p><textarea className="text-input" name="body" placeholder="body" value={body} onChange={(event) => {
          setBody(event.target.value);
        }}></textarea></p>
        <p><input className="button" type="submit" value="Update"></input></p>
      </form>
    </article>
  )
}

export default Update;