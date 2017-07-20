import {Player} from "./player";
import {Hall} from "./hall";

export class Team {
  constructor(
    public id?: number,
    public name?: string,
    public players?: Array<Player>,
    public hall?: Hall,
    public captain?: number
  ) {}
}
