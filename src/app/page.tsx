"use client";

import Filters from "@/components/filters/Filters";
import TicketsLayout from "@/components/ticketsLayout/TicketsLayout";
import { useState } from "react";
import ticketsData from "../data/tickets.json";

export default function Home() {
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const tickets = ticketsData.tickets;

  return (
    <div className="min-h-screen flex items-start justify-center p-5">
      <div className="flex gap-5">
        <div className="fixed top-5 left-15 w-64 border bg-white rounded-md py-4 overflow-auto shadow-md">
          <Filters
            selectedStops={selectedStops}
            setSelectedStops={setSelectedStops}
          />
        </div>
        <TicketsLayout selectedStops={selectedStops} ticketsData={tickets} />
      </div>
    </div>
  );
}
