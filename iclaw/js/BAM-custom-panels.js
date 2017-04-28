//BAM-custom-panels.js
//holds all of the panels for the application. These are HIGHLY variable for each individual app




//the attribute box holds attributes for the map selection 
var attributeBoxHtml = '<div id="attributeBox" class="nonMapOverlay"> <div id="attributeBoxClose" class="popupCloseCarte">x</div> <div id="attributeBoxContents"></div> </div>';
$( "#panelHolder" ).append(attributeBoxHtml);
//this box holds the "popup" of the layer
overlayPanelsList.attributeBox = 'overlay';


var aboutBoxHtml = '<div id="infoBox" class="nonMapOverlay"> <b> Application Information </b>';
    aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxClose" class="popupCloseCarte">x</div> <hr />';
    aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxContent">';
	aboutBoxHtml = aboutBoxHtml + 'The <i><b>Iowa Canon of Latin Authors and Works</i></b> is a catalogue and information repository for all extant Latin authors';
    aboutBoxHtml = aboutBoxHtml + 'and their writings, including fragmentary texts, as well as translations into Latin,';
    aboutBoxHtml = aboutBoxHtml + 'from the earliest period through the seventh century CE.'; 
    aboutBoxHtml = aboutBoxHtml + ' It includes geographic and chronological information, when available, and cross references to the PHI author list, the PL, the CPL, and DigiLibLT, an Italian database of non-Christian Latin authors from Late Antiquity.';
    aboutBoxHtml = aboutBoxHtml + ' The Iowa Canon was assembled in the spring of 2015 by members of Paul Dilley\'s graduate seminar on distant reading Latin Literature,';
    aboutBoxHtml = aboutBoxHtml + 'and will eventually serve as an important component of the <a href="http://www.lib.uiowa.edu/bam/" target="_blank">Big Ancient Mediterranean</a> project.';
    aboutBoxHtml = aboutBoxHtml + ' The interface is built and maintained by Ryan Horne, lead developer at BAM.';
    aboutBoxHtml = aboutBoxHtml + '<span class="bottomContainer">';
    aboutBoxHtml = aboutBoxHtml + '<a href="https://bigancientmediterranean.wordpress.com/" target="_blank"><img src="../images/BAM-icon.png" alt="BAM Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Built with the <b><a href=" https://bigancientmediterranean.wordpress.com/" target="_blank">Big Ancient Mediterranean </a></b>framework.';
    aboutBoxHtml = aboutBoxHtml + '<br /> <a href="https://github.com/Big-Ancient-Mediterranean" target="_blank"><img src="../images/GitHub-Mark-32px.png" alt="GitHub Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Get map data and code from our <b><a href="https://github.com/AWMC" target="_blank">GitHub </a></b>page.';
    aboutBoxHtml = aboutBoxHtml + '<br /></span></div> </div>';

//add to the panel holder
$( "#panelHolder" ).append(aboutBoxHtml);

//add to the list so we can perform functions on it
overlayPanelsList.infoBox = 'overlay';
