import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import FAQPage from "@/pages/faq";
import TermsPage from "@/pages/terms";
import PrivacyPage from "@/pages/privacy";
import HipaaPage from "@/pages/hipaa";
import ReturnRefundPage from "@/pages/returnrefund";
import CcpaPage from "@/pages/ccpa";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <WouterRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/hipaa" component={HipaaPage} />
        <Route path="/returnrefund" component={ReturnRefundPage} />
        <Route path="/ccpa" component={CcpaPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Test CSS div */}
        {/* <div className="test-css">
          CSS Test - If you see this in red, CSS is working!
        </div> */}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
