import React, { useState } from "react";
import styles from '../styles/GalerijaSection.module.css';
import { Galery } from "../dammyData";
import ComponentWidth from "../components/comWidth";
import PopupGalerija from "../components/PopupGalerija";
import TitleComponent from "../components/titleComponent";
import { useStateValue } from "../context/stateContext";

const GalerijaSection = () => {
    const { handlePopup } = useStateValue();

    return (<div className={styles.mainGalerija}>
        <ComponentWidth>
            <TitleComponent subtitle="Galerija" />

            <div className={styles.containerImages}>
                {Galery.map((item, id) => (
                    <div className={styles.image} ><img src={item.img} onClick={() => handlePopup()} /></div>
                ))}
            </div>
            {/* <div className={styles.holderPopup}>
                {popUp === "true"(
                    <div>haha</div>
                )}

            </div> */}
        </ComponentWidth>

    </div>)
}

export default GalerijaSection;