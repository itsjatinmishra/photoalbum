import { useState } from "react";
import styles from "./AlbumList.module.css";
import ImageList from "../imageList/ImageList";
import AlbumForm from "../albumForm/AlbumForm";


const AlbumList = ({
    albums,
    album, addImage, imageToUpdate, setImageToUpdate, updateImage,
    deleteImage, addImageFormDisplay, setaddImageFormDisplay, addAlbums
}) => {
    const [showImageListPage, setShowImageListPage] = useState({show:false,albumId:""});
    const [albumFormDisplay, setAlbumFormDisplay] = useState(false);
    
    return (
        <>
            
            {showImageListPage.show ?
                <ImageList
                    album={album}
                    albumId={showImageListPage.albumId}
                    addImage={addImage}
                    deleteImage={deleteImage}
                    updateImage={updateImage}
                    imageToUpdate={imageToUpdate}
                    setImageToUpdate={setImageToUpdate}
                    addImageFormDisplay={addImageFormDisplay}
                    setaddImageFormDisplay={setaddImageFormDisplay}
                    setShowImageListPage={setShowImageListPage}
                />

                :

                <div>
                    {albumFormDisplay && <AlbumForm addAlbums={addAlbums} />}
                    <div className={styles.albumContainer}>
                        <div className={styles.albumContainerTop}>
                            <h3>Your Albums</h3>
                            <button className={albumFormDisplay ? styles.clearBtn : styles.addAlbumBtn} onClick={() => setAlbumFormDisplay(!albumFormDisplay)}>
                                {albumFormDisplay ? "Cancel" : "Add Album"}
                            </button>
                        </div>
                        <div className={styles.albumList}>
                            {albums.map((album, i) => {
                                return (
                                    <div className={styles.album} key={i} onClick={() => setShowImageListPage({show:true,albumId:album.id})}>
                                        <img src="https://mellow-seahorse-fc9268.netlify.app/assets/photos.png" alt="album" className={styles.albumImage} />
                                        <span className={styles.albumSpan}>{album.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default AlbumList;