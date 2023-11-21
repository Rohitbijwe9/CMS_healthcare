import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../../assets/css/Shoper.css';

export default function ShowParticular() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { pk } = useParams();

    async function fetchData() {
        try {
            const result = await axios.get(`http://127.0.0.1:8000/patientreg/patient/${pk}/`);
            setUser(result.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [pk]);

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
        <div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="center">
                <div className="user-card">
                    <p><img src={`http://localhost:8000${user.patient_image}`} width="100px" height="100px" alt="Patient" /></p>
                    <p>Patient Code: {user.patient_code}</p>
                    <p>Patient First Name: {user.patient_first_name}</p>
                    <p>Patient Last Name: {user.patient_last_name}</p>
                    <p>Patient Middle Name: {user.patient_middle_name}</p>
                    <p>Contact Details: {user.contact_details}</p>
                    <p>Patient Gender: {user.patient_gender}</p>
                    <p>Patient Age: {user.patient_age}</p>
                    <p>Patient Weight: {user.patient_weight}</p>
                    <p>Patient Height: {user.patient_height}</p>
                    <p>Patient Name Prefix: {user.patient_name_prefix}</p>
                    <p>Patient Name Suffix: {user.patient_name_suffix}</p>
                    <p>Patient Marital Status: {user.patient_marital_status}</p>
                    <p>Patient Date of Birth: {user.patient_date_of_birth}</p>
                    <p>Patient Handicap: {user.patient_is_handicap}</p>
                    <p>Patient Aadhar Card Number: {user.patient_aadhar_card_number}</p>
                    <p>Patient Occupation: {user.patient_occupation}</p>
                    <p>Created On: {user.created_on}</p>
                    <p>Updated On: {user.updated_on}</p>
                    <p>Adhar Card:<img src={`http://localhost:8000${user.patient_aadhar_card_image}`} width="100px" height="100px" alt="Patient" /></p>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
