import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Logo />
      <button
        className={styles.menuBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <ul
  className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}
  role="menu"
>
  <li>
    <NavLink to="/pricing" onClick={() => setIsOpen(false)}>
      Pricing
    </NavLink>
  </li>

  <li>
    <NavLink to="/product" onClick={() => setIsOpen(false)}>
      Product
    </NavLink>
  </li>

  <li>
    <NavLink to="/login" onClick={() => setIsOpen(false)}>
      Login
    </NavLink>
  </li>
</ul>
    </nav>
  );
}

export default PageNav;
