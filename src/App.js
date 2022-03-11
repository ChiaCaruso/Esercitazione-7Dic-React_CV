import footer from './footer.png';
import avatar from './AvatarMaker.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cooding Bootcamp - Edgemony</h1>
        <h2>Esercizio 7 Dicembre 2021</h2>
      </header>

      <div className="App-presentation">
        <img src={avatar} alt="avatar" className="App-avatar" width="200" height="200" />
        <h2>Chiara Caruso</h2>
      </div>

      <div className="App-description box">
        <h3>Descrizione</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus semper maximus. Praesent feugiat, dui nec aliquam porttitor, ligula est rutrum tortor, quis consequat felis magna in velit. Nullam at quam sagittis, viverra nunc vitae, volutpat elit. Quisque et urna vulputate, vehicula diam sed, tempus leo. Cras porttitor, arcu ac rhoncus consectetur, enim nulla tempor velit, id consectetur est enim pulvinar dui. Nullam quis ultrices nunc, eleifend placerat elit. Proin ac augue facilisis, laoreet ex et, bibendum enim. Phasellus nibh dolor, fringilla sit amet lectus sed, scelerisque consectetur quam.</p>
      </div>

      <div className="App-skills">
        <div className="skills box">
          <h3>Esperienze lavorative</h3>
          <p>Etiam eu porttitor sapien. Ut ornare tortor id sapien auctor finibus. Aenean elementum mattis ipsum ut scelerisque. Nullam id lacus felis. Integer nec justo erat. Proin augue lacus, placerat id mollis vel, pharetra ut enim. In malesuada tortor sed est tempor, imperdiet tempor enim egestas. Mauris non aliquam dui.</p>
        </div>
        <div className="skills box">
          <h3>Lingue</h3>
          <p>Etiam eu porttitor sapien. Ut ornare tortor id sapien auctor finibus. Aenean elementum mattis ipsum ut scelerisque. Nullam id lacus felis. Integer nec justo erat. Proin augue lacus, placerat id mollis vel, pharetra ut enim. In malesuada tortor sed est tempor, imperdiet tempor enim egestas. Mauris non aliquam dui.</p>
        </div>
        <div className="skills box">
          <h3>Hobby</h3>
          <p>Etiam eu porttitor sapien. Ut ornare tortor id sapien auctor finibus. Aenean elementum mattis ipsum ut scelerisque. Nullam id lacus felis. Integer nec justo erat. Proin augue lacus, placerat id mollis vel, pharetra ut enim. In malesuada tortor sed est tempor, imperdiet tempor enim egestas. Mauris non aliquam dui.</p>
        </div>
      </div>

      <div className="App-form box">
        <h3>Contattami</h3>
        <form>
          <label for="object">Ogetto</label>
          <input type="text" id="object" name="object" />
          <label for="message">Messaggio</label>
          <textarea id="message" name="message" />
          <button id="btnSend" className="btn" type="button">INVIA</button>
        </form>
      </div>

      <footer className="App-footer">
        <img src={footer} alt="logo" className="App-footer-img" width="30" height="30" />
        <p>Designed by Chiara Caruso</p>
      </footer>
    </div>
  );
}

export default App;
