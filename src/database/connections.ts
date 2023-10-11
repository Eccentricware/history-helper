import pgPromise, { IDatabase, IInitOptions, IMain } from "pg-promise";
import { envCredentials } from "../secrets/dbCredentials";
import { PrismaticRepository } from "./repos/prismatic-repo";
import { UltimateRepository } from "./repos/ssbu-repo";

interface IExtensions {
  pristmaticRepo: PrismaticRepository;
  ultimateRepo: UltimateRepository;
}

const initOptions: IInitOptions<IExtensions> = {
  extend(obj: IDatabase<IExtensions> & IExtensions) {
    // , dc: any
    obj.pristmaticRepo = new PrismaticRepository(obj, pgp);
    obj.ultimateRepo = new UltimateRepository(obj, pgp);
  }
}

const pgp: IMain = pgPromise(initOptions);

const db: IDatabase<IExtensions> & IExtensions = pgp(envCredentials);

export { db, pgp };