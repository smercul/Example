sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("smercul.sd.sl.controller.FirstView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf smercul.sd.sl.view.FirstView
		 */
	
		onInit: function() {
			this._oRouter = this.getOwnerComponent().getRouter();
		},

		onPress: function(oControlEvent) {
			debugger;
			this._oRouter.navTo("SecondScreen", {
				selectedItem: oControlEvent.getParameters().id.split("-")[oControlEvent.getParameters().id.split("-").length -1]
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf smercul.sd.sl.view.FirstView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf smercul.sd.sl.view.FirstView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf smercul.sd.sl.view.FirstView
		 */
		//	onExit: function() {
		//
		//	}

	});

});