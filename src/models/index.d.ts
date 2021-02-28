import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum QuestionType {
  ID = "ID",
  TEXT = "TEXT",
  BOOLEAN = "BOOLEAN",
  SINGLESELECT = "SINGLESELECT",
  MULTISELECT = "MULTISELECT",
  SIGNATURE = "SIGNATURE"
}

export enum SubmissionType {
  STUDENT = "STUDENT",
  EMPLOYEE = "EMPLOYEE",
  VISITOR = "VISITOR",
  CONSULTANT = "CONSULTANT"
}

export enum Division {
  EC = "EC",
  ES = "ES",
  MS = "MS",
  HS = "HS",
  ALLSCHOOL = "ALLSCHOOL"
}

export enum ConsultantType {
  CONTRACTOR = "CONTRACTOR",
  SCHOOLBUSDRIVER = "SCHOOLBUSDRIVER",
  SCHOOLBUSMONITOR = "SCHOOLBUSMONITOR",
  SUBSTITUTETEACHER = "SUBSTITUTETEACHER",
  CONSULTANT = "CONSULTANT",
  CCAINSTRUCTOR = "CCAINSTRUCTOR"
}

export enum FamilyMemberType {
  PARENT = "PARENT",
  CHILD = "CHILD"
}



export declare class Question {
  readonly id: string;
  readonly questionType: QuestionType | keyof typeof QuestionType;
  readonly titleEnglish: string;
  readonly titleChinese: string;
  readonly contentEnglish: string;
  readonly contentChinese: string;
  readonly submissionID?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class Submission {
  readonly id: string;
  readonly submissionType: SubmissionType | keyof typeof SubmissionType;
  readonly submittedAt: string;
  readonly temperature?: number;
  readonly conditionsMet: boolean;
  readonly signature: boolean;
  readonly division?: Division | keyof typeof Division;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly parentID?: string;
  readonly parentName?: string;
  readonly parentPhone?: string;
  readonly personID: string;
  readonly familyID?: string;
  readonly consultantType?: ConsultantType | keyof typeof ConsultantType;
  readonly questions?: (Question | null)[];
  constructor(init: ModelInit<Submission>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission>) => MutableModel<Submission> | void): Submission;
}

export declare class Family {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly members?: (Person | null)[];
  readonly submissions?: (Submission | null)[];
  constructor(init: ModelInit<Family>);
  static copyOf(source: Family, mutator: (draft: MutableModel<Family>) => MutableModel<Family> | void): Family;
}

export declare class Person {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone?: string;
  readonly email?: string;
  readonly division?: Division | keyof typeof Division;
  readonly fatherPhone?: string;
  readonly motherPhone?: string;
  readonly fatherEmail?: string;
  readonly motherEmail?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly submissionType: SubmissionType | keyof typeof SubmissionType;
  readonly isAuthenticatedUser: boolean;
  readonly familyMemberType?: FamilyMemberType | keyof typeof FamilyMemberType;
  readonly familyID?: string;
  readonly consultantType?: ConsultantType | keyof typeof ConsultantType;
  readonly governmentID?: string;
  readonly submissions?: (Submission | null)[];
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}