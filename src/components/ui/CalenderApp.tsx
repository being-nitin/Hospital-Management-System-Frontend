import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, addWeeks, subWeeks, isTomorrow, isToday } from "date-fns";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";


// Event type definition
interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  endDate: Date; // Make endDate required to ensure we have start and end times
  color: string;
}

// Sample events data
const sampleEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Meeting',
    date: new Date(2024, 8, 10, 15, 0),
    endDate: new Date(2024, 8, 10, 16, 0),
    color: 'bg-orange-500'
  },
  {
    id: '2',
    title: 'Project Review',
    date: new Date(2024, 8, 17, 10, 0),
    endDate: new Date(2024, 8, 17, 11, 30),
    color: 'bg-orange-500'
  },
  {
    id: '3',
    title: 'Client Call',
    date: new Date(2024, 8, 12, 14, 0),
    endDate: new Date(2024, 8, 12, 15, 0),
    color: 'bg-green-500'
  },
  {
    id: '4',
    title: 'Workshop',
    date: new Date(2024, 8, 28, 9, 0),
    endDate: new Date(2024, 8, 28, 17, 0),
    color: 'bg-green-500'
  },
  // Added sample clinic appointments to match the design
  {
    id: '5',
    title: 'Sit at clinic 1',
    date: new Date(2024, 10, 1, 10, 0),
    endDate: new Date(2024, 10, 1, 11, 0),
    color: 'bg-blue-500'
  },
  {
    id: '6',
    title: 'Sit at clinic 2',
    date: new Date(2024, 10, 1, 10, 0),
    endDate: new Date(2024, 10, 1, 11, 0),
    color: 'bg-blue-500'
  },
  {
    id: '7',
    title: 'Sit at clinic 3',
    date: new Date(2024, 10, 1, 10, 0),
    endDate: new Date(2024, 10, 1, 11, 0),
    color: 'bg-blue-500'
  }
];

type CalendarView = 'month' | 'week' | 'day';

