Template.addTime.events({
	'submit form': function(ev)
	{
		ev.preventDefault();

		var user = Meteor.user();
		var confId = Session.get('conferenceId');
		var conference = Conferences.findOne({_id: confId});
		if(user && conference)
		{
			var newTime = {
				conferenceId: confId,
				date: $(ev.target).find('[id=date]').val(),
				time: $(ev.target).find('[id=time]').val().substring(0,1),
				quantity: $(ev.target).find('[id=quantity]').val(),
				conferenceId: Session.get('conferenceId')
			}
			Meteor.call('addTimeToConference', newTime, function(error, id)
			{
				if(error)
				{
					console.log(error);
				}
				else
				{

				}
			});
		}
	}
});

Template.addTime.rendered = function()
{
    $( ".datepicker" ).datepicker();
}
