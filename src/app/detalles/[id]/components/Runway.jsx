'use client'
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";

const images = [
    {
        original: "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cda177_f95b14c95d6446de847782f0b6fd0027.png",
        thumbnail: "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cda177_f95b14c95d6446de847782f0b6fd0027.png"
    },
    {
        original: "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cda177_f95b14c95d6446de847782f0b6fd0027.png",
        thumbnail: "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cda177_f95b14c95d6446de847782f0b6fd0027.png"
    }
]

const Runway = () => {
    const [widthWindow, setWidthWindow] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setWidthWindow(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [widthWindow])
    
    return (
        <div className="container-images">
            <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={true}
                showBullets={true}
                showThumbnails={widthWindow > 1023 ? true  : false}
                disableThumbnailScroll={true}
                thumbnailPosition="left"
                autoPlay={false}
                renderLeftNav={(onClick, disabled) => (
                    <CustomLeftArrow  onClick={onClick} />
                )}
                renderRightNav={(onClick, disabled) => (
                    <CustomRightArrow onClick={onClick} />
                )}/>
                
        </div>
    )
}

export default Runway