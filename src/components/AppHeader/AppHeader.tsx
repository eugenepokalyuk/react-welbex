import styles from './AppHeader.module.css';

import { ReactComponent as Logo } from '../../images/logo_welbex.svg';
import { ReactComponent as TelegramIcon } from '../../images/telegram.svg';
import { ReactComponent as ViberIcon } from '../../images/viber.svg';
import { ReactComponent as WhasappIcon } from '../../images/whatsapp.svg';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Logo />
            <p className={styles.logoText}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
          </li>
        </ul>

        <ul className={styles.list}>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Виджеты</a></li>
          <li><a href="#">Интеграции</a></li>
          <li><a href="#">Кейсы</a></li>
          <li><a href="#">Сертификаты</a></li>
        </ul>

        <div className={styles.list}>
          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <ul className={styles.list}>
            <li><a href="#"><TelegramIcon /></a></li>
            <li><a href="#"><ViberIcon /></a></li>
            <li><a href="#"><WhasappIcon /></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default AppHeader;