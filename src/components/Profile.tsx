import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/AndrehW27.png" alt="André Willian" />
            <div>
                <strong>André Willian</strong>
                <p>
                    <img src="icons/level.svg" alt="Imagem Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}
