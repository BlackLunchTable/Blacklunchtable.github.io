//this is a config file (json formatted) that sets all the variables in BAM. Each module needs its own config file, but they can share commonalities if desired 
 
 var bamConfigJson = 
        {
	"bamPageTitle": "BLT",
	"bamFavIocn": "images/ALLRISElogo.png",
	"bamLeftPanelTitleHtml": "<br /><b><i>Black Lunch Table</i> Conversation and Topic Network Map</b>",
	"bamNavBarImageHtml": "<a href=\"http://blacklunchtable.blogspot.com/\" target=\"_blank\"> <img src=\"images/ALLRISElogo.png\" title=\"BAM Icon\" alt=\"BLT Icon\"></a>",
	"bamApplicationLicenseHtml": "<a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"https://i.creativecommons.org/l/by/4.0/88x31.png\"/></a>",
	"bamdataSizeAttribute": "count",
	"bamSizeDivider": "3",
	"bamMaxNodeSpace": "3",
	"bamNodeMinSize": "3",
	"bamNodeMaxSize": "25",
	"bamMapSetViewX": "41.09591",
	"bamMapSetViewY": "10.7666",
	"bamMapSetViewZoom": "5",
	"bamMainDataLocation": "data/bltgraph.json",
	"bamD3AttributeImage": "",
	"bamSourceDataType": "gephi",
	"bamToolTipTitle": "label",
	"projectGitHubLocation": "https://github.com/Blacklunchtable",
	"bamInfoTitleAttribute": "label",
	"bamD3ToolTipAtributes":{
		"Degree": "Number of Connections:"
	},
	"bamLinkElement": "links",
	"bamStrokeWidth": "2",
	"bamLatAttribute": "repLat",
	"bamLonAttribute": "repLon",
	"bamToolTipAttributes":{
		"count": "Incoming Connections:",
		"repLat": "Representative Latitude"
	},
	"bamNavButtons":{
		"appinfo": "<button id=\"infoButton\" class=\"accordion\"><img src=\"images/info.svg\" class=\"accordianImage\" alt=\"info\">&nbsp;&nbsp;&nbsp;&nbsp;Application Information</button>",
		"databaseButton": "<button id=\"mapDatabaseButton\" class=\"accordion\"><img src=\"images/list.svg\" class=\"accordianImage\" alt=\"list\">&nbsp;&nbsp;&nbsp;&nbsp;Full Database</button>"
	},
	"bamD3Attributes":{
		"Modularity Class":"Group Number",
		"In-Degree": "Incoming Connections",
		"Degree": "Total Connections"
	},
	"bamD3NodeTableColumns": [
		 {
            "data": "label",
            "title": "Name",
        },
        {
            "data": "degree",
            "title": "Degree",
        },
        {
            "data": "index",
            "visible": false
        }
    ],
    "bamD3ConnectionTableColumns": [{
            "data": "sourceTitle",
            "title": "Source",
            "width": "33%"
        },
        {
            "data": "sourceIndex",
            "visible": false
        },
        {
            "data": "targetTitle",
            "title": "Target",
            "width": "33%"
        },
        {
            "data": "targetIndex",
            "visible": false
        }
    ],
    "bamD3AttributeImageDefault": "images/ALLRISElogo.png",
    "bamMainD3Div": "d3MainChart",
    "bamSvgZoomMinFactor": ".2",
    "bamSvgZoomMaxFactor": "10",
    "bamSimulationIterations": "2",
    "bamD3NodeColorAttribute": "color",
    "bamD3ToolTipOpacity": ".9"
};