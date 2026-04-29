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
    footer1, footer2, gift1, gift2, gift3, gift4, gift5, gift6, giving1, giving2, giving3, santa, snowman,
    "https://cdn-icons-png.flaticon.com/512/3468/3468377.png",
    "https://cdn-icons-png.flaticon.com/512/3468/3468379.png",
    "https://cdn-icons-png.flaticon.com/512/3468/3468382.png",
    "https://cdn-icons-png.flaticon.com/512/3468/3468386.png",
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





//Hiệu ứng khác
// import { useEffect, useRef, useState } from "react";
// import "./NoelBackground.css";

// import footer1 from "../assets/footer1.png";
// import footer2 from "../assets/footer2.png";
// import gift1 from "../assets/gift1.png";
// import gift2 from "../assets/gift2.png";
// import gift3 from "../assets/gift3.png";
// import gift4 from "../assets/gift4.png";
// import gift5 from "../assets/gift5.png";
// import gift6 from "../assets/gift6.png";
// import giving1 from "../assets/giving1.png";
// import giving2 from "../assets/giving2.png";
// import giving3 from "../assets/giving3.png";
// import snowman from "../assets/snowman.png";

// const NOEL_IMAGES = [
//     footer1, footer2,
//     gift1, gift2, gift3, gift4, gift5, gift6,
//     giving1, giving2, giving3,
//     snowman
// ];

// const COLORS = ["#FFD700", "#FF69B4", "#00FFFF", "#ADFF2F", "#FFA500"];

// export default function NoelBackground() {
//     const [items, setItems] = useState([]);
//     const [snows, setSnows] = useState([]);
//     const [sparkles, setSparkles] = useState([]);

//     const windRef = useRef(0);
//     const isLowPerformance = useRef(false);

//     useEffect(() => {
//         const cpu = navigator.hardwareConcurrency || 4;

//         if (cpu <= 4) {
//             isLowPerformance.current = true;
//         }

//         if (navigator.getBattery) {
//             navigator.getBattery().then(battery => {
//                 if (!battery.charging) {
//                     isLowPerformance.current = true;
//                 }
//             });
//         }
//     }, []);

//     useEffect(() => {
//         const move = (e) => {
//             windRef.current = (e.clientX / window.innerWidth - 0.5) * 25;
//         };
//         window.addEventListener("mousemove", move);
//         return () => window.removeEventListener("mousemove", move);
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const newItem = {
//                 id: Date.now(),
//                 img: NOEL_IMAGES[Math.floor(Math.random() * NOEL_IMAGES.length)],
//                 x: Math.random() * window.innerWidth,
//                 y: -50,
//                 size: 30 + Math.random() * 40,
//                 speed: 1 + Math.random() * 1
//             };

//             setItems(prev => [...prev, newItem]);

//         }, isLowPerformance.current ? 1200 : 800);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const snow = {
//                 id: Date.now() + Math.random(),
//                 x: Math.random() * window.innerWidth,
//                 y: -10,
//                 size: 2 + Math.random() * 4,
//                 speed: 0.5 + Math.random() * 0.5
//             };

//             setSnows(prev => [...prev, snow]);

//         }, isLowPerformance.current ? 120 : 80);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {

//             setItems(prev =>
//                 prev
//                     .map(i => ({
//                         ...i,
//                         x: i.x + windRef.current * 0.1,
//                         y: i.y + i.speed
//                     }))
//                     .filter(i => i.y < window.innerHeight + 50)
//             );

//             setSnows(prev =>
//                 prev
//                     .map(s => ({
//                         ...s,
//                         x: s.x + windRef.current * 0.2,
//                         y: s.y + s.speed
//                     }))
//                     .filter(s => s.y < window.innerHeight + 10)
//             );

//         }, isLowPerformance.current ? 50 : 30);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         const gen = () => Array.from({
//             length: isLowPerformance.current ? 10 : 25
//         }).map((_, i) => ({
//             id: i,
//             top: Math.random() * 100,
//             left: Math.random() * 100,
//             delay: Math.random() * 3,
//             color: COLORS[Math.floor(Math.random() * COLORS.length)]
//         }));

//         setSparkles(gen());

//         const i = setInterval(() => setSparkles(gen()), 4000);
//         return () => clearInterval(i);
//     }, []);

//     return (
//         <div className="noel-bg">

//             <div className="moon"></div>

//             {[...Array(isLowPerformance.current ? 2 : 3)].map((_, i) => (
//                 <div key={i} className="cloud"
//                     style={{
//                         top: `${10 + i * 15}%`,
//                         animationDuration: `${30 + i * 10}s`
//                     }}
//                 />
//             ))}

//             {items.map(item => (
//                 <img key={item.id}
//                     src={item.img}
//                     className="noel-item"
//                     style={{
//                         left: item.x,
//                         top: item.y,
//                         width: item.size,
//                         height: item.size
//                     }}
//                 />
//             ))}

//             {snows.map(s => (
//                 <span key={s.id}
//                     className="snow"
//                     style={{
//                         left: s.x,
//                         top: s.y,
//                         width: s.size,
//                         height: s.size,
//                         filter: `blur(${s.size > 3 ? 1 : 0.3}px)`
//                     }}
//                 />
//             ))}


//             {sparkles.map(sp => (
//                 <span key={sp.id}
//                     className="sparkle"
//                     style={{
//                         top: `${sp.top}%`,
//                         left: `${sp.left}%`,
//                         animationDelay: `${sp.delay}s`,
//                         background: sp.color,
//                         boxShadow: `0 0 6px ${sp.color}`
//                     }}
//                 />
//             ))}

//         </div>
//     );
// }