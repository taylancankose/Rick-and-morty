import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import PublicIcon from "@mui/icons-material/Public";
import { CharacterType } from "../../types/types";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import "./card.css";

function CharCard({ char }: CharacterType) {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <div
      key={char?.id}
      className="card_container"
      style={{ backgroundColor: colors.gray90 }}
    >
      <img src={char?.image} height={200} className="card_image" />
      <div
        className="card_body"
        style={{
          color: colors.gray0,
        }}
      >
        <p className="card_title">{char?.name}</p>
        <div className="card_icon_container">
          <MonitorHeartIcon fontSize="small" />
          <p className="card_status">{char?.status}</p>
        </div>
        <div className="card_icon_container">
          <PsychologyAltIcon fontSize="small" />
          <p className="card_status">{char?.species}</p>
        </div>
        <div className="card_icon_container">
          <PublicIcon fontSize="small" />
          <p className="card_status">{char?.origin.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CharCard;
