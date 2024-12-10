"use client";

import Image from "next/image";
import { useMemo } from "react";
import TimeLocationInfo from "../timeLocationInfo/TimeLocationInfo ";

type TicketCardProps = {
  ticket: {
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
};

const TicketCard = ({ ticket }: TicketCardProps) => {
  const stopsText = useMemo(() => {
    switch (ticket.stops) {
      case 0:
        return "пересадок";
      case 1:
        return "пересадка";
      case 2:
      case 3:
        return "пересадки";
      default:
        return "пересадка";
    }
  }, [ticket.stops]);

  return (
    <div className="flex h-[165px]">
      <div className="w-[200px] border rounded-tl-md rounded-bl-md p-2 flex flex-col items-center bg-white">
        <Image
          src={"/swiss-airlines.png"}
          width={200}
          height={10}
          alt={"swiss-airlines"}
        />
        <button
          type="button"
          className="py-1 px-8 text-sm text-white bg-[#FF6D00] hover:bg-[#FF8124] transition-all duration-300 border rounded-md flex flex-col items-center"
        >
          <span>Купить</span> за {ticket.price}₽
        </button>
      </div>
      <div className="w-[420px] border rounded-tr-md rounded-br-md flex items-start justify-between p-4 bg-white">
        <TimeLocationInfo
          time={ticket.departure_time}
          city={ticket.origin}
          cityName={ticket.origin_name}
          date={ticket.departure_date}
          align="start"
        />
        <div className="flex flex-col items-center">
          <p className="uppercase font-medium text-xs text-gray-400">
            {ticket.stops} {stopsText}
          </p>
          <div className="flex items-center ml-5 mt-[-7px]">
            <span className="block w-[110px] h-[1px] bg-gray-300"></span>
            <Image
              src="/airplane.svg"
              width={24}
              height={24}
              alt="airplane"
              className="ml-[-2px]"
            />
          </div>
        </div>
        <TimeLocationInfo
          time={ticket.arrival_time}
          city={ticket.destination}
          cityName={ticket.destination_name}
          date={ticket.arrival_date}
          align="end"
        />
      </div>
    </div>
  );
};

export default TicketCard;
