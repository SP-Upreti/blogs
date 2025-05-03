"use client"
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function FaqSection() {
  const handleFaqClick = () => {
    toast.info("FAQ page will be available soon!");
  };

  return (
    <section className="text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Want To Know More?</h3>
      <Button
        className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
        variant="outline"
        onClick={handleFaqClick}
      >
        <HelpCircle className="w-4 h-4 mr-2 text-teal-500" />
        Go To FAQ Page
        <span className="ml-2">→</span>
      </Button>
    </section>
  );
}