import React, { useState } from 'react';
import { Calendar, Clock, User, Home, Briefcase, Users, Star, Phone, ChevronLeft, ChevronRight } from 'lucide-react'; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Slidebar open closed korar jonno code

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

      {/* Left Sidebar - jonno code ta rakha holo*/}
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

        {/* Logo rakha holo */}
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
          {/* Toggle Button sidebar on off bujar jonno */}
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

        {/* Main  Page Title */}
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

export default App;
