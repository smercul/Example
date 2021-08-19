sap.ui.define([
		"sap/ui/core/UIComponent"
	],
	function(UIComponent) {

		return UIComponent.extend("smercul.sd.sl.Component", {
			metadata: {
				manifest: "json"
			},
			init: function() {
				// call the init function of the parent
				debugger;
				UIComponent.prototype.init.apply(this, arguments);
				var oRouter = this.getRouter();
				oRouter.initialize();

			},
			// createContent: function() {
			// 	var oAppView = new sap.ui.view({
			// 		id: "idApp",
			// 		type: "XML",
			// 		viewName: "smercul.view.App"
			// 	});
			// 	var oAppContainer = oAppView.byId("idAppCon");
			// 	var oViewFirst = new sap.ui.view({
			// 		id: "idViewFirst",
			// 		type: "XML",
			// 		viewName: "smercul.sd.sl.view.FirstView"
			// 	});
			// 	oAppContainer.addPage(oViewFirst);
			// 	return oAppView;
			// },

			destroy: function() {

			}

		});
	});