
// 'use client'
// // components/CarRentalSearchForm.jsx
// import { useState, useRef, useEffect } from 'react';
// import { MapPin, Calendar, Search } from 'lucide-react';

// const locations = [
//   "Dubai Marina",
//   "Downtown Dubai",
//   "Palm Jumeirah",
//   "Dubai International Airport (DXB)",
//   "Al Barsha",
//   "Business Bay",
//   "Jumeirah Beach Residence (JBR)",
//   "Dubai Mall",
//   "Burj Khalifa",
//   "Jumeirah Lakes Towers (JLT)"
// ];

// const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// const CarRentalSearchForm = () => {
//   // Form state
//   const [location, setLocation] = useState("");
//   const [pickupDate, setPickupDate] = useState("");
//   const [pickupTime, setPickupTime] = useState("14");
//   const [pickupMinutes, setPickupMinutes] = useState("29");
//   const [dropoffDate, setDropoffDate] = useState("");
//   const [dropoffTime, setDropoffTime] = useState("16");
//   const [dropoffMinutes, setDropoffMinutes] = useState("59");
  
//   // UI state
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [currentMonth, setCurrentMonth] = useState(new Date());
  
//   // Refs for each dropdown section
//   const formRef = useRef(null);
//   const locationRef = useRef(null);
//   const pickupRef = useRef(null);
//   const dropoffRef = useRef(null);

//   // Handle click outside to close dropdowns
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (
//         activeDropdown === 'location' && 
//         locationRef.current && 
//         !locationRef.current.contains(e.target)
//       ) {
//         setActiveDropdown(null);
//       } else if (
//         activeDropdown === 'pickup' && 
//         pickupRef.current && 
//         !pickupRef.current.contains(e.target)
//       ) {
//         setActiveDropdown(null);
//       } else if (
//         activeDropdown === 'dropoff' && 
//         dropoffRef.current && 
//         !dropoffRef.current.contains(e.target)
//       ) {
//         setActiveDropdown(null);
//       }
//     };
    
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [activeDropdown]);

//   // Handle dropdown toggle
//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   // Generate days for the calendar
//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (year, month) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     return firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday start
//   };

//   const generateCalendarDays = () => {
//     const year = currentMonth.getFullYear();
//     const month = currentMonth.getMonth();
//     const daysInMonth = getDaysInMonth(year, month);
//     const firstDay = getFirstDayOfMonth(year, month);
    
//     const days = [];
    
//     // Empty cells for days before the first day of month
//     for (let i = 0; i < firstDay; i++) {
//       days.push(null);
//     }
    
//     // Fill in the days of the month
//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push(i);
//     }
    
//     return days;
//   };

//   // Format date for display
//   const formatDate = (date) => {
//     if (!date) return "";
//     const year = currentMonth.getFullYear();
//     const month = currentMonth.getMonth() + 1;
//     return `${month.toString().padStart(2, '0')}/${date.toString().padStart(2, '0')}/${year}`;
//   };

//   // Handle search submission
//   const handleSearch = () => {
//     // Reset all form values
//     setLocation("");
//     setPickupDate("");
//     setPickupTime("14");
//     setPickupMinutes("29");
//     setDropoffDate("");
//     setDropoffTime("16");
//     setDropoffMinutes("59");
//     setActiveDropdown(null);
    
//     console.log("Search submitted with:", {
//       location,
//       pickupDate: formatDate(pickupDate),
//       pickupTime: `${pickupTime}:${pickupMinutes}`,
//       dropoffDate: formatDate(dropoffDate),
//       dropoffTime: `${dropoffTime}:${dropoffMinutes}`
//     });
//   };

//   // Handle location selection
//   const handleLocationSelect = (loc) => {
//     setLocation(loc);
//     setActiveDropdown(null);
//   };

//   // Handle date selection
//   const handleDateSelect = (date, type) => {
//     if (type === 'pickup') {
//       setPickupDate(date);
//     } else {
//       setDropoffDate(date);
//     }
//   };

