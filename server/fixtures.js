if(Conferences.find().count() ==0)
{
	var speaker_names=['James Chambers','Devon Rathie-Wright','Simon Timms','Eden Rohatensky','Amir Barylko'];
	var categories=["Web", "ios", "Design", "Agile", "Source Control"];
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
		name: speaker_names[0],
		location: 'Brandon, MB',
		blog: 'http://jameschambers.com/blog',
		website: 'http://jameschambers.com/',
		twitter: '@CanadianJames',
		details: 'James Chambers is an entertaining and fast-moving speaker that keeps you on your toes with content coming a mile a minute (or faster). He pulls no punches with the technology he talks about, and knows it inside-out because he uses it every day. Employed at LogiSense Corp as the Product and Community Development Manager, James is also a Microsoft MVP in Asp.Net/IIS and speaks at conferences, workshops, UG events and brown-bag lunches across Canada where he tries to get the audience laughing with him more than at him. Beyond his technology interests (which span from web to cloud to mobile) he is also active in the community raising funds to alleviate poverty, provide clean drinking water and to help find a cure for Juvenile Diabetes.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/jameschambers.jpg'
	});
	Speakers.insert({
		conferenceId: conference,
		name: speaker_names[1]',
		location: 'Saskatoon, SK',
		blog: 'http://elementnova.com/',
		website: '',
		twitter: '@myHeroDevon',
		details: 'A husband of one and father of three, Devon has been building websites professionally since 2005. When not working at zu or playing with his children, Devon is often found in the halls of social media consuming all the web development knowledge his tiny tiny brain can handle.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/nopic.jpg'
	});
	Speakers.insert({
		conferenceId: conference,
		name: speaker_names[2],
		location: 'Calgary, AB',
		blog: 'http://http//blog.simontimms.com',
		website: '',
		twitter: '@stimms',
		details: 'Simon is an independent contractor in Calgary where he mostly does boring work for oil companies. In his spare time he helps run the Calgary .net user group. He is interested in distributed systems, JavaScript, data visualization and development best practices. He’s excited to be in one of the top 5 cities in Saskatchewan for his 6thPrarie DevCon.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/simontimms.jpg'
	});
	Speakers.insert({
		conferenceId: conference,
		name: speaker_names[3],
		location: 'Regina, SK',
		blog: 'http://www.edenrohatensky.com/',
		website: 'http://www.edenrohatensky.com/',
		twitter: '@edenthecat',
		details: 'Eden Rohatensky is a web developer, an interface designer, and a cat lover. She\'s passionate about making great user experiences and building cool things - and is currently doing both at GasBuddy. She is the chapter lead for Girl Geek Dinners in Regina, as well as an organizer of various community events in Saskatchewan.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/edenrohatensky.jpg'
	});
	Speakers.insert({
		conferenceId: conference,
		name: speaker_names[4],
		location: 'Winnipeg, MB',
		blog: 'http://www.orthocoders.com/',
		website: 'http://www.maventhought.com/',
		twitter: '@abarylko',
		details: 'Amir Barylko started his career in 1994 working for IBM as a senior developer while he was finishing his Masters degree in computer science. Since then he worked as team leader and architect for the past 15 years. Having started with languages like C++ and Java he spent many years coding in C# and training other developers in topics such domain modeling, abstractions, patterns, automation, dependency injection, testing, etc. Being an incurable geek, always thirsty for knowledge, his passion for technology moved him towards Ruby on Rails a few years ago, becoming an advocate of RoR web development. Also following he\'s teaching passion he\'s being hosting a yearly TDD, BDD, Agile and RoR training for the past three years with great reviews in Winnipeg and across Canada. Amir is a rare combination of high technical skills, lots of experience in a wide range of platforms, exceptional presentation skills and great sense of humor. His presentations are always rich in content and fun to attend.',
		img: 'http://prairiedevcon.com/Content/saskatoon/images/speakers/amirbarylko.jpg'
	});
	
			
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: '"All Your Signals R Belong to Us" or "How to be Awesome at Real Time Web"',
		speaker: speaker_names[0],
		details: "Trying to make an app \"stick\" is tough enough, and keeping users aware of changes to their data or data affects them can be hard - even harder if you want to support different clients. Come check out SignalR, the open-source solution to presence and server-sourced data push. Fully supported through development tooling with templates available for every major mobile platform and OS, SignalR takes long polling and makes it sexy.",
		category: categories[0]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Web Performance & You\" or \"20 Megabyte Websites sounds like a Bad Idea",
		speaker: speaker_names[1],
		details: "In the past year the average size of a webpage has increased by 20%. With this increase sees a massive decrease in performance. The size of a site alone does not indicate how well it performs. In this presentation you will learn about techniques for decreasing the overall page load of your website and getting it into the eyes of your audience blazingly fast.",
		category: categories[1]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "A Complete Beginner's Guide to Node.js",
		speaker: speaker_names[2],
		details: "Have you been wondering what all this hype is about Node.js? In this beginners' session we'll look at what exactly Node.js is and how we can use it to build simple apps using JavaScript on your full stack.",
		category: categories[2]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "A Primer on LESS and Sass",
		speaker: speaker_names[3],
		details: "CSS Meta languages can save time and allow for cleaner and more readable style sheets. This session discusses the features of LESS and Sass, the differences between each language’s syntaxes, and the per-project benefits of said differences. The primer will also discuss methods of compiling these languages and creative uses for reducing time spent on creating style sheets.",
		category: categories[3]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Agile Teams Roles and Responsibilities",
		speaker: speaker_names[4],
		details: "Agile Teams Roles and Responsibilities Starting towards using an agile process more often than not implies change. We discussed process changes, methodology changes, tools and best practices. What about the team? What are the differences between working with a classic software development team and an agile one? Are the roles we know like PM, Analyst, Architect, Developer, etc the same? Join me for a session where we will define each role and responsibility in an agile team and compare it to a classic one and discuss together how to organize it and achieve the best results. Don't miss this opportunity, bring your team to the session so we can have real life feedback!",
		category: categories[4]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Automated Website Deployment Methods",
		speaker: speaker_names[1],
		details: "In this fast paced web world, automation is king. With automated deployments you can reduce the turn-around time for new website features. Some sites deploy production changes over 50 times a day, all with automated deployments. In this session, learn about a variety of options for website deployments including Git and GitHub, TFS and visualstudio.com, even DropBox. With automated deployments you are free to focus on implementing features and not clicking buttons.",
		category: categories[1]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Autoscaling Applications In The Cloud",
		speaker: speaker_names[2],
		details: "In this session you will learn how to take your web applications to the next level with autoscaling. Hosting an application in the cloud not only eliminates the headaches of web servers and uptime, it can also provide unique features to dynamically scale your application based on performance. This scaling capability helps to keep your application lean without compromising performance when the load spikes or continues to grow.",
		category: categories[2]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Breaking Down the Communication Barrier with Domain Driven Design",
		speaker: speaker_names[3],
		details: "Software developers have to be able to change business conversations into viable applications. In the process code is written and the ideas formed in the conversations are translated into the codebase. As the application progresses those business ideas (or business specifications) are placed throughout the codebase as developers work to create their final product. During this process what is lost is the cohesive business conversation that originally took place. In its place are a bunch of fragments representing single ideas from those conversations. Those ideas are so fragmented that they cannot be used to reconstruct the original conversation. Its common to hear developers say \"the business doesn't know how it does business\". But after having all of these conversations to help solve that problem those same developers are not making use of the application\'s codebase as a tool to clearly and centrally answer the question of what does the business really do. In this session we will discuss the fundamental principles of Domain Driven Design and explore how it can help to provide well encapsulated code, clear documentation of what the business does and a common ligua franca for communication with the business whenever the need arises.",
		category: categories[3]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Building Cross-Platform Phone Apps & Sites with jQuery Mobile",
		speaker: speaker_names[4],
		details: "Native mobile apps have taken all the spotlight in recent years thanks to the introduction of hundreds of thousands of apps in various app stores from Apple, Google, Microsoft and BlackBerry. Apps offer a great native platform experience, but they can be expensive to build and require specific languages, SDKs and skill sets across multiple platforms. Mobile web sites offer a great way to engage with consumers and corporate workers alike without requiring the installation of any app. This session explores the benefits of web development for smartphones using the most popular HTML5 & JavaScript framework for mobile: jQuery Mobile (JQM). We’ll go over a quick primer on HTML5, CSS and JavaScript, followed by everything you need to get started with JQM. We’ll cover the most common development environment options, how to build your first jQuery Mobile page, and how to debug your mobile web code with some of the available tools. We’ll also discuss how to develop a native-like experience on each mobile platform thanks to JQM’s adaptive rendering, and how you wrap a JQM project as a deployable application using PhoneGap. Web development is a critical skill required by every mobile developer; come learn how to get started and reach hundreds of millions of users through a smart mobile web approach.",
		category: categories[4]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Cross Platform Mobile Development in C# with Xamarin",
		speaker: speaker_names[4],
		details: "Come learn how to create native cross-platform mobile applications in C# using Xamarin.Android and Xamarin.iOS. Xamarin's platform allows for significant code sharing amongst the three major mobile platforms. In this session we're going to take a quick look at Xamarin Mobile Platform and then dig into some cross platform mobile applications to see how code can be shared between iOS and Android. We'll also touch on some architectural tips and design considerations to create mobile applications.",
		category: categories[4]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "DIY Action Figures!",
		speaker: speaker_names[1],
		details: "It's 3D making time. Learn how to sculpt a 3D action figure on your laptop using 3D sculpting and CAD tools, prep and slice your model for printing, and use a 3D printer to print out all the parts.",
		category: categories[1]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Frontend Workflows with Grunt",
		speaker: speaker_names[3],
		details: "Developers have been crafting task-oriented workflows on the server-side for many years; until recently, there was no solution targeted towards front-end workflows. In this session you will learn about Grunt: The JavaScript Task Runner, as we walk through building a web development workflow from the ground up.",
		category: categories[3]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Getting Started with Android Development",
		speaker: speaker_names[2],
		details: "In this hands-on lab we will be building an android application from the ground-up. This will be great introduction to android development.",
		category: categories[2]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "How to SOLIDify your code with Unit Tests and Mocking",
		speaker: speaker_names[4],
		details: "In this session we will explore the advantages of mocking with libraries like RhinoMocks in order to deliver SOLID code. Sample application be analyzed and unit test will be created to ensure maximum code coverage. Where required, code will be modified to make it more testable, mockable and in-line with SOLID programming principles.",
		category: categories[4]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "",
		speaker: speaker_names[3],
		details: "",
		category: categories[3]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "",
		speaker: speaker_names[1],
		details: "",
		category: categories[1]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "HTML5: The Parts You Care About",
		speaker: speaker_names[4],
		details: "HTML5 is here to stay, but how to you keep know what information is important and what is nothing more than the buzz. The goal of this presentation is to give you the knowledge and tools to you need to understand how HTML5 can be applied to your software development world. We will discuss and view the current state of HTML5, review some of the common assumptions going on about HTML5, and how to start getting you and your developers off to a good start with HTML5.",
		category: categories[2]
	});
	Sessions.insert({
		conferenceId: conference,
		assigned: false,
		title: "Introduction to Node.js on Windows Azure",
		speaker: speaker_names[2],
		details: "Node.js is a platform for building fast and scalable applications in JavaScript. In this session you will learn how to build Node.js application and deploy them to Windows Azure. You will learn how to create and manage your applications from the Windows Azure Portal and the cross-platform Windows Azure CLI. You will learn how to configure and debug your Node.js application and how to connect it to services such as Windows Azure Storage and MongoDB.",
		category: categories[4]
	});

	Categories.insert({ 
		conferenceId: conference,
		name: categories[0]
	});
	Categories.insert({ 
		conferenceId: conference,
		name: categories[1]
	});
	Categories.insert({ 
		conferenceId: conference,
		name: categories[2]
	});
	Categories.insert({ 
		conferenceId: conference,
		name: categories[3]
	});
	Categories.insert({ 
		conferenceId: conference,
		name: categories[4]
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