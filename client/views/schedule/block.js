Template.block.helpers({
	block: function()
	{
		return Conferences.findOne({_id: Session.get('conferenceId')})
	}
});