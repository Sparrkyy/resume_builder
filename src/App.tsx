import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FC } from "react";

function App() {
	return (
		<div className='resume_border'>
			<section className='resume_header'>
				{/* Title */}
				<section className='title_line'>
					<h1 className='title_line_name'>ETHAN HODGES</h1>
					<h3>COMPUTER SCIENCE STUDENT</h3>
				</section>
				{/* Contact Info */}
				<section className='contact_info'>
					<div className='contact_info_entry'>
						<FontAwesomeIcon icon={faEnvelope} />
						<span>ethan.hodges@gmail.com</span>
					</div>
					<div className='contact_info_entry'>
						<FontAwesomeIcon icon={faPhoneAlt} />
						<span>610.888.4809</span>
					</div>
					<div className='contact_info_entry'>
						<FontAwesomeIcon icon={faGithubSquare} />
						<span>Sparrkyy</span>
					</div>
					<div className='contact_info_entry'>
						<FontAwesomeIcon icon={faLinkedin} />
						<span>/in/ethan-hodges</span>
					</div>
				</section>
			</section>
			{/* Education block */}
			<InformationalBlock sectionTitle='EDUCATION'>
				<DateAndTitle title='MCGILL UNIVERSITY' subtitle='Bachlors Of Arts: Computer Science' date='2019-2022' />
				<p className='relevant_courses_text'>
					Relevant Courses: Foundation of programming, Introduction to Computer Science, Algorithms and Data Structures,
					Introduction to Software Systems, Software Design. Discrete Mathematics, Linear Algebra, Linear Algebra and
					Geometry, Calculus 1, Calculus 2.
				</p>
			</InformationalBlock>
			<InformationalBlock sectionTitle='EMPLOYMENT'>
				<DateAndTitle title='TOTE' subtitle='Software Developer Intern' date='May-Sep 2021' />
				<ul>
					<li>Redesigned and Reconstructed tagging web application in order to correspond to the new taxonomy</li>
					<li>
						Automated taxonomy data to allow for the non-technical team members to edit the taxonomy and have those
						changes reflected in the code saving countless hours of work
					</li>
					<li>Restructured and migrated the backend after the controlling employee left</li>
					<li>
						Designed the way that our clothing taxonomy was coded as to allow for consistency across all of our
						platforms
					</li>
				</ul>
				<DateAndTitle title='Hard Eight Holdings LLC' subtitle='Software Developer Intern' date='Dec 2020-May 2021' />
				<ul>
					<li>
						Built and maintained an internal dashboard that handles real time stock information with React.js, Firebase,
						and Node.js.{" "}
					</li>
					<li>Built a Python SDK for the dashboard to allow for manipulation of the data.</li>
					<li>Played a large role in creating new business opportunities through the above work</li>
				</ul>
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
	subtitle: string;
}

const DateAndTitle: FC<DateAndTitleContent> = ({ title, date, subtitle }) => {
	return (
		<>
			<div className='date_and_title_section'>
				<h4>{title}</h4>
				<span className='date_italic_text'>{date}</span>
			</div>
			<div className='date_and_title_subtitle'>
				<span className='date_italic_text'>{subtitle}</span>
			</div>
		</>
	);
};

export default App;
