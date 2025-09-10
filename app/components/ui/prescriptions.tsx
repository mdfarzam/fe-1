"use client";

import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Search, QrCode } from "lucide-react";

/* ---------------------- Types ---------------------- */
type Doctor = {
  id: string;
  name: string;
};

type Prescription = {
  id: string;
  medicineName: string;
  instructions: string;
  status: "active" | "refill_soon" | "expired";
  doctor: Doctor;
};

/* ---------------------- Mock Data ---------------------- */
const mockPrescriptions: Prescription[] = [
  {
    id: "1",
    medicineName: "Atorvastatin",
    instructions: "Take one tablet daily after dinner.",
    status: "active",
    doctor: { id: "d1", name: "Dr. Sarah Johnson" },
  },
  {
    id: "2",
    medicineName: "Metformin",
    instructions: "Take one tablet in the morning before breakfast.",
    status: "refill_soon",
    doctor: { id: "d2", name: "Dr. Rajesh Mehta" },
  },
];
/* ---------------------- Component ---------------------- */
export function Prescriptions() {
  const [searchQuery, setSearchQuery] = useState("");

  const prescriptions = mockPrescriptions.filter((p) =>
    p.medicineName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "refill_soon":
        return "bg-yellow-100 text-yellow-800";
      case "expired":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "refill_soon":
        return "Refill Soon";
      case "expired":
        return "Expired";
      default:
        return status;
    }
  };

  return (
    <Card className="card-shadow mt-6 h-[1046px]" data-testid="card-prescriptions">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-xl font-semibold text-foreground"
              data-testid="text-prescriptions-title"
            >
              Prescriptions & Medicine
            </h2>
            <Button
              variant="link"
              className="text-primary hover:text-primary/80 text-sm font-medium p-0"
              data-testid="button-view-all-prescriptions"
            >
              View All
            </Button>
          </div>

          {/* Search Medicine */}
          <div className="mb-6">
            <Label
              htmlFor="medicine-search"
              className="block text-sm font-medium text-muted-foreground mb-2"
            >
              Search Medicine
            </Label>
            <div className="relative">
              <Input
                id="medicine-search"
                type="text"
                className="pl-10"
                placeholder="Search by medicine name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-medicine-search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Active Prescriptions */}
          <div className="space-y-4">
            <h3
              className="text-sm font-medium text-muted-foreground"
              data-testid="text-active-prescriptions"
            >
              Active Prescriptions
            </h3>

            {prescriptions.length > 0 ? (
              prescriptions.map((prescription) => (
                <div
                  key={prescription.id}
                  className="border border-border rounded-lg p-4"
                  data-testid={`card-prescription-${prescription.id}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4
                      className="font-semibold text-foreground"
                      data-testid={`text-prescription-name-${prescription.id}`}
                    >
                      {prescription.medicineName}
                    </h4>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                        prescription.status
                      )}`}
                      data-testid={`status-prescription-${prescription.id}`}
                    >
                      {getStatusText(prescription.status)}
                    </span>
                  </div>
                  <p
                    className="text-sm text-muted-foreground mb-3"
                    data-testid={`text-prescription-details-${prescription.id}`}
                  >
                    {prescription.instructions} • Prescribed by{" "}
                    {prescription.doctor.name}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      data-testid={`button-order-refill-${prescription.id}`}
                    >
                      Order Refill
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      data-testid={`button-find-pharmacy-${prescription.id}`}
                    >
                      Find Pharmacy
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">
                No prescriptions found.
              </p>
            )}
          </div>
        </div>

        {/* QR Order Section pinned at bottom */}
        <div
          className="bg-accent/10 border border-accent/20 rounded-lg p-4"
          data-testid="card-qr-order"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3
                className="font-semibold text-foreground"
                data-testid="text-quick-order-title"
              >
                Quick Order
              </h3>
              <p
                className="text-sm text-muted-foreground"
                data-testid="text-quick-order-description"
              >
                Scan QR to order medicine
              </p>
            </div>
          </div>
          <Button
            className="w-full bg-accent text-accent-foreground hover:bg-accent/80"
            data-testid="button-generate-qr"
          >
            Generate QR Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
