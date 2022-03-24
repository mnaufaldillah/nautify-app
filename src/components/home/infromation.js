const Information = (props) => {
    return (
        <div>
            <h3>{props.titleName}</h3>
            <p>{props.artistName}</p>
            <p>{props.albumName}</p>

            <input type="button" value="Select" />
        </div>
    );
};

export default Information;