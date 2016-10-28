import {Team} from "./team";

export class Rank {
  constructor(
    public id?: number,
    public team?: Team,
    public points?: number,
    public day?: number,
    public win?: number,
    public zero?: number,
    public lost?: number,
    public season?: number,
    public division?: number
  ) {}
}
