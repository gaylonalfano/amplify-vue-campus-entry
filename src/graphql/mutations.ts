/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubmission = /* GraphQL */ `
  mutation CreateSubmission(
    $input: CreateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    createSubmission(input: $input, condition: $condition) {
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
export const updateSubmission = /* GraphQL */ `
  mutation UpdateSubmission(
    $input: UpdateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    updateSubmission(input: $input, condition: $condition) {
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
export const deleteSubmission = /* GraphQL */ `
  mutation DeleteSubmission(
    $input: DeleteSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    deleteSubmission(input: $input, condition: $condition) {
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
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
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
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
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
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
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
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
export const createDivision = /* GraphQL */ `
  mutation CreateDivision(
    $input: CreateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    createDivision(input: $input, condition: $condition) {
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
export const updateDivision = /* GraphQL */ `
  mutation UpdateDivision(
    $input: UpdateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    updateDivision(input: $input, condition: $condition) {
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
export const deleteDivision = /* GraphQL */ `
  mutation DeleteDivision(
    $input: DeleteDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    deleteDivision(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
