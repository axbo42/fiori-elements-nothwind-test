sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        navToExternal: function(oEvent) {
            let oEmployee = this.oView.getBindingContext().getObject();
            MessageToast.show("Der Vorname des Mitarbeiters ist " + oEmployee.FirstName + ".");
        }
    };
});