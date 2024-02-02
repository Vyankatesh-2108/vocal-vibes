import { useState } from 'react';
import ReactPlayer from 'react-player';
import './PredictStyle.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiOutlineAudio } from "react-icons/ai";

const Predict = () => {
  const [audio, setAudio] = useState(null);
  const [fileName, setFileName] = useState('File Not Selected');

  const handleUploadClick = () => {
    const inputField = document.querySelector('.input-field');
    const files = inputField.files;

    if (files[0]) {
      const audioUrl = URL.createObjectURL(files[0]);
      setFileName(files[0].name);
      setAudio(audioUrl);
    }
  };

  return (
    <>
      <main>
        <form
          className='form-pred'
          onClick={() => document.querySelector('.input-field').click()}
        >
          <input
            type='file'
            accept='audio/*'
            className='input-field'
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
            }}
          />

          {audio ? (
            <ReactPlayer
              url={audio}
              controls
              width={300}
              height={50}
              playing={false}
            />
          ) : (
            <>
              <MdCloudUpload color='#145cf' size={60} />
              <p>Browse Files to Upload</p>
            </>
          )}
        </form>
      
      </main>

      {/* Side-by-side section and upload button below the form */}
      <div className='container'>
        <section className='uploaded-row'>
          <AiOutlineAudio color='#1475cf' />
          <span className='upload-content'>
            {fileName} -
            <MdDelete
              onClick={() => {
                setFileName('File Not Selected');
                setAudio(null);
              }}
            />

          </span>
        </section>
        <button onClick={handleUploadClick} className='upload-button'>
          Upload
        </button>
        
      </div>
    </>
  );
};

export default Predict;
