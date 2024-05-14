import React from "react";

function Create(props) {
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={(event)=> {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input className="text-input" type="text" name="title" placeholder="title"></input></p>
        <p><textarea className="text-input" name="body" placeholder="body"></textarea></p>
        <p><input className="button" type="submit" value="Create"></input></p>
      </form>
    </article>
  )
}

export default Create;