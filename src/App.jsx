import React, { useState } from 'react';
import { Calendar, Clock, User, Home, Briefcase, Users, Star, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [selectedService, setSelectedService] = useState('Teeth Whitening'); 
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Anika Rahman');
  const [selectedDay, setSelectedDay] = useState(5);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [bookedSlots, setBookedSlots] = useState([]);

  const services = [
    'Teeth Whitening',
    'Dental Cleaning',
    'Root Canal',
    'Dental Implants',
    'Orthodontics',
    'Oral Surgery'
  ];

  const doctors = [
    'Dr. Md Maruful Islam',
    'Dr. Rafiq Hassan',
    'Dr. Ethika Sultana',
    'Dr. Karim Benzama',
    'Dr. Sidratul Muntaha'
  ];

  const morningTimes = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
  const afternoonTimes = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM'];
  const eveningTimes = ['3:00 PM', '3:30 AM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'];
  const allTimes = [...morningTimes, ...afternoonTimes, ...eveningTimes];

  const julyDays = [
    { day: 'SUN', dates: [null, 7, 14, 21, 28] },
    { day: 'MON', dates: [1, 8, 15, 22, 29] },
    { day: 'TUE', dates: [2, 9, 16, 23, 30] },
    { day: 'WED', dates: [3, 10, 17, 24, 31] },
    { day: 'THU', dates: [4, 11, 18, 25, null] },
    { day: 'FRI', dates: [5, 12, 19, 26, null] },
    { day: 'SAT', dates: [6, 13, 20, 27, null] }
  ];

  const isTimeSlotBooked = (date, time) => {
    const selectedDateObj = new Date(2024, 6, date);
    return bookedSlots.some(
      (booked) =>
        booked.date.toDateString() === selectedDateObj.toDateString() && booked.time === time
    );
  };

  function handleBooking() {
    if (!selectedDay || !selectedTime || !selectedService || !selectedDoctor) {
      alert('Please select a service, doctor, date, and time to confirm your booking.');
      return;
    }

    if (isTimeSlotBooked(selectedDay, selectedTime)) {
      alert('This time slot is already booked. Please choose another.');
      return;
    }

    alert('Appointment Booked!\n\n' +
      'Service: ' + selectedService + '\n' +
      'Doctor: ' + selectedDoctor + '\n' +
      'Date: July ' + selectedDay + ', 2024\n' +
      'Time: ' + selectedTime);

    setBookedSlots(prevBookedSlots => [...prevBookedSlots, { date: new Date(2024, 6, selectedDay), time: selectedTime }]);
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box'
    }}>

      <div style={{
        width: isSidebarOpen ? '280px' : '80px',
        minWidth: isSidebarOpen ? '280px' : '80px',
        backgroundColor: 'white',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: '0',
        transition: 'width 0.3s ease-in-out, min-width 0.3s ease-in-out'
      }}>

        <div style={{
          padding: '25px 20px',
          borderBottom: '1px solid #e9ecef',
          display: 'flex',
          justifyContent: isSidebarOpen ? 'space-between' : 'center',
          alignItems: 'center',
          height: '70px',
          overflow: 'hidden'
        }}>
          {isSidebarOpen && (
            <h1 style={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#2c3e50',
              margin: '0',
              whiteSpace: 'nowrap'
            }}>
              Smile Studio
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6c757d',
              marginLeft: isSidebarOpen ? 'auto' : '0'
            }}
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <div style={{ flex: '1', paddingTop: '20px' }}>
          {[
            { name: 'Home', icon: Home, active: false },
            { name: 'Services', icon: Briefcase, active: true },
            { name: 'Doctors', icon: Users, active: false },
            { name: 'Reviews', icon: Star, active: false },
            { name: 'Contact', icon: Phone, active: false }
          ].map(item => (
            <div
              key={item.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px 20px',
                cursor: 'pointer',
                color: item.active ? '#2196f3' : '#6c757d',
                backgroundColor: item.active ? '#e3f2fd' : 'transparent',
                borderRight: item.active ? '4px solid #2196f3' : 'none',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => {
                if (!item.active) e.currentTarget.style.backgroundColor = '#f1f3f4';
              }}
              onMouseOut={(e) => {
                if (!item.active) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <item.icon size={20} style={{ marginRight: isSidebarOpen ? '12px' : '0' }} />
              {isSidebarOpen && <span style={{ fontWeight: item.active ? '500' : 'normal', whiteSpace: 'nowrap' }}>{item.name}</span>}
            </div>
          ))}
        </div>

        <div style={{
          padding: '20px',
          borderTop: '1px solid #e9ecef',
          height: '70px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isSidebarOpen ? 'flex-start' : 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: '#6c757d'
          }}>
            <User size={20} style={{ marginRight: isSidebarOpen ? '12px' : '0' }} />
            {isSidebarOpen && <span style={{ whiteSpace: 'nowrap' }}>Profile</span>}
          </div>
        </div>
      </div>

      <div style={{
        flex: '1',
        width: '100%',
        minWidth: '0',
        padding: '40px 50px',
        overflowY: 'auto',
        backgroundColor: '#f8f9fa'
      }}>

        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#2c3e50'
        }}>
          Book an Appointment
        </h2>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '50px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto'
        }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '15px',
                fontSize: '16px',
                color: '#333333',
                fontWeight: 'bold'
              }}>
                Select Service
              </label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '10px'
              }}>
                {services.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedService(s)}
                    style={{
                      padding: '12px 16px',
                      border: selectedService === s ? '2px solid #2196f3' : '2px solid #dee2e6',
                      borderRadius: '8px',
                      backgroundColor: selectedService === s ? '#2196f3' : '#f8f9fa',
                      color: selectedService === s ? 'white' : '#495057',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: selectedService === s ? '600' : 'normal',
                      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                    onMouseOver={(e) => {
                      if (selectedService !== s) {
                        e.currentTarget.style.backgroundColor = '#e9ecef';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (selectedService !== s) {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '15px',
                fontSize: '16px',
                color: '#333333',
                fontWeight: 'bold'
              }}>
                Select Doctor
              </label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '10px'
              }}>
                {doctors.map(d => (
                  <button
                    key={d}
                    onClick={() => setSelectedDoctor(d)}
                    style={{
                      padding: '12px 16px',
                      border: selectedDoctor === d ? '2px solid #2196f3' : '2px solid #dee2e6',
                      borderRadius: '8px',
                      backgroundColor: selectedDoctor === d ? '#2196f3' : '#f8f9fa',
                      color: selectedDoctor === d ? 'white' : '#495057',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: selectedDoctor === d ? '600' : 'normal',
                      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                    onMouseOver={(e) => {
                      if (selectedDoctor !== d) {
                        e.currentTarget.style.backgroundColor = '#e9ecef';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (selectedDoctor !== d) {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '70px', flexWrap: 'wrap', marginBottom: '50px', justifyContent: 'center' }}>

            <div style={{ flex: '1 1 550px', maxWidth: '650px', marginBottom: '0' }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '30px'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#2c3e50',
                  margin: '0'
                }}>
                  July 2024
                </h3>
              </div>

              <table style={{
                width: '100%',
                maxWidth: '650px',
                margin: '0 auto',
                borderCollapse: 'separate',
                borderSpacing: '25px'
              }}>

                <thead>
                  <tr>
                    {julyDays.map(col => (
                      <th key={col.day} style={{
                        textAlign: 'center',
                        fontSize: '16px',
                        color: '#6c757d',
                        fontWeight: '600',
                        paddingBottom: '15px'
                      }}>
                        {col.day}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {[0, 1, 2, 3, 4].map(weekIndex => (
                    <tr key={weekIndex}>
                      {julyDays.map(col => {
                        const date = col.dates[weekIndex];
                        return (
                          <td key={col.day + weekIndex} style={{ textAlign: 'center' }}>
                            {date && (
                              <button
                                onClick={() => setSelectedDay(date)}
                                style={{
                                  width: '70px',
                                  height: '70px',
                                  border: 'none',
                                  borderRadius: selectedDay === date ? '8px' : '50%',
                                  backgroundColor: selectedDay === date ? '#dc3545' : 'transparent',
                                  color: selectedDay === date ? 'white' : '#495057',
                                  cursor: 'pointer',
                                  fontSize: '22px',
                                  fontWeight: selectedDay === date ? 'bold' : 'normal',
                                  transition: 'background-color 0.3s, border-radius 0.3s'
                                }}
                                onMouseOver={(e) => {
                                  if (selectedDay !== date) {
                                    e.currentTarget.style.backgroundColor = '#f1f3f4';
                                  }
                                }}
                                onMouseOut={(e) => {
                                  if (selectedDay !== date) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                  }
                                }}
                              >
                                {date}
                              </button>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ flex: '1 1 550px', maxWidth: '1000px', marginBottom: '0' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '30px',
                color: '#2c3e50',
                textAlign: 'center'
              }}>
                Available Times on July {selectedDay}, 2024
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '15px',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {allTimes.map(time => {
                  const isBooked = isTimeSlotBooked(selectedDay, time);
                  const isSelected = selectedTime === time;
                  const isAvailable = true;

                  return (
                    <button
                      key={time}
                      onClick={() => {
                        if (!isBooked && isAvailable) {
                          setSelectedTime(time);
                        }
                      }}
                      style={{
                        padding: '15px 12px',
                        border: isSelected && !isBooked ? '2px solid #FFD700' : '2px solid #dee2e6',
                        borderRadius: '50px',
                        backgroundColor: isSelected && !isBooked ? '#FFD700' : (isBooked ? '#ffebee' : '#f8f9fa'),
                        color: isSelected && !isBooked ? '#333333' : (isBooked ? '#d32f2f' : '#495057'),
                        cursor: isBooked ? 'not-allowed' : 'pointer',
                        fontSize: '16px',
                        fontWeight: isSelected && !isBooked ? '600' : 'normal',
                        textDecoration: isBooked ? 'line-through' : 'none',
                        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s, border-radius 0.3s'
                      }}
                      onMouseOver={(e) => {
                        if (!isSelected && !isBooked && isAvailable) {
                          e.currentTarget.style.backgroundColor = '#ffecb3';
                          e.currentTarget.style.borderColor = '#ffcc00';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isSelected && !isBooked && isAvailable) {
                          e.currentTarget.style.backgroundColor = '#f8f9fa';
                          e.currentTarget.style.borderColor = '#dee2e6';
                        }
                      }}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleBooking}
              style={{
                padding: '18px 50px',
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1976d2';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#2196f3';
              }}
            >
              Confirm Booking
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;