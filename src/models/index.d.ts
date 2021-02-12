import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Submission {
  readonly id: string;
  readonly submittedAt: number;
  readonly temperature: number;
  readonly meetsCriteria: boolean;
  readonly hasCertified: boolean;
  readonly submittedBy: Person;
  readonly submittedFor: Person;
  readonly personID: string;
  constructor(init: ModelInit<Submission>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission>) => MutableModel<Submission> | void): Submission;
}

export declare class Person {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone?: string;
  readonly studentID?: string;
  readonly divisionID: string;
  readonly categoryID: string;
  readonly familyID: string;
  readonly submissions?: (Submission | null)[];
  readonly createdAt: number;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class Family {
  readonly id: string;
  readonly people?: (Person | null)[];
  readonly createdAt: number;
  constructor(init: ModelInit<Family>);
  static copyOf(source: Family, mutator: (draft: MutableModel<Family>) => MutableModel<Family> | void): Family;
}

export declare class Division {
  readonly id: string;
  readonly name: string;
  readonly people?: (Person | null)[];
  constructor(init: ModelInit<Division>);
  static copyOf(source: Division, mutator: (draft: MutableModel<Division>) => MutableModel<Division> | void): Division;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly people?: (Person | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}