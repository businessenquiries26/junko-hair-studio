import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Booking Request Received!",
          description: "We'll contact you shortly to confirm your appointment.",
        });
        onClose();
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-background rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground mb-8">
            Fill out the form below and we'll contact you to confirm your appointment.
          </p>

          {/* 
            IMPORTANT: Replace YOUR_ACCESS_KEY_HERE with your actual Web3Forms access key
            Get your free access key at: https://web3forms.com
          */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="hidden" 
              name="access_key" 
              value="YOUR_ACCESS_KEY_HERE" 
            />
            <input type="hidden" name="subject" value="New Booking Request - Junko Hair Studio" />
            <input type="hidden" name="from_name" value="Junko Hair Studio Booking" />

            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(555) 123-4567"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="service">Service Type *</Label>
              <Select name="service" required>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectItem value="womens-cut">Women's Cut & Style</SelectItem>
                  <SelectItem value="mens-cut">Men's Cut</SelectItem>
                  <SelectItem value="balayage">Balayage</SelectItem>
                  <SelectItem value="color">Full Color</SelectItem>
                  <SelectItem value="highlights">Highlights</SelectItem>
                  <SelectItem value="keratin">Keratin Treatment</SelectItem>
                  <SelectItem value="extensions">Hair Extensions</SelectItem>
                  <SelectItem value="bridal">Bridal Package</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="date">Preferred Date *</Label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="time">Preferred Time *</Label>
              <Select name="time" required>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                  <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                  <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                  <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                  <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
            >
              {isSubmitting ? "Submitting..." : "Request Appointment"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to be contacted regarding your appointment request.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
