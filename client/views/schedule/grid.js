
Template.grid.helpers({
	blocks: function(time)
	{
		var blocks = Conferences.findOne({_id: Session.get('conferenceId')}).times;
		var arr = [];
		for(var i = 0; i < blocks.length; i++)
		{
			if(blocks[i].time == time)
			{
				arr.push(blocks[i]);
			}
		}
		a = "";
		for(var i = 0; i < arr.length; i++)
		{
			a = a + Template[ 'block' ](arr[i]._id, arr[i].session).toString();
			//return Template['block']();
		}
		return a;
	}
});

function addBlock()
{

}