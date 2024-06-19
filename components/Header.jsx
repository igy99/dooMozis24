import React from "react";
import styles from "../styles/Header.module.css";
import LocationBar from "./locatonBar";
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const scrollClass = scroll > 47 ? styles.scrollClass : styles.main;

    return (
        <>
            <div className={scrollClass}>
                <div className={styles.container}>
                    <div className={styles.logo}>MOZIS</div>
                    <div className={styles.containerManu}>
                        <div className={styles.menuLinks}>
                            <div className={styles.link}>Početna</div>
                            <div className={styles.link}>O nama</div>
                            <div className={styles.link}>Proizvodi</div>
                            <div className={styles.link}>Galerija</div>
                            <div className={styles.link}>Kontakt</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;
