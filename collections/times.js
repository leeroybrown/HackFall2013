Times = new Meteor.Collection('times');

Meteor.methods({
	addTimeToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{
			for(var i = 0; i < attributes.quantity; i++)
			{
				var newTime = _.extend(_.pick(
				attributes, 
				'conference',
				'date',
				'time'),
				{
					session: null
				});

				var conferenceId = Times.insert(newTime);
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