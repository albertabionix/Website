import React from 'react'

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
        <div>
            <h1> Get In Touch</h1>
            <form onSubmit={onSubmit}>
                <div className='inputs'>
                    <label>First Name</label>
                    <input type='text' placeholder="Enter your first name" required />
                </div>
                <div className='inputs'>
                    <label>Last Name</label>
                    <input type='text' placeholder="Enter your last name" required />
                </div>
                <div className='inputs'>
                    <label>Email</label>
                    <input type='text' placeholder="Enter your email address" required />
                </div>
                <div className='inputs'>
                    <label>Subject</label>
                    <input type='text' placeholder="Enter a subject, example: Like to know more " required />
                </div>
                <div className='inputs'>
                    <label>Message</label>
                    <input type='text' placeholder="Enter your message" required />
                </div>
                <div className='inputs'>
                    <button>Submit Form</button>
                </div>
            </form>
        </div>
    )
}