define("EmailPageV2", [], function() {
	return {
		entitySchemaName: "Activity",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Titled16eb14c-8599-4653-8ac5-7ed50992fd5a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Title"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActivityCategory6a1c5735-4ca6-427c-807a-790e89efaadb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ActivityCategory"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "SendDate",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "SendDate",
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "SenderEnum",
				"values": {
					"layout": {
						"colSpan": 16,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "ToggleCopyRecipientVisible",
				"values": {
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 22,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "ToggleBlindCopyRecipientVisible",
				"values": {
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 23,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "ToContainer",
				"values": {
					"layout": {
						"colSpan": 22,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "ToContainer",
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "EmailPageHeaderContainer",
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
				"operation": "merge",
				"name": "InformationOnStepButtonContainer",
				"values": {
					"layout": {
						"colSpan": 1,
						"rowSpan": 1,
						"column": 23,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "InformationOnStepButtonContainer",
				"parentName": "AdditionalHeaderBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "TitleFieldContainer",
				"values": {
					"layout": {
						"colSpan": 23,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "LOOKUPb825a6eb-7588-4bc4-89db-422c8fea419b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrAgreement",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUP495cd6e4-e23a-4e69-92dd-7c5d4707c054",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrApplication",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "EmailMessageTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "EmailGeneralInfoTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "StartDate",
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
				"operation": "move",
				"name": "StartDate",
				"parentName": "EmailPageGeneralInfoBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Status",
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
				"name": "Status",
				"parentName": "EmailPageGeneralInfoBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "DueDate",
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
				"operation": "move",
				"name": "DueDate",
				"parentName": "EmailPageGeneralInfoBlock",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "Priority",
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
				"operation": "move",
				"name": "Priority",
				"parentName": "EmailPageGeneralInfoBlock",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ShowInScheduler",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "ShowInScheduler",
				"parentName": "EmailPageGeneralInfoBlock",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "Author",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "FullProjectName",
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
				"name": "EmailAttachingTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
