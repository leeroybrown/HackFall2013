Template.nav.helpers({
	myConfs: function()
	{
		return Conferences.find({owner: Meteor.user()._id});
	},
	loggedIn: function()
	{
		if(Meteor.user())
			return true;
		else
			return false;
	}
});