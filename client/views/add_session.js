Template.addSession.helpers({
	categoryFill : function()
	{
		var options ="";
		var cats = Categories.find({conferenceId: Session.get('conferenceId')});
		cats.forEach(function(cat)
		{
			options = options + '<option id="' + cat._id + '">' + cat.name + '</option>'
		});
		return options;
	},
	speakerFill: function()
	{
		var options ="";
		var speakers = Speakers.find({conferenceId: Session.get('conferenceId')});
		speakers.forEach(function(speak)
		{
			options = options + '<option id="' + speak._id + '">' + speak.name + '</option>'
		});
		return options;
	},
	sessions: function()
	{
		return Sessions.find({conferenceId: Session.get('conferenceId')});
	},
	getCat: function(category)
	{
		return Categories.findOne({_id: category}).name;
	},
	getSpeaker: function(speaker)
	{
		return Speakers.findOne({_id: speaker}).name;
	}
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
				category: $(ev.target).find('[id=category]').find(":selected").attr('id'),
				speaker: $(ev.target).find('[id=speaker]').find(":selected").attr('id'),
				conferenceId: Session.get('conferenceId')
			}

			Meteor.call('addSessionToConference', newSession, function(error, id)
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