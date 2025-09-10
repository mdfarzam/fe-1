"use client"

import { useState } from "react"
import { Calendar, Clock, Plus, ChevronLeft, ChevronRight, Settings } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Badge } from "@/app/components/ui/badge"

interface TimeSlot {
  id: string
  startTime: string
  endTime: string
  patientName?: string
}

export default function DoctorScheduleDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [shiftStart, setShiftStart] = useState("09:00")
  const [shiftEnd, setShiftEnd] = useState("17:00")

  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { id: "1", startTime: "09:00", endTime: "09:30" },
    { id: "2", startTime: "09:30", endTime: "10:00", patientName: "John Doe" },
    { id: "3", startTime: "10:00", endTime: "10:30" },
    { id: "4", startTime: "10:30", endTime: "11:00" },
    { id: "5", startTime: "11:00", endTime: "11:30" },
    { id: "6", startTime: "11:30", endTime: "12:00" },
    { id: "7", startTime: "12:00", endTime: "12:30", patientName: "Jane Smith" },
    { id: "8", startTime: "12:30", endTime: "13:00" },
    { id: "9", startTime: "13:00", endTime: "13:30" },
    { id: "10", startTime: "13:30", endTime: "14:00" },
    { id: "11", startTime: "14:00", endTime: "14:30", patientName: "Mike Johnson" },
    { id: "12", startTime: "14:30", endTime: "15:00" },
  ])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(selectedDate)
    newDate.setDate(selectedDate.getDate() + (direction === "next" ? 1 : -1))
    setSelectedDate(newDate)
  }

  const generateSlots = () => {
    const slots: TimeSlot[] = []
    const start = new Date(`2024-01-01 ${shiftStart}`)
    const end = new Date(`2024-01-01 ${shiftEnd}`)
    const duration = 30 // Fixed 30 minutes

    let current = new Date(start)
    let id = 1

    while (current < end) {
      const slotEnd = new Date(current.getTime() + duration * 60000)
      slots.push({
        id: id.toString(),
        startTime: current.toTimeString().slice(0, 5),
        endTime: slotEnd.toTimeString().slice(0, 5),
      })
      current = slotEnd
      id++
    }

    setTimeSlots(slots)
  }

  return (
    <div className="min-h-screen bg-background p-6 mt-100">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Schedule Dashboard</h1>
            <p className="text-muted-foreground">Manage your daily availability and appointments</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="px-3 py-1">
              Dr. Sarah Johnson
            </Badge>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Date Selector & Shift Setup */}
        <div className="space-y-6 ">
          {/* Date Selector */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Date Selection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Button variant="outline" size="icon" onClick={() => navigateDate("prev")}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-center">
                  <p className="font-semibold text-lg">{formatDate(selectedDate)}</p>
                </div>
                <Button variant="outline" size="icon" onClick={() => navigateDate("next")}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                <Calendar className="h-4 w-4 mr-2" />
                Select Different Date
              </Button>
            </CardContent>
          </Card>

          {/* Shift Setup */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Shift Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="shift-start">Start Time</Label>
                  <Input
                    id="shift-start"
                    type="time"
                    value={shiftStart}
                    onChange={(e) => setShiftStart(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="shift-end">End Time</Label>
                  <Input id="shift-end" type="time" value={shiftEnd} onChange={(e) => setShiftEnd(e.target.value)} />
                </div>
              </div>

              <Button onClick={generateSlots} className="w-full bg-sky-600">
                <Plus className="h-4 w-4 mr-2" />
                Generate Slots
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Slot Management */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Daily Schedule Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className="p-3 rounded-lg border-1 transition-all hover:shadow-sm bg-sky-100/40 border-black/70 text-black"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-medium">
                            {slot.startTime} - {slot.endTime}
                          </p>
                          {slot.patientName && <p className="text-sm opacity-75">{slot.patientName}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-white hover:bg-sky-600">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}