//   // Format display date
//   const getFormattedDisplayDate = (date, time, minutes) => {
//     if (!date) return "";
//     const formattedDate = formatDate(date);
//     return `${formattedDate.split('/').slice(0, 2).join('/')}/2025, ${time}:${minutes}`;
//   };

//   // Handle apply button for date/time
//   const handleApply = () => {
//     setActiveDropdown(null);
//   };

//   return (
//     <div className="flex justify-center w-full max-w-5xl mx-auto mt-4 px-4">
//       <div 
//         ref={formRef}
//         className="relative bg-white rounded-full shadow-lg flex flex-col sm:flex-row w-full overflow-hidden"
//       >
//         {/* Location Input */}
//         <div 
//           ref={locationRef}
//           className="flex-1 flex items-center border-b sm:border-b-0 sm:border-r border-gray-200 relative"
//         >
//           <div 
//             className="w-full p-4 cursor-pointer"
//             onClick={() => toggleDropdown('location')}
//           >
//             <div className="flex items-center text-gray-500 mb-1">
//               <MapPin size={18} className="mr-2" />
//               <span className="text-sm font-medium">Location</span>
//             </div>
//             <input
//               type="text"
//               placeholder="Where are you going?"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
//               readOnly
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleDropdown('location');
//               }}
//             />
//           </div>
          
//           {/* Location Dropdown */}
//           {activeDropdown === 'location' && (
//             <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-y-auto">
//               <ul className="py-1">
//                 {locations.map((loc, index) => (
//                   <li 
//                     key={index}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleLocationSelect(loc);
//                     }}
//                   >
//                     {loc}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
        
//         {/* Pick-up Date/Time */}
//         <div 
//           ref={pickupRef}
//           className="flex-1 flex items-center border-b sm:border-b-0 sm:border-r border-gray-200 relative"
//         >
//           <div 
//             className="w-full p-4 cursor-pointer"
//             onClick={() => toggleDropdown('pickup')}
//           >
//             <div className="flex items-center text-gray-500 mb-1">
//               <Calendar size={18} className="mr-2" />
//               <span className="text-sm font-medium">Pick-up</span>
//             </div>
//             <input
//               type="text"
//               placeholder="Date & Time"
//               value={pickupDate ? getFormattedDisplayDate(pickupDate, pickupTime, pickupMinutes) : ""}
//               className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
//               readOnly
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleDropdown('pickup');
//               }}
//             />
//           </div>
          
//           {/* Pick-up Calendar Dropdown */}
//           {activeDropdown === 'pickup' && (
//             <div className="absolute top-full left-0 w-full md:w-96 bg-white shadow-lg rounded-lg z-10">
//               <div className="p-4">
//                 {/* Calendar */}
//                 <div className="mb-4">
//                   <div className="grid grid-cols-7 gap-2">
//                     {daysOfWeek.map((day, index) => (
//                       <div key={index} className="text-center text-gray-500 font-medium py-2">
//                         {day}
//                       </div>
//                     ))}
                    
