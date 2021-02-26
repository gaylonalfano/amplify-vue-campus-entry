import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

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



export declare class EmployeeSubmission {
  readonly id: string;
  readonly submittedAt: string;
  readonly temperature: number;
  readonly conditionsMet: boolean;
  readonly employeeName: string;
  readonly division: Division | keyof typeof Division;
  readonly employeePhone: string;
  readonly signature: boolean;
  readonly employeeID: string;
  constructor(init: ModelInit<EmployeeSubmission>);
  static copyOf(source: EmployeeSubmission, mutator: (draft: MutableModel<EmployeeSubmission>) => MutableModel<EmployeeSubmission> | void): EmployeeSubmission;
}

export declare class Family {
  readonly id: string;
  readonly students?: (Student | null)[];
  readonly parents?: (Parent | null)[];
  readonly employees?: (Employee | null)[];
  readonly createdAt: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Family>);
  static copyOf(source: Family, mutator: (draft: MutableModel<Family>) => MutableModel<Family> | void): Family;
}

export declare class Student {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone?: string;
  readonly email?: string;
  readonly division: Division | keyof typeof Division;
  readonly fatherPhone: string;
  readonly motherPhone: string;
  readonly fatherEmail: string;
  readonly motherEmail: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly familyID: string;
  readonly parents?: (ParentStudent | null)[];
  readonly employees?: (EmployeeStudent | null)[];
  readonly studentSubmissions?: (StudentSubmission | null)[];
  constructor(init: ModelInit<Student>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

export declare class ParentStudent {
  readonly id: string;
  readonly parent: Parent;
  readonly student: Student;
  constructor(init: ModelInit<ParentStudent>);
  static copyOf(source: ParentStudent, mutator: (draft: MutableModel<ParentStudent>) => MutableModel<ParentStudent> | void): ParentStudent;
}

export declare class Parent {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly email: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly familyID: string;
  readonly parentStudents?: (ParentStudent | null)[];
  constructor(init: ModelInit<Parent>);
  static copyOf(source: Parent, mutator: (draft: MutableModel<Parent>) => MutableModel<Parent> | void): Parent;
}

export declare class EmployeeStudent {
  readonly id: string;
  readonly employee: Employee;
  readonly student: Student;
  constructor(init: ModelInit<EmployeeStudent>);
  static copyOf(source: EmployeeStudent, mutator: (draft: MutableModel<EmployeeStudent>) => MutableModel<EmployeeStudent> | void): EmployeeStudent;
}

export declare class Employee {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly email: string;
  readonly division: Division | keyof typeof Division;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly familyID: string;
  readonly employeeSubmissions?: (EmployeeSubmission | null)[];
  readonly employeeStudents?: (EmployeeStudent | null)[];
  constructor(init: ModelInit<Employee>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}

export declare class StudentSubmission {
  readonly id: string;
  readonly submittedAt: string;
  readonly temperature: number;
  readonly conditionsMet: boolean;
  readonly studentName: string;
  readonly division: Division | keyof typeof Division;
  readonly parentName: string;
  readonly parentPhone: string;
  readonly studentID: string;
  constructor(init: ModelInit<StudentSubmission>);
  static copyOf(source: StudentSubmission, mutator: (draft: MutableModel<StudentSubmission>) => MutableModel<StudentSubmission> | void): StudentSubmission;
}

export declare class Consultant {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly type: ConsultantType | keyof typeof ConsultantType;
  readonly phone: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly consultantSubmissions?: (ConsultantSubmission | null)[];
  constructor(init: ModelInit<Consultant>);
  static copyOf(source: Consultant, mutator: (draft: MutableModel<Consultant>) => MutableModel<Consultant> | void): Consultant;
}

export declare class ConsultantSubmission {
  readonly id: string;
  readonly submittedAt: string;
  readonly temperature: number;
  readonly conditionsMet: boolean;
  readonly consultantName: string;
  readonly consultantType: ConsultantType | keyof typeof ConsultantType;
  readonly consultantPhone: string;
  readonly signature: boolean;
  readonly consultantID: string;
  constructor(init: ModelInit<ConsultantSubmission>);
  static copyOf(source: ConsultantSubmission, mutator: (draft: MutableModel<ConsultantSubmission>) => MutableModel<ConsultantSubmission> | void): ConsultantSubmission;
}

export declare class Visitor {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly governmentId: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly visitorSubmissions?: (VisitorSubmission | null)[];
  constructor(init: ModelInit<Visitor>);
  static copyOf(source: Visitor, mutator: (draft: MutableModel<Visitor>) => MutableModel<Visitor> | void): Visitor;
}

export declare class VisitorSubmission {
  readonly id: string;
  readonly submittedAt: string;
  readonly conditionsMet: boolean;
  readonly visitorName: string;
  readonly visitorPhone: string;
  readonly visitorGovernmentId: string;
  readonly signature: boolean;
  readonly visitorID: string;
  constructor(init: ModelInit<VisitorSubmission>);
  static copyOf(source: VisitorSubmission, mutator: (draft: MutableModel<VisitorSubmission>) => MutableModel<VisitorSubmission> | void): VisitorSubmission;
}