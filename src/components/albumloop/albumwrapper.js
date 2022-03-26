const AlbumWrapper = (props) => {
    return (
        <div>
            <img src={props.url} alt="" />
            <h3>{props.titleName}</h3>
            <p>{props.artistName}</p>
            <p>{props.albumName}</p>
        </div>
    );
};

export default AlbumWrapper;