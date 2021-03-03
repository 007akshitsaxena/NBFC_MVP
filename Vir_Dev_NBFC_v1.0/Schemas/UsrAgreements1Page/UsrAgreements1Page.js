define("UsrAgreements1Page", [], function() {
	return {
		entitySchemaName: "UsrAgreements",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrAgreementsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrAgreements"
				}
			},
			"UsrSchemafaccda06Detail04c79b1d": {
				"schemaName": "UsrSchemafaccda06Detail",
				"entitySchemaName": "UsrMovementOfFunds",
				"filter": {
					"detailColumn": "UsrAgreement",
					"masterColumn": "Id"
				}
			},
			"UsrSchema216e773eDetail6208a686": {
				"schemaName": "UsrSchema216e773eDetail",
				"entitySchemaName": "UsrOperations",
				"filter": {
					"detailColumn": "UsrAgreement",
					"masterColumn": "Id"
				}
			},
			"UsrSchemab20e12c5Detail43a30c27": {
				"schemaName": "UsrSchemab20e12c5Detail",
				"entitySchemaName": "UsrDebtCalculation",
				"filter": {
					"detailColumn": "UsrTSAgreement",
					"masterColumn": "Id"
				}
			},
			"UsrSchemacea130deDetail888c9091": {
				"schemaName": "UsrSchemacea130deDetail",
				"entitySchemaName": "UsrParametersOfAgreement",
				"filter": {
					"detailColumn": "UsrAgreement",
					"masterColumn": "Id"
				}
			},
			"UsrSchema0ea7e772Detail2a72ba92": {
				"schemaName": "UsrSchema0ea7e772Detail",
				"entitySchemaName": "UsrPaymentGate",
				"filter": {
					"detailColumn": "UsrAgreement",
					"masterColumn": "Id"
				}
			},
			"UsrSchema34411c12Detailf8aa278c": {
				"schemaName": "UsrSchema34411c12Detail",
				"entitySchemaName": "UsrEMIRecords",
				"filter": {
					"detailColumn": "UsrAgreement",
					"masterColumn": "Id"
				}
			},
			"ActivityDetailV27817103d": {
				"schemaName": "ActivityDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "UsrAgreement",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrProductType": {
				"2b689e95-d172-4ae3-a629-172f76ad5d36": {
					"uId": "2b689e95-d172-4ae3-a629-172f76ad5d36",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrProductCategory",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 1,
					"attribute": "UsrProductCategory"
				}
			},
			"UsrProductClass": {
				"d051c578-6da2-4d85-85ef-189e74908148": {
					"uId": "d051c578-6da2-4d85-85ef-189e74908148",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrProductType",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 1,
					"attribute": "UsrProductType"
				}
			},
			"UsrProducts": {
				"7d6c0005-aa7f-46eb-9b0b-ea1b958e80af": {
					"uId": "7d6c0005-aa7f-46eb-9b0b-ea1b958e80af",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrProductClass",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 1,
					"attribute": "UsrProductClass"
				}
			},
			"UsrSchema34411c12Detail2e251b06": {
				"cb7ac233-e4f0-4f67-942f-6c41be99bcc8": {
					"uId": "cb7ac233-e4f0-4f67-942f-6c41be99bcc8",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApprovedTenureInMonths"
							},
							"rightExpression": {
								"type": 0,
								"value": 2,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"UsrSchemab20e12c5Detail43a30c27": {
				"4cf6240e-4a5f-42b3-a89c-987fd381581f": {
					"uId": "4cf6240e-4a5f-42b3-a89c-987fd381581f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 5,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApprovedTenureInMonths"
							},
							"rightExpression": {
								"type": 0,
								"value": 2,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"Tab4886e313TabLabelGroup714ea320": {
				"d9b4efa0-2ce5-47ef-8012-8b29829bfd8b": {
					"uId": "d9b4efa0-2ce5-47ef-8012-8b29829bfd8b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 5,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApprovedTenureInMonths"
							},
							"rightExpression": {
								"type": 0,
								"value": 2,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"UsrSchema34411c12Detaildcc7ebb1": {
				"b5407a21-12dd-43db-b85c-60a5c55592bd": {
					"uId": "b5407a21-12dd-43db-b85c-60a5c55592bd",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApprovedTenureInMonths"
							},
							"rightExpression": {
								"type": 0,
								"value": 2,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"UsrApprovedTenureInMonths": {
				"54865458-860e-4d32-89f3-f2a88a2c7bc3": {
					"uId": "54865458-860e-4d32-89f3-f2a88a2c7bc3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApprovedTenureInMonths"
							},
							"rightExpression": {
								"type": 0,
								"value": 0,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"UsrApprovedTenureInDays": {
				"9d6c83ac-0d60-422d-b79e-b852f354c8f2": {
					"uId": "9d6c83ac-0d60-422d-b79e-b852f354c8f2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApprovedTenureInDays"
							},
							"rightExpression": {
								"type": 0,
								"value": 0,
								"dataValueType": 4
							}
						}
					]
				}
			},
			"Tab4886e313TabLabelGroup3dbbb1b9": {
				"7dab465f-5c33-4895-9d50-6c743e2e862f": {
					"uId": "7dab465f-5c33-4895-9d50-6c743e2e862f",
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
								"attribute": "UsrIsLatePaymentFeeApplied"
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
				"name": "UsrName42ff4ac9-9cfa-47a9-81ff-eb3ecd0a3f6e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrName"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSOwnerc57727a9-4c10-4130-b558-521d43c4a4a0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrTSOwner"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTSApplicationca488883-bc7a-4127-891e-0864838cfb3d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrTSApplication",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSApplicationca488883bc7a4127891e0864838cfb3dLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrTSContact890a44fc-5a1f-44dc-9819-3efec9ad8863",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrTSContact",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSContact890a44fc5a1f44dc98193efec9ad8863LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP724b7224-4e2e-4c34-8606-c0a8a090e13c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrLender",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP14545e52-0227-4ac9-aa24-85f0b8be22d2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrLoanType",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "INTEGER93174b1e-ac47-4116-976c-bb05a74d50a4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrApprovedTenureInMonths",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "INTEGERfe6eb3d1-10aa-4580-b330-f200e4f6ed70",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrApprovedTenureInDays",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4886e313TabLabelTabCaption"
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
				"name": "Tab4886e313TabLabelGroupb31f84ec",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4886e313TabLabelGroupb31f84ecGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4886e313TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGridLayout04cf0d69",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4886e313TabLabelGroupb31f84ec",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPba35a744-1491-4f0b-9373-c7e1dfee56c4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4886e313TabLabelGridLayout04cf0d69"
					},
					"bindTo": "UsrProducts",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4886e313TabLabelGridLayout04cf0d69",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPb77b216a-57d0-4de9-be20-eee9ec8ea289",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4886e313TabLabelGridLayout04cf0d69"
					},
					"bindTo": "UsrProductCategory",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4886e313TabLabelGridLayout04cf0d69",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP2362a0ba-426e-4172-916e-1e9360deffbf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4886e313TabLabelGridLayout04cf0d69"
					},
					"bindTo": "UsrProductType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4886e313TabLabelGridLayout04cf0d69",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP15958c83-420a-44ab-9284-0e965ac2e3e9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4886e313TabLabelGridLayout04cf0d69"
					},
					"bindTo": "UsrProductClass",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4886e313TabLabelGridLayout04cf0d69",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGroup948b033e",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4886e313TabLabelGroup948b033eGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4886e313TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGridLayout5f79ac32",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4886e313TabLabelGroup948b033e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSSignedOnf572f7a4-7474-48b4-81d7-daa9fda23f78",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4886e313TabLabelGridLayout5f79ac32"
					},
					"bindTo": "UsrTSSignedOn",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSSignedOnf572f7a4747448b481d7daa9fda23f78LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout5f79ac32",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSExpiresOnbd429651-5343-4140-a1f1-b72122c464ba",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4886e313TabLabelGridLayout5f79ac32"
					},
					"bindTo": "UsrTSExpiresOn",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSExpiresOnbd42965153434140a1f1b72122c464baLabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout5f79ac32",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTSValidFrom2ec431c7-3fc2-449c-856f-738cbef913e1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4886e313TabLabelGridLayout5f79ac32"
					},
					"bindTo": "UsrTSValidFrom",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSValidFrom2ec431c73fc2449c856f738cbef913e1LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout5f79ac32",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPfbbf5d98-9a25-443a-bf74-9128a6a01445",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4886e313TabLabelGridLayout5f79ac32"
					},
					"bindTo": "UsrAgreementStatus",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUPfbbf5d989a25443abf749128a6a01445LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4886e313TabLabelGridLayout5f79ac32",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrSchemafaccda06Detail04c79b1d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4886e313TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrSchema216e773eDetail6208a686",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4886e313TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrSchemab20e12c5Detail43a30c27",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4886e313TabLabel",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGroup714ea320",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4886e313TabLabelGroup714ea320GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4886e313TabLabel",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGridLayout0a529109",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4886e313TabLabelGroup714ea320",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATf87333ca-9bb5-4ad3-ad86-f9a5e48381ca",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4886e313TabLabelGridLayout0a529109"
					},
					"bindTo": "UsrTotalDebtAmount",
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout0a529109",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATcdeec701-316c-49ac-a9dc-34b179b8eef9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4886e313TabLabelGridLayout0a529109"
					},
					"bindTo": "UsrBalancedDebtAmount",
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout0a529109",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATETIME5dd038a8-f563-4609-9070-23b92a01189e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4886e313TabLabelGridLayout0a529109"
					},
					"bindTo": "UsrTotalDebtCalculationDate",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.DATETIME5dd038a8f5634609907023b92a01189eLabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout0a529109",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOAT832f81c3-90ac-41aa-a996-f89b9a1fd19c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4886e313TabLabelGridLayout0a529109"
					},
					"bindTo": "UsrOverpaymentDebtAmount",
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout0a529109",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGroup3dbbb1b9",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4886e313TabLabelGroup3dbbb1b9GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4886e313TabLabel",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGridLayout6c3988a6",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4886e313TabLabelGroup3dbbb1b9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN47879b33-8b43-4142-9628-831f15cbd84c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4886e313TabLabelGridLayout6c3988a6"
					},
					"bindTo": "UsrIsLatePaymentFeeApplied",
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout6c3988a6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATfbfce95e-1985-40f7-8370-d8a88c774880",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4886e313TabLabelGridLayout6c3988a6"
					},
					"bindTo": "UsrOldDebtAmount",
					"enabled": true
				},
				"parentName": "Tab4886e313TabLabelGridLayout6c3988a6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGroup82b2b030",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4886e313TabLabelGroup82b2b030GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4886e313TabLabel",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Tab4886e313TabLabelGridLayout2a99454a",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4886e313TabLabelGroup82b2b030",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab54c945a3TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab54c945a3TabLabelTabCaption"
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
				"name": "UsrSchema0ea7e772Detail2a72ba92",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab54c945a3TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSchema34411c12Detailf8aa278c",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab54c945a3TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab62db95d7TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab62db95d7TabLabelTabCaption"
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
				"name": "UsrSchemacea130deDetail888c9091",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab62db95d7TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe8aaf4e6TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe8aaf4e6TabLabelTabCaption"
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
				"name": "ActivityDetailV27817103d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabe8aaf4e6TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 4
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 4
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
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 5
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
