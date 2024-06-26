'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars } from "@styled-icons/fa-solid";
import { Multiply } from "@styled-icons/fa-solid";
import styles from "./styles.module.css"
import Image from "next/image";

const menuItems = [
    {
        label: 'Home',
        path: '/',
    },
    // {
    //     label: 'Sobre mí',
    //     path: '/sobre-mi'
    // },
    {
        label: 'Skills',
        path: '/skills'
    },
    {
        label: 'Projects',
        path: '/projects'
    },
]

function MobileNav() {

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        console.log('CLICK!')
        setVisible(!visible)
    }

    return (
        <nav className={styles.navSmall}>
            <div className={styles.mobile}>
                <div>
                    <Link href="/">
                        <Image src="/media/logo-init5dev.png" width={233} height={40} />
                    </Link>
                </div>
                <div className={styles.hamburger}>
                    <div>
                        <button onClick={handleClick} type="button" className={styles.item}>
                            {
                                !visible ? <Bars width={24} height={24} /> : <Multiply width={24} height={24} />
                            }
                        </button>
                    </div>
                </div>
            </div>
            {visible && <div className={styles.dropdown + ` ${visible ? styles.fade : ''}`}>
                <ul>
                    {
                        menuItems.map(
                            item => (
                                <li className={styles.item}>
                                    <Link href={item.path}>
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>}
        </nav>
    )
}

function DesktopNav() {

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        console.log('CLICK!')
        setVisible(!visible)
    }

    return (
        <div className={styles.nav}>
            <div>
                <Link href="/">
                    <Image src="/media/logo-init5dev.png" width={233} height={40} />
                </Link>
            </div>
            <div className={styles.desktop}>
                <ul className={styles.desktopItemList}>
                    {
                        menuItems.map(
                            item => (
                                <li className={styles.item}>
                                    <Link href={item.path}>
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default function Navbar() {
    return (
        <>
            <div class="md:collapse md:h-0">
                <MobileNav class="collapse-content" />
            </div>
            <div class="collapse h-0 md:visible md:h-auto">
                <DesktopNav class="collapse-content" />
            </div>
        </>
    );
}