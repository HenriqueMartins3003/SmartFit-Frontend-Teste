import { ILocation } from "../Types/location";

interface LocationProps {
  location: ILocation;
}

const LocationItem = ({ location }: LocationProps) => {
  return (
    <div className="p-5 bg-gray-300 bg-opacity-45 rounded-lg">
      {location.opened ? (
        <p className="text-brand-green"> Aberto</p>
      ) : (
        <p className="text-brand-red">fechado</p>
      )}

      <h2 className="text-xl font-medium">{location.title}</h2>

      <div
        className="text-brand-lightGrey"
        dangerouslySetInnerHTML={{ __html: location.content }}
      ></div>
      <div className="flex gap-2 py-5 items-center justify-center">
        {location.mask && (
          <img height={75} width={75} src={`${location.mask}-mask.png`}></img>
        )}
        {location.towel && (
          <img height={75} width={75} src={`${location.towel}-towel.png`}></img>
        )}
        {location.fountain && (
          <img
            height={75}
            width={75}
            src={`${location.fountain}-fountain.png`}
          ></img>
        )}
        {location.locker_room && (
          <img
            height={75}
            width={75}
            src={`${location.locker_room}-lockerroom.png`}
          ></img>
        )}
      </div>

      <div className="grid grid-cols-2 mt-4">
        {location?.schedules?.map((i) => (
          <div>
            <h3 className="text-xl font-medium"> {i.weekdays}</h3>
            <p className="">{i.hour}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationItem;
