import { useEffect, useState } from "react";
import "./NoelBackground.css";
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import gift1 from "../assets/gift1.png";
import gift2 from "../assets/gift2.png";
import gift3 from "../assets/gift3.png";
import gift4 from "../assets/gift4.png";
import gift5 from "../assets/gift5.png";
import gift6 from "../assets/gift6.png";

import giving1 from "../assets/giving1.png";
import giving2 from "../assets/giving2.png";
import giving3 from "../assets/giving3.png";
import santa from "../assets/santa-claus-hat.png";
import snowman from "../assets/snowman.png";

const NOEL_IMAGES = [
    footer1, footer2, gift1, gift2, gift3, gift4, gift5, gift6, giving1, giving2, giving3, santa, snowman
];

export default function NoelBackground() {
    const [items, setItems] = useState([]);
    const [snows, setSnows] = useState([]);

    useEffect(() => {
        const generated = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            img: NOEL_IMAGES[Math.floor(Math.random() * NOEL_IMAGES.length)],
            left: Math.random() * 100,
            size: 30 + Math.random() * 40,
            duration: 12 + Math.random() * 10
        }));
        setItems(generated);

        const snowGenerated = Array.from({ length: 60 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: 4 + Math.random() * 6,
            duration: 6 + Math.random() * 6,
            delay: Math.random() * 5
        }));
        setSnows(snowGenerated);
    }, []);

    return (
        <div className="noel-bg">
            {/* Noel icon bay */}
            {items.map(item => (
                <img
                    key={item.id}
                    src={item.img}
                    alt="noel"
                    className="noel-item w-10 h-10"
                    style={{
                        left: `${item.left}%`,
                        animationDuration: `${item.duration}s`
                    }}
                />
            ))}

            {/* Tuyết rơi */}
            {snows.map(snow => (
                <span
                    key={snow.id}
                    className="snow"
                    style={{
                        left: `${snow.left}%`,
                        width: snow.size,
                        height: snow.size,
                        animationDuration: `${snow.duration}s`,
                        animationDelay: `${snow.delay}s`
                    }}
                />
            ))}
        </div>
    );
}