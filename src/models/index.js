// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const QuestionType = {
  "ID": "ID",
  "TEXT": "TEXT",
  "BOOLEAN": "BOOLEAN",
  "SINGLESELECT": "SINGLESELECT",
  "MULTISELECT": "MULTISELECT",
  "SIGNATURE": "SIGNATURE"
};

const SubmissionType = {
  "STUDENT": "STUDENT",
  "EMPLOYEE": "EMPLOYEE",
  "VISITOR": "VISITOR",
  "CONSULTANT": "CONSULTANT"
};

const Division = {
  "EC": "EC",
  "ES": "ES",
  "MS": "MS",
  "HS": "HS",
  "ALLSCHOOL": "ALLSCHOOL"
};

const ConsultantType = {
  "CONTRACTOR": "CONTRACTOR",
  "SCHOOLBUSDRIVER": "SCHOOLBUSDRIVER",
  "SCHOOLBUSMONITOR": "SCHOOLBUSMONITOR",
  "SUBSTITUTETEACHER": "SUBSTITUTETEACHER",
  "CONSULTANT": "CONSULTANT",
  "CCAINSTRUCTOR": "CCAINSTRUCTOR"
};

const FamilyMemberType = {
  "PARENT": "PARENT",
  "CHILD": "CHILD"
};

const { Question, Submission, Family, Person } = initSchema(schema);

export {
  Question,
  Submission,
  Family,
  Person,
  QuestionType,
  SubmissionType,
  Division,
  ConsultantType,
  FamilyMemberType
};