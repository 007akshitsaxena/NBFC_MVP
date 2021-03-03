define("UsrProducts1Page", [], function() {
	return {
		entitySchemaName: "UsrProducts",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrProductsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrProducts"
				}
			},
			"UsrSchema0c2c85c5Detail437a19dd": {
				"schemaName": "UsrSchema0c2c85c5Detail",
				"entitySchemaName": "UsrApplications",
				"filter": {
					"detailColumn": "UsrApprovedProduct",
					"masterColumn": "Id"
				}
			},
			"UsrSchema7c750ba8Detail5af41850": {
				"schemaName": "UsrSchema7c750ba8Detail",
				"entitySchemaName": "UsrSpecificationOfProducts",
				"filter": {
					"detailColumn": "UsrProducts",
					"masterColumn": "Id"
				}
			},
			"UsrSchemaccf8d633Detail02a7c983": {
				"schemaName": "UsrSchemaccf8d633Detail",
				"entitySchemaName": "UsrAgreements",
				"filter": {
					"detailColumn": "UsrProducts",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrLast30DaysRejectedApplications": {
				"e8eaa3e1-298b-4785-9c78-ccc2d4baef44": {
					"uId": "e8eaa3e1-298b-4785-9c78-ccc2d4baef44",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrLast30DaysRejectedApplicationsCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"e2cf048e-02e2-4300-8750-c70962c80f28": {
					"uId": "e2cf048e-02e2-4300-8750-c70962c80f28",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrLast30DaysRejectedApplicationsCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrLast6MonthsNumberOfDPD": {
				"93f404cc-38e4-48dc-85ed-3e72cba6b615": {
					"uId": "93f404cc-38e4-48dc-85ed-3e72cba6b615",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrLastLoanClosureCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"4af13c01-7de5-4c62-b157-a5a2efa76a52": {
					"uId": "4af13c01-7de5-4c62-b157-a5a2efa76a52",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrLastLoanClosureCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrMinAge": {
				"3539d714-99e5-49b2-94d5-801c3f3fdab2": {
					"uId": "3539d714-99e5-49b2-94d5-801c3f3fdab2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxAgeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"d3e4395f-26ea-4d31-84cf-51832de39c38": {
					"uId": "d3e4395f-26ea-4d31-84cf-51832de39c38",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxAgeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrMaxAge": {
				"bea4162e-fe96-4f6c-a023-fab353356337": {
					"uId": "bea4162e-fe96-4f6c-a023-fab353356337",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxAgeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"e8abdd2e-aeec-48f2-afe6-04a87b0fab10": {
					"uId": "e8abdd2e-aeec-48f2-afe6-04a87b0fab10",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxAgeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrMinLoanAmount": {
				"86383f6c-c595-4167-8fd1-cb58fb48b3b7": {
					"uId": "86383f6c-c595-4167-8fd1-cb58fb48b3b7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxRequestedLoanAmountCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"0ed299a1-1ae8-4a69-85be-e99937d12e74": {
					"uId": "0ed299a1-1ae8-4a69-85be-e99937d12e74",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxRequestedLoanAmountCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrMaxLoanAmount": {
				"351934fb-359e-44e8-a3b8-88c3c0031672": {
					"uId": "351934fb-359e-44e8-a3b8-88c3c0031672",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxRequestedLoanAmountCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"856a6cf9-c445-4532-a596-fb3e02de1443": {
					"uId": "856a6cf9-c445-4532-a596-fb3e02de1443",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxRequestedLoanAmountCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrMinLoanTerm": {
				"50ddd33e-7dcb-43a7-bbce-3576fa903bb4": {
					"uId": "50ddd33e-7dcb-43a7-bbce-3576fa903bb4",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxRequestedLoanTermCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"a8600af4-993a-4091-a003-759ba781c744": {
					"uId": "a8600af4-993a-4091-a003-759ba781c744",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxRequestedLoanTermCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrMaxLoanTerm": {
				"dbe06ccc-b55b-4a98-ab2a-aee6130749d1": {
					"uId": "dbe06ccc-b55b-4a98-ab2a-aee6130749d1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxRequestedLoanTermCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"8269edb7-e1da-440d-b546-15e64c3b6af4": {
					"uId": "8269edb7-e1da-440d-b546-15e64c3b6af4",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinAndMaxRequestedLoanTermCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrNewLoanAmountEligibility": {
				"afb26832-7871-44e4-86b7-6ec6d87035ff": {
					"uId": "afb26832-7871-44e4-86b7-6ec6d87035ff",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrNewLoanEligibilityCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ea45eade-d8b8-449d-abc2-676fe2162cf7": {
					"uId": "ea45eade-d8b8-449d-abc2-676fe2162cf7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrNewLoanEligibilityCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrRepeatLoanAmountEligibility": {
				"56c3ee54-03e2-469b-a673-280b54f18bf0": {
					"uId": "56c3ee54-03e2-469b-a673-280b54f18bf0",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRepeatLoanEligibilityCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ae7de9c0-2c61-489e-bd76-2889668554a1": {
					"uId": "ae7de9c0-2c61-489e-bd76-2889668554a1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRepeatLoanEligibilityCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrNewLoanDiscount": {
				"398c19e5-00ef-49ed-9dc8-dd9216f5f4fb": {
					"uId": "398c19e5-00ef-49ed-9dc8-dd9216f5f4fb",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrNewDiscountFactorCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"14a042b8-97c8-437f-8f2c-1eb64d1ed646": {
					"uId": "14a042b8-97c8-437f-8f2c-1eb64d1ed646",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrNewDiscountFactorCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrRepeatLoanDiscount": {
				"09c3a1ca-fc82-475f-bbb4-69a485273a03": {
					"uId": "09c3a1ca-fc82-475f-bbb4-69a485273a03",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRepeatDiscountFactorCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"9f13e0b7-c5ce-4487-b027-a3c167559e16": {
					"uId": "9f13e0b7-c5ce-4487-b027-a3c167559e16",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrRepeatDiscountFactorCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrSalariedEligibleLoanAmount": {
				"ef4208f0-5fea-4f91-91ce-44a3d3b6d3ee": {
					"uId": "ef4208f0-5fea-4f91-91ce-44a3d3b6d3ee",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSalariedLoanAmountEligibilityCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"53831824-a56e-4772-acaa-57ec1636ec91": {
					"uId": "53831824-a56e-4772-acaa-57ec1636ec91",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSalariedLoanAmountEligibilityCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrSalariedLoanDiscountFactor": {
				"a678a9ee-0ad0-4c71-a5af-e4e3b5e40447": {
					"uId": "a678a9ee-0ad0-4c71-a5af-e4e3b5e40447",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSalariedLoanDiscountFactorCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"32be7cd4-84d6-4ecf-8d21-6f9b37476200": {
					"uId": "32be7cd4-84d6-4ecf-8d21-6f9b37476200",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSalariedLoanDiscountFactorCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrSelfEmployedEligibleLoanAmount": {
				"65310bc6-072b-4fe4-9005-c5a543e61996": {
					"uId": "65310bc6-072b-4fe4-9005-c5a543e61996",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSelfEmployedLoanAmountEligibilityCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ae52c0eb-ee6b-4770-98dd-864b5dd56e04": {
					"uId": "ae52c0eb-ee6b-4770-98dd-864b5dd56e04",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSelfEmployedLoanAmountEligibilityCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrSelfEmployedLoanDiscountFactor": {
				"26ebb697-191e-4fe0-8291-2b1d467e6282": {
					"uId": "26ebb697-191e-4fe0-8291-2b1d467e6282",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSelfEmployedLoanDiscountFactorCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"12dde273-73a2-423a-b9f1-23e208aa6d93": {
					"uId": "12dde273-73a2-423a-b9f1-23e208aa6d93",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSelfEmployedLoanDiscountFactorCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrRequiredMonthlyIncome": {
				"195831f7-24b7-4416-9c4f-e24f00eddc7a": {
					"uId": "195831f7-24b7-4416-9c4f-e24f00eddc7a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMonthlyIncomeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"85e0b31f-41d1-412c-a51e-189a12d5d4ba": {
					"uId": "85e0b31f-41d1-412c-a51e-189a12d5d4ba",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMonthlyIncomeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrApprovalFeeValue": {
				"f4deeef8-235e-4a41-a9b7-a2912a392c4d": {
					"uId": "f4deeef8-235e-4a41-a9b7-a2912a392c4d",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApprovalFeeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"a025dee7-5b65-428f-952a-a0bd732170d6": {
					"uId": "a025dee7-5b65-428f-952a-a0bd732170d6",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApprovalFeeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrOnlineSecureFeeValue": {
				"f7a0aeae-d246-4f82-a686-3f419fa45b76": {
					"uId": "f7a0aeae-d246-4f82-a686-3f419fa45b76",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrOnlineSecureFeeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"4b0de957-fda1-4950-b941-d1d9311ef3ca": {
					"uId": "4b0de957-fda1-4950-b941-d1d9311ef3ca",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrOnlineSecureFeeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrOriginationFeeValue": {
				"1063bd6b-2331-4b49-9e01-2c5989e8d1cc": {
					"uId": "1063bd6b-2331-4b49-9e01-2c5989e8d1cc",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrOriginationFeeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"156bf2bd-312e-4f02-ac03-8b36c0926c22": {
					"uId": "156bf2bd-312e-4f02-ac03-8b36c0926c22",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrOriginationFeeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrExtensionPeriod": {
				"a1a4a761-3591-4426-a3c0-697f78172e60": {
					"uId": "a1a4a761-3591-4426-a3c0-697f78172e60",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrExtensionAvailabilityTermCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"04ab4ef6-5e8b-4e4a-9156-bde0c26ceff3": {
					"uId": "04ab4ef6-5e8b-4e4a-9156-bde0c26ceff3",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrExtensionAvailabilityTermCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrExtensionFeeCharge": {
				"86dceb24-fd81-4f5b-ad83-79e66d22d689": {
					"uId": "86dceb24-fd81-4f5b-ad83-79e66d22d689",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrExtensionAvailabilityTermCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"23b200ea-0dbb-4e29-a0ab-1bf14d70ae3d": {
					"uId": "23b200ea-0dbb-4e29-a0ab-1bf14d70ae3d",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrExtensionAvailabilityTermCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrLatePaymentGracePeriod": {
				"a24b1075-62fa-4669-bdc3-171e8fd80d2a": {
					"uId": "a24b1075-62fa-4669-bdc3-171e8fd80d2a",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrLatePaymentGracePeriodCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"de8e5600-fed2-4357-93b4-78a5a6241f4b": {
					"uId": "de8e5600-fed2-4357-93b4-78a5a6241f4b",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrLatePaymentGracePeriodCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrLatePaymentFeeCharge": {
				"0686eaea-2a5b-4df0-8fff-037170bc09b6": {
					"uId": "0686eaea-2a5b-4df0-8fff-037170bc09b6",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrLatePaymentGracePeriodCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"843c0fb7-1aaa-4d5c-8be8-02d05d385ef8": {
					"uId": "843c0fb7-1aaa-4d5c-8be8-02d05d385ef8",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrLatePaymentGracePeriodCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrCollectionFeeValue": {
				"864cee3c-fc30-41c0-8b65-1f8787c6f4af": {
					"uId": "864cee3c-fc30-41c0-8b65-1f8787c6f4af",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCollectionFeeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"ec64279d-b373-49af-bc74-ebf9c91bbbd0": {
					"uId": "ec64279d-b373-49af-bc74-ebf9c91bbbd0",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCollectionFeeCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrMinLoanTermInMonths": {
				"4b571c24-934d-418c-86ef-3f1366500574": {
					"uId": "4b571c24-934d-418c-86ef-3f1366500574",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinMaxLongTermLoanRequested"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"8dbf5f01-bb46-48f5-80a6-319e3ca87228": {
					"uId": "8dbf5f01-bb46-48f5-80a6-319e3ca87228",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinMaxLongTermLoanRequested"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"UsrMaxLoanTermInMonths": {
				"602cd8b0-6620-48dd-8783-eb72d32e33b4": {
					"uId": "602cd8b0-6620-48dd-8783-eb72d32e33b4",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinMaxLongTermLoanRequested"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				},
				"fd82ccfa-d9f6-4043-a861-4b0ccbdc8b13": {
					"uId": "fd82ccfa-d9f6-4043-a861-4b0ccbdc8b13",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrMinMaxLongTermLoanRequested"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Namef8a66093-7338-48b3-bd25-b4a4058d5196",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "Name"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrIsDefaultProduct7c82bab6-3087-4c69-9746-83eea4092468",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrIsDefaultProduct"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPebe25729-5a4c-4a86-8662-22fe5dace815",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrLender",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbc3eefccTabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabelGroup16661725",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbc3eefccTabLabelGroup16661725GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbc3eefccTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabelGridLayouta5671998",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbc3eefccTabLabelGroup16661725",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP328f3b9e-6e71-4a46-8d29-1a8ae70f9484",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabbc3eefccTabLabelGridLayouta5671998"
					},
					"bindTo": "UsrProductCategory",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUP328f3b9e6e714a468d291a8ae70f9484LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouta5671998",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP5d58c4d9-05f9-4246-87f2-b65087e7361a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabbc3eefccTabLabelGridLayouta5671998"
					},
					"bindTo": "UsrProductStatus",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUP5d58c4d905f9424687f2b65087e7361aLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouta5671998",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP5dc3203e-fc85-481a-8062-f4edb64f50fa",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayouta5671998"
					},
					"bindTo": "UsrProductType",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUP5dc3203efc85481a8062f4edb64f50faLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouta5671998",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DATETIME9e01a00f-be7f-4a43-ac7a-c4dc5d1107d4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayouta5671998"
					},
					"bindTo": "UsrStartDate",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouta5671998",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPf7bd0818-2947-4362-9263-fd0506cb96a0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabbc3eefccTabLabelGridLayouta5671998"
					},
					"bindTo": "UsrProductClass",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUPf7bd0818294743629263fd0506cb96a0LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouta5671998",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DATETIME65dac42f-def7-464d-9f69-bba4c9c0d7b4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tabbc3eefccTabLabelGridLayouta5671998"
					},
					"bindTo": "UsrEndDate",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouta5671998",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabelGroup37f5016c",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbc3eefccTabLabelGroup37f5016cGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbc3eefccTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbc3eefccTabLabelGroup37f5016c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERfa57ee09-78c2-4d36-9df7-3f28c1fee94b",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMinAge",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER44c4277f-a4de-4aab-ab5f-1992e2878f6b",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMaxAge",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEAN39ef9ef2-9cf5-40ee-9937-9f1edf9dff47",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMinAndMaxAgeCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER07470646-c850-4c1e-b68b-4042644f1998",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMinLoanAmount",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "INTEGER9c8ffccf-f772-4d31-be16-d94f223fa2d7",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 3,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMaxLoanAmount",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEANe8c07e06-00e2-4d0e-a1f8-2c43c7f3e223",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMinAndMaxRequestedLoanAmountCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "INTEGERa1859d12-c43e-4421-b31c-139e3b5c4672",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMinLoanTermInDays",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "INTEGERbbc92415-d989-4988-94ee-6985d8acfa49",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 5,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMaxLoanTermInDays",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "BOOLEAN87b90012-f3f1-414b-9952-1cca921c7965",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMinAndMaxShortTermLoanRequestedCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "INTEGER14573a5c-1ca7-44f6-a4f1-65925f8df586",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 7,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMinLoanTermInMonths",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "INTEGERb7c2d612-bd7d-482a-ac78-daed646da3da",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 7,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMaxLoanTermInMonths",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "BOOLEANf3ca7e49-efdd-4491-b30e-5150863ff2b6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMinMaxLongTermLoanRequested",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "BOOLEANf402027b-1964-4b63-bf61-605fa9cc06e8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMonthlyIncomeCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "INTEGERc7839e9d-f0f1-49cb-94f0-d5e35c862454",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 9,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrRequiredMonthlyIncome",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "BOOLEAN87b01874-f5ff-4cb0-8176-b51108c8de6c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrMobileNumberOnActiveAppCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "BOOLEAN56f1c0e5-a9ce-442b-ae53-6783439ffce5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 11,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrEmailOnActiveAppCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "BOOLEANf883725c-617f-4621-88f8-66f2b00aedef",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrLast30DaysRejectedApplicationsCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "INTEGER5b581d78-3279-470f-8614-e0da07905a3e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 13,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrLast30DaysRejectedApplications",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "BOOLEAN5a8a8152-207a-4b4e-8bee-3deece30f60a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 15,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrReasonForLoanCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "BOOLEANb4546a33-f331-4a9d-8aca-956738e00d1f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 15,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrIndustryTypeCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 19
			},
			{
				"operation": "insert",
				"name": "BOOLEAN59cefe21-c669-4fd4-829c-efcfa6d95ef7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 17,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrLastLoanClosureCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 20
			},
			{
				"operation": "insert",
				"name": "INTEGERc1ae0db3-90e6-45dd-99c4-afe5b7cfbe49",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 17,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrLast6MonthsNumberOfDPD",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 21
			},
			{
				"operation": "insert",
				"name": "BOOLEAN06ab3a73-cf32-4664-b52f-370be64add19",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 19,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrNewLoanEligibilityCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 22
			},
			{
				"operation": "insert",
				"name": "INTEGER1c1b0b9c-d757-4e9d-b6a2-49e19bb72eba",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 19,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrNewLoanAmountEligibility",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 23
			},
			{
				"operation": "insert",
				"name": "BOOLEANd50d4013-00fa-4306-b8bf-3120edb48df5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 21,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrRepeatLoanEligibilityCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 24
			},
			{
				"operation": "insert",
				"name": "INTEGER56c0193e-8b21-4bc6-bc09-e54b2cffd45a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 21,
						"layoutName": "Tabbc3eefccTabLabelGridLayouteed84ae0"
					},
					"bindTo": "UsrRepeatLoanAmountEligibility",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayouteed84ae0",
				"propertyName": "items",
				"index": 25
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabelGroup680e7bb3",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbc3eefccTabLabelGroup680e7bb3GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbc3eefccTabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabelGridLayout6e20a0b1",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbc3eefccTabLabelGroup680e7bb3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN617d46d4-3682-41aa-9165-681d63782202",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayout6e20a0b1"
					},
					"bindTo": "UsrSalariedLoanAmountEligibilityCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayout6e20a0b1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrEligibleLoanAmountb0f28a2a-d87e-4df5-9566-9a203fe88f42",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayout6e20a0b1"
					},
					"bindTo": "UsrSalariedEligibleLoanAmount",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayout6e20a0b1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEANaefb1562-7647-4261-a594-b329acd359e8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabbc3eefccTabLabelGridLayout6e20a0b1"
					},
					"bindTo": "UsrSalariedLoanDiscountFactorCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayout6e20a0b1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOATe9d6caec-69b0-44cb-9499-2175bef34b38",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Tabbc3eefccTabLabelGridLayout6e20a0b1"
					},
					"bindTo": "UsrSalariedLoanDiscountFactor",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayout6e20a0b1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabelGroup7390d31e",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbc3eefccTabLabelGroup7390d31eGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbc3eefccTabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabbc3eefccTabLabelGridLayout8e777897",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbc3eefccTabLabelGroup7390d31e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN12c664cd-c589-45d5-88af-0343772ec127",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayout8e777897"
					},
					"bindTo": "UsrSelfEmployedLoanAmountEligibilityCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayout8e777897",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT5a5a8146-be16-471c-ab0b-9ecb67ed3819",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabbc3eefccTabLabelGridLayout8e777897"
					},
					"bindTo": "UsrSelfEmployedEligibleLoanAmount",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayout8e777897",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEAN2f0d876e-6c77-4264-b51a-b1f429afe8f8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabbc3eefccTabLabelGridLayout8e777897"
					},
					"bindTo": "UsrSelfEmployedLoanDiscountFactorCheck",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayout8e777897",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOATaeba345b-d8d1-4d9c-8803-39adbada1a4e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Tabbc3eefccTabLabelGridLayout8e777897"
					},
					"bindTo": "UsrSelfEmployedLoanDiscountFactor",
					"enabled": true
				},
				"parentName": "Tabbc3eefccTabLabelGridLayout8e777897",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab1a465bfcTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab1a465bfcTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrSchema0c2c85c5Detail437a19dd",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab1a465bfcTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab371d7336TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab371d7336TabLabelTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrSchemaccf8d633Detail02a7c983",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab371d7336TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab6b41fb0aTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab6b41fb0aTabLabelTabCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrSchema7c750ba8Detail5af41850",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab6b41fb0aTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 5
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
