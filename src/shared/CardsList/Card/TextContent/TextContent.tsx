import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
    return (
        <>
            <div className={styles.textContent}>
                <div className={styles.metaData}>
                    <div className={styles.userLink}>
                        <img className={styles.avatar}
                             src="https://i.pinimg.com/564x/4f/ef/7b/4fef7b0c02c8a59fe3c30c2b4043b59f.jpg"
                             alt="avatar"/>
                        <a href="#user-url" className={styles.username}>Козловский Глеб</a>
                    </div>
                    <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано</span>
                    4 часа назад
                </span>
                </div>
                <h2 className={styles.title}>
                    <a href="#post.url" className={styles.postLink}>
                        А также базовые сценарии поведения пользователей сервиса.
                    </a>
                </h2>
            </div>
            <div className={styles.preview}>
                <img
                    className={styles.previewImg}
                    src="https://www.universal-rights.org/wp-content/uploads/2019/09/30212411048_2a1d7200e2_z-1.jpg"
                    alt=""/>
            </div>
        </>
    );
}
