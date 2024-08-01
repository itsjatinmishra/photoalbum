import { useRef } from "react";
import styles from "./AlbumForm.module.css"

const AlbumForm = ({addAlbums}) =>{
    const nameRef = useRef();
    // to handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const album= {name: nameRef.current.value,imagesId:[]};
        addAlbums(album);
        nameRef.current.value ="";
    }

    const clearInput = () => {
        nameRef.current.value ="";
    }

    return(
        <>
        <div className={styles.formContainer}>
            <span className={styles.span}>Create an Album</span>
            <form action="" className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Album Name" className={styles.input} ref={nameRef}/>
                <button type="button" className={styles.clearBtn} onClick={clearInput}>Clear</button>
                <button className={styles.addBtn}>create</button>
            </form>
        </div>
        </>
    )
}

export default AlbumForm;