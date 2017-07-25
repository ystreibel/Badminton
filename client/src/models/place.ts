import {Schedule} from "./schedule";
import {Location} from "./location";

export class Place {
  constructor(
    public name?: string,
    public schedules?: Array<Schedule>,
    public location?: Location
  ) {}
}
