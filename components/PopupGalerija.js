import React from "react";
import styles from '..//styles/popupGalerija.module.css';

import { useStateValue } from '../context/stateContext';

const PopupGalerija = ({ image }) => {
    const { handlePopup, popUp } = useStateValue();

    const classPopup = popUp ? 'popupMain active' : 'closePopup';

    return (
        <div className={classPopup}>
            <div className={styles.containerImage}>
                <div className={styles.x} onClick={() => handlePopup()}>X</div>
                <div className={styles.image}>
                    <img src={image} />
                    hahahahhahhahhah
                </div>
            </div>
        </div>
    )
}

export default PopupGalerija;