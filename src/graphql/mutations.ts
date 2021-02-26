/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployeeSubmission = /* GraphQL */ `
  mutation CreateEmployeeSubmission(
    $input: CreateEmployeeSubmissionInput!
    $condition: ModelEmployeeSubmissionConditionInput
  ) {
    createEmployeeSubmission(input: $input, condition: $condition) {
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
export const updateEmployeeSubmission = /* GraphQL */ `
  mutation UpdateEmployeeSubmission(
    $input: UpdateEmployeeSubmissionInput!
    $condition: ModelEmployeeSubmissionConditionInput
  ) {
    updateEmployeeSubmission(input: $input, condition: $condition) {
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
export const deleteEmployeeSubmission = /* GraphQL */ `
  mutation DeleteEmployeeSubmission(
    $input: DeleteEmployeeSubmissionInput!
    $condition: ModelEmployeeSubmissionConditionInput
  ) {
    deleteEmployeeSubmission(input: $input, condition: $condition) {
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
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
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
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
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
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
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
export const createConsultant = /* GraphQL */ `
  mutation CreateConsultant(
    $input: CreateConsultantInput!
    $condition: ModelConsultantConditionInput
  ) {
    createConsultant(input: $input, condition: $condition) {
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
export const updateConsultant = /* GraphQL */ `
  mutation UpdateConsultant(
    $input: UpdateConsultantInput!
    $condition: ModelConsultantConditionInput
  ) {
    updateConsultant(input: $input, condition: $condition) {
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
export const deleteConsultant = /* GraphQL */ `
  mutation DeleteConsultant(
    $input: DeleteConsultantInput!
    $condition: ModelConsultantConditionInput
  ) {
    deleteConsultant(input: $input, condition: $condition) {
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
export const createVisitor = /* GraphQL */ `
  mutation CreateVisitor(
    $input: CreateVisitorInput!
    $condition: ModelVisitorConditionInput
  ) {
    createVisitor(input: $input, condition: $condition) {
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
export const updateVisitor = /* GraphQL */ `
  mutation UpdateVisitor(
    $input: UpdateVisitorInput!
    $condition: ModelVisitorConditionInput
  ) {
    updateVisitor(input: $input, condition: $condition) {
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
export const deleteVisitor = /* GraphQL */ `
  mutation DeleteVisitor(
    $input: DeleteVisitorInput!
    $condition: ModelVisitorConditionInput
  ) {
    deleteVisitor(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createParent = /* GraphQL */ `
  mutation CreateParent(
    $input: CreateParentInput!
    $condition: ModelParentConditionInput
  ) {
    createParent(input: $input, condition: $condition) {
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
export const updateParent = /* GraphQL */ `
  mutation UpdateParent(
    $input: UpdateParentInput!
    $condition: ModelParentConditionInput
  ) {
    updateParent(input: $input, condition: $condition) {
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
export const deleteParent = /* GraphQL */ `
  mutation DeleteParent(
    $input: DeleteParentInput!
    $condition: ModelParentConditionInput
  ) {
    deleteParent(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createStudentSubmission = /* GraphQL */ `
  mutation CreateStudentSubmission(
    $input: CreateStudentSubmissionInput!
    $condition: ModelStudentSubmissionConditionInput
  ) {
    createStudentSubmission(input: $input, condition: $condition) {
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
export const updateStudentSubmission = /* GraphQL */ `
  mutation UpdateStudentSubmission(
    $input: UpdateStudentSubmissionInput!
    $condition: ModelStudentSubmissionConditionInput
  ) {
    updateStudentSubmission(input: $input, condition: $condition) {
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
export const deleteStudentSubmission = /* GraphQL */ `
  mutation DeleteStudentSubmission(
    $input: DeleteStudentSubmissionInput!
    $condition: ModelStudentSubmissionConditionInput
  ) {
    deleteStudentSubmission(input: $input, condition: $condition) {
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
export const createVisitorSubmission = /* GraphQL */ `
  mutation CreateVisitorSubmission(
    $input: CreateVisitorSubmissionInput!
    $condition: ModelVisitorSubmissionConditionInput
  ) {
    createVisitorSubmission(input: $input, condition: $condition) {
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
export const updateVisitorSubmission = /* GraphQL */ `
  mutation UpdateVisitorSubmission(
    $input: UpdateVisitorSubmissionInput!
    $condition: ModelVisitorSubmissionConditionInput
  ) {
    updateVisitorSubmission(input: $input, condition: $condition) {
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
export const deleteVisitorSubmission = /* GraphQL */ `
  mutation DeleteVisitorSubmission(
    $input: DeleteVisitorSubmissionInput!
    $condition: ModelVisitorSubmissionConditionInput
  ) {
    deleteVisitorSubmission(input: $input, condition: $condition) {
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
export const createConsultantSubmission = /* GraphQL */ `
  mutation CreateConsultantSubmission(
    $input: CreateConsultantSubmissionInput!
    $condition: ModelConsultantSubmissionConditionInput
  ) {
    createConsultantSubmission(input: $input, condition: $condition) {
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
export const updateConsultantSubmission = /* GraphQL */ `
  mutation UpdateConsultantSubmission(
    $input: UpdateConsultantSubmissionInput!
    $condition: ModelConsultantSubmissionConditionInput
  ) {
    updateConsultantSubmission(input: $input, condition: $condition) {
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
export const deleteConsultantSubmission = /* GraphQL */ `
  mutation DeleteConsultantSubmission(
    $input: DeleteConsultantSubmissionInput!
    $condition: ModelConsultantSubmissionConditionInput
  ) {
    deleteConsultantSubmission(input: $input, condition: $condition) {
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
export const createParentStudent = /* GraphQL */ `
  mutation CreateParentStudent(
    $input: CreateParentStudentInput!
    $condition: ModelParentStudentConditionInput
  ) {
    createParentStudent(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateParentStudent = /* GraphQL */ `
  mutation UpdateParentStudent(
    $input: UpdateParentStudentInput!
    $condition: ModelParentStudentConditionInput
  ) {
    updateParentStudent(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteParentStudent = /* GraphQL */ `
  mutation DeleteParentStudent(
    $input: DeleteParentStudentInput!
    $condition: ModelParentStudentConditionInput
  ) {
    deleteParentStudent(input: $input, condition: $condition) {
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
    }
  }
`;
export const createEmployeeStudent = /* GraphQL */ `
  mutation CreateEmployeeStudent(
    $input: CreateEmployeeStudentInput!
    $condition: ModelEmployeeStudentConditionInput
  ) {
    createEmployeeStudent(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateEmployeeStudent = /* GraphQL */ `
  mutation UpdateEmployeeStudent(
    $input: UpdateEmployeeStudentInput!
    $condition: ModelEmployeeStudentConditionInput
  ) {
    updateEmployeeStudent(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteEmployeeStudent = /* GraphQL */ `
  mutation DeleteEmployeeStudent(
    $input: DeleteEmployeeStudentInput!
    $condition: ModelEmployeeStudentConditionInput
  ) {
    deleteEmployeeStudent(input: $input, condition: $condition) {
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
    }
  }
`;
