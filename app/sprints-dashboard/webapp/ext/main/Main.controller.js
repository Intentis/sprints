sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('sprints.portal.sprintsdashboard.ext.main.Main', {

            onCAPDocumentationPress: function() {
                window.open("https://cap.cloud.sap/docs/", "_blank");
            },

            onUI5DocumentationPress: function() {
                window.open("https://ui5.sap.com/", "_blank");
            },

            onRaiseIssuePress: function() {
                window.open("https://github.com/Intentis/sprints/issues", "_blank");
            },

            onProfilePress: function (oEvent) {
                var oButton = oEvent.getSource();
                if (!this._pProfilePopover) {
                    this._pProfilePopover = this.loadFragment({
                        name: "sprints.portal.sprintsdashboard.fragments.ProfilePopover"
                    });
                }
                this._pProfilePopover.then(function(oPopover) {
                    oPopover.openBy(oButton);
                });
            },

            onNotificationPress: function (oEvent) {
                var oButton = oEvent.getSource();
                if (!this._pNotifPopover) {
                    this._pNotifPopover = this.loadFragment({
                        name: "sprints.portal.sprintsdashboard.fragments.NotificationPopover"
                    });
                }
                this._pNotifPopover.then(function(oPopover) {
                    oPopover.openBy(oButton);
                });
            }

            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf sprints.portal.sprintsdashboard.ext.main.Main
             */
            //  onInit: function () {
            //      PageController.prototype.onInit.apply(this, arguments); // needs to be called to properly initialize the page controller
            //  },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf sprints.portal.sprintsdashboard.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf sprints.portal.sprintsdashboard.ext.main.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf sprints.portal.sprintsdashboard.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);
