import React from 'react';
import { useTheme } from '../context/ThemeProvider';

const AppointmentPage = () => {
  const theme = useTheme();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      {/* Add appointment booking form */}
    </div>
  );
};

export default AppointmentPage;
