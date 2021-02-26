// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

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

const { EmployeeSubmission, Family, Student, ParentStudent, Parent, EmployeeStudent, Employee, StudentSubmission, Consultant, ConsultantSubmission, Visitor, VisitorSubmission } = initSchema(schema);

export {
  EmployeeSubmission,
  Family,
  Student,
  ParentStudent,
  Parent,
  EmployeeStudent,
  Employee,
  StudentSubmission,
  Consultant,
  ConsultantSubmission,
  Visitor,
  VisitorSubmission,
  Division,
  ConsultantType
};