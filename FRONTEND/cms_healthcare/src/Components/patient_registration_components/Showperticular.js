import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../../assets/css/Shoper.css';

export default function ShowParticular() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const result = await axios.get('http://127.0.0.1:8000/patientreg/patient/');
            setUser(result.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="center">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="center">
                Error: {error.message}
            </div>
        );
    }

    return (
        <>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="center">
            {user.map((obj, index) => (
                <div className="user-card" key={index}>
                    
                    <img src={obj.patient_image} alt="Patient Image" width="100px" height="100px" />
                    <p>Patient Code: {obj.patient_code}</p>
                    <p>Patient First Name: {obj.patient_first_name}</p>
                    <p>Patient Last Name: {obj.patient_last_name}</p>
                    <p>Patient Middle Name: {obj.patient_middle_name}</p>
                    <p>Contact Details: {obj.contact_details}</p>
                    <p>Patient Gender: {obj.patient_gender}</p>
                    <p>Patient Age: {obj.patient_age}</p>
                    <p>Patient Weight: {obj.patient_weight}</p>
                    <p>Patient Height: {obj.patient_height}</p>
                    <p>Patient Name Prefix: {obj.patient_name_prefix}</p>
                    <p>Patient Name Suffix: {obj.patient_name_suffix}</p>
                    <p>Patient Marital Status: {obj.patient_marital_status}</p>
                    <p>Patient Date of Birth: {obj.patient_date_of_birth}</p>
                    <p>Patient Handicap: {obj.patient_is_handicap}</p>
                    <p>Patient Aadhar Card Number: {obj.patient_aadhar_card_number}</p>
                    <p>Patient Occupation: {obj.patient_occupation}</p>
                    <p>Created On: {obj.created_on}</p>
                    <p>Updated On: {obj.updated_on}</p>
                </div>
            ))}
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </>
    );
}
