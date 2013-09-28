Template.addSession.helpers({

});

Template.addSession.events({
	'submit form': function(ev)
	{
		ev.preventDefault();

		var user = Meteor.user();
		if(user)
		{
			var newSession = {
				title: $(ev.target).find('[id=title]').val(),
				details: $(ev.target).find('[id=details]').val(),
				category: $(ev.target).find('[id=category]').val(),
				category: $(ev.target).find('[id=speaker]').val()
				
			}

			Meteor.call('addSessionToConference', newSession, function(error, id)
			{
				if(error)
				{
					console.log(error);
				}
				else
				{
					Meteor.Router.to('viewSession', id);
				}
			});
		}
		else
		{
			console.log('NOT LOGGED IN');
		}
	}
});