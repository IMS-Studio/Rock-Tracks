import React from "react";
import Button from "./Button";

type Props = {
  item?: any;
  onClick?: any;
};

const MusicListItem: React.FC<Props> = ({ item, onClick }) => {
  return (
    <div className="list-item">
      <img src={item.artworkUrl30} alt="artwork" />
      <div className="info">
        <h4 className="h4">{item.trackName}</h4>
        <p className="artist-name">{item.artistName}</p>
        <a href={item.artworkUrl100}>
          <small>Artwork URL</small>
        </a>
      </div>
      <p className="price">${item.trackPrice}</p>

      <Button onClick={onClick}>Open</Button>
    </div>
  );
};

export default MusicListItem;
