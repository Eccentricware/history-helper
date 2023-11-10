import { IDatabase, IMain, ParameterizedQuery } from "pg-promise";
import { getFighterFavorQuery, getFightersQuery, getRosterQuery } from "../queries/ultimate/get-fighters-queries";
import { saveSelectedFightersQuery } from "../queries/ultimate/save-selected-fighters-queries";
import { error } from "console";

export class UltimateRepository {
  constructor(private db: IDatabase<any>, private pgp: IMain) {}

  async getRoster(): Promise<any> {
    return await this.db.many(getRosterQuery);
  }

  async getFighterFavor(playerId: number): Promise<any> {
    const getFighterFavorPQ = new ParameterizedQuery({
      text: getFighterFavorQuery,
      values: [playerId]
    });

    const fighterFavor = await this.db.many(getFighterFavorPQ)
      .catch((error: Error) => console.log('queryError', error.message));
    return fighterFavor;
  }

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