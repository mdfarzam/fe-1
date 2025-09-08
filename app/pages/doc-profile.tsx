import { Badge } from "@/app/components/ui/badge"
import { Clock, MapPin, Languages, GraduationCap, Award, Building2 } from "lucide-react"

export default function DoctorProfilePage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Doctor Profile Header + Availability */}
          <div className="space-y-8">
            {/* Doctor Profile Header */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border-1 border-black/20">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-semibold text-gray-900">Dr. Ananya Sharma</h1>
                  <p className="text-xl text-blue-600 font-medium">Cardiologist</p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                </div>

                <div className="flex flex-wrap gap-3 ">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2 text-sm">
                    <Award className="w-4 h-4 mr-2" />
                    12+ Years Experience
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    MBBS, MD
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 text-sm">
                    <Building2 className="w-4 h-4 mr-2" />
                    Apollo Hospital
                  </Badge>
                </div>
              </div>
            </div>

            {/* Availability & Booking */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border-1 border-black/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-900">Today's Availability</h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <span className="font-medium text-gray-700">Mon - Fri</span>
                      <span className="text-gray-900 font-semibold">10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Details & Languages */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border-1 border-black/20">
            <div className="space-y-8">
              {/* Professional Details */}
              <div>
                <div className="flex items-center gap-3 mb-6 ">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-900">Professional Details</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Experience</span>
                    <span className="text-gray-900 font-semibold">12+ years</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Qualifications</span>
                    <span className="text-gray-900 font-semibold">MBBS, MD</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Hospital</span>
                    <span className="text-gray-900 font-semibold">Apollo Hospital</span>
                  </div>
                </div>
              </div>

              {/* Languages & Location */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Languages className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-900">Languages & Location</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Languages</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        English
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        Hindi
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Location
                    </span>
                    <span className="text-gray-900 font-semibold">Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
