import React, { useState } from "react";
import Image from "node_modules/next/image";

const Slideshow = () => {
    const images = ['images/pic1.jpeg', 'images/pic2.jpg', 'images/pic3.jpg'];
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    }

    const previousSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    }

    return (
        <div className="flex space-x-8 mt-[-3rem]">
            <button className="mb-2" onClick={previousSlide}>
                <Image
                    src="/images/prev.png"
                    alt="previous"
                    width={20}
                    height={20}
                />
            </button>
            <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="mb-2 w-86 h-80" />
            <button className="mb-2" onClick={nextSlide}>
                <Image
                    src="/images/next.png"
                    alt="previous"
                    width={20}
                    height={20}
                />
            </button>
        </div>
    );
};

export default Slideshow;