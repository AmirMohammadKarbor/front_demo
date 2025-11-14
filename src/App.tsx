import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hiring from "./pages/Hiring";
import Careers from "./pages/Careers";
import UiUxApply from "./pages/UI-UxApply";
import FrontendApply from "./pages/FrontendApply";
import MarketingApply from "./pages/MarketingApply";
import FlutterApply from "./pages/Flutter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/hiring/careers" element={<Careers />} />
        <Route path="/hiring/careers/ui-ux" element={<UiUxApply />} />
        <Route path="/hiring/careers/frontend" element={<FrontendApply />} />
        <Route path="/hiring/careers/marketing" element={<MarketingApply />} />
        <Route path="/hiring/careers/flutter" element={<FlutterApply />} />

        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                صفحه پیدا نشد
              </h2>
              <a href="/" className="text-blue-600 hover:text-blue-800">
                بازگشت به خانه
              </a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
