import React, { useState } from 'react';

export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    });

    const handleInputChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input name="firstName" type="text"
                    value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input name="lastName" type="text"
                     value={formData.lastName} onChange={handleInputChange} />
                </div>
            </form>


        </div>
    );
}

