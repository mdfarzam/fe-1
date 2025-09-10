import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Input } from "@/app/components/ui/input"
import { Separator } from "@/app/components/ui/separator"
import { FileText, Phone, Mail, User, Search, Filter } from "lucide-react"

// Mock data for the patient
const patientData = {
  name: "John Doe",
  age: 32,
  gender: "Male",
  phone: "+91 9876543210",
  email: "john.doe@email.com",
  profileImage: "/professional-headshot-of-a-32-year-old-man.jpg",
  allergies: ["Penicillin", "Peanuts", "Shellfish"],
  bloodGroup: "B+",
  chronicConditions: ["Diabetes", "Hypertension"],
  emergencyContact: "+91 9876543211",
  insuranceProvider: "HealthCare Plus",
}

const medicalRecords = [
  {
    id: 1,
    title: "Blood Test Report",
    date: "July 15, 2025",
    type: "Lab Report",
    icon: FileText,
  },
  {
    id: 2,
    title: "Chest X-Ray",
    date: "May 22, 2025",
    type: "X-Ray",
    icon: FileText,
  },
  {
    id: 3,
    title: "Diabetes Medication",
    date: "March 10, 2025",
    type: "Prescription",
    icon: FileText,
  },
  {
    id: 4,
    title: "Annual Physical Exam",
    date: "January 8, 2025",
    type: "Checkup",
    icon: FileText,
  },
  {
    id: 5,
    title: "Blood Pressure Monitor",
    date: "December 5, 2024",
    type: "Lab Report",
    icon: FileText,
  },
]

export default function PatientDetailsPage() {
  return (
    <div className="min-h-screen bg-white p-6 mt-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Left Sidebar - 30% width */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <Card className="overflow-hidden bg-gray-50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={patientData.profileImage || "/placeholder.svg"} alt={patientData.name} />
                    <AvatarFallback className="text-lg">
                      {patientData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="space-y-1 ">
                    <h2 className="text-xl font-bold text-foreground">{patientData.name}</h2>
                    <p className="text-sky-600">
                      {patientData.age} years old, {patientData.gender}
                    </p>
                  </div>

                  <div className="w-full space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-black">
                      <Phone className="h-4 w-4" />
                      <span>{patientData.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{patientData.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Summary */}
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-sky-700">Health Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Allergies</h4>
                  <div className="flex flex-wrap gap-1">
                    {patientData.allergies.map((allergy) => (
                      <Badge key={allergy} variant="gray" className="text-xs">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1 flex"><p className="text-red-500 ">Blood</p> -Group</h4>
                  <p className="font-medium">{patientData.bloodGroup}</p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Chronic Conditions</h4>
                  <div className="space-y-1">
                    {patientData.chronicConditions.map((condition) => (
                      <Badge key={condition} className="text-xs mr-1 bg-sky-600 text-white">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Emergency Contact</h4>
                  <p className="text-sm">{patientData.emergencyContact}</p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Insurance Provider</h4>
                  <p className="text-sm">{patientData.insuranceProvider}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Main Content - 70% width */}
          <div className="lg:col-span-7   ">
            <Card className="h-full bg-gray-50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Past Medical Records</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search medical records..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {medicalRecords.map((record) => (
                    <Card key={record.id} className="border border-border/50 hover:border-border transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-muted rounded-lg bg-transparent">
                              <record.icon className="h-5 w-5 text-sky-600 " />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground">{record.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{record.date}</span>
                                <span>•</span>
                                <Badge className="text-xs bg-sky-600 text-white">
                                  {record.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View PDF
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}