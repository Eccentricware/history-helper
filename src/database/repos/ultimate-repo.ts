import { IDatabase, IMain, ParameterizedQuery } from "pg-promise";
import { getFightersQuery } from "../queries/ultimate/get-fighters-query";
import { saveSelectedFightersQuery } from "../queries/ultimate/save-selected-fighters-queries";

export class UltimateRepository {
  constructor(private db: IDatabase<any>, private pgp: IMain) {}

  async getFighters(playerId: number, poolSize: number): Promise<any> {
    const getFightersPQ = new ParameterizedQuery({
      text: getFightersQuery,
      values: [playerId, poolSize]
    });

    return await this.db.many(getFightersPQ);
  }

  async saveSelectedFighters(playerId: number, fighterIds: number[]): Promise<any> {
    const saveSelectedFightersPQ = new ParameterizedQuery({
      text: saveSelectedFightersQuery,
      values: [playerId, fighterIds, fighterIds.length]
    });

    return await this.db.none(saveSelectedFightersPQ);
  }
}