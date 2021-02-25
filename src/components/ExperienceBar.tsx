import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)
    // const zero = true

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} >
                </div>

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                {`${percentToNextLevel}%`}
                    {/* <>
                        {zero ? (
                            {`${percentToNextLevel}%`}
                        ) : (
                        'teste'
                        )}
                    </> */}
                </span>
            </div>
            <span>{currentExperience} / {experienceToNextLevel} xp</span>


                   {/* <>
                        {zero ? (
                           {{percentToNextLevel}}
                        ) : (
                        ' Não tem zero'
                        )}
                    </> */}
        </header>
    );
}

