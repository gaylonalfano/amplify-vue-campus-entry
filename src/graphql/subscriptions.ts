/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission {
    onCreateSubmission {
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
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission {
    onUpdateSubmission {
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
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission {
    onDeleteSubmission {
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
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily {
    onCreateFamily {
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily {
    onUpdateFamily {
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily {
    onDeleteFamily {
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
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
export const onCreateDivision = /* GraphQL */ `
  subscription OnCreateDivision {
    onCreateDivision {
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
export const onUpdateDivision = /* GraphQL */ `
  subscription OnUpdateDivision {
    onUpdateDivision {
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
export const onDeleteDivision = /* GraphQL */ `
  subscription OnDeleteDivision {
    onDeleteDivision {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
