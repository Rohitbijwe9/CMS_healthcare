import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ApproveAppointment() {
  const { pk } = useParams();
  const redirect = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`http://127.0.0.1:8000/hcapp/approveappointment/${pk}/`);
        setIsLoading(false);
        redirect('/showpending');
      } catch (error) {
        console.error('Error while approving appointment:', error);
        setIsLoading(false); // Stop loading even if there's an error
      }
    }

    fetchData();
  }, [pk, redirect]);

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading message while waiting for the Promise to resolve
  }

  return null; // Or return any other desired content
}

export { ApproveAppointment };