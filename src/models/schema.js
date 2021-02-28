export const schema = {
    "models": {
        "Question": {
            "name": "Question",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "questionType": {
                    "name": "questionType",
                    "isArray": false,
                    "type": {
                        "enum": "QuestionType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "titleEnglish": {
                    "name": "titleEnglish",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "titleChinese": {
                    "name": "titleChinese",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "contentEnglish": {
                    "name": "contentEnglish",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "contentChinese": {
                    "name": "contentChinese",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "submissionID": {
                    "name": "submissionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Questions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySubmission",
                        "fields": [
                            "submissionID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Submission": {
            "name": "Submission",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "submissionType": {
                    "name": "submissionType",
                    "isArray": false,
                    "type": {
                        "enum": "SubmissionType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "submittedAt": {
                    "name": "submittedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "temperature": {
                    "name": "temperature",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "conditionsMet": {
                    "name": "conditionsMet",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "signature": {
                    "name": "signature",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "division": {
                    "name": "division",
                    "isArray": false,
                    "type": {
                        "enum": "Division"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "parentID": {
                    "name": "parentID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "parentName": {
                    "name": "parentName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "parentPhone": {
                    "name": "parentPhone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "personID": {
                    "name": "personID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "familyID": {
                    "name": "familyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "consultantType": {
                    "name": "consultantType",
                    "isArray": false,
                    "type": {
                        "enum": "ConsultantType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "questions": {
                    "name": "questions",
                    "isArray": true,
                    "type": {
                        "model": "Question"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "submissionID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Submissions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPerson",
                        "fields": [
                            "personID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byFamily",
                        "fields": [
                            "familyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Family": {
            "name": "Family",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "members": {
                    "name": "members",
                    "isArray": true,
                    "type": {
                        "model": "Person"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "familyID"
                    }
                },
                "submissions": {
                    "name": "submissions",
                    "isArray": true,
                    "type": {
                        "model": "Submission"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "familyID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Families",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Person": {
            "name": "Person",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "division": {
                    "name": "division",
                    "isArray": false,
                    "type": {
                        "enum": "Division"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "fatherPhone": {
                    "name": "fatherPhone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "motherPhone": {
                    "name": "motherPhone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "fatherEmail": {
                    "name": "fatherEmail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "motherEmail": {
                    "name": "motherEmail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "submissionType": {
                    "name": "submissionType",
                    "isArray": false,
                    "type": {
                        "enum": "SubmissionType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "isAuthenticatedUser": {
                    "name": "isAuthenticatedUser",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "familyMemberType": {
                    "name": "familyMemberType",
                    "isArray": false,
                    "type": {
                        "enum": "FamilyMemberType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "familyID": {
                    "name": "familyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "consultantType": {
                    "name": "consultantType",
                    "isArray": false,
                    "type": {
                        "enum": "ConsultantType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "governmentID": {
                    "name": "governmentID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "submissions": {
                    "name": "submissions",
                    "isArray": true,
                    "type": {
                        "model": "Submission"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "personID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "People",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byFamily",
                        "fields": [
                            "familyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "QuestionType": {
            "name": "QuestionType",
            "values": [
                "ID",
                "TEXT",
                "BOOLEAN",
                "SINGLESELECT",
                "MULTISELECT",
                "SIGNATURE"
            ]
        },
        "SubmissionType": {
            "name": "SubmissionType",
            "values": [
                "STUDENT",
                "EMPLOYEE",
                "VISITOR",
                "CONSULTANT"
            ]
        },
        "Division": {
            "name": "Division",
            "values": [
                "EC",
                "ES",
                "MS",
                "HS",
                "ALLSCHOOL"
            ]
        },
        "ConsultantType": {
            "name": "ConsultantType",
            "values": [
                "CONTRACTOR",
                "SCHOOLBUSDRIVER",
                "SCHOOLBUSMONITOR",
                "SUBSTITUTETEACHER",
                "CONSULTANT",
                "CCAINSTRUCTOR"
            ]
        },
        "FamilyMemberType": {
            "name": "FamilyMemberType",
            "values": [
                "PARENT",
                "CHILD"
            ]
        }
    },
    "nonModels": {},
    "version": "77e7da5ef1b209024b871d28ced34e43"
};