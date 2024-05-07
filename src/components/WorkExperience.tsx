import React from 'react';
import './WorkExperience.scss';

interface ExperienceItemProps {
    companyName: string;
    companyUrl: string;
    position: string;
    duration: string;
    location: string;
    technologies: string;
    description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    companyName,
    companyUrl,
    position,
    duration,
    location,
    technologies,
    description,
}) => {
    return (
        <div className="experience-item">
            <a href={companyUrl} className="company-name" target="_blank" rel="noopener noreferrer">{companyName}</a>
            <h3>{position}</h3>
            <p>{duration}</p>
            <p>{location}</p>
            <p>Technologies: {technologies}</p>
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const WorkExperience: React.FC = () => {
    return (
        <section id="work-experience" className="work-experience-section">
            <h1>Work Experience</h1>
            <div className="experience-list">
                <ExperienceItem
                    companyName="Loyal"
                    companyUrl="https://loyalhealth.com/"
                    position="Software Engineer III"
                    duration="May 2022 – Apr 2024 • 1 yr 11 mos"
                    location="Remote"
                    technologies="ASP.NET Core • Kafka • SQL • Azure • CI/CD"
                    description={[
                        "Spearheaded the development of a patient outreach logging program, overseeing the entire lifecycle from conception to deployment, including pipeline setup and management, recording over 60,000 messages per month.",
                        "Played a pivotal role in developing a greenfield appointment reminders API and processing system, optimizing backend processes, and automating appointment retrieval and messaging for over 1,000,000 patients per month.",
                        "Played a pivotal role in developing a greenfield appointment reminders API and processing system, op- timizing backend processes,and automating appointment retrieval and messaging for over 1,000,000 patients per month.",
                        "Led the implementation of encryption for PHI data in patient workflows, ensuring data security across environments.",
                        "Introduced new functionality for campaign management, including automated deactivation and work- flow history tracking, improving traceability.",
                        "Implemented failover strategies and improved testing practices to enhance code quality and reliability, contributing to increased system stability.",
                        "Addressed scalability and performance concerns by implementing throttling and suppression mech- anisms for workflows, supporting nearly 2,000,000 patient workflows per year.",
                        "Introduced feature flagging for controlled feature releases, enhancing flexibility and enabling seamless feature management.",
                        "Position ended to RIF that impacted 35% of the company.",
                    ]}
                />
                <ExperienceItem
                    companyName="Clearview"
                    companyUrl="https://clearviewlive.com/"
                    position="Lead Software Engineer"
                    duration="Nov 2021 – May 2022 • 6 mos"
                    location="Remote"
                    technologies=".NET • SQL • MongoDB • Microservices • ASP.NET Web API"
                    description={[
                        "Promoted to team lead, managing 3 developers to build new and support existing API platforms.",
                        "Worked with product managers to re-architect an API web site into a modern web-app, refactoring to improve performance and reducing memory usage by 40%.",
                        "Refactored an existing program to implement xUnit testing, creating over 400 unit tests."
                    ]}
                />
                <ExperienceItem
                    companyName="Clearview"
                    companyUrl="https://clearviewlive.com/"
                    position="Software Engineer"
                    duration="Feb 2020 – Nov 2021 • 1 yr 9 mos"
                    location="Remote"
                    technologies=".NET • SQL • MongoDB • Microservices • ASP.NET Web API"
                    description={[
                        "Implemented 200+ REST API endpoints.",
                        "Created 3 client-specific REST-based Windows Service program to improve data ingestion flow.",
                        "Led the department implementation and adoption of JIRA, reducing the time to create and manage tickets by an average of 2 days."
                    ]}
                />
                <ExperienceItem
                    companyName="Kadince"
                    companyUrl="https://www.kadince.com/"
                    position="Junior Software Developer"
                    duration="Aug 2019 – Feb 2020 • 6 mos"
                    location="Ogden, United States"
                    technologies="Ruby on Rails • PostgreSQL • Node.js • React • TypeScript"
                    description={[
                        "Worked on developing front-end and back-end features of Ruby on Rails applications.",
                        "Collaborated with the team to build and maintain Node.js and React applications.",
                    ]}
                />
                <ExperienceItem
                    companyName="Datamaster"
                    companyUrl="https://datamasterusa.com/"
                    position="Intern Software Developer"
                    duration="Aug 2019 – Feb 2020 • 6 mos"
                    location="Layton, United States"
                    technologies=".NET • WPF (Windows Presentation Foundation)"
                    description={[
                        "Lead mentor for 5 new interns, responsible for continual training and tutoring.",
                        "Enhanced and added front-end and back-end features of .NET and VB.NET applications, increasing efficiency of the app and improving user experience.",
                        "Developed an in-house WPF program for automating file creation and database modification as a project lead with 2 members, saving a week's worth of work (40 hours) on a repetitive process.",
                    ]}
                />
                {/* Add more ExperienceItem components for each work experience */}
            </div>
        </section>
    );
};

export default WorkExperience;
