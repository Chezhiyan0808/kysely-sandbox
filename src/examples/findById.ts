import { db } from "../db";

export default function findById() {
  const j = db
    .selectFrom("person")
    .select(["id", "first_name", "age", "last_name"])
    .where("id", "=", 123)
    .orderBy("age")
    .compile();
  console.log(j);
  return db
    .selectFrom("person")
    .select(["id", "first_name", "age", "last_name"])
    .where("id", "=", 123)
    .orderBy("age");
}
