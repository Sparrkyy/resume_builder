import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FC } from "react";

const content = {
	title: {
		fullName: "ETHAN HODGES",
		title: "COMPUTER SCIENCE STUDENT",
		email: "ethan.hodges@mail.mcgill.ca",
		phoneNumber: "610.888.4809",
		githubUsername: "Sparrkyy",
		linkedInLink: "/in/ethan-hodges",
	},
	education: {
		universityName: "MCGILL UNIVERSITY",
		dates: "2019-2022",
		gpa: "3.90",
		degreeName: "Bachlors Of Arts: Computer Science",
		relevantCourses:
			"Relevant Courses: Algorithims and Data Structures, Introduction to Software Systems, Software Design, Foundation of programming, Introduction to Computer Science, Discrete Mathematics",
	},
	employment: {
		positions: [
			{
				companyTitle: "Tote",
				dates: "May-Sep 2021",
				positionTitle: "Software Developer Intern",
				bulletPoints: [
					"Designed and implemented a graph data structure using Node.js and MongoDB to handle complex data relationships that is now used across all platforms.",
					"Played a key role in the reconstruction of a internal web app in React.js from Vue.js with over 80 commits pushed to production.",
					"Automated data workflow with python to allow for non-technical members to safely update data, and have those changes reflected across our platforms saving countless hours of work from the technical and non-technical teams.",
					"Created documention for, and added end points to our API for our various applications in Node.js.",
				],
			},
			{
				companyTitle: "Hard Eight Holdings LLC",
				dates: "Dec 2020 - May 2021",
				positionTitle: "Full Stack Developer Intern",
				bulletPoints: [
					"Played a key role in building and maintaining an internal dashboard that handles real time information and was integral to creating new bussiness oppertunties.",
					"Built a Python SDK for the dashboard to allow for manipulation of the displayed data from other programs.",
				],
			},
		],
	},
	projectsAndOpenSource: {
		projects: [
			{
				title: "McGill Tools Contributer",
				date: "June 2021 - Current",
				description:
					"Part of a team that is working to provide important services to the McGill community. With over 6000 current users, we provide services like notifications when classes open, and are working on providing a nofitication service for finals ",
			},
			{
				title: "Algorithim Visilizer",
				date: "June 2021 - Current",
				description: "A project that helps to visualize common graph algorithims. Created with Typescript, and React",
			},
			{
				title: "Heal and Hope Website",
				date: "May 2021 - Current",
				description:
					"Serves as the home page for the entire Heal and Hope organization. Created with Typescript, React, and Node.js",
			},
		],
	},
	skills: {
		list: [
			{
				skillType: "PROGRAMMING LANGAUGES:",
				skillList: "Java, JavaScript, TypeScript, Python, C, HTML/CSS",
			},
			{
				skillType: "FRAMEWORKS, LIBRARIES, AND TOOLS:",
				skillList: "Node.js, React.js, Vue.js, Firebase",
			},
			{
				skillType: "LANGAUGES",
				skillList: "English (Native), French (Fluent)",
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
			<InformationalBlock sectionTitle={"PROJECTS AND OPEN SOURCE"}>
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
		<div style={{ display: "flex", gap: "5px", marginTop: "7px" }}>
			<h5>{skillType}</h5>
			<span>{skillList}</span>
		</div>
	);
};

export default App;
