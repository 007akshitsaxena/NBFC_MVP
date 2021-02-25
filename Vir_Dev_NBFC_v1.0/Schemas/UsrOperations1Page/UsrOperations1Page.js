define("UsrOperations1Page", [], function() {
	return {
		entitySchemaName: "UsrOperations",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrOperationsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrOperations"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName16f9ac95-741c-4d8d-82f2-289c74a41f9d",
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
				"name": "LOOKUPbc5080e6-5814-4e41-8a7c-fdd232d63743",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrContact9d6f8c67-208b-42f3-883d-eee04046e0e6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrContact",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP9059f126-75f9-4988-b7d4-c4d7c799e06e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrCategory",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrOwnerc3f7036e-8d63-4bd7-aebd-67c513475b28",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrOwner",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrSubject18d3eff3-10c3-407f-a526-0160e0057ce7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrSubject",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP39bcc5b6-9180-49e1-bdf5-a2e240006b1a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "BOOLEAN7c49416e-2301-4910-915e-e06f2b3bf792",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrIsrequiredforDebtCalculation",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Tab7f241fc0TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7f241fc0TabLabelTabCaption"
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
				"name": "Tab7f241fc0TabLabelGroup8eaf1096",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7f241fc0TabLabelGroup8eaf1096GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab7f241fc0TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab7f241fc0TabLabelGridLayoutab976b20",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab7f241fc0TabLabelGroup8eaf1096",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrAgreement9d242977-af0a-4677-b432-a9798f9b49da",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab7f241fc0TabLabelGridLayoutab976b20"
					},
					"bindTo": "UsrAgreement",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab7f241fc0TabLabelGridLayoutab976b20",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCashflow7b3b9539-55fa-4b98-8e3d-16c1f134dd27",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab7f241fc0TabLabelGridLayoutab976b20"
					},
					"bindTo": "UsrCashflow",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab7f241fc0TabLabelGridLayoutab976b20",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab7f241fc0TabLabelGroup45641765",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7f241fc0TabLabelGroup45641765GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab7f241fc0TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab7f241fc0TabLabelGridLayout5ee59ec8",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab7f241fc0TabLabelGroup45641765",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrDate95275cbc-a9d8-4067-9fcf-544c9f1d6d2c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab7f241fc0TabLabelGridLayout5ee59ec8"
					},
					"bindTo": "UsrDate",
					"enabled": true
				},
				"parentName": "Tab7f241fc0TabLabelGridLayout5ee59ec8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrAmount7086d2d7-c1b3-4ca2-b5e6-26f09ac2fd14",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab7f241fc0TabLabelGridLayout5ee59ec8"
					},
					"bindTo": "UsrAmount",
					"enabled": true
				},
				"parentName": "Tab7f241fc0TabLabelGridLayout5ee59ec8",
				"propertyName": "items",
				"index": 1
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
