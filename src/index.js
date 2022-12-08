import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';

const imgRole = "img"
// Component
function Button(props) {
  return (
    <button>
      <span role={imgRole}>{props.img}</span>
      {props.text}
    </button>
  )
}
// Component
function Subheading(props) {
  return (
    <>
      <h2>{props.text}</h2>
    </>
    
  )
}
// Component
function Header(props) {
  return (
    <header>
        <h1>{props.heading}</h1>
        <nav>
          <Button img="👤" text="Login" />
        </nav>
      </header>
  )
}
// Component
function Card(props) {
  return (
    <div className="card">
      <Subheading text={props.text}/>
      {props.children}
    </div>
  )
}


// Component
function Main() {
  return (
    <main>
        {/* <div className="card">
          <Subheading text="Welcome to PetLand!"/>
          <em>Find your dream pet</em>
        </div> */}
        <Card text="Welcome to PetLand!">
          <em>Find your dream pet</em>
        </Card>
        <div className="card">
          <Subheading text="What pets would you like to see?" />
          <div>
            <Button img="😸" text="Cats"/>
            <Button img="🐕" text="Dogs"/>
          </div>
        </div>
      </main>
  )
}

function App() {
  return (
    <div>
      <Header heading="Pet Land"/>
      <Main />
      {/* <header>
        <h1>PetLand</h1>
        <nav>
          <button>
            <span role="img">👤</span>
            Login
          </button>
        </nav>
      </header> */}
      {/* <main>
        <div className="card">
          <h2>Welcome to PetLand!</h2>
          <em>Find your dream pet</em>
        </div>
        <div className="card">
          <h2>What pets would you like to see?</h2>
          <div>
            <button>
              <span role="img">😸</span>
              Cats
            </button>
            <button>
              <span role="img">🐕</span>
              Dogs
            </button>
          </div>
        </div>
      </main> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
