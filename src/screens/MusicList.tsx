import React, { useEffect } from "react";
import { MUSIC_ICON } from "../theme/Icons";
import { connect } from "react-redux";
import { addMusic, selectedMusic } from "../redux/music/actions";
import { useHistory } from "react-router-dom";
import ListingMusic from "../components/MusicListItem";
import MusicData from "../mock/MusicData";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  musicData: any[];
  reduxSaveMusicList: any;
  reduxSaveSelectedMusic: any;
};

const MusicList: React.FC<Props> = ({
  musicData,
  reduxSaveMusicList,
  reduxSaveSelectedMusic,
}) => {
  let history = useHistory();

  useEffect(() => {
    if (!musicData || musicData.length === 0) {
      reduxSaveMusicList(MusicData.results);
    }
  });

  return (
    <div className="container">
      <div
        className="header"
        style={{
          backgroundImage: `URL(${MUSIC_ICON})`,
          justifyContent: "center",
          alignItems: "center",
          height: "15%",
          display: "flex",
          marginBottom: 10,
        }}
      >
        <p>Rock Tracks</p>
        <p>From Apple Music</p>
      </div>
      <div className="list-container">
        {musicData.map((item, i) => (
          <ListingMusic
            item={item}
            onClick={() => {
              reduxSaveSelectedMusic(item);
              history.push("/music-detail");
            }}
          />
        ))}
      </div>
    </div>
  );
};

interface MusicState {
  music: {
    list: any[];
  };
}

const mapStateToProps = ({ music }: MusicState) => {
  return {
    musicData: [...music.list],
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  reduxSaveMusicList: (data: any) => dispatch(addMusic(data)),
  reduxSaveSelectedMusic: (data: any) => dispatch(selectedMusic(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
