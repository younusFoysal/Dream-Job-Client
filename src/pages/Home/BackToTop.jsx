import { FaArrowUp } from "react-icons/fa";
import React from 'react';

const BackToTop = () => {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-0 right-0 p-4">
            <button className="bg-gray-800 hover:bg-sky-400 shadow-xl hover:shadow-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
                    onClick={backToTop}>
                <FaArrowUp />
            </button>
        </div>
    );
};

export default BackToTop;
