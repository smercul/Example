sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("smercul.sd.sl.controller.SecondView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf smercul.sd.sl.view.SecondView
		 */
		onInit: function() {
			debugger;
			this.getRouter = this.getOwnerComponent().getRouter();
			this.getRouter.getRoute("SecondScreen").attachPatternMatched(this._onObjectMatched, this);

			// // Store original busy indicator delay, so it can be restored later on
			// iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
			// this.setModel(oViewModel, "objectView");
			// this.getOwnerComponent().getModel().metadataLoaded().then(function () {
			// 		// Restore original busy indicator delay for the object view
			// 		oViewModel.setProperty("/delay", iOriginalBusyDelay);
			// 	}
			// );
		},
		_onObjectMatched: function(oEvent) {
			debugger;
			var sIndex = oEvent.getParameter("arguments").selectedItem;
			var oView = this.getView().getParent();
			var sPath = '/Items/' + sIndex;
			this.getView().bindElement(sPath);
			// this.getModel().metadataLoaded().then( function() {
			// 	var sObjectPath = this.getModel().createKey("Products", {
			// 		ProductID :  sObjectId
			// 	});
			// 	this._bindView("/" + sObjectPath);
			// }.bind(this));
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf smercul.sd.sl.view.SecondView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf smercul.sd.sl.view.SecondView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf smercul.sd.sl.view.SecondView
		 */
		//	onExit: function() {
		//
		//	}

	});

});