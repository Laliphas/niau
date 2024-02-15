import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Tryon.module.css";

export default function Tryon() {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const reader = new FileReader();
        const fileInput = document.getElementById("file");

        reader.onload = e => {
            setImageSrc(e.target.result);
        }

        const handleChange = (e) => {
            const file = e.target.files[0];
            reader.readAsDataURL(file);
        };

        fileInput.addEventListener('change', handleChange);

        return () => {
            // Clean up event listener when component unmounts
            fileInput.removeEventListener('change', handleChange);
        };
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <>
            <Head>
                <title>Try on | niau</title>
                <meta name="keywords" content="niau,try on"/>
            </Head>
            <div className={styles.tap}> {/* Class tap at the top */}
                {/* Your image input and display logic */}
                <input id="file" type="file" accept="image/*" />
                {imageSrc && <img id="img" src={imageSrc} alt="Uploaded Image" />}
            </div>
        </>
    )
}
