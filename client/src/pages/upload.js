import React, { useState } from "react";
import API from "../utils/API";
import DropDown from "../components/DropDown";

function Upload() {
    const [selections, setSelections] = useState({ location: "Tavern" });
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();

    const locations = [
        "Tavern",
        "Woodland",
        "Plains",
    ]

    const handleInputChange = event => {
        console.log("hi")
        setSelections({
            ...selections,
            [event.target.name]: event.target.value
        })
    }


    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        console.log(selections)
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result, selections);
        };
        reader.onerror = () => {
        };
    };

    //fix the api call to axios

    const uploadImage = async (base64EncodedImage, { location }) => {
        try {
            // console.log('trying')
            // console.log(selections)
            // await API.uploadImage(base64EncodedImage, selections)
            // setFileInputState('');
            // setPreviewSource('');

            //this works
            console.log(location)
            await fetch('/api/cloudinary/' + location, {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div>
            <label className="m-2">
                Type of location:
                <DropDown
                    key={locations.index}
                    options={locations}
                    handleSelect={handleInputChange}
                    name="location"
                />
            </label>
            <h1 className="title">Upload an Map</h1>
            <form onSubmit={handleSubmitFile} className="form">
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                />
                <button className="button" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    )
}

export default Upload