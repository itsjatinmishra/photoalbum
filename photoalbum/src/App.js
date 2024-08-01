import { useEffect, useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import db from "./firebaseinit";
import { collection, addDoc, doc, onSnapshot, deleteDoc, updateDoc } from "firebase/firestore";
import AlbumList from "./Components/albumList/AlbumList";


// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react Spinner for Loading
import Spinner from 'react-spinner-material';


function App() {
  const [album, setAlbum] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageToUpdate, setImageToUpdate] = useState(null);
  

  // to add an image to album
  const addImage = async (image) => {
    const docRef = await addDoc(collection(db, "album"), {
      title: image.title,
      url: image.url,
      albumId: image.albumId
    });
    setAlbum([{ id: docRef.id, ...image }, ...album]);
    toast.success("Image added successfully.")
  }

  // to delete an image
  const deleteImage = async (id) => {
    await deleteDoc(doc(db, "album", id));
    toast.success("Image deleted successfully.")
  }

  // to update an image
  const updateImage = async (image) => {
    const index = album.indexOf(imageToUpdate);
    // album[index] = image;
    // setAlbum(album);
    const docRef = doc(db, "album", image.id);
    await updateDoc(docRef, { title: image.title, url: image.url });
    toast.success("Image Updated successfully.")
  }

  // to get data and real-time updates.
  useEffect(() => {
    setIsLoading(true);
    const unsub = onSnapshot(collection(db, "album"), (snapshot) => {
      const album = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
        
      });
      setAlbum(album);
      setIsLoading(false);
    });
    const albumsUnsub = onSnapshot(collection(db, "albums"), (snapshot) => {
      const albums = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setAlbums(albums);
      setIsLoading(false);
    })
  }, []);

  // to add an album
  const addAlbums = async (album) => {
    const docRef = await addDoc(collection(db, "albums"), {
      name: album.name,
      imagesId: album.imagesId
    });
    setAlbums([{ id: docRef.id, ...album }, ...albums]);
    toast.success("Album added successfully.")
  }


  return (
    <>
      <ToastContainer />
      <Navbar />
      {isLoading?<div className="spinnerContainer">
        <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
      </div>:
      <AlbumList
      albums={albums}
      addAlbums={addAlbums}
      album={album}
      addImage={addImage}
      deleteImage={deleteImage}
      updateImage={updateImage}
      imageToUpdate={imageToUpdate}
      setImageToUpdate={setImageToUpdate}
    />}
      
    </>
  );
}

export default App;
