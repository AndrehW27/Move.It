import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level, currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
    const numberAmountXpToNext = experienceToNextLevel - currentExperience;

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/AndrehW27.png" alt="André Willian" />
            <div>
                <strong>André Willian</strong>
                <p>
                    <p>Level {level}</p>
                    <p>(<img src="icons/level.svg" alt="Imagem Level" />{numberAmountXpToNext} xp )</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <p><img className={styles.share} src="icons/share.svg" alt="Imagem Level" /></p>
                    </a>
                </p>
            </div>
        </div>
    );
}
