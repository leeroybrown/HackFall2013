Template.block.helpers({
	block: function()
	{
		//return Conferences.findOne({_id: Session.get('conferenceId')})
	}
});

Template.block.events({
	'click .assign': function(ev)
	{
		ev.preventDefault();
		console.log(ev.target.id);
		Meteor.Router.to('assignTime', Session.get('conferenceId'), ev.target.id);
	}
});