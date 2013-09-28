
Conferences = new Meteor.Collection('conferences');

Meteor.methods({
	addConference: function(attributes)
	{
		conferenceWithSameName = Conferences.findOne({name: attributes.name});

		if(conferenceWithSameName)
		{
			console.log("Conference already exists");
		}
		else
		{
			var newConference = _.extend(_.pick(
				attributes, 
				'name'),
			{
				categories: [],
				speakers: [],
				sessions: [],
				times: []
			});

			var conferenceId = Conferences.insert(newConference);
			return conferenceId;
		}
	},
	addSpeakerToConference: function(attributes)
	{

		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{
			var conf = Conferences.update(
				Conferences.findOne({_id:conference._id}),
				{
					$addToSet: 
					{
						speakers: 
						{
							_id: new Meteor.Collection.ObjectID()._str,
							name: attributes.name,
							location: attributes.location,
							blog: attributes.blog,
							website: attributes.website,
							twitter: attributes.twitter,
							details: attributes.details
						}
					}
				}
			);
			
			return conference._id;
		}
		else
		{
			return 'asdf';
		}
	},
	addTimeToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{
			for(var i = 0; i < attributes.quantity; i++)
			{
				var conf = Conferences.update(
					Conferences.findOne({_id:conference._id}),
					{
						$addToSet: 
						{
							times: 
							{
								_id: new Meteor.Collection.ObjectID()._str,
								date: attributes.date,
								time: attributes.time,
								session: null
							}
						}
					}
				);
			}

			
			return conference._id;
		}
		else
		{
			return 'asdf';
		}
	},

	addSessionToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{
			var conf = Conferences.update(
				Conferences.findOne({_id:conference._id}),
				{
					$addToSet: 
					{
						sessions: 
						{
							_id: new Meteor.Collection.ObjectID()._str,
							title: attributes.title,
							details: attributes.details,
							category: attributes.category,
							speaker: attributes.speaker
						}
					}
				}
			);
			
			return conference._id;
		}
		else
		{
			return 'asdf';
		}
	},
	
	addCategoryToConference: function(attributes)
	{
		var conference = Conferences.findOne({_id: attributes.conferenceId});

		if(conference)
		{
			var conf = Conferences.update(
				Conferences.findOne({_id:conference._id}),
				{
					$addToSet: 
					{
						categories: 
						{
							_id: new Meteor.Collection.ObjectID()._str,
							name: attributes.name,
						}
					}
				}
			);
			
			return conference._id;
		}
		else
		{
			return 'asdf';
		}
	}
});