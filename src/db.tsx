import {
  Kysely,
  Generated,
  DummyDriver,
  SqliteAdapter,
  SqliteIntrospector,
  SqliteQueryCompiler
} from "kysely";

interface Person {
  id: Generated<number>;
  first_name: string;
  last_name: string | null;
  age: number;
}

interface Database {
  person: Person;
}

export const db = new Kysely<Database>({
  dialect: {
    createAdapter() {
      return new SqliteAdapter();
    },
    createDriver() {
      return new DummyDriver();
    },
    createIntrospector(db: Kysely<unknown>) {
      return new SqliteIntrospector(db);
    },
    createQueryCompiler() {
      return new SqliteQueryCompiler();
    }
  }
});
