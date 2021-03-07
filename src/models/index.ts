// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

// @ts-ignore
const { Submission, Person, Family, Division, Category } = initSchema(schema);

export { Submission, Person, Family, Division, Category };

