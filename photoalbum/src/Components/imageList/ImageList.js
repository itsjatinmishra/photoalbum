import { IoMdArrowBack } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import style from "./imageList.module.css";
import ImageForm from "../imageForm/imageForm";
import { useState } from "react";
import Image from "../image/ImageComponent";
import Carousel from "../carousel/Carousel";

const ImageList = ({
    album,
    addImage,
    deleteImage,
    updateImage,
    imageToUpdate,
    setImageToUpdate,
    albumId,
    setShowImageListPage
     }) => {
    const [ImageFormDisplay, setImageFormDisplay] = useState(false);
    const images = album.filter((image) => image.albumId === albumId);
    const [carouselDisplay, setCarouselDisplay] = useState({show:false, image:""});
    return (
        <>
        {carouselDisplay.show && <Carousel 
        album={album}
        carouselDisplay={carouselDisplay} 
        setCarouselDisplay={setCarouselDisplay}/>}
        {ImageFormDisplay && <ImageForm
        addImage={addImage}
        imageToUpdate={imageToUpdate}
        setImageToUpdate={setImageToUpdate}
        updateImage={updateImage}
        albumId={albumId}
      />}
            <div className={style.imageList}>
                <div className={style.nav}>
                    <IoMdArrowBack className={style.heading} onClick={()=> setShowImageListPage({show:false,albumId:""})}/>
                    <span className={style.heading}>{images.length !==0 ?"Images in Album":"No images found in the album"}</span>
                    <div className={style.SearchBox}>
                        {images.length !== 0 && <><input type="text" placeholder="Search..." className={style.searchInput} />
                                            <IoIosCloseCircleOutline className={style.heading} /></>}
                        {!ImageFormDisplay ? 
                        <button className={style.addButton} onClick={()=>setImageFormDisplay(true)}>Add Image</button> : 
                        <button className={style.cancelButton} onClick={()=>setImageFormDisplay(false)}>Cancel</button>}

                    </div>
                </div>
                <div className={style.boxContainer}>
                    {images.map((image, i) => {
                        return (
                            <Image
                                index={i}
                                image={image}
                                deleteImage={deleteImage}
                                setImageToUpdate={setImageToUpdate}
                                setCarouselDisplay={setCarouselDisplay}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default ImageList;