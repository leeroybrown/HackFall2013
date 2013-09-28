Template.viewConference.events({
	'click #myTab a': function(ev)
	{
		ev.preventDefault();
		$(ev.target).tab('show');
	}
})

Template.viewConference.rendered = function()
{
	$('#myTab a[href="#home"]').tab('show')
}