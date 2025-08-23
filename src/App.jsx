import React, { useState } from 'react'; 
import { Calendar, Clock, User, Home, Briefcase, Users, Star, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedService, setSelectedService] = useState('Teeth Whitening');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Anika Rahman');

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
              onMouseOver={(e) => { if (!item.active) e.currentTarget.style.backgroundColor = '#f1f3f4'; }}
              onMouseOut={(e) => { if (!item.active) e.currentTarget.style.backgroundColor = 'transparent'; }}
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
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', color: '#2c3e50' }}>
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
              <label style={{ display: 'block', marginBottom: '15px', fontSize: '16px', color: '#333333', fontWeight: 'bold' }}>
                Select Service
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
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
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                    }}
                    onMouseOver={(e) => { if (selectedService !== s) e.currentTarget.style.backgroundColor = '#e9ecef'; }}
                    onMouseOut={(e) => { if (selectedService !== s) e.currentTarget.style.backgroundColor = '#f8f9fa'; }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '15px', fontSize: '16px', color: '#333333', fontWeight: 'bold' }}>
                Select Doctor
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
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
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                    }}
                    onMouseOver={(e) => { if (selectedDoctor !== d) e.currentTarget.style.backgroundColor = '#e9ecef'; }}
                    onMouseOut={(e) => { if (selectedDoctor !== d) e.currentTarget.style.backgroundColor = '#f8f9fa'; }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
