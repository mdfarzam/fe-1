import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Video } from "lucide-react";

interface ConsentModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

export function ConsentModal({ isOpen, onAccept, onDecline, onClose }: ConsentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md" data-testid="modal-consent">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Video className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground" data-testid="text-consent-title">
            Recording Consent
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-6" data-testid="text-consent-description">
          This consultation will be recorded for your medical records. The recording will be securely stored and only accessible to you and your healthcare provider. Do you consent to recording this session?
        </p>
        
        <div className="flex space-x-3">
          <Button 
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={onAccept}
            data-testid="button-accept-consent"
          >
            Yes, I Consent
          </Button>
          <Button 
            variant="outline"
            className="flex-1"
            onClick={onDecline}
            data-testid="button-decline-consent"
          >
            No, Continue Without Recording
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
