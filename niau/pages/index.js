import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Tryon.module.css";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ImageUploader component handles the image upload logic
function ImageUploader() {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const reader = new FileReader();
        const fileInput = document.getElementById("file");

        reader.onload = e => {
            setImageSrc(e.target.result);
        };

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
        <div className={styles.insertImage}> {/* Class tap at the top */}
            {/* Your image input and display logic */}
            <input id="file" type="file" accept="image/*" />
            {imageSrc && <img id="img" src={imageSrc} alt="Uploaded Image" />}
        </div>
    );
}

export async function getStaticProps() {
    const colors = await prisma.ProductDetail.findMany();
    return {
        props: { colors },
    };
}

export default function Tryon({ colors }) {
    return (
        <div>
            <Head>
                <title>TryOn | niau</title>
            </Head>
            <ul>
                {colors.map((item) => (
                    <li key={item.productID}>{item.color}</li>
                ))}
            </ul>
            {/* Render the ImageUploader component */}
            <ImageUploader />
        </div>
    );
}
