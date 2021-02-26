/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployeeSubmission = /* GraphQL */ `
  query GetEmployeeSubmission($id: ID!) {
    getEmployeeSubmission(id: $id) {
      id
      submittedAt
      temperature
      conditionsMet
      employeeName
      division
      employeePhone
      signature
      employeeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listEmployeeSubmissions = /* GraphQL */ `
  query ListEmployeeSubmissions(
    $filter: ModelEmployeeSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        submittedAt
        temperature
        conditionsMet
        employeeName
        division
        employeePhone
        signature
        employeeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEmployeeSubmissions = /* GraphQL */ `
  query SyncEmployeeSubmissions(
    $filter: ModelEmployeeSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployeeSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        submittedAt
        temperature
        conditionsMet
        employeeName
        division
        employeePhone
        signature
        employeeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employees {
        items {
          id
          firstName
          lastName
          phone
          email
          division
          createdAt
          updatedAt
          familyID
          _version
          _deleted
          _lastChangedAt
          employeeSubmissions {
            items {
              id
              submittedAt
              temperature
              conditionsMet
              employeeName
              division
              employeePhone
              signature
              employeeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          employeeStudents {
            items {
              id
              employeeID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      parents {
        items {
          id
          firstName
          lastName
          phone
          email
          createdAt
          updatedAt
          familyID
          _version
          _deleted
          _lastChangedAt
          parentStudents {
            items {
              id
              parentID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      students {
        items {
          id
          firstName
          lastName
          phone
          email
          division
          fatherPhone
          motherPhone
          fatherEmail
          motherEmail
          createdAt
          updatedAt
          familyID
          _version
          _deleted
          _lastChangedAt
          studentSubmissions {
            items {
              id
              submittedAt
              temperature
              conditionsMet
              studentName
              division
              parentName
              parentPhone
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          parents {
            items {
              id
              parentID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          employees {
            items {
              id
              employeeID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listFamilys = /* GraphQL */ `
  query ListFamilys(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        employees {
          items {
            id
            firstName
            lastName
            phone
            email
            division
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            employeeSubmissions {
              nextToken
              startedAt
            }
            employeeStudents {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
        parents {
          items {
            id
            firstName
            lastName
            phone
            email
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            parentStudents {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
        students {
          items {
            id
            firstName
            lastName
            phone
            email
            division
            fatherPhone
            motherPhone
            fatherEmail
            motherEmail
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            studentSubmissions {
              nextToken
              startedAt
            }
            parents {
              nextToken
              startedAt
            }
            employees {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFamilies = /* GraphQL */ `
  query SyncFamilies(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFamilies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        employees {
          items {
            id
            firstName
            lastName
            phone
            email
            division
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            employeeSubmissions {
              nextToken
              startedAt
            }
            employeeStudents {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
        parents {
          items {
            id
            firstName
            lastName
            phone
            email
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            parentStudents {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
        students {
          items {
            id
            firstName
            lastName
            phone
            email
            division
            fatherPhone
            motherPhone
            fatherEmail
            motherEmail
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            studentSubmissions {
              nextToken
              startedAt
            }
            parents {
              nextToken
              startedAt
            }
            employees {
              nextToken
              startedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getConsultant = /* GraphQL */ `
  query GetConsultant($id: ID!) {
    getConsultant(id: $id) {
      id
      firstName
      lastName
      type
      phone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      consultantSubmissions {
        items {
          id
          submittedAt
          temperature
          conditionsMet
          consultantName
          consultantType
          consultantPhone
          signature
          consultantID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listConsultants = /* GraphQL */ `
  query ListConsultants(
    $filter: ModelConsultantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsultants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        type
        phone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        consultantSubmissions {
          items {
            id
            submittedAt
            temperature
            conditionsMet
            consultantName
            consultantType
            consultantPhone
            signature
            consultantID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConsultants = /* GraphQL */ `
  query SyncConsultants(
    $filter: ModelConsultantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsultants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        type
        phone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        consultantSubmissions {
          items {
            id
            submittedAt
            temperature
            conditionsMet
            consultantName
            consultantType
            consultantPhone
            signature
            consultantID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getVisitor = /* GraphQL */ `
  query GetVisitor($id: ID!) {
    getVisitor(id: $id) {
      id
      firstName
      lastName
      phone
      governmentId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      visitorSubmissions {
        items {
          id
          submittedAt
          conditionsMet
          visitorName
          visitorPhone
          visitorGovernmentId
          signature
          visitorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listVisitors = /* GraphQL */ `
  query ListVisitors(
    $filter: ModelVisitorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisitors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        phone
        governmentId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        visitorSubmissions {
          items {
            id
            submittedAt
            conditionsMet
            visitorName
            visitorPhone
            visitorGovernmentId
            signature
            visitorID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVisitors = /* GraphQL */ `
  query SyncVisitors(
    $filter: ModelVisitorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVisitors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        phone
        governmentId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        visitorSubmissions {
          items {
            id
            submittedAt
            conditionsMet
            visitorName
            visitorPhone
            visitorGovernmentId
            signature
            visitorID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        phone
        email
        division
        createdAt
        updatedAt
        familyID
        _version
        _deleted
        _lastChangedAt
        employeeSubmissions {
          items {
            id
            submittedAt
            temperature
            conditionsMet
            employeeName
            division
            employeePhone
            signature
            employeeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        employeeStudents {
          items {
            id
            employeeID
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            employee {
              id
              firstName
              lastName
              phone
              email
              division
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
            student {
              id
              firstName
              lastName
              phone
              email
              division
              fatherPhone
              motherPhone
              fatherEmail
              motherEmail
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      firstName
      lastName
      phone
      email
      division
      createdAt
      updatedAt
      familyID
      _version
      _deleted
      _lastChangedAt
      employeeSubmissions {
        items {
          id
          submittedAt
          temperature
          conditionsMet
          employeeName
          division
          employeePhone
          signature
          employeeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      employeeStudents {
        items {
          id
          employeeID
          studentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          employee {
            id
            firstName
            lastName
            phone
            email
            division
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            employeeSubmissions {
              nextToken
              startedAt
            }
            employeeStudents {
              nextToken
              startedAt
            }
          }
          student {
            id
            firstName
            lastName
            phone
            email
            division
            fatherPhone
            motherPhone
            fatherEmail
            motherEmail
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            studentSubmissions {
              nextToken
              startedAt
            }
            parents {
              nextToken
              startedAt
            }
            employees {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncEmployees = /* GraphQL */ `
  query SyncEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        phone
        email
        division
        createdAt
        updatedAt
        familyID
        _version
        _deleted
        _lastChangedAt
        employeeSubmissions {
          items {
            id
            submittedAt
            temperature
            conditionsMet
            employeeName
            division
            employeePhone
            signature
            employeeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        employeeStudents {
          items {
            id
            employeeID
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            employee {
              id
              firstName
              lastName
              phone
              email
              division
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
            student {
              id
              firstName
              lastName
              phone
              email
              division
              fatherPhone
              motherPhone
              fatherEmail
              motherEmail
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listParents = /* GraphQL */ `
  query ListParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        phone
        email
        createdAt
        updatedAt
        familyID
        _version
        _deleted
        _lastChangedAt
        parentStudents {
          items {
            id
            parentID
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            parent {
              id
              firstName
              lastName
              phone
              email
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
            student {
              id
              firstName
              lastName
              phone
              email
              division
              fatherPhone
              motherPhone
              fatherEmail
              motherEmail
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getParent = /* GraphQL */ `
  query GetParent($id: ID!) {
    getParent(id: $id) {
      id
      firstName
      lastName
      phone
      email
      createdAt
      updatedAt
      familyID
      _version
      _deleted
      _lastChangedAt
      parentStudents {
        items {
          id
          parentID
          studentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          parent {
            id
            firstName
            lastName
            phone
            email
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            parentStudents {
              nextToken
              startedAt
            }
          }
          student {
            id
            firstName
            lastName
            phone
            email
            division
            fatherPhone
            motherPhone
            fatherEmail
            motherEmail
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            studentSubmissions {
              nextToken
              startedAt
            }
            parents {
              nextToken
              startedAt
            }
            employees {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncParents = /* GraphQL */ `
  query SyncParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        phone
        email
        createdAt
        updatedAt
        familyID
        _version
        _deleted
        _lastChangedAt
        parentStudents {
          items {
            id
            parentID
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            parent {
              id
              firstName
              lastName
              phone
              email
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
            student {
              id
              firstName
              lastName
              phone
              email
              division
              fatherPhone
              motherPhone
              fatherEmail
              motherEmail
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        phone
        email
        division
        fatherPhone
        motherPhone
        fatherEmail
        motherEmail
        createdAt
        updatedAt
        familyID
        _version
        _deleted
        _lastChangedAt
        studentSubmissions {
          items {
            id
            submittedAt
            temperature
            conditionsMet
            studentName
            division
            parentName
            parentPhone
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        parents {
          items {
            id
            parentID
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            parent {
              id
              firstName
              lastName
              phone
              email
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
            student {
              id
              firstName
              lastName
              phone
              email
              division
              fatherPhone
              motherPhone
              fatherEmail
              motherEmail
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
          }
          nextToken
          startedAt
        }
        employees {
          items {
            id
            employeeID
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            employee {
              id
              firstName
              lastName
              phone
              email
              division
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
            student {
              id
              firstName
              lastName
              phone
              email
              division
              fatherPhone
              motherPhone
              fatherEmail
              motherEmail
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      firstName
      lastName
      phone
      email
      division
      fatherPhone
      motherPhone
      fatherEmail
      motherEmail
      createdAt
      updatedAt
      familyID
      _version
      _deleted
      _lastChangedAt
      studentSubmissions {
        items {
          id
          submittedAt
          temperature
          conditionsMet
          studentName
          division
          parentName
          parentPhone
          studentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      parents {
        items {
          id
          parentID
          studentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          parent {
            id
            firstName
            lastName
            phone
            email
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            parentStudents {
              nextToken
              startedAt
            }
          }
          student {
            id
            firstName
            lastName
            phone
            email
            division
            fatherPhone
            motherPhone
            fatherEmail
            motherEmail
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            studentSubmissions {
              nextToken
              startedAt
            }
            parents {
              nextToken
              startedAt
            }
            employees {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
      employees {
        items {
          id
          employeeID
          studentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          employee {
            id
            firstName
            lastName
            phone
            email
            division
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            employeeSubmissions {
              nextToken
              startedAt
            }
            employeeStudents {
              nextToken
              startedAt
            }
          }
          student {
            id
            firstName
            lastName
            phone
            email
            division
            fatherPhone
            motherPhone
            fatherEmail
            motherEmail
            createdAt
            updatedAt
            familyID
            _version
            _deleted
            _lastChangedAt
            studentSubmissions {
              nextToken
              startedAt
            }
            parents {
              nextToken
              startedAt
            }
            employees {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        phone
        email
        division
        fatherPhone
        motherPhone
        fatherEmail
        motherEmail
        createdAt
        updatedAt
        familyID
        _version
        _deleted
        _lastChangedAt
        studentSubmissions {
          items {
            id
            submittedAt
            temperature
            conditionsMet
            studentName
            division
            parentName
            parentPhone
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        parents {
          items {
            id
            parentID
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            parent {
              id
              firstName
              lastName
              phone
              email
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
            student {
              id
              firstName
              lastName
              phone
              email
              division
              fatherPhone
              motherPhone
              fatherEmail
              motherEmail
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
          }
          nextToken
          startedAt
        }
        employees {
          items {
            id
            employeeID
            studentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            employee {
              id
              firstName
              lastName
              phone
              email
              division
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
            student {
              id
              firstName
              lastName
              phone
              email
              division
              fatherPhone
              motherPhone
              fatherEmail
              motherEmail
              createdAt
              updatedAt
              familyID
              _version
              _deleted
              _lastChangedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getStudentSubmission = /* GraphQL */ `
  query GetStudentSubmission($id: ID!) {
    getStudentSubmission(id: $id) {
      id
      submittedAt
      temperature
      conditionsMet
      studentName
      division
      parentName
      parentPhone
      studentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listStudentSubmissions = /* GraphQL */ `
  query ListStudentSubmissions(
    $filter: ModelStudentSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        submittedAt
        temperature
        conditionsMet
        studentName
        division
        parentName
        parentPhone
        studentID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStudentSubmissions = /* GraphQL */ `
  query SyncStudentSubmissions(
    $filter: ModelStudentSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudentSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        submittedAt
        temperature
        conditionsMet
        studentName
        division
        parentName
        parentPhone
        studentID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVisitorSubmission = /* GraphQL */ `
  query GetVisitorSubmission($id: ID!) {
    getVisitorSubmission(id: $id) {
      id
      submittedAt
      conditionsMet
      visitorName
      visitorPhone
      visitorGovernmentId
      signature
      visitorID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listVisitorSubmissions = /* GraphQL */ `
  query ListVisitorSubmissions(
    $filter: ModelVisitorSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisitorSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        submittedAt
        conditionsMet
        visitorName
        visitorPhone
        visitorGovernmentId
        signature
        visitorID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVisitorSubmissions = /* GraphQL */ `
  query SyncVisitorSubmissions(
    $filter: ModelVisitorSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVisitorSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        submittedAt
        conditionsMet
        visitorName
        visitorPhone
        visitorGovernmentId
        signature
        visitorID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getConsultantSubmission = /* GraphQL */ `
  query GetConsultantSubmission($id: ID!) {
    getConsultantSubmission(id: $id) {
      id
      submittedAt
      temperature
      conditionsMet
      consultantName
      consultantType
      consultantPhone
      signature
      consultantID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listConsultantSubmissions = /* GraphQL */ `
  query ListConsultantSubmissions(
    $filter: ModelConsultantSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsultantSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        submittedAt
        temperature
        conditionsMet
        consultantName
        consultantType
        consultantPhone
        signature
        consultantID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConsultantSubmissions = /* GraphQL */ `
  query SyncConsultantSubmissions(
    $filter: ModelConsultantSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsultantSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        submittedAt
        temperature
        conditionsMet
        consultantName
        consultantType
        consultantPhone
        signature
        consultantID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncParentStudents = /* GraphQL */ `
  query SyncParentStudents(
    $filter: ModelParentStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParentStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        parentID
        studentID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        parent {
          id
          firstName
          lastName
          phone
          email
          createdAt
          updatedAt
          familyID
          _version
          _deleted
          _lastChangedAt
          parentStudents {
            items {
              id
              parentID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        student {
          id
          firstName
          lastName
          phone
          email
          division
          fatherPhone
          motherPhone
          fatherEmail
          motherEmail
          createdAt
          updatedAt
          familyID
          _version
          _deleted
          _lastChangedAt
          studentSubmissions {
            items {
              id
              submittedAt
              temperature
              conditionsMet
              studentName
              division
              parentName
              parentPhone
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          parents {
            items {
              id
              parentID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          employees {
            items {
              id
              employeeID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEmployeeStudents = /* GraphQL */ `
  query SyncEmployeeStudents(
    $filter: ModelEmployeeStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployeeStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        employeeID
        studentID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        employee {
          id
          firstName
          lastName
          phone
          email
          division
          createdAt
          updatedAt
          familyID
          _version
          _deleted
          _lastChangedAt
          employeeSubmissions {
            items {
              id
              submittedAt
              temperature
              conditionsMet
              employeeName
              division
              employeePhone
              signature
              employeeID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          employeeStudents {
            items {
              id
              employeeID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        student {
          id
          firstName
          lastName
          phone
          email
          division
          fatherPhone
          motherPhone
          fatherEmail
          motherEmail
          createdAt
          updatedAt
          familyID
          _version
          _deleted
          _lastChangedAt
          studentSubmissions {
            items {
              id
              submittedAt
              temperature
              conditionsMet
              studentName
              division
              parentName
              parentPhone
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          parents {
            items {
              id
              parentID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          employees {
            items {
              id
              employeeID
              studentID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
