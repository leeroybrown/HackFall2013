Template.addConference.helpers({

});

Template.addConference.events({
	'submit form': function(ev)
	{
		ev.preventDefault();

		var user = Meteor.user();
		if(user)
		{
			var newConference = {
				owner: user._id,
				name: $(ev.target).find('[id=name]').val(),
				
			}

			Meteor.call('addConference', newConference, function(error, id)
			{
				if(error)
				{
					console.log(error);
				}
				else
				{
					Meteor.Router.to('viewConference', id);
				}
			});
		}
		else
		{
			console.log('NOT LOGGED IN');
		}
	}
});