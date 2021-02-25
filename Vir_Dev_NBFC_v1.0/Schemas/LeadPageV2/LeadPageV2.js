define("LeadPageV2", [], function() {
	return {
		entitySchemaName: "Lead",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "LeadCreatedOn",
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
				"name": "LeadWebFormInProfile",
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
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "MobilePhone",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "MobilePhone",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Contact",
				"values": {
					"layout": {
						"colSpan": 13,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Email",
				"values": {
					"layout": {
						"colSpan": 13,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "CountryStr",
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
				"name": "RegionStr",
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
				"operation": "merge",
				"name": "CityStr",
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
				"name": "NeedInfoTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "LeadTypeStatus",
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
				"name": "LeadEngagementTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "LeadMedium",
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
				"name": "BpmRef",
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
				"name": "BpmRef",
				"parentName": "LeadPageSourceInfoBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "LeadSource",
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
				"name": "WebForm",
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
				"name": "WebForm",
				"parentName": "LeadPageSourceInfoBlock",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "RegisterMethod",
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
				"operation": "merge",
				"name": "DealSpecificsTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "Budget",
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
				"name": "NextActualizationDate",
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
				"operation": "merge",
				"name": "OpportunityOrOrder",
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
				"name": "OpportunityOrOrder",
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "MeetingDate",
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
				"operation": "merge",
				"name": "DecisionDate",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 12,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "SalesOwner",
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
				"name": "SalesOwner",
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "OpportunityDepartment",
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
				"name": "HistoryTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "NotesTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "remove",
				"name": "NewLeadType"
			},
			{
				"operation": "remove",
				"name": "LeadRegisterMethodInProfile"
			},
			{
				"operation": "remove",
				"name": "LeadBudget"
			},
			{
				"operation": "remove",
				"name": "LeadOwner"
			},
			{
				"operation": "remove",
				"name": "LeadPredictiveScoreContainer"
			},
			{
				"operation": "remove",
				"name": "LeadPredictiveScoreLabelContainer"
			},
			{
				"operation": "remove",
				"name": "LeadPredictiveScoreLabel"
			},
			{
				"operation": "remove",
				"name": "PredictiveScoreBar"
			},
			{
				"operation": "remove",
				"name": "NewLeadDisqualifyReason"
			},
			{
				"operation": "remove",
				"name": "SalesChannel"
			},
			{
				"operation": "remove",
				"name": "Partner"
			},
			{
				"operation": "remove",
				"name": "Job"
			},
			{
				"operation": "remove",
				"name": "Account"
			},
			{
				"operation": "remove",
				"name": "EmployeesNumber"
			},
			{
				"operation": "remove",
				"name": "Country"
			},
			{
				"operation": "remove",
				"name": "Website"
			},
			{
				"operation": "remove",
				"name": "SearchInSocialNetworksButton"
			},
			{
				"operation": "remove",
				"name": "SearchInGoogleButton"
			},
			{
				"operation": "remove",
				"name": "LeadsSimilarSearchResult"
			}
		]/**SCHEMA_DIFF*/
	};
});
