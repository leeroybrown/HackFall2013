Meteor.Router.add({
	'/':
	{
		as: 'home',
		to: function()
		{
			return 'home';
		}
	},
	'/add':
	{

	},
	'/:_id':
	{

	},
	'/:_id/session/':
	{

	},
	'/:_id/session/:sId':
	{

	},
	'/:_id/speaker/new':
	{

	},
	':_id/speaker/:id':
	{

	},
	':_id/cat/':
	{

	}
});