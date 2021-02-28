/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
`;
export const getSubmission = /* GraphQL */ `
  query GetSubmission($id: ID!) {
    getSubmission(id: $id) {
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
export const listSubmissions = /* GraphQL */ `
  query ListSubmissions(
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const syncSubmissions = /* GraphQL */ `
  query SyncSubmissions(
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            questions {
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
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(
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
