"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Video } from "lucide-react";

export function UpcomingAppointments() {
  // 🔹 Just static mock data (2 items only)
  const appointments = [
    {
      id: "a1",
      doctorName: "Dr. Sarah Johnson",
      doctorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      type: "General Checkup",
      date: "Today, 10:30 AM",
      status: "today", // will show "Join Call"
    },
    {
      id: "a2",
      doctorName: "Dr. Rajesh Mehta",
      doctorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      type: "Dermatology",
      date: "Sep 12, 4:00 PM",
      status: "upcoming", // will show "View Details"
    },
  ];

  return (
    <Card
      className="card-shadow w-198 h-122" // 👈 full width again
      data-testid="card-upcoming-appointments"
    >
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            Upcoming Appointments
          </h2>
          <Button
            variant="link"
            className="text-primary hover:text-primary/80 text-sm font-medium p-0"
          >
            View All
          </Button>
        </div>

        {/* Appointment List */}
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`border border-border rounded-lg p-4 ${
                appointment.status === "today" ? "bg-primary/5" : ""
              }`}
            >
              {/* Doctor Info */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={appointment.doctorAvatar}
                    alt={appointment.doctorName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {appointment.doctorName}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {appointment.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">
                    {appointment.date}
                  </p>
                  {appointment.status === "today" && (
                    <p className="text-xs font-medium text-primary">Ongoing</p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-2">
                {appointment.status === "today" ? (
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <div className="flex items-center justify-center space-x-2">
                      <Video className="w-4 h-4" />
                      <span>Join Call</span>
                    </div>
                  </Button>
                ) : (
                  <Button variant="secondary" className="flex-1">
                    View Details
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-4 pt-4 border-t border-border">
          <Button className="w-full py-3 bg-accent text-accent-foreground hover:bg-accent/80">
            + Book New Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
