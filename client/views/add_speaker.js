Template.addSpeaker.helpers({
	speakers: function()
	{
		return Speakers.find({conferenceId: Session.get('conferenceId')});
	}
})

Template.addSpeaker.events({
	'submit form': function(ev)
	{
		ev.preventDefault();

		var user = Meteor.user();
		var confId = Session.get('conferenceId');
		console.log(confId);
		var conference = Conferences.findOne({_id: confId});
		if(user && conference)
		{
			var newSpeaker = {
				conferenceId: confId,
				name: $(ev.target).find('[id=name]').val(),
				location: $(ev.target).find('[id=location]').val(),
				blog: $(ev.target).find('[id=blog]').val(),
				website: $(ev.target).find('[id=website]').val(),
				twitter: $(ev.target).find('[id=twitter]').val(),
				details: $(ev.target).find('[id=details]').val(),
				conferenceId: Session.get('conferenceId')
			}

			Meteor.call('addSpeakerToConference', newSpeaker, function(error, id)
			{
				if(error)
				{
					console.log(error);
				}
				else
				{
					console.log(id);
					//Meteor.Router.to('addSpeaker', id);
				}
			});
		}
	}
});

Template.addSpeaker.rendered = function()
{

}