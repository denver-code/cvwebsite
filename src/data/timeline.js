import Unit1Task1 from './files/1/task1.docx'
import Unit1Task2 from './files/1/task2.docx'
import Unit1Task3 from './files/1/task3.docx'
import Unit1Task4_1 from './files/1/task4_1.docx'
import Unit1Task4_2 from './files/1/task4_2.docx'
import Unit1Task5 from './files/1/task5.docx'
import Unit1Task6 from './files/1/task6.docx'
import Unit1Task7 from './files/1/task7.docx'

import Unit8Task1 from './files/8/1.pptx'
import Unit8Task2 from './files/8/2.pptx'
import Unit8Task2File1 from './files/8/scr1.png'
import Unit8Task2File2 from './files/8/scr2.png'
import Unit8Task3 from './files/8/3.pptx'
import Unit8Task3File1 from './files/8/structure.png'
import Unit8Task4 from './files/8/4.docx'


export default [
	{
		id: '1',
		unit: 1,
		title: 'The Online World',
		subtitle: 'Where everything begins',
		status: 'Finished',
		grade: "Lvl 2 Pass",
		details:
			`How do websites work? How do emails reach your computer? 
			How does the use of computer applications affect your daily life? 
			This unit provides an introduction to the modern online world. 
			Starting with your own experiences, you will extend your knowledge of online services and investigate 
			the technology and software that supports them. You will learn more about a range of services including
			 email, online data storage, collaborative software, search engines and blogging.`,
		acquired: [
			"Understanding of technology systems",
			"Investigated components and functions of technology systems",
			"Used collaborative software",
			"Used online data storage",
			"Used search engines",
			"Investigated online services/communication components of technology systems and how digital devices exchange and store information.",
			"Investigated online services/communication issues with operating technology systems",
			"File compression and file formats",
			"Types of online services and software",
			"Parts of a network",
			"CODECs"
		],
		timeline: [
			{

				name: "Task 1",
				title: "Report about Online Services",
				description: "Brainstorm with group the different online services they use on a daily basis and make\n" +
					"a list of them on the whiteboard.",
				files:[
					{
						type: "Link",
						url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
						description: "Summary of the task"
					},
					{
						type: "Document",
						file: Unit1Task1,
						filename: "task1.docx",
						description: "File with completed task"
					},
				]
			},
			{
				name: "Task 2",
				title: "Report about Online Advertising",
				description: "What Types of Advertising are there and how do these work?",
				files:[
					{
						type: "Document",
						file: Unit1Task2,
						filename: "task2.docx",
						description: "File with completed task"
					}
				]
			},
			{
				name: "Task 3",
				title: "Report about File Compression",
				description: "What is file compression?",
				files:[
					{
						type: "Document",
						file: Unit1Task3,
						filename: "task3.docx",
						description: "File with completed task"
					}
				]
			},
			{
				name: "Task 4",
				title: "Report about Cloud Computing",
				description: "What is Cloud Computing?",
				files:[
					{
						type: "Document",
						file: Unit1Task4_1,
						filename: "task4_1.docx",
						description: "File with completed task"
					},
					{
						type: "Document",
						file: Unit1Task4_2,
						filename: "task4_2.docx",
						description: "File with completed task"
					}
				]
			},
			{
				name: "Task 5",
				title: "Research about Cloud Computing + Networks",
				description: "What is cloud computing?" +
					"What is ubiquitous computing?\n" +
					"What is a network? \n" +
					"Explain the difference between a LAN and a WAN? \n",
				files:[
					{
						type: "Document",
						file: Unit1Task5,
						filename: "task5.docx",
						description: "File with completed task"
					},
				]
			},
			{
				name: "Task 6",
				title: "The Internet",
				description: "Mini assignment to investigate certain parts of the internet.",
				files:[
					{
						type: "Document",
						file: Unit1Task6,
						filename: "task6.docx",
						description: "File with completed task"
					},
				]
			},
			{
				name: "Task 7",
				title: "Network Threats",
				description: "identify and describe 5 top threats to college network security",
				files:[
					{
						type: "Document",
						file: Unit1Task7,
						filename: "task7.docx",
						description: "File with completed task"
					},
				]
			}
		],
	},
	{
		id: '2',
		unit: 2,
		title: 'The Technology Systems',
		subtitle: 'How it actually works',
		status: 'Finished',
		grade: "Lvl 2 Pass",
		details:
			`How do technology systems work? How do they impact your daily life?
			This unit provides an introduction to technology systems and their role in the modern world.
			Building on your existing knowledge, you will explore the components and functions of technology systems,
			including hardware, software, and networks. You will investigate how technology systems support 
			various applications and services, such as communication, data storage, collaboration, search engines, 
			and blogging.`,
		acquired: [
			"Gained understanding of the components of technology systems and how they work together",
			"Explored common hardware components of technology systems",
			"Learned about the internal building blocks of a computer, including the processor, buses, and memory",
			"Understood the purpose of networks in technology systems and how they facilitate communication between devices",
			"Explored different types of software, including operating systems, utility programs, and applications software",
			"Learned about the role of software in supporting communication, resource management, and everyday business activities",
			"Explored the connection between this unit and other specialist units in the Award",
			"Gained knowledge applicable to various IT career paths",
		],
		timeline: [],
	},
	{
		id: '8',
		unit: 8,
		title: 'Mobile App Development',
		subtitle: 'Creating own portable application',
		status: 'Finished',
		grade: "Distinction",
		details:
			`How many people do you know who have smartphones or mobile tablet devices?
			This means that they are carrying considerable computer power around with them.
			There has been an explosion of software applications, known as apps, to use on these devices.
			You can use apps for many different purposes; for example, a location app helps you to find your nearest
			 shop, and a leisure app makes it easy to download your favourite music.
			Software developers and engineers have scrambled to meet the demand for mobile apps, that are increasingly 
			being used by businesses and organisations. The market for Apple, Android and other apps have boomed. 
			Software engineers are involved with the design, development, testing and maintenance of apps. 
			In addition, software businesses that develop apps employ other professionals, including creative designers,
			 artists and sound engineers.`,
		acquired: [
			"Understanding the characteristics and uses of mobile apps",
			"Knowledge of the development process for mobile apps",
			"Designing and developing a mobile app",
			"Testing and reviewing a mobile app",
			"Integrating predefined programs/code snippets into a mobile app",
			"Utilising ready-made and original assets in a mobile app (e.g., buttons and sounds)",
			"Obtaining feedback from others and incorporating improvements in the app",
			"Potential ability to publish the app on the internet",
		],
		timeline: [
			{
				name: "Assignment 1",
				title: "Report about Different Types of Mobile Apps",
				description: "We were asked you to review two different kinds of mobile app and to discuss the " +
					"strengths and weaknesses of each. \nAnd to give information (e.g. BBC, photo, video, music)\n" +
					"for navigation (e.g. location identification, nearest London Underground\n" +
					"stations, nearest sandwich shop)\n" +
					"for entertainment (e.g. YouTube, Spotify)\n" +
					"for leisure and fitness (e.g. tracking fitness, RunKeeper)\n" +
					"for communication (e.g. Skype mobile, Live Messenger, Fone Time)\n" +
					"for augmented reality (e.g. Layar, Junaio). ",
				files:[
					{
						type: "Document",
						file: Unit8Task1,
						filename: "task1.pptx",
						description: "File with completed task"
					},
				]
			},
			{
				name: "Assignment 2",
				title: "Designing Mobile App",
				description: `Before you create the app, you need to produce a detailed design of the
							prototype app that you are going to create for EduTek, justifying your design
							discussions. You must first describe the user requirements and intended
							purpose of the app.\n
							The design documents should include:\n
							- a detailed proposed solution, using a range of suitable tools such as
							flowcharts, control structures, pseudocode, events, data handling, and error
							handling and reporting
							- a description of the main program tasks (data input and output, screen
							layouts and navigation)
							descriptions of the method of solution
							- a list of any pre-defined programs/code snippets (including any functions or
							sub-routines)
							- a fully-referenced source table, documenting the sources appropriately
							- a test plan, to test for the logic and functionality.`,
				files:[
					{
						type: "Document",
						file: Unit8Task2,
						filename: "task2.pptx",
						description: "File with completed task"
					},
					{
						type: "Picture",
						file: Unit8Task2File1,
						description: "Design of home page"
					},
					{
						type: "Picture",
						file: Unit8Task2File2,
						description: "Design of selection unit part page"
					},
				]
			},
			{
				name: "Assignment 3",
				title: "Develop and Test Mobile App",
				description: `It is now time to create your mobile app. Using your designs
							create and refine the app that will help children learn the
							alphabet, taking into account the quality of the code and
							user feedback.
							- Prepare and gather your pre-defined code and ready-
							made assets, such as buttons and images. All pre-
							defined code and assets should be fully listed in a fully-
							referenced source table.
							- Make sure that your assets demonstrate awareness of
							user requirements and the intended purpose of the app;
							for example, bitmap images should be optimised (e.g. be
							an appropriate file type and size to increase the
							responsiveness of the app).`,
				files:[
					{
						type: "Document",
						file: Unit8Task3,
						filename: "task3.pptx",
						description: "File with completed task"
					},
					{
						type: "Link",
						file: "https://drive.google.com/file/d/18cHdRMt2OwdcCaUzxxhkOvG3bxhJ6lc7/view",
						description: 'Video demonstration of the app'
					},
					{
						type: "Link",
						file: "https://github.com/denver-code/EduTekLetters",
						description: 'Link to the source code'
					},
					{
						type: "Picture",
						file: Unit8Task3File1,
						size: "max-w-xl ",
						description: "Structure of the project"
					}

				]
			},,
			{
				name: "Assignment 4",
				title: "Review the Finished Mobile App",
				description: `It’s now time to review your mobile app to see if it meets the needs of the intended audience and is fit for the intended purpose.
							- Review why the app is suitable for the user requirements and target audience.
							- Review why the app is suitable for the intended purpose of the app.
							- Consider how constraints, user feedback and testing have affected the suitability of the app.
							- Evaluate your initial designs and the completed app, justifying any changes made.
							- Make at least three specific suggestions for improvement for the
							completed program to ensure it is fully functional, well-coded and fit for the intended purpose.`,
				files:[
					{
						type: "Document",
						file: Unit8Task4,
						filename: "task4.docx",
						description: "File with completed task"
					}

				]
			},

		],
	},
	{
		id: '3',
		unit: 3,
		title: 'Digital Portfolio',
		subtitle: 'Creating own CV Website',
		status: 'Ongoing',
		grade: "",
		details:
			`This unit is your chance to show off! A digital portfolio is an exciting onscreen way to showcase your 
			achievements to potential employers or when applying for a course.
			Digital portfolios can be viewed by anyone with a computer and an internet browser. You will learn how to create a
 			digital portfolio that includes a series of web pages with links to content that you have created. You will learn how
  			to make use of multimedia assets such as images, sound and video to make your portfolio appealing and engaging.`,
		acquired: [
			"Understanding the characteristics and uses of mobile apps",
		],
		timeline: [],
	},
	{
		id: '6',
		unit: 6,
		title: 'Digital Graphics',
		subtitle: 'Everyone needs a logo!',
		status: 'Ongoing',
		grade: "",
		details:
			`You will see graphics at work whenever you surf websites, play computer games, go shopping or read a user 
			manual. Graphics are used to communicate messages in every part of our lives, such as advertising, music, 
			fashion, interior design and architecture. It is the job role of a graphic designer to create digital 
			graphics, that bring colour, information and interest to our lives for a wide range of industries.`,
		acquired: [
			"Understanding the characteristics and uses of mobile apps",
		],
		timeline: [],
	},
	{
		id: '4',
		unit: 4,
		title: 'Digital Animation',
		subtitle: 'Let\'s make an animation!',
		status: 'Ongoing',
		grade: "",
		details:
			`How are the amazing visual effects in science fiction and fantasy films,
			and computer games, made? This unit provides you with an introduction to tools/techniques and processes that are used 
			commercially when creating computer animation.
			Animation is the creation of moving images and has a long history. Today modern animations are usually created using
			a computer. It is an exciting and fast moving area of creative technology that provides an opportunity to combine 
			creative and technical computing skills, and is one in which the UK excels. The creative industries have grown
			considerably in recent years and provide increasing employment opportunities. An animator can work in a number
			of different creative areas: creating effects for live-action films, feature-length animations and computer 
			games. Non-narrative animations feature in online advertising and software interface design.`,
		acquired: [
			"Understanding the characteristics and uses of mobile apps",
		],
		timeline: [],
	},
	{
		id: '13',
		unit: 13,
		title: 'Website Development',
		subtitle: 'Now it\s time to use your logo!',
		status: 'Ongoing',
		grade: "",
		details:
			`Have you ever viewed a website and wondered how it was created? Many different elements can be included in
			 the website, such as text, graphics, animation, video and programs (client-side computer scripts). Many 
			 websites also contain sophisticated interactive features such as database search facilities, online 
			 purchasing and messaging. To be successful, a website must be visually interesting, while remaining easy 
			 to use.
			With the internet being central to how most organisations and individuals communicate and do business,
			 the creation and maintenance of websites is an important job role. There is a strong demand in the job 
			 market for web developers with appropriate technical and creative skills. For instance, a web-developer 
			 is a technical role involved with designing and developing websites, a content manager is responsible for
			  keeping a website up to date and a search engine optimisation specialist encourages user traffic from 
			  internet search engines to specific websites.
			In this unit, you will investigate the features and uses of websites by exploring what they are and how
			 their integrated components and applications interact with each other .`,
		acquired: [
			"Understanding the characteristics and uses of mobile apps",
		],
		timeline: [],
	},
].sort((a, b) => a.unit - b.unit);