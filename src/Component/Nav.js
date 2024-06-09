import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
  const lis = [];

  for(let i=0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <Link key={t.id} to={"/read/" + t.id} state={{id: t.id, title: t.title, body: t.body}}>
        <li>
          {t.title}
        </li>
      </Link>
    );
  }

  return (
    <>
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    </>
  );
}

export default Nav;