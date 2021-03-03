define("UsrPaymentGate1Page", [], function() {
	return {
		entitySchemaName: "UsrPaymentGate",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrPaymentGateFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrPaymentGate"
				}
			},
			"UsrSchemab241103dDetail0f6feb14": {
				"schemaName": "UsrSchemab241103dDetail",
				"entitySchemaName": "UsrEMIRecords",
				"filter": {
					"detailColumn": "UsrPaymentGate",
					"masterColumn": "Id"
				}
			},
			"FileDetailV247dbb622": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrPaymentGateFile",
				"filter": {
					"detailColumn": "UsrPaymentGate",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrSchemab241103dDetail0f6feb14": {
				"80d8af6a-7d4b-4b60-b5c3-698e5c1ec499": {
					"uId": "80d8af6a-7d4b-4b60-b5c3-698e5c1ec499",
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
								"attribute": "UsrNumberOfMonthsCustomerWantsToPay"
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
			"UsrNumberOfMonthsCustomerWantsToPay": {
				"73cd2a17-fe9b-44fb-9f36-e135993006b9": {
					"uId": "73cd2a17-fe9b-44fb-9f36-e135993006b9",
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
								"attribute": "UsrNumberOfMonthsCustomerWantsToPay"
							},
							"rightExpression": {
								"type": 0,
								"value": 0,
								"dataValueType": 4
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
				"name": "FLOATf39d8c8a-ff5c-4048-80f6-130fa5a0510e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrAmountPaid",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.FLOATf39d8c8aff5c404880f6130fa5a0510eLabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP770d89f1-20c0-4c16-9957-b3813c6c143c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrAgreement",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrPaymentMadeOnfb6e75ff-7c5d-46b1-b93a-7e82377f4106",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrPaymentMadeOn"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGERecb5d1bd-f501-4d15-893b-34e206f564c9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrNumberOfMonthsCustomerWantsToPay",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP3f00a2df-d346-4b23-a366-bd0eeddf3c0c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPf40919ee-7062-4f03-b334-153316237c69",
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
				"name": "Taba3699712TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba3699712TabLabelTabCaption"
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
				"name": "UsrSchemab241103dDetail0f6feb14",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Taba3699712TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab0d8fa7edTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab0d8fa7edTabLabelTabCaption"
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
				"name": "FileDetailV247dbb622",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab0d8fa7edTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "ESNTab"
			},
			{
				"operation": "remove",
				"name": "ESNFeedContainer"
			},
			{
				"operation": "remove",
				"name": "ESNFeed"
			}
		]/**SCHEMA_DIFF*/
	};
});
