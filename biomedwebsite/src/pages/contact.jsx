import React from 'react'
import '../styles/contact.css'

export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        // <div className='contact'>
        //     <div className='contact_group'>
        //         <h1> Get In Touch</h1>
        //         <form onSubmit={onSubmit} className='form'>
        //             <div className='inputs'>
        //                 {/* <label>First Name</label> */}
        //                 <input type='text' placeholder="Enter your first name" required />
        //             </div>
        //             <div className='inputs'>
        //                 {/* <label>Last Name</label> */}
        //                 <input type='text' placeholder="Enter your last name" required />
        //             </div>
        //             <div className='inputs'>
        //                 {/* <label>Email</label> */}
        //                 <input type='text' placeholder="Enter your email address" required />
        //             </div>
        //             <div className='inputs'>
        //                 {/* <label>Subject</label> */}
        //                 <input type='text' placeholder="Enter a subject, example: Like to know more " required />
        //             </div>
        //             <div className='inputs'>
        //                 <label>Message</label>
        //                 <input type='text' placeholder="Enter your message" required />
        //             </div>
        //             <div className='inputs'>
        //                 <button>Submit Form</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>

        <div class="contact">
            <div className='contact_group'>
                <div class="title">
                    <h1>Contact us Form</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" placeholder='First Name' required />
                            <div class="underline"></div>
                        </div>
                        <div class="input-data">
                            <input type="text" placeholder='Last Name' required />
                            <div class="underline"></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" placeholder='Email Address' required />
                            <div class="underline"></div>
                        </div>
                        <div class="input-data">
                            <input type="text" placeholder='Subject' required />
                            <div class="underline"></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data textarea">
                            <textarea rows="8" cols="80" placeholder='Message' required></textarea>
                        </div>
                    </div>
                    <div class="form-row submit-btn">
                        <div class="input-data">
                            <div class="inner"></div>
                            <input type="submit" value="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}