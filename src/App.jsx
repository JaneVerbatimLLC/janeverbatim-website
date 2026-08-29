import { Routes, Route } from "react-router";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import OwnerKey from "./pages/OwnerKey.jsx";
import LeaveTestimonial from "./pages/LeaveTestimonial.jsx";
import Legal from "./pages/Legal.jsx";
import SignAgreement from "./pages/SignAgreement.jsx";

function NotFound() {
  return (
    <div className="bg-charcoal min-h-screen flex items-center justify-center text-center px-5">
      <div>
        <p className="font-display text-7xl text-clay/30 mb-4">404</p>
        <h1 className="font-display text-3xl text-cream mb-3">Page not found</h1>
        <p className="text-cream/50 font-body text-base mb-8">That page doesn't exist, but we're here.</p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-clay text-cream font-body font-semibold text-sm rounded-sm hover:bg-clay/85 transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/owner-key" element={<OwnerKey />} />
          <Route path="/share-your-story" element={<LeaveTestimonial />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/sign/:token" element={<SignAgreement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
