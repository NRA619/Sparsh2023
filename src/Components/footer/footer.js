import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div id="main-footer">
        <motion.div
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              x: -120,
              position: "absolute",
              default: "easeIn"
            },
            visible: {
              opacity: 1,
              x: 0,
              position: "relative",
              default: "easeIn"
            },
          }}
          whileInView="visible"
          transition={{
            duration: "2",
          }}
          className="footer-left-container"
        >
          <span className="sparsh">
            <img src="./Sparsh_Theme_Logo.png" height="100%" width="100%"></img>
          </span>
        </motion.div>
        <div className="footer-right-container">
          <div className="footer-right-container-child">
            <div className="footer-right-container-child-childrens">
              <span>About us</span>
              <span>Campus Ambassador</span>
              <span>Our Sponsors</span>
              <span>Contact US</span>
            </div>
          </div>
          <div className="footer-right-container-child2">
            <div className="footer-right-container-child2-childrens">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
