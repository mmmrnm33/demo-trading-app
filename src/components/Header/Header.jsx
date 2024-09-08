import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            Demo Trading
          </Link>
          <ul className={styles.list}>
            <li className={styles.navItem}>
              <Link to="/trade/KRW-BTC" className={styles.navLink}>
                거래소
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                자산
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.authButtons}>
          <Link to="/" className={styles.loginButton}>
            로그인
          </Link>
          <Link to="/" className={styles.signupButton}>
            회원가입
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Header;
