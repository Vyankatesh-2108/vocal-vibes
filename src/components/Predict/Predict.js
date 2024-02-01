import {useState} from 'react'
import './PredictStyle.css' 
import {MdCloudUpload, MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'

const Predict = () => {
    const [audio, setAudio] = useState(null)
    const [fileName, setFileName] = useState("File Not Selected")
    return (
        <>
                    <main>
            <form className='form-pred'
            onClick={() => document.querySelector(".input-field").click()}
            >
                <input type='file' accept='audio/*' className='input-field' hidden
                onChange={({target:{files}}) => {
                    files[0] && setFileName(files[0].name)
                    // if(files){
                    //     setAudio(URL.createObjectURL(files[0]))
                    // }
                }}/>
            
                {audio ?
                <img src={audio} width={150} height={150} alt={fileName}></img>
                :
                <>
                    <MdCloudUpload color='#145cf' size={60}/>
                    <p>Browse Files to Upload</p>
                </>
                }
            </form>

               

        </main>
         <section className='uploaded-row'>
         <AiFillFileImage color='#1475cf'/>
         <span className='upload-content'>
             {fileName} -
             <MdDelete 
            onClick={()=>{
                setFileName("File Not Selected")
                setAudio(null)
            }}
             />
         </span>
     </section>
        </>
      );
}

export default Predict
