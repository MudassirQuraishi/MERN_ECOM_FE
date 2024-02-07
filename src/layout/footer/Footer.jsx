import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from '../../assets/images/Big-Logo.png'
import classes from './Footer.module.css'
const Footer = () => {
    return <>
        <footer className={classes.footer}>
            <div className={classes["footer-logo"]}>
                <img src={logo} alt="" />
            </div>
            <ul className={classes["footer-links"]}>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Offline Stores</li>
                <li>Become a Seller</li>
            </ul>
            <div className={classes["footer-socials"]}>
                <div className={classes["social-icon"]}>
                    <TiSocialLinkedin className={classes.icon} />
                </div>
                <div className={classes["social-icon"]}>
                    <FaGithub className={classes.icon} />
                </div>
                <div className={classes["social-icon"]}>
                    <RiInstagramFill className={classes.icon} />
                </div>
            </div>
            <div className={classes["footer-copyright"]}>
                <hr />
                <p>CopyRight @2024</p>
            </div>
        </footer>
    </>
}
export default Footer