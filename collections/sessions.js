Sessions = new Meteor.Collection('sessions');

Meteor.methods({
	addSessionToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{
			for(var i = 0; i < attributes.quantity; i++)
			{
				var newSession = _.extend(_.pick(
				attributes, 
				'conference',
				'title',
				'details',
				'category',
				'speaker'),
				{
				});

				var conferenceId = Sessions.insert(newSession);
				return conferenceId;
			}

			
			return conference._id;
		}
		else
		{
			return 'asdf';
		}
	}
});