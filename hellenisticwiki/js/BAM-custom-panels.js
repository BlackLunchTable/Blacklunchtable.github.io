//BAM-custom-panels.js
//holds all of the panels for the application. These are HIGHLY variable for each individual app




//the attribute box holds attributes for the map selection 
var attributeBoxHtml = '<div id="attributeBox" class="nonMapOverlay"> <div id="attributeBoxClose" class="popupCloseCarte">x</div> <div id="attributeBoxContents"></div> </div>';
$( "#panelHolder" ).append(attributeBoxHtml);
//this box holds the "popup" of the layer
overlayPanelsList.attributeBox = 'overlay';


var aboutBoxHtml = '<div id="infoBox" class="nonMapOverlay"> <div id="infoBoxTop"><b> Application Information </b>';
    aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
    aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxContent" class="allow-scroll">';
	aboutBoxHtml = aboutBoxHtml + 'The <i><b>"Hellenistic" Royal Relationships In Wikipedia</i></b> project is a representation of royal familial relationships of the Hellenistic (as well as limited Archaic, Classical, and Roman) era in the Mediterranean World as offered by Wikipedia.';
    aboutBoxHtml = aboutBoxHtml + ' The data was gathered by hand from Wikipedia entries, then imported into Gephi to construct networks and run statistics. The network was then placed into the BAM platform to create visualizations and user interactions.';
    aboutBoxHtml = aboutBoxHtml + ' This is not ment to be a definitive prosopography - there are controversies and issues with the data, as well as possible transcription errors. Rather this is intended to show a "state of the field" in';
    aboutBoxHtml = aboutBoxHtml + ' Wikipedia\'s data, and to serve as a starting point for creating more detailed prosopographies, visualizations, and software.';
   	aboutBoxHtml = aboutBoxHtml + ' <br /><br />This project and the BAM software framework is created, built, and maintained by <a href="https://rmhorne.org/" target="_blank">Ryan Horne</a>.';
    aboutBoxHtml = aboutBoxHtml + '<span class="bottomContainer">';
    aboutBoxHtml = aboutBoxHtml + '<a href="https://bigancientmediterranean.wordpress.com/" target="_blank"><img src="../images/BAM-icon.png" alt="BAM Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Built with the <b><a href=" https://bigancientmediterranean.wordpress.com/" target="_blank">Big Ancient Mediterranean </a></b>framework.';
    aboutBoxHtml = aboutBoxHtml + '<br /> <a href="https://github.com/Big-Ancient-Mediterranean" target="_blank"><img src="../images/GitHub-Mark-32px.png" alt="GitHub Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Get map data and code from our <b><a href="https://github.com/AWMC" target="_blank">GitHub </a></b>page.';
    aboutBoxHtml = aboutBoxHtml + '<br /></span></div> </div>';

//add to the panel holder
$( "#panelHolder" ).append(aboutBoxHtml);

//add to the list so we can perform functions on it
overlayPanelsList.infoBox = 'overlay';


//the database box holds a list of all the people in the application

var databaseBoxHtml = '<div id="databaseBox" class="nonMapOverlay"> <div id="databaseBoxTop"> <b> People Data </b>';
    databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
    databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxContents" class="allow-scroll">';
databaseBoxHtml =  databaseBoxHtml + '<div id="databaseBoxHolder" class="display darkText"><table id="databaseFullList" class="display darkText cell-border" width="100%"></table></div>';
databaseBoxHtml =  databaseBoxHtml + '</div> </div>';


$( "#panelHolder" ).append(databaseBoxHtml);
//this box holds the "popup" of the layer

overlayPanelsList.databaseBox = 'overlay';



//the database box holds a list of all the people in the application

var connectionsBoxHtml = '<div id="connectionsBox" class="nonMapOverlay"> <div id="connectionsBoxTop"> <b> Connections Data </b>';
    connectionsBoxHtml = connectionsBoxHtml + '<div id="connectionsBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
    connectionsBoxHtml = connectionsBoxHtml + '<div id="connectionsBoxContents" class="allow-scroll">';
connectionsBoxHtml =  connectionsBoxHtml + '<div id="connectionsHolder" class="display darkText"><table id="connectionsFullList" class="display darkText cell-border" width="100%"></table></div>';
connectionsBoxHtml =  connectionsBoxHtml + '</div> </div>';
$( "#panelHolder" ).append(connectionsBoxHtml);
//this box holds the "popup" of the layer

overlayPanelsList.connectionsBox = 'overlay';



