import styles from './AppFooter.module.css';

import { ReactComponent as TelegramIcon } from '../../images/telegram.svg';
import { ReactComponent as ViberIcon } from '../../images/viber.svg';
import { ReactComponent as WhasappIcon } from '../../images/whatsapp.svg';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>

        <div className={styles.card}>
          <h2>О компании</h2>
          <ul>
            <li><a href="#">Партнёрская программа</a></li>
            <li><a href="#">Вакансии</a></li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Меню</h2>
          <div className={styles.grid}>
            <ul>
              <li><a href="#">Расчёт стоимости</a></li>
              <li><a href="#">Услуги</a></li>
              <li><a href="#">Виджеты</a></li>
              <li><a href="#">Интеграции</a></li>
              <li><a href="#">Наши клиенты</a></li>
            </ul>

            <ul>
              <li><a href="#">Благодарность клиентов</a></li>
              <li><a href="#">Кейсы</a></li>
              <li><a href="#">Сертификаты</a></li>
              <li><a href="#">Блог на Youtube</a></li>
              <li><a href="#">Вопрос / Ответ</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Контакты</h2>
          <ul>
            <li><a href="tel:+75555555555">+7 555 555-55-55</a></li>
            <ul className={styles.list}>
              <li><a href="#"><TelegramIcon /></a></li>
              <li><a href="#"><ViberIcon /></a></li>
              <li><a href="#"><WhasappIcon /></a></li>
            </ul>
            <li>Москва, Путевой проезд 3с1, к 902</li>
          </ul>

          <p className={styles.copyright}>©WELBEX 2022. Все права защищены.<br /><a href="#">Политика конфиденциальности</a></p>
        </div>


      </nav>
    </footer>
  );
}
export default AppFooter;