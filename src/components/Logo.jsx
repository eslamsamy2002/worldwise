import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logoLink}>
      <img src="/logo.png" alt="TripWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;