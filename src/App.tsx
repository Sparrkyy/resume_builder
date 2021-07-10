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
		degreeName: "Backlors Of Arts: Computer Science",
		relevantCourses:
			"Relevant Courses: Foundation of programming, Introduction to Computer Science, Algorithms and Data Structures, Introduction to Software Systems, Software Design. Discrete Mathematics, Linear Algebra, Linear Algebra and Geometry, Calculus 1, Calculus 2.",
	},
	employment: {
		positions: [
			{
				companyTitle: "Tote",
				dates: "May-Sep 2021",
				positionTitle: "Software Developer Intern",
				bulletPoints: [
					"Redesigned and Reconstructed tagging web application in order to correspond to the new taxonomy",
					"Automated taxonomy data to allow for the non-technical team members to edit the taxonomy and have those changes reflected in the code saving countless hours of work",
					"Restructured and migrated the backend after the controlling employee left",
					"Designed the way that our clothing taxonomy was coded as to allow for consistency across all of our platforms",
				],
			},
			{
				companyTitle: "Hard Eight Holdings LLC",
				dates: "Dec 2020 - May 2021",
				positionTitle: "Full Stack Developer Intern",
				bulletPoints: [
					"Built and maintained an internal dashboard that handles real time stock information with React.js, Firebase, and Node.js",
					"Built a Python SDK for the dashboard to allow for manipulation of the data",
					"Played a large role in creating new business opportunities through the above work",
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
				skillList: "English (Native), French (Conversational)",
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
					<h3> {content.title.title} </h3>
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
