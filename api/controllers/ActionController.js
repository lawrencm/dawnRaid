/**
 * ActionController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {



	/**
	 * Overrides for the settings in `config/controllers.js`
	 * (specific to ActionController)
	 */
	_config: {},
	actionsAsTree: function(req, res) {



		var getChildren = function(pId) {

			var _allActions;
			Action.find({
				parentAction: pId
			}).done(function(err, actions) {

				//console.log(pId,actions);



				for (var i = 0; i < actions.length; i++) {


					//console.log(pId,actions)

					var children = getChildren(actions[i].id),
						total = 0,
						c = 0;

					for (c = 0; c < children.length; c++) {
						// console.log(children[c]);
						total += children[c].getTotal();
					}

					if (c > 0) {
						actions[i].total = total/c;
					} else {
						actions[i].total = actions[i].getTotal();
					}


					// };



					actions[i].children = children;


					//actions[i].completed = actions[i].getChildren();
				}

				_allActions = actions;
			});
			return _allActions;

		};


		var results = getChildren(0);
		console.log(results);
		res.json(results);
	}


};