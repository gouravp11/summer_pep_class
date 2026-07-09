import React, { useRef, useState } from 'react'

export const UploadImage = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    function handleImageInput(e) {
        const file = e.target.files[0];

        const imgUrl = URL.createObjectURL(file);
        setImage(imgUrl);
    }
    function removeImage(e) {
        setImage(null);
        imageRef.current.value = "";
    }
  return (
    <div>
        <input type="file" accept='image/jpeg, image/png' ref={imageRef} onChange={handleImageInput}/>
        <img src={image} alt="Preview Image" />
        <button onClick={removeImage}>Remove Image</button>
    </div>
  )
}
