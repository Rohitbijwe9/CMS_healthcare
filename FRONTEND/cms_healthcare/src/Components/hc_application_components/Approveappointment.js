// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ApproveAppointment() {
  const { pk } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define a function to fetch data
    async function fetchData() {
      try {
        // Get the access token from sessionStorage
        const accessToken = sessionStorage.getItem('access');

        // Make an authenticated request to approve the appointment
        await axios.get(`http://127.0.0.1:8000/hcapp/approveappointment/${pk}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Stop loading and redirect to the appropriate page
        setIsLoading(false);
        navigate('/adm/showpending');
      } catch (error) {
        console.error('Error while approving appointment:', error);

        // Stop loading even if there's an error
        setIsLoading(false);
      }
    }

    // Call the fetchData function
    fetchData();
  }, [pk, navigate]);

  // If still loading, display a loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Return null or any other desired content after approval
  return <div>Appointment Approved!</div>;
}

export { ApproveAppointment };
