import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Header() {
  return (
    <header>
        <h1>PetLand</h1>
        <nav>
          <button>
            <span role="img">👤</span>
            Login
          </button>
        </nav>
      </header>
  )
}


function App() {
  return (
    <div>
      <Header />
      {/* <header>
        <h1>PetLand</h1>
        <nav>
          <button>
            <span role="img">👤</span>
            Login
          </button>
        </nav>
      </header> */}
      <main>
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
      </main>
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
