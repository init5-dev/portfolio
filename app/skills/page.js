'use client'

import { useEffect, useState } from "react";
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
    Python,
    Git
} from "styled-icons/fa-brands";
import { Reactjs } from 'styled-icons/remix-fill';
import { Qt, Woo, Nextdotjs, Tailwindcss, Bootstrap, Express, Mui, Mysql, Postgresql, Mongodb } from "styled-icons/simple-icons";
import { SiSvelte } from "@icons-pack/react-simple-icons";

export default function Habilidades() {
    return (
        <div className={styles.main}>
            <div className={styles.skillList}>
                <div className={"fade-in-left-75 md:fade-in-left-75 " + styles.skill}>
                    <Html5 color="#F06529" size={84} />
                    <p className={styles.skillName}>HTML5</p>
                </div>
                <div className={"fade-in-left-70 md:fade-in-left-70 " + styles.skill}>
                    <Css3Alt color="#264de4" size={84} />
                    <p className={styles.skillName}>CSS3</p>
                </div>
                <div className={"fade-in-left-65 md:fade-in-left-65 " + styles.skill}>
                    <Js color="#f0db4f" size={84} />
                    <p className={styles.skillName}>Javascript</p>
                </div>
                <div className={"fade-in-left-60 md:fade-in-left-75 " + styles.skill}>
                    <Reactjs color="#61dbfb" size={84} />
                    <p className={styles.skillName}>React</p>
                </div>
                <div className={"fade-in-left-55 md:fade-in-left-70 " + styles.skill}>
                    <Express color="#ffffff" size={84} />
                    <p className={styles.skillName}>Express.js</p>
                </div>
                <div className={"fade-in-left-75 md:fade-in-left-65 " + styles.skill}>
                    <div>
                        <Nextdotjs id='next-icon' color="#000055" size={84} />
                    </div>
                    <p className={styles.skillName}>Next.js</p>
                </div>
                <div className={"fade-in-left-75 md:fade-in-left-65 " + styles.skill}>
                    <div>
                        <SiSvelte id='svelte-icon' color="#f73c00" size={84} />
                    </div>
                    <p className={styles.skillName}>Sveltekit</p>
                </div>
                <div className={"fade-in-left-70 md:fade-in-left-75 " + styles.skill}>
                    <Tailwindcss color="#b8c2cc" size={84} />
                    <p className={styles.skillName}>Tailwind</p>
                </div>
                <div className={"fade-in-left-65 md:fade-in-left-70 " + styles.skill}>
                    <Bootstrap color="#563d7c" size={84} />
                    <p className={styles.skillName}>Bootstrap</p>
                </div>
                <div className={"fade-in-left-60 md:fade-in-left-65 " + styles.skill}>
                    <Mui color="#007fff" size={84} />
                    <p className={styles.skillName}>Material UI</p>
                </div>
                <div className={"fade-in-left-55 md:fade-in-left-75 " + styles.skill}>
                    <Mysql color="#016e88" size={84} />
                    <p className={styles.skillName}>MySQL</p>
                </div>
                <div className={"fade-in-left-75 md:fade-in-left-70 " + styles.skill}>
                    <Postgresql color="#2f5e8d" size={84} />
                    <p className={styles.skillName}>Postgresql</p>
                </div>
                <div className={"fade-in-left-70 md:fade-in-left-65 " + styles.skill}>
                    <Mongodb color="#4cab3d" size={84} />
                    <p className={styles.skillName}>MongoDB</p>
                </div>
                <div className={"fade-in-left-65 md:fade-in-left-75 " + styles.skill}>
                    <Php color="#AEB2D5" size={84} />
                    <p className={styles.skillName}>PHP</p>
                </div>
                <div className={"fade-in-left-60 md:fade-in-left-70 " + styles.skill}>
                    <Laravel color="#f55247" size={84} />
                    <p className={styles.skillName}>Laravel</p>
                </div>
                <div className={"fade-in-left-55 md:fade-in-left-65 " + styles.skill}>
                    <Git color="#e84e31" size={84} />
                    <p className={styles.skillName}>Git</p>
                </div>
                <div className={"fade-in-left-75 md:fade-in-left-75 " + styles.skill}>
                    <Python color="#ffde57" size={84} />
                    <p className={styles.skillName}>Python</p>
                </div>
                <div className={"fade-in-left-70 md:fade-in-left-70 " + styles.skill}>
                    <Qt size={84} color="#3859a3" />
                    <p className={styles.skillName}>PyQT</p>
                </div>
                <div className={"fade-in-left-65 md:fade-in-left-65 " + styles.skill}>
                    <Openai size={84} color="#00A67E" />
                    <p className={styles.skillName}>Open AI</p>
                </div>
                <div className={"fade-in-left-60 md:fade-in-left-75 " + styles.skill}>
                    <Wordpress color="#00749C" size={84} />
                    <p className={styles.skillName}>Wordpress</p>
                </div>
                <div className={"fade-in-left-55 md:fade-in-left-70 " + styles.skill}>
                    <Elementor color="#00749C" size={84} />
                    <p className={styles.skillName}>Elementor</p>
                </div>
                <div className={"fade-in-left-75 md:fade-in-left-65 " + styles.skill}>
                    <Woo color="#00749C" size={84} className='pl-5' />
                    <p className={styles.skillName}>WooCommerce</p>
                </div>
            </div>
        </div>
    );
}