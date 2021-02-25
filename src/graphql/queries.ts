/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubmission = /* GraphQL */ `
  query GetSubmission($id: ID!) {
    getSubmission(id: $id) {
      id
      submittedAt
      temperature
      meetsCriteria
      hasCertified
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      submittedBy {
        id
        firstName
        lastName
        phone
        studentID
        divisionID
        categoryID
        familyID
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          items {
            id
            submittedAt
            temperature
            meetsCriteria
            hasCertified
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            submittedBy {
              id
              firstName
              lastName
              phone
              studentID
              divisionID
              categoryID
              familyID
              createdAt
              _version
              _deleted
              _lastChangedAt
              updatedAt
            }
            submittedFor {
              id
              firstName
              lastName
              phone
              studentID
              divisionID
              categoryID
              familyID
              createdAt
              _version
              _deleted
              _lastChangedAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      submittedFor {
        id
        firstName
        lastName
        phone
        studentID
        divisionID
        categoryID
        familyID
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          items {
            id
            submittedAt
            temperature
            meetsCriteria
            hasCertified
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            submittedBy {
              id
              firstName
              lastName
              phone
              studentID
              divisionID
              categoryID
              familyID
              createdAt
              _version
              _deleted
              _lastChangedAt
              updatedAt
            }
            submittedFor {
              id
              firstName
              lastName
              phone
              studentID
              divisionID
              categoryID
              familyID
              createdAt
              _version
              _deleted
              _lastChangedAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
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
        submittedAt
        temperature
        meetsCriteria
        hasCertified
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        submittedBy {
          id
          firstName
          lastName
          phone
          studentID
          divisionID
          categoryID
          familyID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          submissions {
            items {
              id
              submittedAt
              temperature
              meetsCriteria
              hasCertified
              personID
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
        submittedFor {
          id
          firstName
          lastName
          phone
          studentID
          divisionID
          categoryID
          familyID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          submissions {
            items {
              id
              submittedAt
              temperature
              meetsCriteria
              hasCertified
              personID
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
        submittedAt
        temperature
        meetsCriteria
        hasCertified
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        submittedBy {
          id
          firstName
          lastName
          phone
          studentID
          divisionID
          categoryID
          familyID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          submissions {
            items {
              id
              submittedAt
              temperature
              meetsCriteria
              hasCertified
              personID
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
        submittedFor {
          id
          firstName
          lastName
          phone
          studentID
          divisionID
          categoryID
          familyID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          submissions {
            items {
              id
              submittedAt
              temperature
              meetsCriteria
              hasCertified
              personID
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
export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
      id
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      people {
        items {
          id
          firstName
          lastName
          phone
          studentID
          divisionID
          categoryID
          familyID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          submissions {
            items {
              id
              submittedAt
              temperature
              meetsCriteria
              hasCertified
              personID
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        people {
          items {
            id
            firstName
            lastName
            phone
            studentID
            divisionID
            categoryID
            familyID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
        people {
          items {
            id
            firstName
            lastName
            phone
            studentID
            divisionID
            categoryID
            familyID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
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
      studentID
      divisionID
      categoryID
      familyID
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      submissions {
        items {
          id
          submittedAt
          temperature
          meetsCriteria
          hasCertified
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          submittedBy {
            id
            firstName
            lastName
            phone
            studentID
            divisionID
            categoryID
            familyID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
            submissions {
              nextToken
              startedAt
            }
          }
          submittedFor {
            id
            firstName
            lastName
            phone
            studentID
            divisionID
            categoryID
            familyID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
            submissions {
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
        studentID
        divisionID
        categoryID
        familyID
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          items {
            id
            submittedAt
            temperature
            meetsCriteria
            hasCertified
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            submittedBy {
              id
              firstName
              lastName
              phone
              studentID
              divisionID
              categoryID
              familyID
              createdAt
              _version
              _deleted
              _lastChangedAt
              updatedAt
            }
            submittedFor {
              id
              firstName
              lastName
              phone
              studentID
              divisionID
              categoryID
              familyID
              createdAt
              _version
              _deleted
              _lastChangedAt
              updatedAt
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
        studentID
        divisionID
        categoryID
        familyID
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          items {
            id
            submittedAt
            temperature
            meetsCriteria
            hasCertified
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            submittedBy {
              id
              firstName
              lastName
              phone
              studentID
              divisionID
              categoryID
              familyID
              createdAt
              _version
              _deleted
              _lastChangedAt
              updatedAt
            }
            submittedFor {
              id
              firstName
              lastName
              phone
              studentID
              divisionID
              categoryID
              familyID
              createdAt
              _version
              _deleted
              _lastChangedAt
              updatedAt
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
export const getDivision = /* GraphQL */ `
  query GetDivision($id: ID!) {
    getDivision(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      people {
        items {
          id
          firstName
          lastName
          phone
          studentID
          divisionID
          categoryID
          familyID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          submissions {
            items {
              id
              submittedAt
              temperature
              meetsCriteria
              hasCertified
              personID
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
export const listDivisions = /* GraphQL */ `
  query ListDivisions(
    $filter: ModelDivisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDivisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        people {
          items {
            id
            firstName
            lastName
            phone
            studentID
            divisionID
            categoryID
            familyID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
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
export const syncDivisions = /* GraphQL */ `
  query SyncDivisions(
    $filter: ModelDivisionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDivisions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        people {
          items {
            id
            firstName
            lastName
            phone
            studentID
            divisionID
            categoryID
            familyID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
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
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      people {
        items {
          id
          firstName
          lastName
          phone
          studentID
          divisionID
          categoryID
          familyID
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          submissions {
            items {
              id
              submittedAt
              temperature
              meetsCriteria
              hasCertified
              personID
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        people {
          items {
            id
            firstName
            lastName
            phone
            studentID
            divisionID
            categoryID
            familyID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
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
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        people {
          items {
            id
            firstName
            lastName
            phone
            studentID
            divisionID
            categoryID
            familyID
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
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
