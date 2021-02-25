define("UsrApprovalLogs1Page", [], function() {
	return {
		entitySchemaName: "UsrApprovalLogs",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrApprovalLogsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrApprovalLogs"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrApprovalType21c014d5-21f0-47f3-bc37-d95892745906",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrApprovalType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrContactfa10e10c-7363-4204-a101-c2dfbeb27246",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrContact",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrApplicationGate27ab27b9-b875-45fb-a2f6-d6242d234136",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrApplicationGate",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrApplicationId36e0179d-6650-41c6-8e9c-acf654e19936",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrApplicationId",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab0f1db753TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab0f1db753TabLabelTabCaption"
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
				"name": "Tab0f1db753TabLabelGroupd06a50b0",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab0f1db753TabLabelGroupd06a50b0GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab0f1db753TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab0f1db753TabLabelGridLayout3fc15219",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab0f1db753TabLabelGroupd06a50b0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrAgeVerificationStatus0ba26af9-009b-44b7-bd93-9f8ce892644b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab0f1db753TabLabelGridLayout3fc15219"
					},
					"bindTo": "UsrAgeVerificationStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab0f1db753TabLabelGridLayout3fc15219",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrMonthlyIncomeVerificationStatus266de57d-43f9-40ef-8a54-e5e47d1e9261",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab0f1db753TabLabelGridLayout3fc15219"
					},
					"bindTo": "UsrMonthlyIncomeVerificationStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab0f1db753TabLabelGridLayout3fc15219",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrRequestedLoanAmountVerificationStatus0cf55701-ffcb-4061-a48e-53f8dfc477d7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab0f1db753TabLabelGridLayout3fc15219"
					},
					"bindTo": "UsrRequestedLoanAmountVerificationStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab0f1db753TabLabelGridLayout3fc15219",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrRequestedLoanTermVerificationStatusd10abcde-792b-4ac2-b131-20959ed082a6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab0f1db753TabLabelGridLayout3fc15219"
					},
					"bindTo": "UsrRequestedLoanTermVerificationStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab0f1db753TabLabelGridLayout3fc15219",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab0f1db753TabLabelGroupe12ecc3f",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab0f1db753TabLabelGroupe12ecc3fGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab0f1db753TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab0f1db753TabLabelGridLayout5133f88f",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab0f1db753TabLabelGroupe12ecc3f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrMobileFoundInOtherActiveApplications56de2f77-0967-4f8f-a1f6-90077d22d218",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab0f1db753TabLabelGridLayout5133f88f"
					},
					"bindTo": "UsrMobileFoundInOtherActiveApplications",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout5133f88f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrEmailFoundInOtherActiveApplicationse6bc7aee-6e98-49a8-a17e-bb512ae7cf4e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab0f1db753TabLabelGridLayout5133f88f"
					},
					"bindTo": "UsrEmailFoundInOtherActiveApplications",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout5133f88f",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrRejectedAppLast30Days4bb0b10e-c918-474a-8232-f8f9341892e4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab0f1db753TabLabelGridLayout5133f88f"
					},
					"bindTo": "UsrRejectedAppLast30Days",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout5133f88f",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrLastLoanClosureDPDca7b141b-53db-440b-823a-553892bd65e8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab0f1db753TabLabelGridLayout5133f88f"
					},
					"bindTo": "UsrLastLoanClosureDPD",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout5133f88f",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEAN50eb1b33-e482-4654-ba5b-22d5ebec44ef",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab0f1db753TabLabelGridLayout5133f88f"
					},
					"bindTo": "UsrBankAccountFoundOnAnyOtherActiveLoan",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout5133f88f",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tab0f1db753TabLabelGroup45a38223",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab0f1db753TabLabelGroup45a38223GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab0f1db753TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab0f1db753TabLabelGridLayout7ce30028",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab0f1db753TabLabelGroup45a38223",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN2c797d93-e1c4-4e91-aa22-e181040e06f5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab0f1db753TabLabelGridLayout7ce30028"
					},
					"bindTo": "UsrNewCustomerLoanEligibility",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout7ce30028",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEANac963e56-e6de-4cdb-aef8-956f12b9d12b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab0f1db753TabLabelGridLayout7ce30028"
					},
					"bindTo": "UsrRepeatCustomerLoanEligibility",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout7ce30028",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BOOLEAN9753ff11-93b7-4ac3-b214-82ea9d3de05d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab0f1db753TabLabelGridLayout7ce30028"
					},
					"bindTo": "UsrSalariedCustomerLoanEligibility",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout7ce30028",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BOOLEAN6fb90fe9-a791-44b5-8c84-aedb35a1d1f5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab0f1db753TabLabelGridLayout7ce30028"
					},
					"bindTo": "UsrSelfEmployedCustomerLoanEligibility",
					"enabled": true
				},
				"parentName": "Tab0f1db753TabLabelGridLayout7ce30028",
				"propertyName": "items",
				"index": 3
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
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
