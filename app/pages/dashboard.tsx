import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { QuickActions } from "@/app/components/ui/quick-actions";
import { UpcomingAppointments } from "@/app/components/ui/upcoming-appointments";
import { Prescriptions } from "@/app/components/ui/prescriptions";
import { PastConsultations } from "@/app/components/ui/past-consultations";
import { ConsentModal } from "@/app/components/ui/consent-modal";
import { useState } from "react";

export default function Dashboard() {
 

  return (
    <div className="min-h-screen bg-background">
      <nav className=" pb-3 w-full bg-white  px-24 py-4 flex items-center justify-between">
      {/* Left: App Name */}
      <div>
        <p className="text-4xl font-bold text-blue-900">ArogyaSetu</p>
      </div>
      {/* Right: Avatar & Name */}
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
    </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Top Section: Upcoming Appointments (left) & Quick Actions + Prescriptions (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - 60% width */}
          <div className="lg:col-span-8 flex flex-col gap-4">
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
