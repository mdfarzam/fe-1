"use client";

import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";

export default function OnboardingForm() {

  return (
    <Card className="max-w-2xl mx-auto mt-10 shadow-md w-120">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-xl font-semibold text-center">
          Doctor Onboarding
        </h2>

        {/* Common Fields */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              className="bg-white"
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>

        {/* Role-specific Fields */}
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="clinicName">Hospital / Clinic Name</Label>
            <Input
              className="bg-white"
              id="clinicName"
              placeholder="Enter hospital/clinic name"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="clinicLocation">Hospital / Clinic Location</Label>
            <Input
              className="bg-white"
              id="clinicLocation"
              placeholder="Enter location"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="specialization">Specialization</Label>
            <Input
              className="bg-white"
              id="specialization"
              placeholder="e.g., Cardiologist"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              className="bg-white"
              id="experience"
              type="number"
              placeholder="e.g., 10"
              required
            />
          </div>
        </div>
        {/* Submit */}
        <div className="pt-4">
          <Button className="w-full">Submit</Button>
        </div>
      </CardContent>
    </Card>
  );
}
