import logo from './logo.svg';
import './App.css';
import data from './data';

const spotify_secret_key = process.env.SPOTIFY_KEY;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="playlist" class="contact-playlist">
          <img src={data.album.images[1].url} alt="" />
          <h3>{data.name}</h3>
          <p>{data.artists[0].name}</p>
          <p>{data.album.name}</p>

          <input type="button" value="Select" />
        </div>
      </header>
    </div>
  );
}

export default App;
