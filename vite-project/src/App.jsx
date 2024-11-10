// src/App.jsx
import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import hamburguerMenu from "./assets/menu-icon.png";
import discordBackground from "./assets/discord-background.png";

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <img src={discordLogo} alt="Discord Logo" className="imgLogo" />
          <img src={hamburguerMenu} alt="Hamburguer Menu" className="imgMenu" />
        </div>

        <div className="container">
          <h1>
            IMAGINE A<br />
            PLACE...
          </h1>
          <p>
            …where you can belong to a school club, a gaming group, or a<br />
            worldwide art community. Where just you and a handful of
            <br />
            friends can spend time together. A place that makes it easy to
            <br />
            talk every day and hang out more often.
          </p>
          <button className="button-1">Download for Mac</button>
          <button className="button-2">Open Discord in your browser</button>
        </div>
        <img
          src={discordBackground}
          alt="Discord Background"
          className="imgBackground"
        />
      </div>
    </>
  );
}

export default App;
