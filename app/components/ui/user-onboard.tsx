"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

export default function UserOnboardingForm() {
  return (
    <Card className="max-w-2xl mx-auto mt-10 shadow-md w-120">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-xl font-semibold text-center">
          User Onboarding
        </h2>

        <div className="space-y-4">
          {/* Blood Group */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="bloodGroup">Blood Group</Label>
            <Select>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select blood group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Chronic Conditions */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="chronicConditions">Chronic Conditions</Label>
            <Input
              className="bg-white"
              id="chronicConditions"
              placeholder="e.g. Diabetes, Hypertension"
            />
          </div>

          {/* Allergies */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="allergies">Allergies</Label>
            <Input
              className="bg-white"
              id="allergies"
              placeholder="e.g. Penicillin, Peanuts"
            />
          </div>

          {/* Emergency Contact */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact</Label>
            <Input
              className="bg-white"
              id="emergencyContact"
              type="tel"
              placeholder="Enter emergency contact number"
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