//                     {generateCalendarDays().map((day, index) => (
//                       <div 
//                         key={index} 
//                         className={`text-center py-2 ${day ? 'cursor-pointer hover:bg-gray-100 rounded' : ''} ${day === pickupDate ? 'bg-amber-100 text-amber-700 rounded' : ''}`}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           day && handleDateSelect(day, 'pickup');
//                         }}
//                       >
//                         {day || ''}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Time Selection */}
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center">
//                       <Calendar size={18} className="mr-2" />
//                       <span className="text-sm font-medium">Pick-up</span>
//                     </div>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <div className="flex-1">
//                       <select 
//                         className="w-full p-2 border border-gray-200 rounded-lg bg-white"
//                         value={pickupTime}
//                         onChange={(e) => setPickupTime(e.target.value)}
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
//                           <option key={hour} value={hour.toString().padStart(2, '0')}>
//                             {hour.toString().padStart(2, '0')}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="flex-1">
//                       <select 
//                         className="w-full p-2 border border-gray-200 rounded-lg bg-white"
//                         value={pickupMinutes}
//                         onChange={(e) => setPickupMinutes(e.target.value)}
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
//                           <option key={minute} value={minute.toString().padStart(2, '0')}>
//                             {minute.toString().padStart(2, '0')}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Action Buttons */}
//                 <div className="flex justify-end pt-4">
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setActiveDropdown(null);
//                     }} 
//                     className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full mr-2"
//                   >
//                     Cancel
//                   </button>
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleApply();
//                     }} 
//                     className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-black rounded-full"
//                   >
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         {/* Drop-off Date/Time */}
//         <div 
//           ref={dropoffRef}
//           className="flex-1 flex items-center relative"
//         >
//           <div 
//             className="w-full p-4 cursor-pointer"
//             onClick={() => toggleDropdown('dropoff')}
//           >
//             <div className="flex items-center text-gray-500 mb-1">
//               <Calendar size={18} className="mr-2" />
//               <span className="text-sm font-medium">Drop-off</span>
//             </div>
//             <input
//               type="text"
//               placeholder="Date & Time"
//               value={dropoffDate ? getFormattedDisplayDate(dropoffDate, dropoffTime, dropoffMinutes) : ""}
//               className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
//               readOnly
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleDropdown('dropoff');
//               }}
//             />
//           </div>
          
//           {/* Drop-off Calendar Dropdown */}
//           {activeDropdown === 'dropoff' && (
//             <div className="absolute top-full right-0 w-full md:w-96 bg-white shadow-lg rounded-lg z-10">
//               <div className="p-4">
//                 {/* Calendar */}
//                 <div className="mb-4">
//                   <div className="grid grid-cols-7 gap-2">
//                     {daysOfWeek.map((day, index) => (
//                       <div key={index} className="text-center text-gray-500 font-medium py-2">
//                         {day}
//                       </div>
//                     ))}
                    
//                     {generateCalendarDays().map((day, index) => (
//                       <div 
//                         key={index} 
//                         className={`text-center py-2 ${day ? 'cursor-pointer hover:bg-gray-100 rounded' : ''} ${day === dropoffDate ? 'bg-amber-100 text-amber-700 rounded' : ''}`}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           day && handleDateSelect(day, 'dropoff');
//                         }}
//                       >
//                         {day || ''}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Time Selection */}
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center">
//                       <Calendar size={18} className="mr-2" />
//                       <span className="text-sm font-medium">Drop-off</span>
//                     </div>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <div className="flex-1">
//                       <select 
//                         className="w-full p-2 border border-gray-200 rounded-lg bg-white"
//                         value={dropoffTime}
//                         onChange={(e) => setDropoffTime(e.target.value)}
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
//                           <option key={hour} value={hour.toString().padStart(2, '0')}>
//                             {hour.toString().padStart(2, '0')}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="flex-1">
//                       <select 
//                         className="w-full p-2 border border-gray-200 rounded-lg bg-white"
//                         value={dropoffMinutes}
//                         onChange={(e) => setDropoffMinutes(e.target.value)}
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
//                           <option key={minute} value={minute.toString().padStart(2, '0')}>
//                             {minute.toString().padStart(2, '0')}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Action Buttons */}
//                 <div className="flex justify-end pt-4">
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setActiveDropdown(null);
//                     }} 
//                     className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full mr-2"
//                   >
//                     Cancel
//                   </button>
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleApply();
//                     }} 
//                     className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-black rounded-full"
//                   >
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         {/* Search Button */}
//         <button 
//           className="bg-amber-400 hover:bg-amber-500 transition-colors text-black font-medium rounded-full px-8 py-4 flex items-center justify-center m-4 sm:m-0 sm:rounded-l-none"
//           onClick={handleSearch}
//         >
//           <Search size={20} className="mr-2" />
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarRentalSearchForm;