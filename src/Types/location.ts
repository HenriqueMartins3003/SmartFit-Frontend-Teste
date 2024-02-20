interface ILocationSchedule {
  weekdays: string;
  hour: string;
}
export interface ILocation {
  id: string;
  title: string;
  content: string;
  opened: string;
  mask: "required" | "recommended";
  towel: "required" | "recommended";
  fountain: "not_allowed" | "partial";
  locker_room: "closed" | "partial" | "required";
  schedules: ILocationSchedule[];
}
