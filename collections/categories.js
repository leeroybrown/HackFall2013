Categories = new Meteor.Collection('categories');

Meteor.methods({
	addCategoryToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});
		console.log(conference);
		if(conference)
		{
			var newCategory = _.extend(_.pick(
				attributes, 
				'conferenceId',
				'name'),
				{
				});

				var conferenceId = Categories.insert(newCategory);

			return conference._id;
		}
		else
		{
			return 'asdf';
		}
	}

});