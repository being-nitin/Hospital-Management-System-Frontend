import { useState } from "react";
import { Search, ChevronRight, MoreVertical, Mail, Phone, FileEdit, Plus } from "lucide-react";

export default function AppointmentsSection() {
  const [activeTab, setActiveTab] = useState("General");
  const [activeQueue, setActiveQueue] = useState("All");
  
  return (
    <div className="flex flex-col h-screen w-full bg-[#F5F6FA]">
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-blue-600">Appointments</h1>
      </div>
      
      <div className="flex gap-3 bg-transparent px-6 mb-4 justify-between items-center">
        <div className="flex gap-3">
          <div 
            className={`px-6 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ${
              activeTab === "General" ? "bg-blue-100 text-blue-600 border border-blue-200" : "bg-white text-gray-500 border border-gray-200"
            }`}
            onClick={() => setActiveTab("General")}
          >
            General
          </div>
          <div 
            className={`px-6 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ${
              activeTab === "Patient Documents" ? "bg-blue-100 text-blue-600 border border-blue-200" : "bg-white text-gray-500 border border-gray-200"
            }`}
            onClick={() => setActiveTab("Patient Documents")}
          >
            Patient Documents
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4" />
          Add Appointment
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left panel - Patient Queue */}
        <div className="w-1/4 border-r border-gray-200 bg-white flex flex-col h-full">
          <div className="p-4 border-b border-gray-100 bg-[#F5F6FA]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-800">Patient Queue</h2>
              <Search className="h-5 w-5 text-gray-500" />
            </div>

            <div className="flex gap-2 mt-4">
              <div
                className={`px-4 py-2 text-sm cursor-pointer rounded-lg border font-medium transition-all
                  ${activeQueue === "All" 
                    ? "bg-blue-50 text-blue-600 border-blue-100" 
                    : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`}
                onClick={() => setActiveQueue("All")}
              >
                All
              </div>
              <div
                className={`px-4 py-2 text-sm cursor-pointer rounded-lg border font-medium transition-all
                  ${activeQueue === "Oldest" 
                    ? "bg-blue-50 text-blue-600 border-blue-100" 
                    : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`}
                onClick={() => setActiveQueue("Oldest")}
              >
                Oldest
              </div>
              <div
                className={`px-4 py-2 text-sm cursor-pointer rounded-lg border font-medium transition-all
                  ${activeQueue === "Newest" 
                    ? "bg-blue-50 text-blue-600 border-blue-100" 
                    : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`}
                onClick={() => setActiveQueue("Newest")}
              >
                Newest
              </div>
            </div>
          </div>

          {/* Patient List */}
          <div className="flex-1 overflow-y-auto bg-[#F5F6FA] p-3 pt-4">
            <PatientCard 
              name="Bessie Cooper" 
              date="12 March 2023"
              image="/api/placeholder/48/48"
            />
            <PatientCard 
              name="Jerome Bellingham" 
              date="12 March 2023"
              image="/api/placeholder/48/48"
              active={true}
            />
            <PatientCard 
              name="Darlene Robertson" 
              date="12 March 2023"
              image="/api/placeholder/48/48"
            />
            <PatientCard 
              name="Albert Flores" 
              date="12 March 2023"
              image="/api/placeholder/48/48"
            />
            <PatientCard 
              name="Vartika" 
              date="15 March 2023"
              image="/api/placeholder/48/48"
            />
            <PatientCard 
              name="Vinay" 
              date="15 March 2023"
              image="/api/placeholder/48/48"
            />
            <PatientCard 
              name="Kriti" 
              date="16 March 2023"
              image="/api/placeholder/48/48"
            />
            <PatientCard 
              name="Yash" 
              date="16 March 2023"
              image="/api/placeholder/48/48"
              member={true}
            />
          </div>
        </div>

        {/* Right panel - Patient Details */}
        <div className="w-3/4 flex flex-col overflow-y-auto">
          {/* Selected Patient */}
          <div className="p-4 flex justify-between items-center border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src="/api/placeholder/40/40" alt="Jerome Bellingham" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Jerome Bellingham</span>
                  <span className="text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded">MEMBER</span>
                </div>
                <div className="text-xs text-gray-500">Joined Since: 21 March 2023</div>
              </div>
            </div>
            <div className="flex">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md">
                <Mail size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md">
                <Phone size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md">
                <FileEdit size={20} />
              </button>
            </div>
          </div>
          
          {/* Medical Info */}
           <div className="bg-gray-120 rounded-lg">
      <h2 className="text-xl font-medium text-gray-700 p-6 pb-0">Medical Info</h2>
      
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm m-6 mt-4">
        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Left column */}
            <div className="space-y-6">
              <div className="flex">
                <div className="w-40">
                  <span className="text-sm text-gray-500">Appointment Date :</span>
                </div>
                <span className="text-sm font-medium text-gray-700">2025-01-20</span>
              </div>
              
              <div className="flex">
                <div className="w-40">
                  <span className="text-sm text-gray-500">Appointment Time :</span>
                </div>
                <span className="text-sm font-medium text-gray-700">18:00</span>
              </div>
              
              <div className="flex">
                <div className="w-40">
                  <span className="text-sm text-gray-500">Doctor :</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Dr. khushi</span>
              </div>
              
              <div className="flex">
                <div className="w-40">
                  <span className="text-sm text-gray-500">Gender :</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Male</span>
              </div>
              
              <div className="flex">
                <div className="w-40">
                  <span className="text-sm text-gray-500">Age:</span>
                </div>
                <span className="text-sm font-medium text-gray-700">25</span>
              </div>
            </div>
            
            {/* Middle column */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-gray-500 block mb-1">Weight</span>
                <span className="text-sm font-medium text-gray-700">54 kg</span>
              </div>
              
              <div>
                <span className="text-sm text-gray-500 block mb-1">Temperature</span>
                <span className="text-sm font-medium text-gray-700">32 C</span>
              </div>
              
              <div>
                <span className="text-sm text-gray-500 block mb-1">Blood Pressure</span>
                <span className="text-sm font-medium text-gray-700">110/80 mm Hg</span>
              </div>
            </div>
            
            {/* Right column */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-gray-500 block mb-1">Heart Rate</span>
                <span className="text-sm font-medium text-gray-700">90 bmp</span>
              </div>
              
              <div>
                <span className="text-sm text-gray-500 block mb-1">Pulse</span>
                <span className="text-sm font-medium text-gray-700">32 Beats/min</span>
              </div>
              
              <div>
                <span className="text-sm text-gray-500 block mb-1">Resp. Rate</span>
                <span className="text-sm font-medium text-gray-700">22 Breaths/min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          
          {/* Patient Notes */}
          <div className="px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium text-gray-700">Patient Notes</h2>
              <span className="text-sm text-blue-500 cursor-pointer">View All</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <PatientNote 
                date="June 6, 2023, 4:45 PM"
                title="Asthama"
                description="Ensure the patient always carries an inhaler and avoid allergy triggers."
              />
              <PatientNote 
                date="June 24, 2023, 4:45 PM"
                title="Hypertention"
                description="Ensure the patient to engage in light exercise and monitor blood pressure weekly."
              />
              <PatientNote 
                date="April 6, 2023, 4:45 PM"
                title="Type 2 Diabetics"
                description="Ensure Patient always monitors Blood sugar levels."
              />
              <PatientNote 
                date="June 6, 2023, 4:45 PM"
                title="Asthama"
                description="Ensure the patient always carries an inhaler and avoid"
              />
            </div>
          </div>
          
          {/* Prescription */}
          <div className="px-6 py-4">
            <h2 className="font-medium text-gray-700 mb-4">Prescription</h2>
            <div className="bg-white rounded-md shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-3 px-4">DRUG</th>
                    <th className="py-3 px-4">DOSAGE</th>
                    <th className="py-3 px-4">DURATION</th>
                    <th className="py-3 px-4">INSTRUCTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">TABLET Risperidol 3 mg</td>
                    <td className="py-3 px-4">1-0-1</td>
                    <td className="py-3 px-4">3 month(s)</td>
                    <td className="py-3 px-4">After Food</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">TABLET Parkisys 2 mg</td>
                    <td className="py-3 px-4">1-0-1</td>
                    <td className="py-3 px-4">3 month(s)</td>
                    <td className="py-3 px-4">After Food</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">TABLET D VENISYS ER 50 mg</td>
                    <td className="py-3 px-4">1-0-0</td>
                    <td className="py-3 px-4">3 month(s)</td>
                    <td className="py-3 px-4">After Food</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Completed Procedures */}
          <div className="px-6 py-4">
            <h2 className="font-medium text-gray-700 mb-4">Completed Procedures</h2>
            <div className="bg-white rounded-md shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-3 px-4">PROCEDURE</th>
                    <th className="py-3 px-4">COST</th>
                    <th className="py-3 px-4">DISCOUNT</th>
                    <th className="py-3 px-4">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">
                      <div>Consultation And Treatment</div>
                      <div className="text-xs text-gray-500">Note: Valid for 10 days only</div>
                    </td>
                    <td className="py-3 px-4">500.00</td>
                    <td className="py-3 px-4">0.00(0%)</td>
                    <td className="py-3 px-4">500.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function PatientCard({ name, date, image, active = false, member = false }) {
  return (
    <div className={`mx-3 mb-3 p-4 rounded-lg border cursor-pointer transition-colors ${
      active 
        ? "bg-blue-50 border-blue-200 shadow-sm" 
        : "bg-white border-gray-200 hover:bg-gray-50 hover:shadow-sm"
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900 mb-1">{name}</div>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span>Register: {date}</span>
              <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                <ChevronRight className="h-3 w-3 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-2 flex-shrink-0">
          {member && (
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded font-medium">MEMBER</span>
          )}
          <button className="p-1 hover:bg-gray-200 rounded transition-colors">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Patient Note Component
function PatientNote({ date, title, description }) {
  return (
    <div className="bg-white rounded-md shadow-sm p-3 border border-gray-100">
      <div className="text-xs text-gray-500 mb-1">{date}</div>
      <div className="font-medium text-sm mb-1">{title}</div>
      <div className="text-xs text-gray-600">{description}</div>
    </div>
  );
}