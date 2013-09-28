if(Conferences.find().count() ==0)
{
	var conference = Conferences.insert(
	{
		owner: null,
		name: 'Prairie Dev Con',
	});

	Times.insert({
		conferenceId: conference,
		date: '11/04/2013',
		time: '8',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '8',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '8',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '8',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '9',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '9',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '9',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '9',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '10',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '10',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '10',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '10',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '11',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '11',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '11',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '11',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '12',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '12',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '12',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '12',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '1',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '1',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '1',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '1',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '2',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '2',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '2',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '2',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '3',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '3',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '3',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '3',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '4',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '4',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '4',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '4',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '5',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '5',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '5',
		session: null
	});
	Times.insert({	
		conferenceId: conference,
		date: '11/04/2013',
		time: '5',
		session: null
	});

	Speakers.insert({
		conferenceId: conference,
		name: 'James Chambers',
		location: 'Brandon, MB',
		blog: 'http://jameschambers.com/blog',
		website: 'http://jameschambers.com/',
		twitter: '@CanadianJames',
		details: 'James Chambers is an entertaining and fast-moving speaker that keeps you on your toes with content coming a mile a minute (or faster). He pulls no punches with the technology he talks about, and knows it inside-out because he uses it every day. Employed at LogiSense Corp as the Product and Community Development Manager, James is also a Microsoft MVP in Asp.Net/IIS and speaks at conferences, workshops, UG events and brown-bag lunches across Canada where he tries to get the audience laughing with him more than at him. Beyond his technology interests (which span from web to cloud to mobile) he is also active in the community raising funds to alleviate poverty, provide clean drinking water and to help find a cure for Juvenile Diabetes.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/jameschambers.jpg'
	});
	Speakers.insert({
		conferenceId: conference,
		name: 'Devon Rathie-Wright',
		location: 'Saskatoon, SK',
		blog: 'http://elementnova.com/',
		website: '',
		twitter: '@myHeroDevon',
		details: 'A husband of one and father of three, Devon has been building websites professionally since 2005. When not working at zu or playing with his children, Devon is often found in the halls of social media consuming all the web development knowledge his tiny tiny brain can handle.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/nopic.jpg'
	});
	Speakers.insert({
		conferenceId: conference,
		name: 'Simon Timms',
		location: 'Calgary, AB',
		blog: 'http://http//blog.simontimms.com',
		website: '',
		twitter: '@stimms',
		details: 'Simon is an independent contractor in Calgary where he mostly does boring work for oil companies. In his spare time he helps run the Calgary .net user group. He is interested in distributed systems, JavaScript, data visualization and development best practices. He’s excited to be in one of the top 5 cities in Saskatchewan for his 6thPrarie DevCon.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/simontimms.jpg'
	});
	Speakers.insert({
		conferenceId: conference,
		name: 'Eden Rohatensky',
		location: 'Regina, SK',
		blog: 'http://www.edenrohatensky.com/',
		website: 'http://www.edenrohatensky.com/',
		twitter: '@edenthecat',
		details: 'Eden Rohatensky is a web developer, an interface designer, and a cat lover. She\'s passionate about making great user experiences and building cool things - and is currently doing both at GasBuddy. She is the chapter lead for Girl Geek Dinners in Regina, as well as an organizer of various community events in Saskatchewan.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/edenrohatensky.jpg'
	});
	Speakers.insert({
		conferenceId: conference,
		name: 'Amir Barylko',
		location: 'Winnipeg, MB',
		blog: 'http://www.orthocoders.com/',
		website: 'http://www.maventhought.com/',
		twitter: '@abarylko',
		details: 'Amir Barylko started his career in 1994 working for IBM as a senior developer while he was finishing his Masters degree in computer science. Since then he worked as team leader and architect for the past 15 years. Having started with languages like C++ and Java he spent many years coding in C# and training other developers in topics such domain modeling, abstractions, patterns, automation, dependency injection, testing, etc. Being an incurable geek, always thirsty for knowledge, his passion for technology moved him towards Ruby on Rails a few years ago, becoming an advocate of RoR web development. Also following he\'s teaching passion he\'s being hosting a yearly TDD, BDD, Agile and RoR training for the past three years with great reviews in Winnipeg and across Canada. Amir is a rare combination of high technical skills, lots of experience in a wide range of platforms, exceptional presentation skills and great sense of humor. His presentations are always rich in content and fun to attend.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/amirbarylko.jpg'
	});
	
			
	Sessions.insert({
		conferenceId: conference,
		title: '"All Your Signals R Belong to Us" or "How to be Awesome at Real Time Web"',
		speaker: 0,
		details: "Trying to make an app \"stick\" is tough enough, and keeping users aware of changes to their data or data affects them can be hard - even harder if you want to support different clients. Come check out SignalR, the open-source solution to presence and server-sourced data push. Fully supported through development tooling with templates available for every major mobile platform and OS, SignalR takes long polling and makes it sexy.",
		category: 0
	});
	Sessions.insert({
		conferenceId: conference,
		title: "Web Performance & You\" or \"20 Megabyte Websites sounds like a Bad Idea",
		speaker: 0,
		details: "In the past year the average size of a webpage has increased by 20%. With this increase sees a massive decrease in performance. The size of a site alone does not indicate how well it performs. In this presentation you will learn about techniques for decreasing the overall page load of your website and getting it into the eyes of your audience blazingly fast.",
		category: 0
	});
	Sessions.insert({
		conferenceId: conference,
		title: "A Complete Beginner's Guide to Node.js",
		speaker: 0,
		details: "Have you been wondering what all this hype is about Node.js? In this beginners' session we'll look at what exactly Node.js is and how we can use it to build simple apps using JavaScript on your full stack.",
		category: 0
	});
	Sessions.insert({
		conferenceId: conference,
		title: "A Primer on LESS and Sass",
		speaker: 0,
		details: "CSS Meta languages can save time and allow for cleaner and more readable style sheets. This session discusses the features of LESS and Sass, the differences between each language’s syntaxes, and the per-project benefits of said differences. The primer will also discuss methods of compiling these languages and creative uses for reducing time spent on creating style sheets.",
		category: 0
	});
	Sessions.insert({
		conferenceId: conference,
		title: "Agile Teams Roles and Responsibilities",
		speaker: 0,
		details: "Agile Teams Roles and Responsibilities Starting towards using an agile process more often than not implies change. We discussed process changes, methodology changes, tools and best practices. What about the team? What are the differences between working with a classic software development team and an agile one? Are the roles we know like PM, Analyst, Architect, Developer, etc the same? Join me for a session where we will define each role and responsibility in an agile team and compare it to a classic one and discuss together how to organize it and achieve the best results. Don't miss this opportunity, bring your team to the session so we can have real life feedback!",
		category: 0
	});
		
	Categories.insert({ 
		conferenceId: conference,
		name: 'ios'
	});
	Categories.insert({ 
		conferenceId: conference,
		name: 'Web'
	});
	Categories.insert({ 
		conferenceId: conference,
		name: 'Javascript'
	});
	Categories.insert({ 
		conferenceId: conference,
		name: 'Agile'
	});
	Categories.insert({ 
		conferenceId: conference,
		name: 'Cloud'
	});
	Categories.insert({ 
		conferenceId: conference,
		name: 'Architecture'
	});
	Categories.insert({ 
		conferenceId: conference,
		name: 'Mobile'
	});
	

}

