import {Schedule} from "./schedule";

export class Hall {
  constructor(
    public id?: number,
    public name?: string,
    public address?: string,
    public lat?: number,
    public lng?: number,
    public teamId?: number,
    public schedules?: Array<Schedule>
  ) {}
}
