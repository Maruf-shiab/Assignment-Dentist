import React, { useState } from 'react';
import { Home, Briefcase, Users, Star, Phone, Menu, X, User } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [service, setService] = useState('Teeth Whitening');
  const [doctor, setDoctor] = useState('Dr. Anika Rahman');
  const [selectedDay, setSelectedDay] = useState(5);

  const services = ['Teeth Whitening', 'Dental Cleaning', 'Root Canal', 'Dental Implants', 'Orthodontics', 'Oral Surgery'];
  const doctors  = ['Dr. Md Maruful Islam', 'Dr. Rafiq Hassan', 'Dr. Ethika Sultana', 'Dr. Karim Benzama', 'Dr. Sidratul Muntaha'];

  const julyDays = [
    { day: 'SUN', dates: [null, 7, 14, 21, 28] },
    { day: 'MON', dates: [1, 8, 15, 22, 29] },
    { day: 'TUE', dates: [2, 9, 16, 23, 30] },
    { day: 'WED', dates: [3, 10, 17, 24, 31] },
    { day: 'THU', dates: [4, 11, 18, 25, null] },
    { day: 'FRI', dates: [5, 12, 19, 26, null] },
    { day: 'SAT', dates: [6, 13, 20, 27, null] }
  ];

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`bg-white shadow-md transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-20'} min-h-screen flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b">
          {sidebarOpen && <h1 className="text-xl font-bold text-slate-800 truncate">Smile Studio</h1>}
          <button
            onClick={() => setSidebarOpen(v => !v)}
            className="p-2 text-slate-500 hover:text-slate-700"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3">
          {[
            { name: 'Home', icon: Home, active: false },
            { name: 'Services', icon: Briefcase, active: true },
            { name: 'Doctors', icon: Users, active: false },
            { name: 'Reviews', icon: Star, active: false },
            { name: 'Contact', icon: Phone, active: false },
          ].map(item => (
            <div
              key={item.name}
              className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition
                ${item.active ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-500' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className={`truncate ${item.active ? 'font-medium' : ''}`}>{item.name}</span>}
            </div>
          ))}
        </nav>

        {/* Profile */}
        <div className="border-t px-5 py-4">
          <div className="flex items-center gap-3 text-slate-600 cursor-pointer">
            <User size={20} />
            {sidebarOpen && <span>Profile</span>}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 w-full min-w-0 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Book an Appointment</h2>

        <div className="bg-white rounded-xl shadow-sm p-8 max-w-6xl mx-auto">
          {/* Service & Doctor */}
          <div className="flex flex-col gap-8 mb-10">
            {/* Services */}
            <div>
              <label className="block mb-3 text-sm font-semibold text-slate-700">Select Service</label>
              <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
                {services.map(s => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className={`px-4 py-3 rounded-md border text-sm transition
                      ${service === s ? 'bg-blue-600 text-white border-blue-600 font-semibold' : 'bg-gray-50 text-slate-700 border-gray-300 hover:bg-gray-100'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Doctors */}
            <div>
              <label className="block mb-3 text-sm font-semibold text-slate-700">Select Doctor</label>
              <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
                {doctors.map(d => (
                  <button
                    key={d}
                    onClick={() => setDoctor(d)}
                    className={`px-4 py-3 rounded-md border text-sm transition
                      ${doctor === d ? 'bg-blue-600 text-white border-blue-600 font-semibold' : 'bg-gray-50 text-slate-700 border-gray-300 hover:bg-gray-100'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 text-center mb-6">July 2024</h3>
            <div className="overflow-x-auto">
              <table className="mx-auto border-separate" style={{ borderSpacing: 20 }}>
                <thead>
                  <tr>
                    {julyDays.map(col => (
                      <th key={col.day} className="text-center text-slate-500 font-semibold pb-2 text-sm">{col.day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[0,1,2,3,4].map(week => (
                    <tr key={week}>
                      {julyDays.map(col => {
                        const date = col.dates[week];
                        return (
                          <td key={`${col.day}-${week}`} className="text-center">
                            {date && (
                              <button
                                onClick={() => setSelectedDay(date)}
                                className={`w-14 h-14 text-lg transition
                                  ${selectedDay === date
                                    ? 'rounded-md bg-red-600 text-white font-bold'
                                    : 'rounded-full text-slate-700 hover:bg-slate-100'}`}
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
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
