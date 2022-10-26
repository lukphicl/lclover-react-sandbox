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

                
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

// Converting Component/Function to Class
/* class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return(
      <div>
        <h1>Hello, {formatName(user)}!</h1>
        <FormattedDate date={this.state.date}/>
      </div>
    );
  }
} */

// Handling Events

/* class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state={isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoggingButton extends React.Component {

  //binds 'this' to handleClicn
  handleClick = () => {console.log('this is: ', this);};

  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me!!!
      </button>
    );
  }
} */

// Conditional Rendering

/* function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );
  }

}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'HIDE' : 'SHOW'}
        </button>
      </div>
    );
  }
} */

// Lists and Keys

const numbers = [1,2,3,4,5,6];
const listItems = numbers.map((number) => <li>{number}</li>);
const listObject = <ul>{listItems}</ul>;

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const elem = <NumberList numbers={numbers}/>;
root.render(elem);

//setInterval(tick, 1000);

//const element2 = <Welcome name="Lance Richter" />;
//const elem3 = <App/>

//root.render(elem3);
/* root.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />
); */

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