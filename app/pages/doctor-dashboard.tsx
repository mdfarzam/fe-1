"use client"
import { Search, Eye, Trash2 } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"

export default function DoctorDashboard() {
  const patientsData = [
    { id: "01", date: "05.07.2021", name: "Angelica Monica", age: 42, country: "USA", gender: "Female" },
    { id: "02", date: "08.07.2021", name: "Stavelin Genicty", age: 38, country: "England", gender: "Male" },
    { id: "03", date: "12.07.2021", name: "Allen Humanityle", age: 52, country: "USA", gender: "Female" },
    { id: "04", date: "20.07.2021", name: "Marcus Filoscanelli", age: 23, country: "Germany", gender: "Male" },
    { id: "05", date: "23.07.2021", name: "Muhammed Fatih", age: 28, country: "India", gender: "Male" },
  ]

  return (
    <div className="h-screen bg-white">
      {/* Main Content - Full width without sidebar */}
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search something..."
                className="pl-12 w-80 h-12 bg-white border-slate-200 shadow-sm rounded-xl text-base focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-lg font-semibold text-slate-900 leading-6">Dr. Steven Brown</p>
              <p className="text-sm text-slate-500 leading-5">Medical Practitioner</p>
            </div>
            <Avatar className="w-12 h-12">
              <AvatarImage src="/caring-doctor.png" />
              <AvatarFallback className="bg-indigo-100 text-indigo-600 font-semibold">SB</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Latest Patients Data - Made this the main focus with larger sizing */}
        <Card className="shadow-sm border-slate-200 rounded-2xl bg-gray-50">
          <CardHeader className="px-8 py-6">
            <CardTitle className="text-2xl font-bold text-slate-900 leading-8">Latest Patients Data</CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="overflow-x-auto bg-gray-50">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-6 px-6 font-semibold text-slate-600 text-base leading-6">No</th>
                    <th className="text-left py-6 px-6 font-semibold text-slate-600 text-base leading-6">Date</th>
                    <th className="text-left py-6 px-6 font-semibold text-slate-600 text-base leading-6">Name</th>
                    <th className="text-left py-6 px-6 font-semibold text-slate-600 text-base leading-6">Age</th>
                    <th className="text-left py-6 px-6 font-semibold text-slate-600 text-base leading-6">Country</th>
                    <th className="text-left py-6 px-6 font-semibold text-slate-600 text-base leading-6">Gender</th>
                    <th className="text-left py-6 px-6 font-semibold text-slate-600 text-base leading-6">Setting</th>
                  </tr>
                </thead>
                <tbody>
                  {patientsData.map((patient, index) => (
                    <tr
                      key={patient.id}
                      className={`border-b border-slate-290 hover:bg-slate-50 transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-gray-50"}`}
                    >
                      <td className="py-6 px-6 text-slate-600 text-base leading-6">{patient.id}</td>
                      <td className="py-6 px-6 text-slate-600 text-base leading-6">{patient.date}</td>
                      <td className="py-6 px-6 font-semibold text-slate-900 text-base leading-6">{patient.name}</td>
                      <td className="py-6 px-6 text-slate-600 text-base leading-6">{patient.age}</td>
                      <td className="py-6 px-6 text-slate-500 text-base leading-6">{patient.country}</td>
                      <td className="py-6 px-6 text-slate-500 text-base leading-6">{patient.gender}</td>
                      <td className="py-6 px-6">
                        <div className="flex space-x-3">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                          >
                            <Eye className="w-5 h-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
