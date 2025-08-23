import React, { useState } from 'react';
import { Calendar, Clock, User, Home, Briefcase, Users, Star, Phone, ChevronLeft, ChevronRight } from 'lucide-react'; // Import Lucide icons

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar open/close

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

      {/* Left Sidebar - Navigation Menu */}
      <div style={{
        width: isSidebarOpen ? '280px' : '80px', // Dynamic width based on state
        minWidth: isSidebarOpen ? '280px' : '80px',
        backgroundColor: 'white',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: '0',
        transition: 'width 0.3s ease-in-out, min-width 0.3s ease-in-out' // Smooth transition
      }}>

        {/* Logo/Title Area */}
        <div style={{
          padding: '25px 20px',
          borderBottom: '1px solid #e9ecef',
          display: 'flex',
          justifyContent: isSidebarOpen ? 'space-between' : 'center', // Center when closed
          alignItems: 'center',
          height: '70px', // Fixed height for header
          overflow: 'hidden' // Hide overflow when collapsed
        }}>
          {isSidebarOpen && ( // Only show title when sidebar is open
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
          {/* Toggle Button */}
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
              marginLeft: isSidebarOpen ? 'auto' : '0' // Push to right when open
            }}
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Amar Menu code Items eikhane */}
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
      </div>

      {/* Main Content Area */}
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
      </div>
    </div>
  );
}

export default App;
