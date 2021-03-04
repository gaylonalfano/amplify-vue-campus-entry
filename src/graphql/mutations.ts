/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      questionType
      titleEnglish
      titleChinese
      contentEnglish
      contentChinese
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      questionType
      titleEnglish
      titleChinese
      contentEnglish
      contentChinese
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      questionType
      titleEnglish
      titleChinese
      contentEnglish
      contentChinese
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSubmission = /* GraphQL */ `
  mutation CreateSubmission(
    $input: CreateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    createSubmission(input: $input, condition: $condition) {
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
  }
`;
export const updateSubmission = /* GraphQL */ `
  mutation UpdateSubmission(
    $input: UpdateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    updateSubmission(input: $input, condition: $condition) {
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
  }
`;
export const deleteSubmission = /* GraphQL */ `
  mutation DeleteSubmission(
    $input: DeleteSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    deleteSubmission(input: $input, condition: $condition) {
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
  }
`;
