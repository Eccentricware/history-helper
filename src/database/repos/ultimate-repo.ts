import { IDatabase, IMain, ParameterizedQuery } from "pg-promise";
import { getFightersQuery } from "../queries/ssbu/get-fighters-query";
import { getSaveSelectedFightersQuery } from "../queries/ssbu/save-selected-fighters-queries";

export class UltimateRepository {
  constructor(private db: IDatabase<any>, private pgp: IMain) {}

  async getFighters(fighterCount: number): Promise<any> {
    const getFightersPQ = new ParameterizedQuery({
      text: getFightersQuery,
      values: [fighterCount]
    });

    return await this.db.many(getFightersPQ);
  }

  async saveSelectedFighters(fighterIds: number[], fighterCount: number): Promise<any> {
    const saveSelectedFightersPQ = new ParameterizedQuery({
      text: getSaveSelectedFightersQuery(fighterCount),
      values: [fighterIds]
    });

    return await this.db.none(saveSelectedFightersPQ);
  }
}