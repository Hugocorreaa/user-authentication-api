import { Pool } from "pg";

const connectionString = "postgres://ebrpdbwc:dL13nV81TNDEkQLopzWlzLjZHxMnl0rc@kesavan.db.elephantsql.com/ebrpdbwc";
const db = new Pool({ connectionString });

export default db;
