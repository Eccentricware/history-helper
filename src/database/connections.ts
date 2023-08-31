import pgPromise, { IDatabase, IInitOptions, IMain } from "pg-promise";
import { envCredentials } from "../secrets/dbCredentials";
import { PrismaticRepository } from "./repos/prismatic-repo";

interface IExtensions {
  pristmaticRepo: PrismaticRepository;
}

const initOptions: IInitOptions<IExtensions> = {
  extend(obj: IDatabase<IExtensions> & IExtensions) {
    // , dc: any
    obj.pristmaticRepo = new PrismaticRepository(obj, pgp);
  }
}

const pgp: IMain = pgPromise(initOptions);

const db: IDatabase<IExtensions> & IExtensions = pgp(envCredentials);

export { db, pgp };