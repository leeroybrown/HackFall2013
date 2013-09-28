Speakers = new Meteor.Collection('speakers');

Meteor.methods({
	addSpeakerToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{

			var newSpeaker = _.extend(_.pick(
				attributes, 
				'conferenceId',
				'name',
				'location',
				'blog',
				'website',
				'twitter'),
				{
				});

			var conferenceId = Speakers.insert(newSpeaker);
			return conferenceId;

		}
		else
		{
			return 'asdf';
		}
	}
});