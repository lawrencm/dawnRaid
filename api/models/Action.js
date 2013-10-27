/**
 * Action
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		title: 'string',
		description: 'string',
		status: {
			type: "boolean",
			defaultsTo: false
		},
		parentAction:{
			type:'integer',
			defaultsTo:0
		},
		isLeaf: {
			type:'boolean',
			defaultsTo:true
		},
		getTotal:function(){
			return (this.status)?100:0;
		}
		// getChildren:function(){
		// 	var _actions;
		// 	Action.find(
		// 		{parentAction:this.id}
		// 		).done(function(err, actions){


		// 			for (var i = 0; i < actions.length; i++) {
						
		// 				console.log(actions[i]);
		// 				//actions[i]["children"] = getChildren(actions[i].id);
		// 				//
		// 				var children = actions[i].getChildren(),
		// 					total=0;

						

		// 				//console.log(children.length);

		// 				for (var i=0; i <= children.length; i++) {
		// 					console.log(i);
		// 				// 	total += (children[i]["total"] || 0);
		// 				};


		// 				actions[i].total = total;
		// 				actions[i].children = children;


		// 				//actions[i].completed = actions[i].getChildren();
		// 			};





		// 			_actions = actions;



		// 			// for (var i = 0; i < actions.length; i++) {
		// 			// 	//console.log(actions[i]);
		// 			// 	actions[i]["children"] = getChildren(actions[i].id);

		// 			// };
		// 			//a = actions;
		// 		});

		// 		return _actions;
		// }		
	}


};