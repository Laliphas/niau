import { useState, useEffect } from 'react';
import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Tryon.module.css";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getStaticProps() {
    const colors = await prisma.ProductDetail.findMany();
    return {
        props: { colors },
    };
}

function ImageUploader({ colors }) {
    const [imageSrc, setImageSrc] = useState(null);
    const [lipColor, setLipColor] = useState(colors[0]?.color || "#ffffff");

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
            fileInput.removeEventListener('change', handleChange);
        };
    }, []);

    const applyLipFilter = () => {
        if (imageSrc) {
            const img = document.getElementById("img");
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0, img.width, img.height);

            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] === 0) continue;

                data[i] = parseInt(lipColor.substr(1, 2), 16);
                data[i + 1] = parseInt(lipColor.substr(3, 2), 16);
                data[i + 2] = parseInt(lipColor.substr(5, 2), 16);
            }

            ctx.putImageData(imageData, 0, 0);

            setImageSrc(canvas.toDataURL());
        }
    };

    const handleEditPhoto = () => {
        const fileInput = document.getElementById("file");
        fileInput.click();
    };

    return (
        <div className={styles.insertImage}>
            <input id="file" type="file" accept="image/*" style={{ display: 'none' }} />
            <button onClick={handleEditPhoto}>Edit Photo</button>
            {imageSrc && <img id="img" src={imageSrc} alt="Uploaded Image" />}
            <select value={lipColor} onChange={(e) => setLipColor(e.target.value)}>
                {colors.map((color) => (
                    <option key={color.productID} value={color.color}>{color.color}</option>
                ))}
            </select>
            <button onClick={applyLipFilter}>Apply Lip Filter</button>

            {/* Display color based on color code */}
            <div className={styles.colorBox} style={{ backgroundColor: lipColor }}></div>
        </div>
    );
}

export default function Tryon({ colors }) {
    return (
        <div>
            <Head>
                <title>TryOn | niau</title>
            </Head>
            <ImageUploader colors={colors} />
        </div>
    );
}
