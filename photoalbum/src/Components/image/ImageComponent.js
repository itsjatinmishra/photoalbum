import { useState } from "react";
import style from "./Image.module.css";

const Image = ({ image, index, deleteImage, setImageToUpdate, setCarouselDisplay }) => {
    const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
    return (
        <div className={style.box}
            onMouseEnter={() => setCurrentHoverIndex(index)}
            onMouseLeave={() => setCurrentHoverIndex(null)}>
            <div className={`${style.updateIcon} ${currentHoverIndex === index && style.active
                }`}>
                <img src="https://mellow-seahorse-fc9268.netlify.app/assets/edit.png" alt="update"  onClick={()=> setImageToUpdate(image)}/>

            </div>
            <div className={`${style.deleteIcon} ${currentHoverIndex === index && style.active
                }`}>
                <img src="https://mellow-seahorse-fc9268.netlify.app/assets/trash-bin.png" alt="delete" onClick={()=>deleteImage(image.id)}/>
            </div>
            <img src={image.url} alt="" onClick={()=> setCarouselDisplay({show:true, image:image.url})}/>
            <p>{image.title}</p>
        </div>
    )
}

export default Image;