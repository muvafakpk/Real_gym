import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919447771658"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
    </a>
  );
}
