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
				'conferenceId',
				'date',
				'time'),
				{
					session: null
				});

				Times.insert(newTime);
			}
			return conference._id;
		}
		else
		{
			return 'asdf';
		}
	},
	assignTime: function(timeId, sessionId)
	{
		var time = Times.update(Times.findOne(
			{
				_id: timeId
			}), 
			{session: sessionId}
		);

		Sessions.update(Sessions.findOne({_id: sessionId}), {assigned: true});
		return;

	}
});