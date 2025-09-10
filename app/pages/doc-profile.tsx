import { Badge } from "@/app/components/ui/badge"
import { MapPin, Languages, GraduationCap, Award, Building2, Briefcase } from "lucide-react"

export default function DoctorProfilePage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-10 shadow-md border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column */}
            <div className="space-y-8">
              {/* Doctor Profile Header with Image */}
              <div>
                <div className="flex items-center gap-6">
                  {/* Circle Image */}
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Doctor"
                    className="w-32 h-30 rounded-full object-cover border-3 border-sky-700 shadow-sm"
                  />

                  {/* Name & Specialization aligned with image height */}
                  <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-gray-900 leading-snug">
                      Dr. Ananya Sharma
                    </h1>
                    <p className="text-2xl text-blue-600 font-medium leading-snug">
                      Cardiologist
                    </p>
                    <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 mt-2"></div>
                  </div>
                </div>

                {/* Badges below, aligned left */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <Badge className="bg-green-100 text-green-700 px-3 py-1 text-sm font-medium w-fit">
                    <Award className="w-4 h-4 mr-1" />
                    12+ Years Experience
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium w-fit">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    MBBS, MD
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 px-3 py-1 text-sm font-medium w-fit">
                    <Building2 className="w-4 h-4 mr-1" />
                    Apollo Hospital
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Professional Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Professional Details
                </h2>

                {/* Grouped rows so spacing is consistent */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      Experience
                    </span>
                    <span className="text-gray-900 font-semibold text-sm">12+ years</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      Qualifications
                    </span>
                    <span className="text-gray-900 font-semibold text-sm">MBBS, MD</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      Hospital
                    </span>
                    <span className="text-gray-900 font-semibold text-sm">Apollo Hospital</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                      <Languages className="w-4 h-4 text-blue-600" />
                      Languages
                    </span>
                    <span className="text-gray-900 font-semibold text-sm">English, Hindi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Location
                    </span>
                    <span className="text-gray-900 font-semibold text-sm">Mumbai, India</span>
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
