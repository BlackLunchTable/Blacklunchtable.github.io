//BAM-custom-panels.js
//holds all of the panels for the application. These are HIGHLY variable for each individual app
//the attribute box holds attributes for the map selection 
var attributeBoxHtml = '<div id="attributeBox" class="nonMapOverlay"> <div id="attributeBoxClose" class="popupCloseCarte">x</div> <div id="attributeBoxContents"></div> </div>';
$("#panelHolder").append(attributeBoxHtml);
//this box holds the "popup" of the layer
overlayPanelsList.attributeBox = 'overlay';


var aboutBoxHtml = '<div id="infoBox" class="nonMapOverlay"> <div id="infoBoxTop"><b> Application Information </b>';
aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxContent" class="allow-scroll ">';
aboutBoxHtml = aboutBoxHtml + '<i>The Black Lunch Table</i> (BLT) is an oral-history archiving project, which was first staged in 2005 and is an ongoing collaboration with UNC Chapel Hill Assistant Professor and artist';
aboutBoxHtml = aboutBoxHtml + ' <a href="http://www.jinavalentine.com/home.html" target="_blank">Jina Valentine</a> and New York public artist <a href="http://heather-hart.com/" target="_blank">Heather Hart</a>. The BLT’s primary aim is the production of discursive sites, wherein cultural producers engage in dialogue on a variety of critical issues.';
aboutBoxHtml = aboutBoxHtml + ' BLT mobilizes a democratic rewriting of contemporary cultural history by animating discourse around and among the people living it.';
aboutBoxHtml = aboutBoxHtml + ' <br /><br />The code for this project and the BAM software framework is created, built, and maintained by <a href="https://rmhorne.org/" target="_blank">Ryan Horne</a>.';
aboutBoxHtml = aboutBoxHtml + '<span class="bottomContainer">';
aboutBoxHtml = aboutBoxHtml + '<a href="https://bigancientmediterranean.wordpress.com/" target="_blank"><img src="../images/BAM-icon.png" alt="BAM Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Built with the <b><a href=" https://bigancientmediterranean.wordpress.com/" target="_blank">Big Ancient Mediterranean </a></b>framework.';
aboutBoxHtml = aboutBoxHtml + '<br /> <a href="https://github.com/Big-Ancient-Mediterranean" target="_blank"><img src="../images/GitHub-Mark-32px.png" alt="GitHub Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Get map data and code from our <b><a href="';
if (bamConfigJson.projectGitHubLocation) {
    aboutBoxHtml = aboutBoxHtml + bamConfigJson.projectGitHubLocation;
} else {
    aboutBoxHtml = aboutBoxHtml + 'https://github.com/Big-Ancient-Mediterranean"';
}
aboutBoxHtml = aboutBoxHtml + '" target="_blank"> GitHub </a></b>page.';
aboutBoxHtml = aboutBoxHtml + '<br /></span></div> </div>';

//add to the panel holder
$("#panelHolder").append(aboutBoxHtml);

//add to the list so we can perform functions on it
overlayPanelsList.infoBox = 'overlay';

//the database box holds a list of all the people in the application

var databaseBoxHtml = '<div id="databaseBox" class="nonMapOverlay"> <div id="databaseBoxTop"> <b> People Data </b>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxContents" class="allow-scroll">';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxHolder" class="display darkText"><table id="databaseFullList" class="display darkText cell-border" width="100%"></table></div>';
databaseBoxHtml = databaseBoxHtml + '</div> </div>';

$("#panelHolder").append(databaseBoxHtml);
//this box holds the "popup" of the layer

overlayPanelsList.databaseBox = 'overlay';


//the database box holds a list of all the people in the application

var connectionsBoxHtml = '<div id="connectionsBox" class="nonMapOverlay"> <div id="connectionsBoxTop"> <b> Connections Data </b>';
connectionsBoxHtml = connectionsBoxHtml + '<div id="connectionsBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
connectionsBoxHtml = connectionsBoxHtml + '<div id="connectionsBoxContents" class="allow-scroll">';
connectionsBoxHtml = connectionsBoxHtml + '<div id="connectionsHolder" class="display darkText"><table id="connectionsFullList" class="display darkText cell-border" width="100%"></table></div>';
connectionsBoxHtml = connectionsBoxHtml + '</div> </div>';
$("#panelHolder").append(connectionsBoxHtml);
//this box holds the "popup" of the layer

overlayPanelsList.connectionsBox = 'overlay';