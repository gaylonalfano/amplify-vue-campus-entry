/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      questionType
      titleEnglish
      titleChinese
      contentEnglish
      contentChinese
      submissionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      questionType
      titleEnglish
      titleChinese
      contentEnglish
      contentChinese
      submissionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      questionType
      titleEnglish
      titleChinese
      contentEnglish
      contentChinese
      submissionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission {
    onCreateSubmission {
      id
      submissionType
      submittedAt
      temperature
      conditionsMet
      signature
      division
      firstName
      lastName
      phone
      parentID
      parentName
      parentPhone
      personID
      familyID
      consultantType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      questions {
        items {
          id
          questionType
          titleEnglish
          titleChinese
          contentEnglish
          contentChinese
          submissionID
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
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission {
    onUpdateSubmission {
      id
      submissionType
      submittedAt
      temperature
      conditionsMet
      signature
      division
      firstName
      lastName
      phone
      parentID
      parentName
      parentPhone
      personID
      familyID
      consultantType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      questions {
        items {
          id
          questionType
          titleEnglish
          titleChinese
          contentEnglish
          contentChinese
          submissionID
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
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission {
    onDeleteSubmission {
      id
      submissionType
      submittedAt
      temperature
      conditionsMet
      signature
      division
      firstName
      lastName
      phone
      parentID
      parentName
      parentPhone
      personID
      familyID
      consultantType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      questions {
        items {
          id
          questionType
          titleEnglish
          titleChinese
          contentEnglish
          contentChinese
          submissionID
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
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily {
    onCreateFamily {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      submissions {
        items {
          id
          submissionType
          submittedAt
          temperature
          conditionsMet
          signature
          division
          firstName
          lastName
          phone
          parentID
          parentName
          parentPhone
          personID
          familyID
          consultantType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          questions {
            items {
              id
              questionType
              titleEnglish
              titleChinese
              contentEnglish
              contentChinese
              submissionID
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
      members {
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
          submissionType
          isAuthenticatedUser
          familyMemberType
          familyID
          consultantType
          governmentID
          _version
          _deleted
          _lastChangedAt
          submissions {
            items {
              id
              submissionType
              submittedAt
              temperature
              conditionsMet
              signature
              division
              firstName
              lastName
              phone
              parentID
              parentName
              parentPhone
              personID
              familyID
              consultantType
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
      submissions {
        items {
          id
          submissionType
          submittedAt
          temperature
          conditionsMet
          signature
          division
          firstName
          lastName
          phone
          parentID
          parentName
          parentPhone
          personID
          familyID
          consultantType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          questions {
            items {
              id
              questionType
              titleEnglish
              titleChinese
              contentEnglish
              contentChinese
              submissionID
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
      members {
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
          submissionType
          isAuthenticatedUser
          familyMemberType
          familyID
          consultantType
          governmentID
          _version
          _deleted
          _lastChangedAt
          submissions {
            items {
              id
              submissionType
              submittedAt
              temperature
              conditionsMet
              signature
              division
              firstName
              lastName
              phone
              parentID
              parentName
              parentPhone
              personID
              familyID
              consultantType
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
      submissions {
        items {
          id
          submissionType
          submittedAt
          temperature
          conditionsMet
          signature
          division
          firstName
          lastName
          phone
          parentID
          parentName
          parentPhone
          personID
          familyID
          consultantType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          questions {
            items {
              id
              questionType
              titleEnglish
              titleChinese
              contentEnglish
              contentChinese
              submissionID
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
      members {
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
          submissionType
          isAuthenticatedUser
          familyMemberType
          familyID
          consultantType
          governmentID
          _version
          _deleted
          _lastChangedAt
          submissions {
            items {
              id
              submissionType
              submittedAt
              temperature
              conditionsMet
              signature
              division
              firstName
              lastName
              phone
              parentID
              parentName
              parentPhone
              personID
              familyID
              consultantType
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
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
      submissionType
      isAuthenticatedUser
      familyMemberType
      familyID
      consultantType
      governmentID
      _version
      _deleted
      _lastChangedAt
      submissions {
        items {
          id
          submissionType
          submittedAt
          temperature
          conditionsMet
          signature
          division
          firstName
          lastName
          phone
          parentID
          parentName
          parentPhone
          personID
          familyID
          consultantType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          questions {
            items {
              id
              questionType
              titleEnglish
              titleChinese
              contentEnglish
              contentChinese
              submissionID
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
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
      submissionType
      isAuthenticatedUser
      familyMemberType
      familyID
      consultantType
      governmentID
      _version
      _deleted
      _lastChangedAt
      submissions {
        items {
          id
          submissionType
          submittedAt
          temperature
          conditionsMet
          signature
          division
          firstName
          lastName
          phone
          parentID
          parentName
          parentPhone
          personID
          familyID
          consultantType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          questions {
            items {
              id
              questionType
              titleEnglish
              titleChinese
              contentEnglish
              contentChinese
              submissionID
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
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
      submissionType
      isAuthenticatedUser
      familyMemberType
      familyID
      consultantType
      governmentID
      _version
      _deleted
      _lastChangedAt
      submissions {
        items {
          id
          submissionType
          submittedAt
          temperature
          conditionsMet
          signature
          division
          firstName
          lastName
          phone
          parentID
          parentName
          parentPhone
          personID
          familyID
          consultantType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          questions {
            items {
              id
              questionType
              titleEnglish
              titleChinese
              contentEnglish
              contentChinese
              submissionID
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