const CalendarApp: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [view, setView] = useState<CalendarView>('month');
  const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [newEvent, setNewEvent] = useState<{
    title: string;
    date: Date;
    startTime: string;
    endTime: string;
    color: string;
  }>({
    title: "",
    date: new Date(),
    startTime: "10:00",
    endTime: "11:00",
    color: "bg-blue-500"
  });

  // Get calendar days based on current view
  const getDays = () => {
    if (view === 'month') {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(monthStart);
      const startDate = startOfWeek(monthStart);
      const endDate = endOfWeek(monthEnd);
      
      return eachDayOfInterval({ start: startDate, end: endDate });
    } else if (view === 'week') {
      const weekStart = startOfWeek(currentDate);
      const weekEnd = endOfWeek(currentDate);
      
      return eachDayOfInterval({ start: weekStart, end: weekEnd });
    } else {
      // Day view - return just the current day
      return [currentDate];
    }
  };

  // Navigate between months/weeks/days
  const navigate = (direction: 'prev' | 'next') => {
    if (view === 'month') {
      setCurrentDate(direction === 'prev' ? subMonths(currentDate, 1) : addMonths(currentDate, 1));
    } else if (view === 'week') {
      setCurrentDate(direction === 'prev' ? subWeeks(currentDate, 1) : addWeeks(currentDate, 1));
    } else {
      // Day view - navigate to previous or next day
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + (direction === 'prev' ? -1 : 1));
      setCurrentDate(newDate);
    }
  };

  // Get events for a specific day
  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(day, new Date(event.date)));
  };
  
  // Get today's events
  const getTodayEvents = () => {
    return events.filter(event => isToday(new Date(event.date)));
  };
  
  // Get tomorrow's events
  const getTomorrowEvents = () => {
    return events.filter(event => isTomorrow(new Date(event.date)));
  };

  // Format the header based on view
  const getHeaderText = () => {
    if (view === 'month') {
      return format(currentDate, 'MMMM yyyy');
    } else if (view === 'week') {
      const weekStart = startOfWeek(currentDate);
      const weekEnd = endOfWeek(currentDate);
      return `${format(weekStart, 'MMM d')} - ${format(weekEnd, 'MMM d, yyyy')}`;
    } else {
      // Day view
      return format(currentDate, 'EEEE, MMMM d, yyyy');
    }
  };

  // Handle opening the modal for a new event
  const openAddEventModal = () => {
    setSelectedDate(currentDate);
    setNewEvent({
      title: "",
      date: currentDate,
      startTime: "10:00",
      endTime: "11:00",
      color: "bg-blue-500"
    });
    setShowEventModal(true);
  };

  // Handle day click to set the selected date
  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
    setNewEvent({
      ...newEvent,
      date: day
    });
  };

  // Handle adding a new event
  const handleAddEvent = () => {
    // Parse the start time string (HH:MM) into hours and minutes
    const [startHours, startMinutes] = newEvent.startTime.split(':').map(Number);
    
    // Parse the end time string (HH:MM) into hours and minutes
    const [endHours, endMinutes] = newEvent.endTime.split(':').map(Number);
    
    // Create start date with the selected date and time
    const startDate = new Date(newEvent.date);
    startDate.setHours(startHours, startMinutes);
    
    // Create end date with the selected date and time
    const endDate = new Date(newEvent.date);
    endDate.setHours(endHours, endMinutes);
    
    const newEventObject: CalendarEvent = {
      id: `${events.length + 1}`,
      title: newEvent.title || "New Event",
      date: startDate,
      endDate: endDate,
      color: newEvent.color
    };
    
    setEvents([...events, newEventObject]);
    setShowEventModal(false);
  };

  // Time slots for week view
  const timeSlots = Array.from({ length: 12 }, (_, i) => i + 8); // 8AM to 7PM

  // Available color options
  const colorOptions = [
    'bg-blue-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-purple-500',
    'bg-red-500'
  ];

  // Format event time for display (10:00am - 11:00am)
  const formatEventTime = (event: CalendarEvent) => {
    return `${format(new Date(event.date), 'h:mm a')} - ${format(new Date(event.endDate), 'h:mm a')}`;
  };

  return (
    <div className="flex w-full">
      {/* Calendar Sidebar */}
      <div className="w-64 bg-gray-50 border-r p-4 h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Calendar</h2>
        
        {/* Today's Events */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Today</h3>
          {getTodayEvents().length > 0 ? (
            getTodayEvents().map(event => (
              <div key={event.id} className="bg-white p-3 rounded-md shadow-sm mb-2 border-l-4 border-blue-500">
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-gray-500">
                  {formatEventTime(event)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No events scheduled</p>
          )}
        </div>
        
        {/* Tomorrow's Events */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Tomorrow</h3>
          {getTomorrowEvents().length > 0 ? (
            getTomorrowEvents().map(event => (
              <div key={event.id} className="bg-white p-3 rounded-md shadow-sm mb-2 border-l-4 border-green-500">
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-gray-500">
                  {formatEventTime(event)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No events scheduled</p>
          )}
        </div>
      </div>
      
      {/* Main Calendar Area */}
      <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
        {/* Calendar Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-xl font-semibold">{getHeaderText()}</div>
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => setView('day')}
                className={cn(
                  "px-3 py-1 rounded",
                  view === 'day' ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                )}
              >
                Day
              </button>
              <button
                onClick={() => setView('week')}
                className={cn(
                  "px-3 py-1 rounded",
                  view === 'week' ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                )}
              >
                Week
              </button>
              <button
                onClick={() => setView('month')}
                className={cn(
                  "px-3 py-1 rounded",
                  view === 'month' ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                )}
              >
                Month
              </button>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => navigate('prev')}
                className="p-1 rounded hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('next')}
                className="p-1 rounded hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <button 
              onClick={openAddEventModal}
              className="flex items-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Event
            </button>
          </div>
        </div>

        {/* Month View */}
        {view === 'month' && (
          <div className="month-view">
            {/* Days of week header */}
            <div className="grid grid-cols-7 border-b">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 text-center text-gray-500 font-medium">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar grid */}
            <div className="grid grid-cols-7 auto-rows-fr">
              {getDays().map((day, idx) => {
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isToday = isSameDay(day, new Date());
                const dayEvents = getEventsForDay(day);
                
                return (
                  <div 
                    key={idx}
                    className={cn(
                      "min-h-24 p-1 border-r border-b cursor-pointer",
                      !isCurrentMonth && "bg-gray-50 text-gray-400"
                    )}
                    onClick={() => handleDayClick(day)}
                  >
                    <div className="flex justify-between items-start">
                      <span className={cn(
                        "inline-flex h-6 w-6 items-center justify-center rounded-full text-sm",
                        isToday ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                      )}>
                        {format(day, 'd')}
                      </span>
                    </div>
                    <div className="mt-1 max-h-20 overflow-y-auto">
                      {dayEvents.map(event => (
                        <div 
                          key={event.id}
                          className={cn(
                            "text-xs p-1 mb-1 rounded text-white truncate",
                            event.color
                          )}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Day View */}
        {view === 'day' && (
          <div className="day-view">
            <div className="grid grid-cols-1 border-b">
              <div 
                className="p-2 text-center cursor-pointer"
                onClick={() => handleDayClick(currentDate)}
              >
                <div className="text-gray-500 text-sm">{format(currentDate, 'EEEE')}</div>
                <div className={cn(
                  "text-sm font-medium mt-1",
                  isSameDay(currentDate, new Date()) && "bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mx-auto"
                )}>
                  {format(currentDate, 'd')}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 h-96 overflow-y-auto">
              <div className="time-labels border-r">
                {timeSlots.map(hour => (
                  <div key={hour} className="h-12 border-b text-xs text-gray-500 text-right pr-1">
                    {hour % 12 === 0 ? '12' : hour % 12}:00 {hour >= 12 ? 'PM' : 'AM'}
                  </div>
                ))}
              </div>
              
              <div className="col-span-1 relative">
                {timeSlots.map(hour => (
                  <div key={hour} className="h-12 border-b"></div>
                ))}
                
                {/* Events */}
                {events.filter(event => isSameDay(new Date(event.date), currentDate)).map(event => {
                  const eventHour = new Date(event.date).getHours();
                  const eventPosition = (eventHour - 8) * 3; // 3rem per hour
                  
                  return (
                    <div
                      key={event.id}
                      className={cn(
                        "absolute left-0 right-0 mx-1 p-1 rounded text-white text-xs",
                        event.color
                      )}
                      style={{ 
                        top: `${eventPosition}rem`,
                        height: '3rem'
                      }}
                    >
                      {event.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Week View */}
        {view === 'week' && (
          <div className="week-view">
            <div className="grid grid-cols-8 border-b">
              <div className="border-r"></div>
              {getDays().map((day, idx) => (
                <div 
                  key={idx} 
                  className="p-2 text-center border-r cursor-pointer"
                  onClick={() => handleDayClick(day)}
                >
                  <div className="text-gray-500 text-sm">{format(day, 'EEE')}</div>
                  <div className={cn(
                    "text-sm font-medium mt-1",
                    isSameDay(day, new Date()) && "bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mx-auto"
                  )}>
                    {format(day, 'd')}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-8 h-96 overflow-y-auto">
              <div className="time-labels border-r">
                {timeSlots.map(hour => (
                  <div key={hour} className="h-12 border-b text-xs text-gray-500 text-right pr-1">
                    {hour % 12 === 0 ? '12' : hour % 12}:00 {hour >= 12 ? 'PM' : 'AM'}
                  </div>
                ))}
              </div>
              
              {getDays().map((day, dayIndex) => (
                <div key={dayIndex} className="col-span-1 border-r relative">
                  {timeSlots.map(hour => (
                    <div key={hour} className="h-12 border-b"></div>
                  ))}
                  
                  {/* Events */}
                  {events.filter(event => isSameDay(new Date(event.date), day)).map(event => {
                    const eventHour = new Date(event.date).getHours();
                    const eventPosition = (eventHour - 8) * 3; // 3rem per hour
                    
                    return (
                      <div
                        key={event.id}
                        className={cn(
                          "absolute left-0 right-0 mx-1 p-1 rounded text-white text-xs",
                          event.color
                        )}
                        style={{ 
                          top: `${eventPosition}rem`,
                          height: '3rem'
                        }}
                      >
                        {event.title}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-96 text-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Add New Event</h3>
              <button onClick={() => setShowEventModal(false)} className="text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Event Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter event title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                  value={format(newEvent.date, 'yyyy-MM-dd')}
                  onChange={(e) => {
                    const date = new Date(e.target.value);
                    setNewEvent({...newEvent, date});
                  }}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Start Time</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                    value={newEvent.startTime}
                    onChange={(e) => setNewEvent({...newEvent, startTime: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">End Time</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                    value={newEvent.endTime}
                    onChange={(e) => setNewEvent({...newEvent, endTime: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Color</label>
                <div className="flex space-x-2">
                  {colorOptions.map((color) => (
                    <div
                      key={color}
                      className={cn(
                        "h-6 w-6 rounded-full cursor-pointer",
                        color,
                        newEvent.color === color && "ring-2 ring-offset-2 ring-blue-500"
                      )}
                      onClick={() => setNewEvent({...newEvent, color})}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  onClick={() => setShowEventModal(false)}
                  className="bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddEvent}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarApp;