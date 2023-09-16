'use client'

import styles from "./styles.module.css"
import { Openai } from '@styled-icons/simple-icons/Openai';
import {
    Css3Alt,
    Elementor,
    Wordpress,
    Laravel,
    Html5,
    Php,
    Js,
    Python
} from "styled-icons/fa-brands";
import { Reactjs } from 'styled-icons/remix-fill';
import { Qt, Woo, Nextdotjs, Tailwindcss, Bootstrap } from "styled-icons/simple-icons";

export default function Habilidades() {

    return (
        <div className={styles.main}>
            <div className={styles.skillList}>
                <div className={"fade-in-left-70 sm:fade-in-left-60 " + styles.skill}>
                    <Html5 color="#F06529" size={84} />
                    <p className={styles.skillName}>HTML5</p>
                </div>
                <div className={"fade-in-left-65 sm:fade-in-left-55 " + styles.skill}>
                    <Css3Alt color="#264de4" size={84} />
                    <p className={styles.skillName}>CSS3</p>
                </div>
                <div className={"fade-in-left-60 sm:fade-in-left-50 " + styles.skill}>
                    <Tailwindcss color="#b8c2cc" size={84} />
                    <p className={styles.skillName}>Tailwind</p>
                </div>
                <div className={"fade-in-left-55 sm:fade-in-left-60 " + styles.skill}>
                    <Bootstrap color="#563d7c" size={84} />
                    <p className={styles.skillName}>Bootstrap</p>
                </div>
                <div className={"fade-in-left-50 sm:fade-in-left-55 " + styles.skill}>
                    <Php color="#AEB2D5" size={84} />
                    <p className={styles.skillName}>PHP</p>
                </div>
                <div className={"fade-in-left-70 sm:fade-in-left-50 " + styles.skill}>
                    <Js color="#f0db4f" size={84} />
                    <p className={styles.skillName}>Javascript</p>
                </div>
                <div className={"fade-in-left-65 sm:fade-in-left-60 " + styles.skill}>
                    <Wordpress color="#00749C" size={84} />
                    <p className={styles.skillName}>Wordpress</p>
                </div>
                <div className={"fade-in-left-60 sm:fade-in-left-55 " + styles.skill}>
                    <Elementor color="#00749C" size={84} />
                    <p className={styles.skillName}>Elementor</p>
                </div>
                <div className={"fade-in-left-55 sm:fade-in-left-50 " + styles.skill}>
                    <Woo color="#00749C" size={84} className='pl-5' />
                    <p className={styles.skillName}>WooCommerce</p>
                </div>
                <div className={"fade-in-left-50 sm:fade-in-left-60 " + styles.skill}>
                    <Reactjs color="#61dbfb" size={84} />
                    <p className={styles.skillName}>React</p>
                </div>
                <div className={"fade-in-left-70 sm:fade-in-left-55 " + styles.skill}>
                    <Nextdotjs color="#45ce05" size={84} />
                    <p className={styles.skillName}>Next.js</p>
                </div>
                <div className={"fade-in-left-65 sm:fade-in-left-50 " + styles.skill}>
                    <Laravel color="#f55247" size={84} />
                    <p className={styles.skillName}>Laravel</p>
                </div>
                <div className={"fade-in-left-60 sm:fade-in-left-60 " + styles.skill}>
                    <Python color="#ffde57" size={84} />
                    <p className={styles.skillName}>Python</p>
                </div>
                <div className={"fade-in-left-55 sm:fade-in-left-55 " + styles.skill}>
                    <Qt size={84} color="#3859a3" />
                    <p className={styles.skillName}>PyQT</p>
                </div>
                <div className={"fade-in-left-50 sm:fade-in-left-50 " + styles.skill}>
                    <Openai size={84} color="#00A67E" />
                    <p className={styles.skillName}>Open AI</p>
                </div>
            </div>
        </div>
    );
}