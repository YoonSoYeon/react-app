import React from "react";
import { useNavigate } from "react-router-dom";

function Create(props) {
  const navigate = useNavigate();

  const onCreate = (event)=> {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const nextId = props.nextId;
     
    const newTopic = {id:props.nextId, title:title, body:body};
    const newTopics = [...props.topics];
    newTopics.push(newTopic);
    props.setTopics(newTopics);
    props.setId(nextId);
    props.setNextId(nextId+1);

    navigate('/');
  }
  
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={onCreate}>
        <p><input className="text-input" type="text" name="title" placeholder="title"></input></p>
        <p><textarea className="text-input" name="body" placeholder="body"></textarea></p>
        <p><input className="button" type="submit" value="Create"></input></p>
      </form>
    </article>
  )
}

export default Create;