import React from "react";
import CalendarApp from "../components/ui/CalenderApp";

const CalendarPage = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
      <div className="bg-white rounded-xl shadow-md">
        <CalendarApp />
      </div>
    </div>
  );
};

export default CalendarPage;    