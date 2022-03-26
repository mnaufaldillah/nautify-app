import data from "./data";
import AlbumWrapper from "./albumwrapper";

const AlbumLoop = () => {
    return (
        <div>
            {
                data.map(({id, album, artists, name}) => (
                    <AlbumWrapper key={id} url={album.images[1].url} titleName={name} artistName={artists[0].name} albumName={album.name} />
                ))
            }
        </div>
    );
};

export default AlbumLoop;