import { useEffect, useRef } from "react"
import style from "./imageForm.module.css"
export default function ImageForm({ addImage, imageToUpdate, setImageToUpdate, updateImage, albumId }) {
    const titleRef = useRef();
    const urlRef = useRef();
    useEffect(() => {
        if (!imageToUpdate) return;
        titleRef.current.value = imageToUpdate.title;
        urlRef.current.value = imageToUpdate.url;
    }, [imageToUpdate])
    // to clear inputs in the form
    const clearInput = () => {
        titleRef.current.value = "";
        urlRef.current.value = "";
    }
    // to handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        const title = titleRef.current.value;
        const url = urlRef.current.value;
        if (!imageToUpdate) {
            const image = { title: title, url: url, albumId: albumId };
            addImage(image);
            clearInput();
            return;
        }
        const image = { title: title, url: url, isHovered: true, id: imageToUpdate.id };
        updateImage(image);
        clearInput();
        setImageToUpdate(null);
    }
    return (
        <>
            <div className={style.container}>
                <div className={style.formContainer}>
                    <h2>Add Image to Album</h2>
                    <form className={style.imageForm} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Title" className={style.input} ref={titleRef} />
                        <input type="text" placeholder="Image url" className={style.input} ref={urlRef} />
                        <div className={style.btnContainer}>
                            <button className={style.clearBtn} type="button" onClick={clearInput}>Clear</button>
                            <button className={style.addBtn}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}