import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import bar from "../img/Hamburger_icon.png"

interface SidebarProps {
    width?: number;
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ width = 280, children }) => {
    const [isOpen, setOpen] = useState(false);
    const [xPosition, setX] = useState<number>(width);
    const side = useRef<HTMLDivElement>(null);

    // button 클릭 시 토글
    const toggleMenu = () => {
        if (xPosition > 0) {
            setX(0);
            setOpen(true);
        } else {
            setX(width);
            setOpen(false);
        }
    };

    // 사이드바 외부 클릭시 닫히는 함수
    const handleClose = (e: MouseEvent) => {
        let sideArea = side.current;
        let sideCildren = side.current?.contains(e.target as Node);
        if (isOpen && (!sideArea || !sideCildren)) {
            setX(width);
            setOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClose);
        return () => {
            window.removeEventListener("click", handleClose);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div
                ref={side}
                className={styles.sidebar}
                style={{ width: `${width}px`, height: "100%", transform: `translatex(${-xPosition}px)` }}
            >
                <button onClick={toggleMenu} className={styles.button}>
                    {isOpen ? <span>X</span> : <img src={bar} alt="contact open button" className={styles.openBtn} />}
                </button>

                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

export default Sidebar;