/*
if(Conferences.find().count() == 0 )
{
	Conferences.insert(
	{
		owner: null,
		name: 'Prairie Dev Con',
		times: [
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '8',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '8',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '8',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '8',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '9',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '9',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '9',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '9',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '10',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '10',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '10',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '10',
				session: null
			},
			{	
				_id: new Meteor.Collection.ObjectID()._str,
				date: '11/04/2013',
				time: '11',
				session: null
			},
		],
		categories: [
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'ios'
			},
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Web'
			},
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Javascript'
			},
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Agile'
			},
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Cloud'
			},
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Architecture'
			},
			{ 
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Mobile'
			}
		],
		speakers: [
			{
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'James Chambers',
				location: 'Brandon, MB',
				blog: 'http://jameschambers.com/blog',
				website: 'http://jameschambers.com/',
				twitter: '@CanadianJames',
				details: 'James Chambers is an entertaining and fast-moving speaker that keeps you on your toes with content coming a mile a minute (or faster). He pulls no punches with the technology he talks about, and knows it inside-out because he uses it every day. Employed at LogiSense Corp as the Product and Community Development Manager, James is also a Microsoft MVP in Asp.Net/IIS and speaks at conferences, workshops, UG events and brown-bag lunches across Canada where he tries to get the audience laughing with him more than at him. Beyond his technology interests (which span from web to cloud to mobile) he is also active in the community raising funds to alleviate poverty, provide clean drinking water and to help find a cure for Juvenile Diabetes.',
				img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/jameschambers.jpg'
			},
			{
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Devon Rathie-Wright',
				location: 'Saskatoon, SK',
				blog: 'http://elementnova.com/',
				website: '',
				twitter: '@myHeroDevon',
				details: 'A husband of one and father of three, Devon has been building websites professionally since 2005. When not working at zu or playing with his children, Devon is often found in the halls of social media consuming all the web development knowledge his tiny tiny brain can handle.',
				img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/nopic.jpg'
			},
			{
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Simon Timms',
				location: 'Calgary, AB',
				blog: 'http://http//blog.simontimms.com',
				website: '',
				twitter: '@stimms',
				details: 'Simon is an independent contractor in Calgary where he mostly does boring work for oil companies. In his spare time he helps run the Calgary .net user group. He is interested in distributed systems, JavaScript, data visualization and development best practices. He’s excited to be in one of the top 5 cities in Saskatchewan for his 6thPrarie DevCon.',
				img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/simontimms.jpg'
			},
			{
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Eden Rohatensky',
				location: 'Regina, SK',
				blog: 'http://www.edenrohatensky.com/',
				website: 'http://www.edenrohatensky.com/',
				twitter: '@edenthecat',
				details: 'Eden Rohatensky is a web developer, an interface designer, and a cat lover. She\'s passionate about making great user experiences and building cool things - and is currently doing both at GasBuddy. She is the chapter lead for Girl Geek Dinners in Regina, as well as an organizer of various community events in Saskatchewan.',
				img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/edenrohatensky.jpg'
			},
			{
				_id: new Meteor.Collection.ObjectID()._str,
				name: 'Amir Barylko',
				location: 'Winnipeg, MB',
				blog: 'http://www.orthocoders.com/',
				website: 'http://www.maventhought.com/',
				twitter: '@abarylko',
				details: 'Amir Barylko started his career in 1994 working for IBM as a senior developer while he was finishing his Masters degree in computer science. Since then he worked as team leader and architect for the past 15 years. Having started with languages like C++ and Java he spent many years coding in C# and training other developers in topics such domain modeling, abstractions, patterns, automation, dependency injection, testing, etc. Being an incurable geek, always thirsty for knowledge, his passion for technology moved him towards Ruby on Rails a few years ago, becoming an advocate of RoR web development. Also following he\'s teaching passion he\'s being hosting a yearly TDD, BDD, Agile and RoR training for the past three years with great reviews in Winnipeg and across Canada. Amir is a rare combination of high technical skills, lots of experience in a wide range of platforms, exceptional presentation skills and great sense of humor. His presentations are always rich in content and fun to attend.',
				img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/amirbarylko.jpg'
			}
		],
		sessions: [
			{
				_id: new Meteor.Collection.ObjectID()._str,
				title: '"All Your Signals R Belong to Us" or "How to be Awesome at Real Time Web"',
				speaker: 0,
				details: "Trying to make an app \"stick\" is tough enough, and keeping users aware of changes to their data or data affects them can be hard - even harder if you want to support different clients. Come check out SignalR, the open-source solution to presence and server-sourced data push. Fully supported through development tooling with templates available for every major mobile platform and OS, SignalR takes long polling and makes it sexy.",
				category: 0
			},
			{
				_id: new Meteor.Collection.ObjectID()._str,
				title: "Web Performance & You\" or \"20 Megabyte Websites sounds like a Bad Idea",
				speaker: 0,
				details: "In the past year the average size of a webpage has increased by 20%. With this increase sees a massive decrease in performance. The size of a site alone does not indicate how well it performs. In this presentation you will learn about techniques for decreasing the overall page load of your website and getting it into the eyes of your audience blazingly fast.",
				category: 0
			},
			{
				_id: new Meteor.Collection.ObjectID()._str,
				title: "A Complete Beginner's Guide to Node.js",
				speaker: 0,
				details: "Have you been wondering what all this hype is about Node.js? In this beginners' session we'll look at what exactly Node.js is and how we can use it to build simple apps using JavaScript on your full stack.",
				category: 0
			},
			{
				_id: new Meteor.Collection.ObjectID()._str,
				title: "A Primer on LESS and Sass",
				speaker: 0,
				details: "CSS Meta languages can save time and allow for cleaner and more readable style sheets. This session discusses the features of LESS and Sass, the differences between each language’s syntaxes, and the per-project benefits of said differences. The primer will also discuss methods of compiling these languages and creative uses for reducing time spent on creating style sheets.",
				category: 0
			},
			{
				_id: new Meteor.Collection.ObjectID()._str,
				title: "Agile Teams Roles and Responsibilities",
				speaker: 0,
				details: "Agile Teams Roles and Responsibilities Starting towards using an agile process more often than not implies change. We discussed process changes, methodology changes, tools and best practices. What about the team? What are the differences between working with a classic software development team and an agile one? Are the roles we know like PM, Analyst, Architect, Developer, etc the same? Join me for a session where we will define each role and responsibility in an agile team and compare it to a classic one and discuss together how to organize it and achieve the best results. Don't miss this opportunity, bring your team to the session so we can have real life feedback!",
				category: 0
			}
		]
	});
}
*/