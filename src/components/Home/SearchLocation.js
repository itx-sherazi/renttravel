import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

export default function CarRentalSearchForm() {
  

      return (
        <div className="max-w-4xl mt-4  mx-auto p-4">
        {/* On large screens, use the original horizontal layout */}
        <div className="hidden md:flex  bg-white rounded-full shadow-lg p-2 items-center">
          {/* Location field */}
          <div className="flex-1 flex items-center p-2 border-r border-gray-200">
            <MapPin className="text-gray-400 h-5 w-5 mr-2" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Location</span>
              <span className="text-gray-400 text-sm">Where are you going?</span>
            </div>
          </div>
  
          {/* Pick-up date */}
          <div className="flex-1 flex items-center p-2 border-r border-gray-200">
            <Calendar className="text-gray-400 h-5 w-5 mr-2" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Pick-up</span>
              <span className="text-gray-400 text-sm">04/18/2025, 14:29</span>
            </div>
          </div>
  
          {/* Arrow for desktop */}
          <div className="flex items-center justify-center px-2">
            <div className="text-gray-400">&rarr;</div>
          </div>
  
          {/* Drop-off date */}
          <div className="flex-1 flex items-center p-2">
            <Calendar className="text-gray-400 h-5 w-5 mr-2" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Drop-off</span>
              <span className="text-gray-400 text-sm">04/18/2025, 00:00</span>
            </div>
          </div>
  
          {/* Search button */}
          <div className="ml-2">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-6 rounded-full flex items-center justify-center">
              <Search className="h-5 w-5 mr-1" />
              <span>Search</span>
            </button>
          </div>
        </div>
  
        {/* On small screens, use the stacked layout */}
        <div className="md:hidden bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Location field */}
          <div className="flex items-center p-4 border-b border-gray-200">
            <MapPin className="text-gray-400 h-5 w-5 mr-2" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Location</span>
              <span className="text-gray-400 text-sm">Where are you going?</span>
            </div>
          </div>
  
          {/* Dates section - mobile layout */}
          <div className="flex items-center p-4 border-b border-gray-200">
            {/* Pick-up date */}
            <div className="flex items-center">
              <Calendar className="text-gray-400 h-5 w-5 mr-2" />
              <span className="font-medium text-gray-800">Pick-up</span>
            </div>
  
            {/* Arrow */}
            <div className="flex items-center justify-center px-4">
              <div className="text-gray-400">&rarr;</div>
            </div>
  
            {/* Drop-off date */}
            <div className="flex items-center">
              <Calendar className="text-gray-400 h-5 w-5 mr-2" />
              <span className="font-medium text-gray-800">Drop-off</span>
            </div>
          </div>
  
          {/* Search button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-4 w-full flex items-center justify-center">
            <span>Search</span>
          </button>
        </div>
      </div>
  
  );
}