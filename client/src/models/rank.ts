import {Team} from "./team";

export class Rank {
  constructor(
    public id?: number,
    public team?: Team,
    public day?: number,
    public points?: number,
    public win?: number,
    public zero?: number,
    public lost?: number,
    public cancel?: number,
    public season?: number,
    public division?: number
  ) {}
}
