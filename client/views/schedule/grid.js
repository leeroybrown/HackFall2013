
Template.grid.helpers({
	blocks: function(time)
	{
		var blocks = Times.find(
			{
				$and: [
					{
						conferenceId: Session.get('conferenceId')
					},
					{
						time: time.toString()
					}
				]
			});
		return blocks;

	}
});