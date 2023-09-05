sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fe/ca/customer/test/integration/FirstJourney',
		'sap/fe/ca/customer/test/integration/pages/PassengerList',
		'sap/fe/ca/customer/test/integration/pages/PassengerObjectPage',
		'sap/fe/ca/customer/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, PassengerList, PassengerObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fe/ca/customer') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePassengerList: PassengerList,
					onThePassengerObjectPage: PassengerObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);