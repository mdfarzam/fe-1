import { Card, CardContent } from "@/app/components/ui/ai-card";
import { FileText, TestTube, Phone } from "lucide-react";

export function HealthSummary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card
        className="card-shadow w-full max-w-5xl bg-neutral-100"
        data-testid="card-health-summary"
      >
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-2xl font-semibold text-foreground"
              data-testid="text-health-overview"
            >
              Health Overview
            </h2>
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Profile Picture and Name */}
            <div className="flex items-center space-x-4">
              <img
                src={
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&h=120"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-border"
                data-testid="img-profile-picture"
              />
              <div>
                <h3
                  className="text-2xl font-bold text-foreground mb-2"
                  data-testid="text-patient-name"
                >
                  {"Sarah Johnson"}
                </h3>
                <div className="space-y-1">
                  <p
                    className="text-sm text-muted-foreground"
                    data-testid="text-patient-age"
                  >
                    <span className="font-medium">Age:</span> 32 years
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-testid="text-patient-gender"
                  >
                    <span className="font-medium">Gender:</span> Female
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-testid="text-patient-blood-group"
                  >
                    <span className="font-medium">Blood Group:</span> O+
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Height/Weight and Conditions/Allergies */}
            <div className="space-y-4">
              {/* Height and Weight */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="rounded-xl border border-border bg-white shadow-sm p-4"
                  data-testid="card-height"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Height</h3>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-semibold text-green-700">cm</span>
                    </div>
                  </div>
                  <p
                    className="text-2xl font-bold text-foreground"
                    data-testid="text-height"
                  >
                    5'6"
                  </p>
                  <p className="text-xs text-muted-foreground">feet</p>
                </div>

                <div
                  className="rounded-xl border border-border bg-white shadow-sm p-4"
                  data-testid="card-weight"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Weight</h3>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100">
                      <span className="text-xs font-semibold text-yellow-700">lbs</span>
                    </div>
                  </div>
                  <p
                    className="text-2xl font-bold text-foreground"
                    data-testid="text-weight"
                  >
                    500
                  </p>
                  <p className="text-xs text-muted-foreground">pounds</p>
                </div>
              </div>

              {/* Chronic Conditions and Allergies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="rounded-xl border border-border bg-white shadow-sm p-4"
                  data-testid="card-chronic-conditions"
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Chronic Conditions
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      data-testid="tag-condition-hypertension"
                    >
                      Hypertension - Well Controlled
                    </span>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      data-testid="tag-condition-diabetes"
                    >
                      Type 2 Diabetes - Managed
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-xl border border-border bg-white shadow-sm p-4"
                  data-testid="card-allergies"
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Allergies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700"
                      data-testid="tag-allergy-penicillin"
                    >
                      Penicillin
                    </span>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700"
                      data-testid="tag-allergy-shellfish"
                    >
                      Shellfish
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section - Recent Calls and Emergency Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Calls - Left Half */}
            <div>
              <h3
                className="text-sm font-medium text-muted-foreground mb-3"
                data-testid="text-recent-calls"
              >
                Recent Calls
              </h3>
              <div className="space-y-3">
                <div
                  className="flex items-center space-x-3"
                  data-testid="item-recent-call-1"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">General Checkup</p>
                    <p className="text-xs text-muted-foreground">
                      Dr. Wilson • Nov 15, 2024
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center space-x-3"
                  data-testid="item-recent-call-2"
                >
                  <div className="w-8 h-8 bg-accent/30 rounded-full flex items-center justify-center">
                    <TestTube className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Blood Work</p>
                    <p className="text-xs text-muted-foreground">
                      Dr. Smith • Oct 28, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact - Right Half */}
            <div
              className="bg-red-100/90 border border-primary/20 rounded-lg p-4"
              data-testid="card-emergency-contact"
            >
              <div className="flex items-center space-x-2 mb-3">
                <Phone className="w-4 h-4 text-primary" />
                <h3
                  className="text-sm font-medium text-primary"
                  data-testid="text-emergency-contact"
                >
                  Emergency Contact
                </h3>
              </div>
              <p
                className="text-sm font-medium text-foreground"
                data-testid="text-emergency-name"
              >
                John Johnson (Husband)
              </p>
              <p
                className="text-sm text-muted-foreground"
                data-testid="text-emergency-phone"
              >
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
