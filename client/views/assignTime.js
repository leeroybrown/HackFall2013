Template.assignTime.helpers({
	sessionFill : function()
	{
		var options ="";
		var sessions = Sessions.find(
			{
				$and: [
					{ 
						conferenceId: Session.get('conferenceId')
					},
					{
						assigned: false
					}
				]
			});
		sessions.forEach(function(session)
		{
			options = options + '<option id="' + session._id + '">' + session.title + '</option>'
		});
		return options;
	},
});

Template.assignTime.events({
	'submit form': function(ev)
	{
		ev.preventDefault();
		var user = Meteor.user();
		if(user)
		{
			var sessionId = $(ev.target).find('[id=session]').find(":selected").attr('id');
			var timeId = Session.get('timeId');
			Meteor.call('assignTime', timeId, sessionId, function(error, id)
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