import { QuickActions } from "@/app/components/ui/quick-actions";
import { UpcomingAppointments } from "@/app/components/ui/upcoming-appointments";
import { Prescriptions } from "@/app/components/ui/prescriptions";
import { PastConsultations } from "@/app/components/ui/past-consultations";
import { ConsentModal } from "@/app/components/ui/consent-modal";
import { useState } from "react";

export default function Dashboard() {
  const handleStartVideoCall = (appointmentId: string) => {
    // handle video call
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Top Section: Upcoming Appointments (left) & Quick Actions + Prescriptions (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - 60% width */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <UpcomingAppointments />
            <PastConsultations />
          </div>

          {/* Right Column - 40% width */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <QuickActions />
            <Prescriptions />
            
          </div>
        </div>

        {/* Bottom Section: Past Consultations */}
        
      </main>
    </div>
  );
}
