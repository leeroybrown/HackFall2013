Sessions = new Meteor.Collection('sessions');

Meteor.methods({
	addSessionToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{

			var newSession = _.extend(_.pick(
				attributes, 
				'conferenceId',
				'title',
				'details',
				'category',
				'speaker'),
				{
				});

			var conferenceId = Sessions.insert(newSession);
			return conferenceId;

		}
		else
		{
			return 'asdf';
		}
	}
});