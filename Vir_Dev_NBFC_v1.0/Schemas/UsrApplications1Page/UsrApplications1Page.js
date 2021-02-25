define("UsrApplications1Page", [], function() {
	return {
		entitySchemaName: "UsrApplications",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrApplicationsFile",
				"filter": {
					"detailColumn": "UsrApplications",
					"masterColumn": "Id"
				}
			},
			"UsrSchema648da2a0Detail1269e93d": {
				"schemaName": "UsrSchema648da2a0Detail",
				"entitySchemaName": "UsrApproval",
				"filter": {
					"detailColumn": "UsrApplication",
					"masterColumn": "Id"
				}
			},
			"ActivityDetailV2211c6db2": {
				"schemaName": "ActivityDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "UsrApplication",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrApplicationRejectionReason": {
				"0af20b8c-5ed5-415a-9205-b0df7c1547e2": {
					"uId": "0af20b8c-5ed5-415a-9205-b0df7c1547e2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApplicationStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a2bfda3e-759b-43bd-b230-6e939614ea59",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrApplicationStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "c2f16c41-3d61-4093-9ccb-1de2bb9e296d",
								"dataValueType": 10
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
				"name": "UsrNameb1a94b01-ac99-4e9d-a036-974ba6032786",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSContactb0307d9a-1d69-460b-89d4-6463196409cb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrContact",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSContactb0307d9a1d69460b89d46463196409cbLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPcef10520-9d4d-4d77-a5ff-771b29d1e56c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrDistributionMethod",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrTSOwnerde463b65-06b3-4228-95d9-67200bba0867",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrOwner",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPf2b6fbe4-f2cc-4521-a6c9-c4f6c40911bb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrSalesChannel",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPf3e02770-12dd-40e5-8d1e-151f5e989c54",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrApplicationStatus",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUPf3e0277012dd40e58d1e151f5e989c54LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP57e1cadb-6ab9-4201-a8a5-b8358246efe1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrIndustryType",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUP57e1cadb6ab94201a8a5b8358246efe1LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUP5aa09b6c-4cdd-469f-ba3c-dea2321f2f4b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrApplicationRejectionReason",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LOOKUP1b274110-4674-4be3-9249-06699567137b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrReasonForLoan",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "LOOKUP54774525-3c69-42cc-9384-37b7f10018ec",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrCustomerType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrCrifBureauCategory7ff91674-1d80-4f7b-ae29-883dcdd82c69",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrCoApplicantName",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Tabe09a3e44TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe09a3e44TabLabelTabCaption"
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
				"name": "Tabe09a3e44TabLabelGroup93ce2212",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe09a3e44TabLabelGroup93ce2212GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe09a3e44TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe09a3e44TabLabelGridLayout48c301d6",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe09a3e44TabLabelGroup93ce2212",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPbe93cc94-598c-49ec-9cab-43b9b73c291c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe09a3e44TabLabelGridLayout48c301d6"
					},
					"bindTo": "UsrRequestedProduct",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe09a3e44TabLabelGridLayout48c301d6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPa7faa1e6-4ff3-48f5-bcdd-b1a5e538d514",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabe09a3e44TabLabelGridLayout48c301d6"
					},
					"bindTo": "UsrApprovedProduct",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe09a3e44TabLabelGridLayout48c301d6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGER11130c1b-d5bc-48e1-a252-7e5d62f1eb66",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe09a3e44TabLabelGridLayout48c301d6"
					},
					"bindTo": "UsrRequestedTerm",
					"enabled": true
				},
				"parentName": "Tabe09a3e44TabLabelGridLayout48c301d6",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGERc1763f45-c4c2-40cd-99d0-dd59be853ed8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabe09a3e44TabLabelGridLayout48c301d6"
					},
					"bindTo": "UsrApprovedTerm",
					"enabled": true
				},
				"parentName": "Tabe09a3e44TabLabelGridLayout48c301d6",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOAT6bd238ee-fc9f-46c8-85d3-fbfee736f76b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabe09a3e44TabLabelGridLayout48c301d6"
					},
					"bindTo": "UsrRequestedAmount",
					"enabled": true
				},
				"parentName": "Tabe09a3e44TabLabelGridLayout48c301d6",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FLOAT1f6699a1-8a96-44b3-aab4-e47f2b9e11f4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tabe09a3e44TabLabelGridLayout48c301d6"
					},
					"bindTo": "UsrApprovedAmount",
					"enabled": true
				},
				"parentName": "Tabe09a3e44TabLabelGridLayout48c301d6",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tabe09a3e44TabLabelGroup351e4486",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe09a3e44TabLabelGroup351e4486GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe09a3e44TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabe09a3e44TabLabelGridLayoutd69ea773",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe09a3e44TabLabelGroup351e4486",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPb0390c55-929f-450e-ad6a-1fa78560e029",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe09a3e44TabLabelGridLayoutd69ea773"
					},
					"bindTo": "UsrBankName",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabe09a3e44TabLabelGridLayoutd69ea773",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSBankIFSCCodebbc00149-c8e7-4d38-a4a1-52134d1a26be",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabe09a3e44TabLabelGridLayoutd69ea773"
					},
					"bindTo": "UsrBankIFSCCode",
					"enabled": true
				},
				"parentName": "Tabe09a3e44TabLabelGridLayoutd69ea773",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrFSAccountNumbereda0bbae-3bf0-40e9-bdf0-666b5cbe556e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe09a3e44TabLabelGridLayoutd69ea773"
					},
					"bindTo": "UsrAccountNumber",
					"enabled": true
				},
				"parentName": "Tabe09a3e44TabLabelGridLayoutd69ea773",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
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
				"name": "Tabde65dafcTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabde65dafcTabLabelTabCaption"
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
				"name": "UsrSchema648da2a0Detail1269e93d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabde65dafcTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "insert",
				"name": "Tab18d8e26dTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab18d8e26dTabLabelTabCaption"
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
				"name": "ActivityDetailV2211c6db2",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab18d8e26dTabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
