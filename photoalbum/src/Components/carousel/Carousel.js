import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import styles from "./Carousel.module.css"




export default function Carousel({carouselDisplay, setCarouselDisplay}){
    const getNextImage = () => {
        
    }
    return(
        <>
        <div className={styles.carouselContainer}>
            <button className={styles.closeBtn} onClick={()=> setCarouselDisplay({show:false,image:""})}>X</button>
            <button className={styles.arrowBtn}><FaArrowLeft /></button>
            <img className={styles.carouselImg} src={carouselDisplay.image} alt="" />
            <button className={styles.arrowBtn}><FaArrowRight /></button>
        </div>
        </>
    )
}