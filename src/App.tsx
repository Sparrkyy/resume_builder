import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FC } from "react";

const content = {
	title: {
		fullName: "ETHAN HODGES",
		title: "COMPUTER SCIENCE STUDENT",
		email: "ethancampbellhodges@gmail.com",
		phoneNumber: "+1 (610)-888-4809",
		github: "Sparrkyy",
		githubUsername: "https://github.com/Sparrkyy",
		linkedIn: "/in/ethan-hodges/",
		linkedInLink: "https://www.linkedin.com/in/ethan-hodges/",
	},
	education: {
		universityName: "MCGILL UNIVERSITY",
		dates: "Sep 2019 - Present",
		gpa: "3.90",
		degreeName: "Bachelor of Arts, Computer Science (Expected Graduation: May 2022)",
		relevantCourses:
			"Relevant Courses: Algorithms and Data Structures, Introduction to Software Systems, Software Design, Introduction to Computer Science, Discrete Mathematics.",
	},
	employment: {
		positions: [
			{
				companyTitle: "Tote",
				dates: "May 2021 - Sep 2021",
				positionTitle: "Software Developer Intern",
				bulletPoints: [
					"Designed and implemented a graph data structure using Node.js and MongoDB to handle complex data categorization that is now used across all platforms.",
					"Played a key role in the reconstruction of an internal web app in React.js from Vue.js with over 80 commits pushed to production.",
					"Proactively automated data workflow with Python to allow for non-technical members to safely update data, and have those changes reflected across our platforms, saving countless hours of work from the technical and non-technical teams.",
					"Created documentation for, added end points, and reduced technical debt through refactoring, in our API using Node.js and Express.js.",
				],
			},
			{
				companyTitle: "Hard Eight Holdings LLC",
				dates: "Dec 2020 - May 2021",
				positionTitle: "Full Stack Developer Intern",
				bulletPoints: [
					"Played a key role in building and maintaining an internal dashboard in React.js and Node.js that handles critical real time information and was integral to new business opportunities.",
					"Built a wrapper for the dashboard's API in Python to allow for manipulation of the displayed data from other company software.",
				],
			},
		],
	},
	projectsAndOpenSource: {
		projects: [
			{
				title: "Algorithm Visualizer",
				date: "June 2021 - Present",
				description:
					"A web app that helps to visualize common pathfinding algorithms. Created in React.js and Typescript. ",
			},
			{
				title: "Class Schedule Web Scraper",
				date: "June 2021 - Present",
				description:
					"Reversed engineered the university's schedule builder web app to allow for an API to be built around it, and all course information to be programmatically available to the McGill community. Created in Node.js, Express.js, and TypeScript.",
			},
			// {
			// 	title: "McGill Tools Contributer",
			// 	date: "June 2021 - Current",
			// 	description:
			// 		"Part of a team that is working to provide important services to the McGill community. With over 6000 current users, we provide services like notifications when classes open, and are working on providing a nofitication service for finals ",
			// },
			{
				title: "Heal and Hope Website",
				date: "May 2021 - Present",
				description:
					"Volunteered to build the website that helps the student organization fundraise for surgical procedures of children with war-related injuries. Created in Next.js, and TypeScript.",
			},
		],
	},
	skills: {
		list: [
			{
				skillType: "PROGRAMMING LANGUAGES:",
				skillList: "TypeScript/Javascript, Python, Java, C, HTML/CSS",
			},
			{
				skillType: "FRAMEWORKS AND TOOLS:",
				skillList: "React.js, Node.js, Express.js, Vue.js, Firebase, Next.js, Git, Jira",
			},
			{
				skillType: "LANGUAGES:",
				skillList: "English (Native), French (Limited working proficiency)",
			},
		],
	},
};

function App() {
	return (
		<div className='resume_border'>
			<section className='resume_header'>
				{/* Title */}
				<section className='title_line'>
					<h1 className='title_line_name'>{content.title.fullName}</h1>
					{/* <h3> {content.title.title} </h3> */}
				</section>
				{/* Contact Info */}
				<section className='contact_info'>
					<div className='contact_info_entry'>
						<FontAwesomeIcon icon={faEnvelope} />
						<span>{content.title.email}</span>
					</div>
					<div className='contact_info_entry'>
						<FontAwesomeIcon icon={faPhoneAlt} />
						<span>{content.title.phoneNumber}</span>
					</div>
					<div className='contact_info_entry'>
						<FontAwesomeIcon icon={faGithubSquare} />
						<span>{content.title.githubUsername}</span>
					</div>
					<div className='contact_info_entry'>
						<FontAwesomeIcon icon={faLinkedin} />
						<span>{content.title.linkedInLink}</span>
					</div>
				</section>
			</section>
			{/* Education block */}
			<InformationalBlock sectionTitle='EDUCATION'>
				<DateAndTitle
					title={content.education.universityName}
					subtitle={content.education.degreeName}
					date={content.education.dates}
				/>
				<Subtitle subtitle={content.education.gpa} />
				<p className='relevant_courses_text'>{content.education.relevantCourses}</p>
			</InformationalBlock>
			<InformationalBlock sectionTitle='EMPLOYMENT'>
				{content.employment.positions.map((position) => {
					return (
						<div>
							<DateAndTitle title={position.companyTitle} subtitle={position.positionTitle} date={position.dates} />
							<ul>
								{position.bulletPoints.map((bulletPoint) => {
									return <li>{bulletPoint}</li>;
								})}
							</ul>
						</div>
					);
				})}
			</InformationalBlock>
			<InformationalBlock sectionTitle={"TECHNICAL PROJECTS"}>
				{content.projectsAndOpenSource.projects.map((project) => {
					return (
						<>
							<DateAndTitle title={project.title} date={project.date} />
							<ul>
								<li>{project.description}</li>
							</ul>
						</>
					);
				})}
			</InformationalBlock>
			<InformationalBlock sectionTitle='SKILLS'>
				{content.skills.list.map((skill) => {
					return <Skill skillList={skill.skillList} skillType={skill.skillType}></Skill>;
				})}
			</InformationalBlock>
		</div>
	);
}

interface subtitleContent {
	subtitle: string;
}

const Subtitle: FC<subtitleContent> = (props) => {
	return (
		<div className='date_and_title_subtitle'>
			<span className='date_italic_text'>{"GPA: " + props.subtitle}</span>
		</div>
	);
};
interface InformationBlockContent {
	sectionTitle: string;
}

const InformationalBlock: FC<InformationBlockContent> = (props) => {
	return (
		<section>
			<div className='section_title'>
				<h3>{props.sectionTitle}</h3>
			</div>
			<div>{props.children}</div>
		</section>
	);
};

interface DateAndTitleContent {
	title: string;
	date: string;
	subtitle?: string;
}

const DateAndTitle: FC<DateAndTitleContent> = ({ title, date, subtitle }) => {
	return (
		<div className='date_and_title_container'>
			<div className='date_and_title_section'>
				<h4>{title}</h4>
				<span className='date_italic_text'>{date}</span>
			</div>
			{subtitle && (
				<div className='date_and_title_subtitle'>
					<span className='date_italic_text'>{subtitle}</span>
				</div>
			)}
		</div>
	);
};

interface SkillsContent {
	skillType: string;
	skillList: string;
}

const Skill: FC<SkillsContent> = ({ skillList, skillType }) => {
	return (
		<div style={{ display: "flex", gap: "5px", marginTop: "7px", alignItems: "center" }}>
			<h5>{skillType}</h5>
			<span>{skillList}</span>
		</div>
	);
};

export default App;
