import { useState } from 'react';
import ReactPlayer from 'react-player';
import './PredictStyle.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiOutlineAudio } from "react-icons/ai";
import Tree from '../Tree';


const treeData = [
  {
    key: "0",
    label: "Happy Audio's",
    icon: "fa fa-folder",
    title: "Happy Audio's",
    children: [
      {
        key: "1-0",
        label: "audio_sample_01.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 1",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
      {
        key: "0-0",
        label: "audio_sample_02.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 2",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
    ],
  },
  {
    key: "1",
    label: "Disgust Audio's",
    icon: "fa fa-folder",
    title: "Disgust Audio's",
    children: [
      {
        key: "1-0",
        label: "audio_sample_01.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 1",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
      {
        key: "0-0",
        label: "audio_sample_02.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 2",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
    ],
  },
  {
    key: "2",
    label: "Angry Audio's",
    icon: "fa fa-folder",
    title: "Angry Audio's",
    children: [
      {
        key: "1-0",
        label: "audio_sample_01.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 1",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
      {
        key: "0-0",
        label: "audio_sample_02.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 2",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
    ],
  },
  {
    key: "3",
    label: "Sad Audio's",
    icon: "fa fa-folder",
    title: "Sad Audio's",
    children: [
      {
        key: "1-0",
        label: "audio_sample_01.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 1",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
      {
        key: "0-0",
        label: "audio_sample_02.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 2",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
    ],
  },
  {
    key: "4",
    label: "Fear Audio's",
    icon: "fa fa-folder",
    title: "Fear Audio's",
    children: [
      {
        key: "1-0",
        label: "audio_sample_01.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 1",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
      {
        key: "0-0",
        label: "audio_sample_02.mp3",
        icon: "fa fa-file",
        title: "Sample Audio 2",
        fileType: "audio",
        fileUrl: "/example.mp3",
      },
    ],
  },
];


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
      <div className="container-fluid">
    <div className="row">
      <div className="col text-center">
        <h2 style={{borderBottom: "1px solid #bbc7c7"}}>Download Audio Files</h2>
        <p className="mt-2">
          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-lg-8 text-left text-dark">
              <Tree data={treeData} />
            </div>
          </div>
        </p>
      </div>
    </div>
  </div>
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
