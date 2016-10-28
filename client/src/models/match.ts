import {Team} from "./team";

export class Match {
  constructor(
    public id?: number,
    public date?: any,
    public local?: Team,
    public visitor?: Team,
    public local_score?: number,
    public visitor_score?: number,
    public season?: number,
    public division?: number
  ) {}
}
