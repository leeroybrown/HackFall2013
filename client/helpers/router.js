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
	'/:_id/cat/':
	{

		as: 'category',
		to: function(id)
		{
			console.log('asdf');
			Session.set('conferenceId', id);
			return 'addCategory';
		}
	},
	'/:_id/session/':
	{
		as: 'addSession',
		to: function(id)
		{
			console.log('asdf');
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
	'/:_id/time/':
	{
		as: 'addTime',
		to: function(id)
		{
			Session.set('conferenceId', id);
			return 'addTime';
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
	'/:_id/speaker':
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
	
});