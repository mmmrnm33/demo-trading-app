import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { CgProfile } from "react-icons/cg";

const Header = ({ children }) => {
  const [user, setUser] = useState(null);
  const [nickname, setNickname] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);

        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setNickname(userData.nickname);
        }
      } else {
        setUser(null);
        setNickname("");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    auth.signOut();
    setShowDropdown(false);
  };

  if (loading) {
    return null;
  }

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
          </ul>
        </nav>
        <div className={styles.authButtons}>
          {user ? (
            <div className={styles.userInfo} onClick={toggleDropdown}>
              <CgProfile className={styles.profileIcon} />
              {showDropdown && (
                <div className={styles.dropdownMenu}>
                  <p className={styles.dropdownItem}>{nickname}</p>
                  <p className={styles.dropdownItem} onClick={handleLogout}>
                    로그아웃
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className={styles.loginButton}>
                로그인
              </Link>
              <Link to="/signup" className={styles.signupButton}>
                회원가입
              </Link>
            </>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Header;
