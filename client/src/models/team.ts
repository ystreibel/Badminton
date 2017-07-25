import {Player} from "./player";
import {Place} from "./place";

export class Team {
  constructor(
    public id?: string,
    public name?: string,
    public players?: Array<Player>,
    public place?: Place,
  ) {}
}
