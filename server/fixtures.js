if(Conferences.find().count() == 0 )
{
	Conferences.insert(
	{
		owner: null,
		name: 'Prairie Dev Con',
		categories: [
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'ios'
			},
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'programming'
			}
		],
		speakers: [
			{
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Kyle Smyth',
				location: 'Regina, SK',
				blog: 'http://kylesmyth.com',
				website: 'http://kylesmyth.com',
				twitter: '@kylesmyth',
				details: 'Kyle is awesome'
			}
		],
		sessions: [
			{
				_id: new Meteor.Collection.ObjectID()._str,
				title: 'Programming for noobs',
				speaker: 0,
				details: 'A great session to learn awesomethings from awesome people',
				category: 0
			}
		]
	});
}
