import Unit1Task1 from './files/1/task1.docx'
import Unit1Task2 from './files/1/task2.docx'
import Unit1Task3 from './files/1/task3.docx'
import Unit1Task4_1 from './files/1/task4_1.docx'
import Unit1Task4_2 from './files/1/task4_2.docx'
import Unit1Task5 from './files/1/task5.docx'
import Unit1Task6 from './files/1/task6.docx'
import Unit1Task7 from './files/1/task7.docx'



export default [
	{
		id: '1',
		unit: 1,
		title: 'The Online World',
		subtitle: 'Where everything begins',
		status: 'Finished',
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
					// {
					// 	type: "Picture",
					// 	file: task1pic,
					// 	description: "File with completed task"
					// }
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
]