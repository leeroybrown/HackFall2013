Meteor.Router.add({
	'/':
	{
		as: 'home',
		to: function()
		{
			return 'home';
		}
	},
	'/new':
	{
		as: 'addConference',
		to: function()
		{
			return 'addConference';
		}
	},
	'/:_id':
	{
		as: 'viewConference',
		to: function()
		{
			return 'viewConference';
		}
	},
	'/:_id/session/':
	{
		as: 'addSession',
		to: function()
		{
			Session.set('conferenceId', id);
			return 'addSession';
		}
	},
	'/:_id/session/:sId':
	{
		as: 'viewSession',
		to: function(id, sId)
		{
			Session.set('conferenceId', id);
			Session.set('sessionId', sId);
			return 'viewSession';
		}

	},
	'/:_id/speaker/new':
	{
		as: 'addSpeaker',
		to: function(id)
		{
			Session.set('conferenceId', id);
			return 'addSpeaker';
		}

	},
	':_id/speaker/:sId':
	{
		as: 'viewSpeaker',
		to: function(id, sId)
		{
			Session.set('conferenceId', id);
			Session.set('speakerId', sId);
			return 'viewSpeaker';
		}

	},
	':_id/cat/':
	{
		as: 'category',
		to: function(id)
		{
			Session.set('conferenceId', id);
			return 'category';
		}
	}
});