"use client"

import { useState } from "react"
import { Calendar, Clock, Plus, Save, ChevronLeft, ChevronRight, Settings } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Switch } from "@/app/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Badge } from "@/app/components/ui/badge"

interface TimeSlot {
  id: string
  startTime: string
  endTime: string
  status: "available" | "booked" | "blocked" | "break"
  type?: "video" | "opd" | "followup"
  patientName?: string
}

export default function DoctorScheduleDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isOnDuty, setIsOnDuty] = useState(true)
  const [shiftStart, setShiftStart] = useState("09:00")
  const [shiftEnd, setShiftEnd] = useState("17:00")
  const [slotDuration, setSlotDuration] = useState("30")

  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { id: "1", startTime: "09:00", endTime: "09:30", status: "available", type: "video" },
    { id: "2", startTime: "09:30", endTime: "10:00", status: "booked", type: "video", patientName: "John Doe" },
    { id: "3", startTime: "10:00", endTime: "10:30", status: "available", type: "opd" },
    { id: "4", startTime: "10:30", endTime: "11:00", status: "break" },
    { id: "5", startTime: "11:00", endTime: "11:30", status: "blocked" },
    { id: "6", startTime: "11:30", endTime: "12:00", status: "available", type: "followup" },
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

  const getSlotColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 border-green-300 text-green-800"
      case "booked":
        return "bg-blue-100 border-blue-300 text-blue-800"
      case "blocked":
        return "bg-gray-100 border-gray-300 text-gray-600"
      case "break":
        return "bg-orange-100 border-orange-300 text-orange-800"
      default:
        return "bg-gray-100 border-gray-300 text-gray-600"
    }
  }

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case "video":
        return "📹"
      case "opd":
        return "🏥"
      case "followup":
        return "🔄"
      default:
        return "⏰"
    }
  }

  const generateSlots = () => {
    const slots: TimeSlot[] = []
    const start = new Date(`2024-01-01 ${shiftStart}`)
    const end = new Date(`2024-01-01 ${shiftEnd}`)
    const duration = Number.parseInt(slotDuration)

    let current = new Date(start)
    let id = 1

    while (current < end) {
      const slotEnd = new Date(current.getTime() + duration * 60000)
      slots.push({
        id: id.toString(),
        startTime: current.toTimeString().slice(0, 5),
        endTime: slotEnd.toTimeString().slice(0, 5),
        status: "available",
        type: "video",
      })
      current = slotEnd
      id++
    }

    setTimeSlots(slots)
  }

  const availableSlots = timeSlots.filter((slot) => slot.status === "available").length
  const bookedSlots = timeSlots.filter((slot) => slot.status === "booked").length
  const totalSlots = timeSlots.length

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
        <div className="space-y-6">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="duty-status">On Duty</Label>
                <Switch id="duty-status" checked={isOnDuty} onCheckedChange={setIsOnDuty} />
              </div>

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

              <div>
                <Label htmlFor="slot-duration">Slot Duration</Label>
                <Select value={slotDuration} onValueChange={setSlotDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={generateSlots} className="w-full">
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
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-200 border border-green-300"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-200 border border-blue-300"></div>
                  <span>Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gray-200 border border-gray-300"></div>
                  <span>Blocked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-orange-200 border border-orange-300"></div>
                  <span>Break</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`p-3 rounded-lg border-2 transition-all hover:shadow-sm ${getSlotColor(slot.status)}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{getTypeIcon(slot.type)}</span>
                        <div>
                          <p className="font-medium">
                            {slot.startTime} - {slot.endTime}
                          </p>
                          {slot.patientName && <p className="text-sm opacity-75">{slot.patientName}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {slot.type?.toUpperCase() || "GENERAL"}
                        </Badge>
                        <Button variant="ghost" size="sm">
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

      {/* Bottom Summary & Actions */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-6 text-sm">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            {availableSlots} Available
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            {bookedSlots} Booked
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            {totalSlots - availableSlots - bookedSlots} Other
          </span>
        </div>

        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Save className="h-4 w-4 mr-2" />
          Save & Publish Schedule
        </Button>
      </div>
    </div>
  )
}
