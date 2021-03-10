define("ContactAddressPageV2", [], function() {
	return {
		entitySchemaName: "ContactAddress",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Country",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					},
					"enabled": true,
					"contentType": 5
				}
			},
			{
				"operation": "insert",
				"name": "UsrAddressLine25d3af1e3-4b19-4c4e-8887-500ffc82c322",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrCurrentLandmark",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "Region",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					},
					"enabled": true,
					"contentType": 5
				}
			},
			{
				"operation": "insert",
				"name": "UsrLandmark4e9bf82d-a710-43da-a9b2-f1caa9c3271f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrCurrentBuilding",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "City",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					},
					"enabled": true,
					"contentType": 5
				}
			},
			{
				"operation": "insert",
				"name": "UsrAddressLine137bf34aa-8154-4c15-8e0c-559a372ec1b7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrCurrentStreet",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "INTEGERf69e3262-1bcb-42ab-ac6d-85f04235794b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrCurrentPIN",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "remove",
				"name": "AddressType"
			},
			{
				"operation": "remove",
				"name": "Zip"
			},
			{
				"operation": "remove",
				"name": "Primary"
			},
			{
				"operation": "remove",
				"name": "Address"
			}
		]/**SCHEMA_DIFF*/
	};
});
