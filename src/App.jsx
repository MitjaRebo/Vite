import * as React from "react";

const list = [
  {
    title: "React",
    url: "https://react.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

function App() {
  return (
    <div>
      <h1> My hacker story </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {list.map((i) => (
          <li key={i.objectID}>
            <span>
              <a href={i.url}>{i.title} </a>
            </span>
            <span>{i.author} </span>
            <span>{i.num_comments} </span>
            <span>{i.points} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
