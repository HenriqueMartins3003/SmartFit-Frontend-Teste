import { useQuery } from "react-query";
import { ILocation } from "../Types/location";
import LocationItem from "./locationItem";

const Location = () => {
  const { data } = useQuery<{
    current_country_id: number;
    locations: ILocation[];
  }>("Locations", () =>
    fetch(
      "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
    ).then((res) => res.json())
  );

  console.log(data?.locations);

  return (
    <div className="flex flex-col gap-4 mt-4 px-5">
      {data?.locations.map((i) => (
        <LocationItem key={i.id} location={i} />
      ))}
    </div>
  );
};

export default Location;
