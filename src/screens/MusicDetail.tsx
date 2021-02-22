import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  selectedMusic?: any;
};

const MusicDetail: React.FC<Props> = (props) => {
  const { selectedMusic } = props;
  let history = useHistory();

  if (!selectedMusic) {
    history.replace("/");
    return <div>Loading...</div>;
  }

  const millisToMinutesAndSeconds = (ms: number) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = parseInt(((ms % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  console.log({ selectedMusic });

  return (
    <div
      className="music-detail"
      style={{ backgroundImage: `url(${selectedMusic.artworkUrl100})` }}
    >
      <div className="detail-header">
        <div className="title-container">
          <h1>
            {selectedMusic.artistName} {selectedMusic.wrapperType}
          </h1>
          <p>From Apple Music</p>
        </div>
      </div>
      <div className="footer">
        <div>
          <div className="track-title-container">
            <h1>{selectedMusic.trackName}</h1>
            <p>{selectedMusic.artistName}</p>
          </div>
          <div className="stats-container">
            <div>
              <h6>Artwork</h6>
              <a href={selectedMusic.artworkUrl100}>Open URL</a>
            </div>
            <div>
              <h6>Release date</h6>
              <p>{selectedMusic.releaseDate}</p>
            </div>
            <div>
              <h6>Duration</h6>
              <p>{millisToMinutesAndSeconds(selectedMusic.trackTimeMillis)}</p>
            </div>
          </div>
        </div>
        <div>
          <p>Price</p>
          <h1>${selectedMusic.trackPrice}</h1>
          <Button
            onClick={() => {
              window.open(selectedMusic.trackViewUrl);
            }}
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

interface MusicState {
  music: {
    selected: any[];
  };
}

const mapStateToProps = ({ music }: MusicState) => ({
  selectedMusic: music.selected,
});

export default connect(mapStateToProps, null)(MusicDetail);
