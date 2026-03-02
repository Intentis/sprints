sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sprints/portal/sprintsdashboard/test/integration/FirstJourney',
		'sprints/portal/sprintsdashboard/test/integration/pages/SprintsMain'
    ],
    function(JourneyRunner, opaJourney, SprintsMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sprints/portal/sprintsdashboard') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSprintsMain: SprintsMain
                }
            },
            opaJourney.run
        );
    }
);