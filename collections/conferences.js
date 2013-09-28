
Conferences = new Meteor.Collection('conferences');

Meteor.methods({
	addConference: function(attributes)
	{
		conferenceWithSameName = Conferences.findOne({name: attributes.name});

		if(conferenceWithSameName)
		{
			console.log("Conference already exists");
		}
		else
		{
			var newConference = _.extend(_.pick(
				attributes, 
				'name',
				'owner'),
			{
			});

			var conferenceId = Conferences.insert(newConference);
			return conferenceId;
		}
	}
});