import "./styles.css";
import { db } from "./db";

export default function playground() {
  return db
    .selectFrom("person")
    .select("id")
    .where("first_name", "=", "Bob")
    .orderBy("age");
}
