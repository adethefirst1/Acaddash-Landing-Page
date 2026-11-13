// TEMPORARY DEV ROUTE: Shows the 4 phone screen states side by side for visual review.
// REMEMBER: Delete this route and folder before public launch.

import { Phone } from "@/components/phone/Phone";
import {
  HomeScreen,
  SimulatorScreen,
  PlannerScreen,
  AdvisorScreen,
} from "@/components/phone/screens";

export default function DevScreensPage() {
  return (
    <div className="min-h-screen bg-[#EEF2F6] p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-mint text-teal font-medium text-xs mb-2">
            Temporary Visual Review Route
          </span>
          <h1 className="text-3xl font-heading font-bold text-navy">
            Acaddash Phone Screens Preview
          </h1>
          <p className="text-muted text-sm mt-1">
            4 device frames rendering HomeScreen, SimulatorScreen, PlannerScreen, and AdvisorScreen.
          </p>
        </div>

        {/* Responsive grid of phones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-start">
          {/* 1. Home */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-heading font-semibold text-xs tracking-wide uppercase text-muted">
              1. Home (Calculator)
            </span>
            <Phone active="home" scale={1}>
              <HomeScreen />
            </Phone>
          </div>

          {/* 2. Simulator */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-heading font-semibold text-xs tracking-wide uppercase text-muted">
              2. Simulator
            </span>
            <Phone active="sim" scale={1}>
              <SimulatorScreen />
            </Phone>
          </div>

          {/* 3. Planner */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-heading font-semibold text-xs tracking-wide uppercase text-muted">
              3. Planner
            </span>
            <Phone active="plan" scale={1}>
              <PlannerScreen />
            </Phone>
          </div>

          {/* 4. Advisor */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-heading font-semibold text-xs tracking-wide uppercase text-muted">
              4. Advisor
            </span>
            <Phone active="chat" scale={1}>
              <AdvisorScreen />
            </Phone>
          </div>
        </div>
      </div>
    </div>
  );
}

