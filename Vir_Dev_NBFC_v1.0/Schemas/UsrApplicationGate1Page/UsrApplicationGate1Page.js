define("UsrApplicationGate1Page", [], function() {
	return {
		entitySchemaName: "UsrApplicationGate",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrApplicationGateFile",
				"filter": {
					"detailColumn": "UsrApplicationGate",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName2a89291d-2fe7-48a7-8d9b-9bbe3feb9bbb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSGivenName45a96126-17a8-4855-b46d-84ad5271f787",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrGivenName",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSGivenName45a9612617a84855b46d84ad5271f787LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTSMiddleName567f3055-0687-42cc-98ee-43313fadd868",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrMiddleName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrTSSurnamedfbf927d-5b16-478d-87ca-15f5f4df9d44",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrSurname",
					"enabled": true,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSSurnamedfbf927d5b16478d87ca15f5f4df9d44LabelCaption"
						}
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrTSMobileNumber26367225-2138-450c-8565-b16385d8d44b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrMobileNumber",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrTSEmail55952dc3-7c93-44e3-a2df-83b837f3ceca",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrEmail",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrTSBirthDate2c9a35c8-dd41-4d5c-952f-f3723bb3c209",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrBirthDate",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrTSBirthDate2c9a35c8dd414d5c952ff3723bb3c209LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrTSGender791e03ef-c512-4678-bcd3-c6a0487cfe8c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrGender",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrMaritalStatus8fe3f6f9-f66c-4fcf-ad55-1470e71f3140",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrMaritalStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrTSMonthlyIncome8bc9ea9b-2c48-49ca-83bd-56cf90d2911a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrMonthlyIncome",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPf5fc8ebd-038e-466e-b256-e6a04de5ee40",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrEmploymentType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTSApplicationd10b41d2-46b8-44e3-b328-5c186465082e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrApplication",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrTSAgreements7fcf10fb-570e-4403-83af-4a2a482ae3f2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrAgreement",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP879576ec-1d69-4f4f-ac49-3e8acf7ccc17",
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
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPc4d8219f-4a8c-4429-8e54-e5f4eef461db",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrCustomerType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP1786b5ac-f771-4aa1-9c9f-3086f17f3718",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrProduct",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "BOOLEAN470628b0-7cff-40e9-95a8-b5b2aa857c5b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrIsLostCustomer",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "BOOLEANe01d9618-4d89-4c39-bdae-6e28823c3af0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrIsCurrent",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrIsApplicationSubmittedffba086d-3946-49a9-b8f0-549e9df416d1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrIsApplicationSubmitted",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrTSIndustryType51fa47bb-5808-4f30-9488-e7ff6bffb7a3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrIndustryType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelTabCaption"
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
				"name": "Tab4a7f34e2TabLabelGroupf13adfd5",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelGroupf13adfd5GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGridLayout8aefbe7e",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabelGroupf13adfd5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSFatherName8b96ffd6-57e3-42ed-ae73-bd4dddc7498a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e"
					},
					"bindTo": "UsrFatherName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSSpouseNamefbdd0cfc-f1df-4c74-b877-c1c94471fd6c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e"
					},
					"bindTo": "UsrSpouseName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTSNumberOfDependents2c2c5f6e-7c0d-40a7-9598-4951d2663114",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e"
					},
					"bindTo": "UsrNumberOfDependents",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGd412715c-36ed-489e-8def-334049719aaf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e"
					},
					"bindTo": "UsrCoApplicantName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrTSAppContactMobilePhonef133a885-5d44-42bf-9ea9-fe434de06f84",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e"
					},
					"bindTo": "UsrCoApplicantMobilePhone",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrCoApplicant810e75a8-0fad-4024-afea-ed52b8012b6d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e"
					},
					"bindTo": "UsrCoApplicantRelationship",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout8aefbe7e",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGroup9f7902b4",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelGroup9f7902b4GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGridLayout4cb8ed15",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabelGroup9f7902b4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSAdharID29c9834d-cbb6-4760-abca-ec776331961c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15"
					},
					"bindTo": "UsrAadhaarNumber",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSAadharCardName5d4f5664-a619-474b-9e88-e71588540e6f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15"
					},
					"bindTo": "UsrAadhaarFirstName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTSAadharCardKey7f0ede76-c764-4361-ae44-6ba02fb10dd1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15"
					},
					"bindTo": "UsrAadhaarMiddleName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrTSAgreementCustomerIP8da06884-e140-497a-b7e9-1e22d1a93d27",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15"
					},
					"bindTo": "UsrAadhaarLastName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrTSAadharLoanApprove904797d5-b0ae-4431-94a5-a56edfd2bf9d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15"
					},
					"bindTo": "UsrAadhaarDOB",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrTSAppContactName6c17eb71-7e47-4169-801f-45bd9137881a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15"
					},
					"bindTo": "UsrAadhaarAddress",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrISAdharVerification9e730b0b-e659-404e-8920-576a4c8041f8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15"
					},
					"bindTo": "UsrIsAadhaarVerified",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout4cb8ed15",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGroup6cbd5d0a",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelGroup6cbd5d0aGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabelGroup6cbd5d0a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSPANNumber2c1e5a9e-a8d4-455b-8068-dee0bdcf02c7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada"
					},
					"bindTo": "UsrPANNumber",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSPanFirstNamea569de7f-f7ef-459e-a2ac-823618b2f0f9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada"
					},
					"bindTo": "UsrPANFirstName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTSPanMiddleNameb7dff0be-e3e7-4ae7-bf74-27eacf37aff1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada"
					},
					"bindTo": "UsrPANMiddleName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrTSPanLastNamef6434d37-4c6e-4cdd-aff1-4b0926dec422",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada"
					},
					"bindTo": "UsrPANLastName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrTSApplicationCustomerIP8dd7cc89-0a26-410e-aaeb-afe266e1b523",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada"
					},
					"bindTo": "UsrPANFatherName",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrFSAppSourcef3e81145-444c-47ce-ae06-ec18bd252a0a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada"
					},
					"bindTo": "UsrPANBirthDate",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc2dc2ada",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGroup503ddd36",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelGroup503ddd36GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGridLayout79346736",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabelGroup503ddd36",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSAction1a80d1e4-ca17-4403-a203-e099080069a5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout79346736"
					},
					"bindTo": "UsrAction",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout79346736",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGroupc6c3ad25",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelGroupc6c3ad25GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabel",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGridLayoutea084049",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabelGroupc6c3ad25",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrProcessingResult97f697c6-5e81-4011-81bb-9e9cea6f9a3a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutea084049"
					},
					"bindTo": "UsrProcessingResult",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutea084049",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrActiveApplication6b844649-2fb6-4dfe-b4a6-04a84b8fb5e0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutea084049"
					},
					"bindTo": "UsrActiveApplication"
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutea084049",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPe0295b66-c57e-4136-add3-00cc53d85705",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutea084049"
					},
					"bindTo": "UsrActiveAgreement",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutea084049",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGroup898a2d80",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelGroup898a2d80GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabel",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGridLayoutc0a954ea",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabelGroup898a2d80",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSCURStreetaf28e822-af86-4b1a-8004-285a966f7ce8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea"
					},
					"bindTo": "UsrCURStreet",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSCURBuilding47d41c89-fc99-4bc2-aa4c-34303739b7d7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea"
					},
					"bindTo": "UsrCURBuilding",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTSCURLandmarka4fca5ed-3ded-4796-a270-b574e759ce3b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea"
					},
					"bindTo": "UsrCURLandmark",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrTSCURCityAreaCountyCodee357ec11-6832-4333-91bb-4492af716530",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea"
					},
					"bindTo": "UsrCURCity",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrTSCURProvinceMegapolisCode550d8f93-62f0-422b-922e-f7b16b1f81c6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea"
					},
					"bindTo": "UsrCURState",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrTSCURZIP74100225-7d33-4b8a-b21d-52a2342c6f9d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea"
					},
					"bindTo": "UsrCURZIP",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrFSRegZip316e5041-c26a-41ec-abd1-78836900f33b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea"
					},
					"bindTo": "UsrRegZip",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutc0a954ea",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGroupb2f38e7b",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelGroupb2f38e7bGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabel",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGridLayoutffb2f981",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabelGroupb2f38e7b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSLoanAmountRequested1ea3de26-d5f4-4a11-82db-19c31411a2ca",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutffb2f981"
					},
					"bindTo": "UsrLoanAmountRequested",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutffb2f981",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTSLoanTermRequesteda76aba22-0b09-435f-be4b-ec5d5a1e4d94",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutffb2f981"
					},
					"bindTo": "UsrLoanTermRequested",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutffb2f981",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrReasonForLoan57755a4e-5652-473f-ac00-b449c4453cdb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutffb2f981"
					},
					"bindTo": "UsrReasonForLoan",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutffb2f981",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP1851a684-ea05-485e-b0d3-b778ed1699dc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutffb2f981"
					},
					"bindTo": "UsrBankName",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutffb2f981",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrTSBankIFSCCode906f6c79-70da-4f4e-9107-b44418a5fe7b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutffb2f981"
					},
					"bindTo": "UsrBankIFSCCode",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutffb2f981",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrFSBankAccountNumber1583cbbb-6d83-498d-851f-96f75ead88e8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab4a7f34e2TabLabelGridLayoutffb2f981"
					},
					"bindTo": "UsrBankAccountNumber",
					"enabled": true
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayoutffb2f981",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGroupc9bd3f65",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4a7f34e2TabLabelGroupc9bd3f65GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabel",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Tab4a7f34e2TabLabelGridLayout6a1261f0",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4a7f34e2TabLabelGroupc9bd3f65",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrStateAsPerKYCbcf71d8c-d8fe-4f15-a6ed-bdc5c7217339",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4a7f34e2TabLabelGridLayout6a1261f0"
					},
					"bindTo": "UsrStateAsPerKYC",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab4a7f34e2TabLabelGridLayout6a1261f0",
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
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
