import logo from './logo.svg';
import './App.css';
import data from './data';
import Image from './components/home/image';
import Information from './components/home/infromation';
import AlbumLoop from './components/albumloop/albumloop';

const spotify_secret_key = process.env.SPOTIFY_KEY;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="playlist" class="contact-playlist">
          <Image url={data.album.images[1].url} />
          <Information titleName={data.name} artistName={data.artists[0].name} albumName={data.album.name} />
          <AlbumLoop />
        </div>
      </header>
    </div>
  );
}

export default App;
