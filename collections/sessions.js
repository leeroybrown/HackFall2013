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
					assigned: false
				});

			Sessions.insert(newSession);
			return conference._id;

		}
		else
		{
			return 'asdf';
		}
	}
});