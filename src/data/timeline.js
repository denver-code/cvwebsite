import task1 from './files/1/task1.docx'
import task1pic from './files/1/task1.png'

export default [
	{
		id: '1',
		unit: 1,
		title: 'The Online World',
		subtitle: 'Where everything begins',
		status: 'Finished',
		details:
			'How do websites work? How do emails reach your computer? How does the use of computer applications affect your daily life? This unit provides an introduction to the modern online world. Starting with your own experiences, you will extend your knowledge of online services and investigate the technology and software that supports them. You will learn more about a range of services including email, online data storage, collaborative software, search engines and blogging.',
		acquired: [
			"Internet knowledge",
			"Investigated online services and online communication",
			"Used collaborative software",
			"Used online data storage",
			"Used search engines",
			"Investigated online services/communication components of the internet and how digital devices exchange and store information.",
			"Investigated online services/communication issues with operating online",
			"File compression and file formats",
			"Types of online services and software",
			"Parts of network",
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
						file: task1,
						filename: "task1.docx",
						description: "File with completed task"
					},
					{
						type: "Picture",
						file: task1pic,
						description: "File with completed task"
					}
				]
			}
		],
	},
]