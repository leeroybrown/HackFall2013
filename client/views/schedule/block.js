Template.block.helpers({
	block: function(id)
	{
		console.log(id);
		return Sessions.findOne({_id: id});
	},
	getSpeaker: function(speaker)
	{
		return Speakers.findOne({_id: speaker}).name;
	}
});

Template.block.events({
	'click .assign': function(ev)
	{
		ev.preventDefault();
		console.log(ev.target.id);
		Meteor.Router.to('assignTime', Session.get('conferenceId'), ev.target.id);
	},
	'click .unassign': function(ev)
	{
		ev.preventDefault();
		console.log($(ev.target.id).parent().attr('id'));
		console.log($(ev.target.id).parent());
		/*Meteor.call('removeTime', ev.target.id, $(ev.target.id).parent().attr('id'), function(error, id)
		{
			if(error)
			{
				console.log(error);
			}
			else
			{
				console.log('removed');
			}
		});*/
	
	}
});