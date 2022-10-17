import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const user = {
    firstName : 'Lance',
    lastName : 'Richter'
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const reactLink = <a href="http://www.reactjs.org" target="_blank">link</a>
const reactLinkBlock = <h2>Here's a fancy react {reactLink}</h2>

const element = (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      {reactLinkBlock}
    </div>
  );

function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            {reactLinkBlock}
        </div>
    );
}

function App() {
    return (
        <div>
            <Welcome name="Nandor"/>
            <Welcome name="Laszlo"/>
            <Welcome name="Nadja"/>
        </div>
    );
}

// Comment multi-layered component example

function formatDate(date) {
    return date.toLocaleDateString();
  }

function Avatar(props) {
    return (
      <img className="Avatar"
           src={props.user.avatarUrl}
           alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
}

const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
        name: "Jackie Daytona",
        avatarUrl: "https://pyxis.nymag.com/v1/imgs/d09/2a2/37120107261abbf22c80132cde0e11600f-what-we-do-in-the-shadows.rsquare.w700.jpg"
    }
};

                
const root = ReactDOM.createRoot(document.getElementById('root'));
const element2 = <Welcome name="Lance Richter" />;
const elem3 = <App/>
root.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />
);

/* function tick() {
    const worldTime = (
        <div>
            <h1>Hello, {formatName(user)}</h1>
            {reactLinkBlock}
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    root.render(worldTime);
} 
setInterval(tick, 1000);*/