define("ContactPageV2", [], function() {
	return {
		entitySchemaName: "Contact",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"UsrSchemae038929eDetail2e832a5d": {
				"schemaName": "UsrSchemae038929eDetail",
				"entitySchemaName": "UsrApplications",
				"filter": {
					"detailColumn": "UsrContact",
					"masterColumn": "Id"
				}
			},
			"UsrSchema2b9dec1aDetailbf81f13d": {
				"schemaName": "UsrSchema2b9dec1aDetail",
				"entitySchemaName": "UsrAgreements",
				"filter": {
					"detailColumn": "UsrContact",
					"masterColumn": "Id"
				}
			},
			"ActivityDetailV2cb5a0d16": {
				"schemaName": "ActivityDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "Contact",
					"masterColumn": "Id"
				}
			},
			"UsrSchemae65d7c4aDetail929862d1": {
				"schemaName": "UsrSchemae65d7c4aDetail",
				"entitySchemaName": "UsrPaymentGate",
				"filter": {
					"detailColumn": "UsrContact",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "PhotoTimeZoneContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountName",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountMobilePhone",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "insert",
				"name": "Email7d1595f8-c83f-4b4d-86c3-337db24423a3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Email"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEAN2379f483-4b36-4bda-a64d-2a0d48a326e2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrMasterFieldsUpdated",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Gender",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "Gender",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "SalutationType",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Language",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrMaritalStatus2f598e84-3a86-4053-b76e-1dc170dafa07",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "UsrMaritalStatus"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPb56faddc-d36a-4eda-ab25-09945290326a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "UsrCommunicationType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GivenName35d58b12-b905-44f1-9af1-54c465ef0ab1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "GivenName"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "MiddleNamee7dff364-95d2-4cbb-8d4d-bff8ea070b04",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "MiddleName"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Surnameb5dedef2-858d-4fcb-aa1e-2276eec0a6e0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "Surname"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Phonee12232fd-7269-43cc-a448-95f10a7b0048",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "Phone"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTabGroup4fc1b7ca",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.GeneralInfoTabGroup4fc1b7caGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTabGridLayoutb2d1e971",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "GeneralInfoTabGroup4fc1b7ca",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrFatherNameef331940-c587-45e1-95f2-8ff6c0b56ded",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "GeneralInfoTabGridLayoutb2d1e971"
					},
					"bindTo": "UsrFatherName"
				},
				"parentName": "GeneralInfoTabGridLayoutb2d1e971",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSpouseName00144644-ab73-4d39-8920-4e976c972a23",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "GeneralInfoTabGridLayoutb2d1e971"
					},
					"bindTo": "UsrSpouseName"
				},
				"parentName": "GeneralInfoTabGridLayoutb2d1e971",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrDependentOfCounts5c9654de-84d0-449b-ab81-937da0bba5c8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "GeneralInfoTabGridLayoutb2d1e971"
					},
					"bindTo": "UsrDependentOfCounts",
					"enabled": true
				},
				"parentName": "GeneralInfoTabGridLayoutb2d1e971",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGdcf30faf-4b53-42da-998e-e490b13fbcfb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "GeneralInfoTabGridLayoutb2d1e971"
					},
					"bindTo": "UsrCoApplicantName",
					"enabled": true
				},
				"parentName": "GeneralInfoTabGridLayoutb2d1e971",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING49059c5a-27b8-4b2c-9deb-3e075a02fbe1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "GeneralInfoTabGridLayoutb2d1e971"
					},
					"bindTo": "UsrCoApplicantMobileNumber",
					"enabled": true
				},
				"parentName": "GeneralInfoTabGridLayoutb2d1e971",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP0526070a-bb2a-4ac5-9cbb-ff657f49c73d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "GeneralInfoTabGridLayoutb2d1e971"
					},
					"bindTo": "UsrCoApplicantRelationship",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "GeneralInfoTabGridLayoutb2d1e971",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab5e5708acTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab5e5708acTabLabelTabCaption"
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
				"name": "ActivityDetailV2cb5a0d16",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab5e5708acTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabd61e0f92TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabd61e0f92TabLabelTabCaption"
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
				"name": "UsrSchemae038929eDetail2e832a5d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabd61e0f92TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabd61e0f92TabLabelGroup4c7d43fa",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabd61e0f92TabLabelGroup4c7d43faGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabd61e0f92TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabd61e0f92TabLabelGridLayoutfef2f901",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabd61e0f92TabLabelGroup4c7d43fa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERaf171602-1524-48d4-8d7f-049aaaa62cd0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabd61e0f92TabLabelGridLayoutfef2f901"
					},
					"bindTo": "UsrTotalNumberApplications",
					"enabled": true
				},
				"parentName": "Tabd61e0f92TabLabelGridLayoutfef2f901",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERdf32feae-bccb-4f9d-a557-7e61f61159f0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabd61e0f92TabLabelGridLayoutfef2f901"
					},
					"bindTo": "UsrTotalNumberOfActiveApplications",
					"enabled": true
				},
				"parentName": "Tabd61e0f92TabLabelGridLayoutfef2f901",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGER7e00d2f3-2056-4216-bd83-e97deebc46b4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabd61e0f92TabLabelGridLayoutfef2f901"
					},
					"bindTo": "UsrNumberOfRejectedApplications",
					"enabled": true
				},
				"parentName": "Tabd61e0f92TabLabelGridLayoutfef2f901",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOATa584a624-dce0-4124-a7d5-b684011fb62c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tabd61e0f92TabLabelGridLayoutfef2f901"
					},
					"bindTo": "UsrAmountOnActiveApplications",
					"enabled": true
				},
				"parentName": "Tabd61e0f92TabLabelGridLayoutfef2f901",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabcd5ae047TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabcd5ae047TabLabelTabCaption"
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
				"name": "UsrSchema2b9dec1aDetailbf81f13d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabcd5ae047TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTabGroup68d5ed60",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabGroup68d5ed60GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTabGridLayoutec2c4063",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "NotesAndFilesTabGroup68d5ed60",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGd808303d-0110-4d39-b2a4-89a94f31060d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "NotesAndFilesTabGridLayoutec2c4063"
					},
					"bindTo": "UsrAadhaarNumber",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayoutec2c4063",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrEsignFirstName67ad7abc-9222-4a8b-aa22-debfe76c41aa",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "NotesAndFilesTabGridLayoutec2c4063"
					},
					"bindTo": "UsrAadhaarFirstName",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayoutec2c4063",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrEsignMiddleName9588624c-3a49-4d69-9e4c-0a1ab9f29cf0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "NotesAndFilesTabGridLayoutec2c4063"
					},
					"bindTo": "UsrAadhaarMiddleName",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayoutec2c4063",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrEsignLastName71622445-9009-4bff-952b-869ed52b7e8e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "NotesAndFilesTabGridLayoutec2c4063"
					},
					"bindTo": "UsrAadhaarLastName",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayoutec2c4063",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DATETIMEaece3184-32bd-40b1-8870-481b24847063",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "NotesAndFilesTabGridLayoutec2c4063"
					},
					"bindTo": "UsrAadhaarDOB",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayoutec2c4063",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING1e33fe68-8e41-4e08-8e53-f3a0d99e46e7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "NotesAndFilesTabGridLayoutec2c4063"
					},
					"bindTo": "UsrAadhaarAddress",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayoutec2c4063",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "STRING5a954fb0-0b23-41b7-bcb6-5dc7df06dfd9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "NotesAndFilesTabGridLayoutec2c4063"
					},
					"bindTo": "UsrIsAadhaarVerified",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayoutec2c4063",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTabGroup5fb4aa9d",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabGroup5fb4aa9dGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTabGridLayout83cb3e4a",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "NotesAndFilesTabGroup5fb4aa9d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPANnumbercc0bee04-ed10-4347-9e00-79e8b7f25835",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "NotesAndFilesTabGridLayout83cb3e4a"
					},
					"bindTo": "UsrPANNumber",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayout83cb3e4a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPanFirstNamec756a48a-a943-4c21-8287-1cc69ed1e155",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "NotesAndFilesTabGridLayout83cb3e4a"
					},
					"bindTo": "UsrPANFirstName",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayout83cb3e4a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrPanMiddleName6d362885-8040-4248-b938-4bcc64389b6c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "NotesAndFilesTabGridLayout83cb3e4a"
					},
					"bindTo": "UsrPANMiddleName",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayout83cb3e4a",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrPanLastName99d68250-5d16-40cd-9b84-24f0950893e4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "NotesAndFilesTabGridLayout83cb3e4a"
					},
					"bindTo": "UsrPANLastName",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayout83cb3e4a",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING6cd7ac93-dedb-4305-a818-8673a377f4ad",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "NotesAndFilesTabGridLayout83cb3e4a"
					},
					"bindTo": "UsrPANFatherName",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayout83cb3e4a",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrPANCheckDateec41bf4f-be31-49f6-90c1-f8abb32dc197",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "NotesAndFilesTabGridLayout83cb3e4a"
					},
					"bindTo": "UsrPANBirthDate",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayout83cb3e4a",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrPANCheckStatus8eaf92de-877c-49d2-b3c2-f47015c2ca6f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "NotesAndFilesTabGridLayout83cb3e4a"
					},
					"bindTo": "UsrPANCheckStatus",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayout83cb3e4a",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tabfdedce4eTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfdedce4eTabLabelTabCaption"
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
				"name": "UsrSchemae65d7c4aDetail929862d1",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabfdedce4eTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "JobTitleProfile"
			},
			{
				"operation": "remove",
				"name": "AccountPhone"
			},
			{
				"operation": "remove",
				"name": "AccountEmail"
			},
			{
				"operation": "remove",
				"name": "Owner"
			},
			{
				"operation": "remove",
				"name": "Age"
			},
			{
				"operation": "remove",
				"name": "Relationships"
			},
			{
				"operation": "remove",
				"name": "JobTabContainer"
			},
			{
				"operation": "remove",
				"name": "JobInformationControlGroup"
			},
			{
				"operation": "remove",
				"name": "JobInformationBlock"
			},
			{
				"operation": "remove",
				"name": "Job"
			},
			{
				"operation": "remove",
				"name": "JobTitle"
			},
			{
				"operation": "remove",
				"name": "Department"
			},
			{
				"operation": "remove",
				"name": "DecisionRole"
			},
			{
				"operation": "remove",
				"name": "ContactCareer"
			},
			{
				"operation": "remove",
				"name": "InternalRate"
			},
			{
				"operation": "remove",
				"name": "ExternalRate"
			},
			{
				"operation": "remove",
				"name": "HistoryTab"
			},
			{
				"operation": "remove",
				"name": "Activities"
			},
			{
				"operation": "remove",
				"name": "Contract"
			},
			{
				"operation": "remove",
				"name": "Calls"
			},
			{
				"operation": "remove",
				"name": "EmailDetailV2"
			},
			{
				"operation": "remove",
				"name": "Leads"
			},
			{
				"operation": "remove",
				"name": "Invoice"
			},
			{
				"operation": "remove",
				"name": "Order"
			},
			{
				"operation": "remove",
				"name": "Documents"
			},
			{
				"operation": "remove",
				"name": "Project"
			},
			{
				"operation": "remove",
				"name": "Opportunities"
			},
			{
				"operation": "remove",
				"name": "EducationAndCertificate"
			},
			{
				"operation": "remove",
				"name": "Certificate"
			},
			{
				"operation": "remove",
				"name": "NotesControlGroup"
			},
			{
				"operation": "remove",
				"name": "Notes"
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
			},
			{
				"operation": "remove",
				"name": "TimelineTab"
			},
			{
				"operation": "remove",
				"name": "TimelineTabContainer"
			},
			{
				"operation": "remove",
				"name": "Timeline"
			}
		]/**SCHEMA_DIFF*/
	};
});
