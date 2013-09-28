Categories = new Meteor.Collection('categories');

Meteor.methods({
	addCategoryToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{
			for(var i = 0; i < attributes.quantity; i++)
			{
				var newCategory = _.extend(_.pick(
				attributes, 
				'conference',
				'name'),
				{
				});

				var conferenceId = Categories.insert(newCategory);
				return conferenceId;
			}

			
			return conference._id;
		}
		else
		{
			return 'asdf';
		}
	}

});