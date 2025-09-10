import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Calendar, Search, Pill, Brain, TrendingUp, AlertCircle } from "lucide-react";

export function QuickActions() {
  return (
    <div className="space-y-6 ">
      

      {/* AI Health Summary */}
      <Card className="card-shadow  " data-testid="card-ai-health-summary">
        <CardContent className=" h-64 flex flex-col">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground" data-testid="text-ai-health-summary">
              AI ChatBot
            </h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div className="bg-muted/30 rounded-lg p-4 mb-4" data-testid="card-ai-content">
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-ai-analysis">
                Your chronic conditions are well-controlled and vital signs are normal. Metformin refill needed in 5 days. Consider  .led and vital signs are normal. Metformin refill needed in 5 days. Consider  .led and vital signs are normal. Metformin refill needed in 5 days. Consider  .
              </p>
            </div>

            <Button 
              variant="outline"
              className="w-full"
              data-testid="button-view-detailed-analysis"
            >
              Talk with Chatbot
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
