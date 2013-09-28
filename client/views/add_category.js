Template.addCategory.helpers({

});

Template.addCategory.events({
	'submit form': function(ev)
	{
		ev.preventDefault();

		var user = Meteor.user();
		if(user)
		{
			var newCategory = {
				name: $(ev.target).find('[id=name]').val(),
				conferenceId: Session.get('conferenceId')
			}

			Meteor.call('addCategoryToConference', newCategory, function(error, id)
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