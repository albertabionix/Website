import React from 'react';
import '../styles/contact.css';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "88a7a32d-3235-4b44-8442-055264cff7bc");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            console.log(data); // Log the response data for debugging

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting the form", error);
            setResult("An error occurred while submitting the form.");
        }
    };

    return (
        <div className="contact">
            <div className='contact_group'>
                <div className='title'>
                    <h1>Get In Touch</h1>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" placeholder='First Name' name="first_name" required />
                            <div className="underline"></div>
                        </div>
                        <div className="input-data">
                            <input type="text" placeholder='Last Name' name="last_name" required />
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="email" placeholder='Email Address' name="email" required />
                            <div className="underline"></div>
                        </div>
                        <div className="input-data">
                            <input type="text" placeholder='Subject' name="subject" required />
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows="8" cols="80" placeholder='Message' name="message" required></textarea>
                        </div>
                    </div>
                    <div className="form-row submit-btn">
                        <div className="input-data">
                            <div className="inner"></div>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}
