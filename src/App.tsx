import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { FloatingButtons } from "@/components/FloatingButtons";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Vision = lazy(() => import("./pages/Vision"));
const Products = lazy(() => import("./pages/Products"));
const SmartClassrooms = lazy(() => import("./pages/SmartClassrooms"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const PageLoader = () => (
  <div
    role="status"
    aria-label="Loading page"
    className="flex items-center justify-center min-h-screen bg-background"
  >
    <div className="w-10 h-10 rounded-full border-[3px] border-muted border-t-primary animate-spin" />
  </div>
);



const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingButtons />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/products" element={<Products />} />
            <Route path="/smart-classrooms" element={<SmartClassrooms />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
