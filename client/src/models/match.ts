import {Team} from "./team";

export class Match {
  constructor(
    public id?: number,
    public day?: number,
    public date?: any,
    public local?: Team,
    public visitor?: Team,
    public local_score?: number,
    public visitor_score?: number,
    public base64MatchSheetImage?: string,
    public base64ReceiptImage?: string,
    public season?: number,
    public division?: number
  ) {}
}
