import { useState } from "react"
import "./ContactFormStyles.css"

function ContactForm(){

    const[userDate, setUserData] = useState({
        Name:'', Email:'', Subject:'', Message:''
    })

    let name, value
    const data = (e) =>{
        name = e.target.name
        value = e.target.value
        setUserData({...userDate, [name]:value})
    }

    const send = async(e) =>{
        const{Name, Email, Subject, Message} = userDate
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                Name, Email, Subject, Message
            })
        }

        const res = await fetch('https://vocalvibes-8b0a8-default-rtdb.firebaseio.com/Messages.json', option)
        console.log(res)
        if(res){
            alert("Message Sent");
            setUserData({ Name: '', Email: '', Subject: '', Message: '' });
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form method="POST">
                <input name="Name" value={userDate.Name} onChange={data} placeholder="Name" />
                <input name="Email" value={userDate.Email} onChange={data} placeholder="Email" />
                <input name="Subject" value={userDate.Subject} onChange={data} placeholder="Subject" />
                <textarea name="Message" value={userDate.Message} onChange={data} placeholder="Message" rows="4"></textarea>
                <button onClick={send} onSubmit={onSubmit}>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm
