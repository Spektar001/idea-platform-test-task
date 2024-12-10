type Props = {
  time: string;
  city: string;
  cityName: string;
  date: string;
  align?: "start" | "end";
};

const TimeLocationInfo = ({
  time,
  city,
  cityName,
  date,
  align = "start",
}: Props) => (
  <div className={`flex flex-col items-${align}`}>
    <p className="text-4xl">{time}</p>
    <p className="text-sm font-medium">
      {city}, {cityName}
    </p>
    <p className="text-sm text-gray-400">{date}</p>
  </div>
);

export default TimeLocationInfo;
