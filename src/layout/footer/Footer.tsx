import { Box } from "@mui/material"

//style
import "./Footer.css";

const Footer = () => (
  <Box className="footer">
    <a
      className="footer__link"
      href="https://github.com/dheerajmnnit"
      target="_blank"
      rel="noreferrer"
    >
      © {new Date().getFullYear()} @Dheeraj
    </a>
  </Box>
);

export default Footer;
