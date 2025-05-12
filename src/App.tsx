
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Beginner from "./pages/Beginner";
import Investor from "./pages/Investor";
import Trader from "./pages/Trader";
import Dashboard from "./pages/Dashboard";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/trader" element={<Trader />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
