import React from "react";
import "./modal.css"
const Modal = (props: {
    children: any;
    open: any; close: any; header: any; }) => {
    const { open, close, header } =props;

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            close();
        }
    };

    return (
        <div className={open ? 'openModal modal' : 'modal'} onClick={handleOutsideClick}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className="close" onClick={close}>
                            닫기
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal
