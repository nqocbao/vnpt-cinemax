import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BookingStepsTabsProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  steps: { value: string; label: string; disabled?: boolean }[];
  children: React.ReactNode;
}

const BookingStepsTabs: React.FC<BookingStepsTabsProps> = ({
  selectedTab,
  setSelectedTab,
  steps,
  children,
}) => {
  return (
    <Tabs value={selectedTab} onValueChange={setSelectedTab}>
      <TabsList
        className="mb-8 w-full flex flex-wrap justify-between items-center border-b border-gray-200 bg-white px-0 md:px-2"
        style={{ minHeight: 0 }}
      >
        {steps.map((step) => (
          <TabsTrigger
            key={step.value}
            value={step.value}
            className={`flex-1 min-w-[90px] text-xs md:text-base font-semibold px-1 md:px-2 py-2 md:py-3 border-0 border-b-2 transition-all duration-200 rounded-none shadow-none ${
              selectedTab >= step.value
                ? "text-[#1F4172] border-[#1F4172]"
                : "text-[#1F4172] border-transparent"
            }`}
            disabled={step.disabled}
          >
            {step.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

export default BookingStepsTabs;
