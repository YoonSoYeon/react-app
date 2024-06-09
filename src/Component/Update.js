import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';

function Update(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state?.id;
  const [title, setTitle] = useState(location.state?.title);
  const [body, setBody] = useState(location.state?.body);

  const onUpdate = (event) => {
    event.preventDefault();

    const newTopics = [...props.topics];
    const updatedTopic = {id:id, title:title, body:body};

    for(let i=0; i<newTopics.length; i++) {
      if (newTopics[i].id === id) {
        newTopics[i] = updatedTopic;
        break;
      }
    }

    props.setTopics(newTopics);
    navigate('/');
  }
  return(
    <article>
      <h2>Update</h2>
      <form onSubmit={onUpdate}>
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