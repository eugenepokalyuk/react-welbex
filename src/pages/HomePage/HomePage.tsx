import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
        <main className={styles.container}>
            <div className={styles.card}>
                <h1>Зарабатывайте<br />больше<br /><span>с WELBEX</span></h1>
                <p className={styles.mt3}>Развиваем и контролируем<br />продажи за вас</p>
            </div>

            <div className={`${styles.card} ${styles.mt9}`}>
                <p>Вместе c <span>бесплатной<br />консультацией</span> мы дарим:</p>

                <ul className={styles.list}>
                    <li>
                        <h2>Виджеты</h2>
                        <p>30 готовых<br />решений</p>
                    </li>

                    <li>
                        <h2>Dashboard</h2>
                        <p>с показателями<br />вашего бизнеса</p>
                    </li>

                    <li>
                        <h2>Skype Аудит</h2>
                        <p>отдела продаж<br />и CRM системы</p>
                    </li>

                    <li>
                        <h2>35 дней</h2>
                        <p>использования<br />CRM</p>
                    </li>
                </ul>

                <ul className={styles.card}>
                    <li>
                        <div className={styles.line}></div>Skype аудит
                    </li>

                    <li>
                        <div className={styles.line}></div>Dashboard
                    </li>

                    <li>
                        <div className={styles.line}></div>30 виджетов
                    </li>

                    <li>
                        <div className={styles.line}></div>Месяц аmoCRM
                    </li>
                </ul>

                <button className={styles.button}>Получить консультацию</button>
            </div>
        </main>
    );
}