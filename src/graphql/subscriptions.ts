/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployeeSubmission = /* GraphQL */ `
  subscription OnCreateEmployeeSubmission {
    onCreateEmployeeSubmission {
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
export const onUpdateEmployeeSubmission = /* GraphQL */ `
  subscription OnUpdateEmployeeSubmission {
    onUpdateEmployeeSubmission {
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
export const onDeleteEmployeeSubmission = /* GraphQL */ `
  subscription OnDeleteEmployeeSubmission {
    onDeleteEmployeeSubmission {
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
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily {
    onCreateFamily {
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily {
    onUpdateFamily {
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily {
    onDeleteFamily {
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
export const onCreateConsultant = /* GraphQL */ `
  subscription OnCreateConsultant {
    onCreateConsultant {
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
export const onUpdateConsultant = /* GraphQL */ `
  subscription OnUpdateConsultant {
    onUpdateConsultant {
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
export const onDeleteConsultant = /* GraphQL */ `
  subscription OnDeleteConsultant {
    onDeleteConsultant {
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
export const onCreateVisitor = /* GraphQL */ `
  subscription OnCreateVisitor {
    onCreateVisitor {
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
export const onUpdateVisitor = /* GraphQL */ `
  subscription OnUpdateVisitor {
    onUpdateVisitor {
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
export const onDeleteVisitor = /* GraphQL */ `
  subscription OnDeleteVisitor {
    onDeleteVisitor {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateParent = /* GraphQL */ `
  subscription OnCreateParent {
    onCreateParent {
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
export const onUpdateParent = /* GraphQL */ `
  subscription OnUpdateParent {
    onUpdateParent {
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
export const onDeleteParent = /* GraphQL */ `
  subscription OnDeleteParent {
    onDeleteParent {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateStudentSubmission = /* GraphQL */ `
  subscription OnCreateStudentSubmission {
    onCreateStudentSubmission {
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
export const onUpdateStudentSubmission = /* GraphQL */ `
  subscription OnUpdateStudentSubmission {
    onUpdateStudentSubmission {
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
export const onDeleteStudentSubmission = /* GraphQL */ `
  subscription OnDeleteStudentSubmission {
    onDeleteStudentSubmission {
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
export const onCreateVisitorSubmission = /* GraphQL */ `
  subscription OnCreateVisitorSubmission {
    onCreateVisitorSubmission {
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
export const onUpdateVisitorSubmission = /* GraphQL */ `
  subscription OnUpdateVisitorSubmission {
    onUpdateVisitorSubmission {
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
export const onDeleteVisitorSubmission = /* GraphQL */ `
  subscription OnDeleteVisitorSubmission {
    onDeleteVisitorSubmission {
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
export const onCreateConsultantSubmission = /* GraphQL */ `
  subscription OnCreateConsultantSubmission {
    onCreateConsultantSubmission {
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
export const onUpdateConsultantSubmission = /* GraphQL */ `
  subscription OnUpdateConsultantSubmission {
    onUpdateConsultantSubmission {
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
export const onDeleteConsultantSubmission = /* GraphQL */ `
  subscription OnDeleteConsultantSubmission {
    onDeleteConsultantSubmission {
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
export const onCreateParentStudent = /* GraphQL */ `
  subscription OnCreateParentStudent {
    onCreateParentStudent {
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
export const onUpdateParentStudent = /* GraphQL */ `
  subscription OnUpdateParentStudent {
    onUpdateParentStudent {
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
export const onDeleteParentStudent = /* GraphQL */ `
  subscription OnDeleteParentStudent {
    onDeleteParentStudent {
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
export const onCreateEmployeeStudent = /* GraphQL */ `
  subscription OnCreateEmployeeStudent {
    onCreateEmployeeStudent {
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
export const onUpdateEmployeeStudent = /* GraphQL */ `
  subscription OnUpdateEmployeeStudent {
    onUpdateEmployeeStudent {
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
export const onDeleteEmployeeStudent = /* GraphQL */ `
  subscription OnDeleteEmployeeStudent {
    onDeleteEmployeeStudent {
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
