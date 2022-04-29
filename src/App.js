/* eslint-disable */

import { useState } from "react";
import "./App.css";

// let post = "Nice restos in Gangnam";

function App() {
  let [title, setTitle] = useState([
    "Best men's jackets",
    "Popular restos in Seoul",
    "About Python",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [date, setDate] = useState([
    "Sat Feb 12 2022",
    "Sun Mar 13 2022",
    "Fri Apr 1 2022",
  ]);
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0);
  let [input, setInput] = useState("");
  let [dateIndex, setDateIndex] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitleIndex(i);
                setDateIndex(i);
              }}
            >
              {a}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copyLike = [...like];
                  copyLike[i] = copyLike[i] + 1;
                  setLike(copyLike);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>{date[i]}</p>
            <button
              onClick={() => {
                let copyTitle = [...title];
                copyTitle.splice(i, 1);
                setTitle(copyTitle);

                let copyLike = [...like];
                copyLike.splice(i, 1);
                setLike(copyLike);

                let copyDate = [...date];
                copyDate.splice(i, 1);
                setDate(copyDate);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (input !== "") {
            let copyTitle = [...title];
            copyTitle.push(input);
            setTitle(copyTitle);

            console.log(like);
            let copyLike = [...like];
            copyLike.push(0);
            setLike(copyLike);

            let day = new Date();
            let today = day.toDateString();
            console.log(today);
            let copyDate = [...date];
            copyDate.push(today);
            setDate(copyDate);
          }
        }}
      >
        Add
      </button>
      {modal == true ? (
        <Modal
          title={title}
          setTitle={setTitle}
          titleIndex={titleIndex}
          date={date}
          dateIndex={dateIndex}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.titleIndex]}</h4>
      <p>{props.date[props.dateIndex]}</p>
      <p>Detail</p>
      {/* <button
        onClick={() => {
          let copyTitle = [...props.title];
          copyTitle[0] = "Best women's jackets";
          props.setTitle(copyTitle);
        }}
      >
        Update
      </button> */}
    </div>
  );
}

export default App;
