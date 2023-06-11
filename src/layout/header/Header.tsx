import { Box } from "@mui/material"
import { useHistory } from "react-router-dom";

//style
import "./Header.css";

const Header = () => {
  const history = useHistory();
  return (
    <Box className="header">
      <h1 onClick={() => history.push(`/`)} className="header__logo">
        Rick Morty App
      </h1>
    </Box>
  );
};

export default Header;
