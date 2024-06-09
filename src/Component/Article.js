import React from "react";
import {useLocation, Link, useNavigate} from 'react-router-dom';

function Article(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state?.id;
  const title = location.state?.title ? location.state?.title : "Welcome";
  const body = location.state?.body ? location.state?.body : "Hello, WEB";

  const onDelete = (event) => {
    event.preventDefault();

    const newTopics = [];
    for(let i=0; i<props.topics.length; i++) {
      if (props.topics[i].id !== id) {
        newTopics.push(props.topics[i]);
      }
    }
    props.setTopics(newTopics);
    navigate('/');
  }
  
  return ( 
    <>
      <article>
        <h2>{title}</h2> 
        {body}
      </article>
      <ul>
        <li>
          <Link to='/create'>Create</Link>
        </li>
        {
          (()=> {
            if (id !== undefined) {
              return (
              <>
                <li>
                  <Link to={'/update/' + id} state={{id: id, title: title, body: body}}>Update</Link>
                </li>
                <li>
                  <input className="button" type="button" value="Delete" onClick={onDelete}></input>
                </li>
              </>);
            }
          })()
        }
      </ul>
    </>
  );
}

export default Article;