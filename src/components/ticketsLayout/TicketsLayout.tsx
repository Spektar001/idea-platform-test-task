"use client";

import TicketCard from "../ticketCard/TicketCard";

type Ticket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};

type Props = {
  ticketsData: Ticket[];
  selectedStops: number[];
};

const TicketsLayout = ({ ticketsData, selectedStops }: Props) => {
  const filteredTickets = ticketsData
    .filter((ticket: Ticket) => {
      if (selectedStops.length === 0) return true;
      return selectedStops.includes(ticket.stops);
    })
    .sort((a: Ticket, b: Ticket) => {
      return a.price - b.price;
    });

  return (
    <div className="ml-72 w-full flex flex-col gap-5">
      {filteredTickets.map((tickets, index) => (
        <TicketCard key={index} ticket={tickets} />
      ))}
    </div>
  );
};

export default TicketsLayout;
