import {Coordinates} from "./coordinates"
export class Location {
  constructor(
    public type?: string,
    public category?: string,
    public coordinates?: Coordinates
  ) {}
}
