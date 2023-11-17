import TwitterIcon from '../assets/img/Twitter Icon.png'
import FacebookIcon from '../assets/img/Facebook Icon.png'
import InstagramIcon from '../assets/img/Instagram Icon.png'
import GithubIcon from '../assets/img/GitHub Icon.png'
import styles from '../assets/styles/Footer.module.css'

const Footer = function () {
  return (
    <footer className={styles.footer}>
      <img className={styles.icon} src={TwitterIcon} alt="Twitter Icon" />
      <img className={styles.icon} src={FacebookIcon} alt="Facebook Icon" />
      <img className={styles.icon} src={InstagramIcon} alt="Instagram Icon" />
      <img className={styles.icon} src={GithubIcon} alt="GitHub Icon" />
    </footer>
  )
}

export default Footer;