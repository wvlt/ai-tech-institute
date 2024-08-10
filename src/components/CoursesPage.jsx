import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CourseTile from './CourseTile';

const CoursesPage = () => {
  const [openCourse, setOpenCourse] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const courses = {
    bootcamps: [
      {
        title: 'AI and Data Science Fundamentals',
        duration: '24 weeks',
        description: 'Provides foundational knowledge and practical skills in AI and Data Science, preparing students for entry-level positions.',
        outcomes: 'Solid foundation in AI and Data Science, enabling further specialization or entry-level roles in data analytics, machine learning, and AI development.',
        topics: [
          'Introduction to AI and Data Science',
          'Python Programming for AI',
          'Statistics and Probability for Data Science',
          'Data Wrangling and Visualization',
          'Version Control (Git)',
          'Python Development',
          'Backend Development',
          'Frontend Development',
          'Machine Learning Basics',
          'Introduction to Deep Learning',
          'Project Work and Case Studies'
        ],
        nextStartDate: 'September 1, 2024'
      }
    ],
    skillUps: [
      {
        title: 'AI Engineering Advanced',
        duration: '12 weeks',
        description: 'Provides in-depth knowledge and hands-on experience in AI engineering, focusing on the design and implementation of AI systems.',
        outcomes: 'Ability to design, develop, and deploy advanced AI systems, preparing them for roles such as AI Engineer, Machine Learning Engineer, and AI Specialist.',
        topics: [
          'Advanced Machine Learning Techniques',
          'Deep Learning and Neural Networks',
          'Natural Language Processing (NLP)',
          'Computer Vision',
          'AI Model Optimization and Deployment',
          'AI Ethics and Governance',
          'Capstone Project'
        ],
        nextStartDate: 'October 15, 2024'
      },
      {
        title: 'Python Developer Course',
        duration: '12 weeks',
        description: 'This course provides comprehensive training on Python programming, covering fundamental concepts to advanced topics. Perfect for aspiring Python developers.',
        outcomes: 'Strong understanding of Python programming, enabling students to develop applications, work on data analysis, and prepare for roles such as Python Developer and Software Engineer.',
        topics: [
          'Introduction to Python Programming',
          'Data Structures and Algorithms',
          'Web Development with Flask',
          'Data Analysis with Pandas',
          'Working with APIs',
          'Automating Tasks with Python',
          'Project Work and Case Studies'
        ],
        nextStartDate: 'October 15, 2024'
      }
    ],
    shortCourses: [
      {
        title: 'ML Deployment Advanced',
        duration: '12 weeks',
        description: 'Focuses on the practical aspects of deploying machine learning models in real-world scenarios, emphasizing scalability, efficiency, and integration.',
        outcomes: 'Expertise in deploying and managing machine learning models, making them suitable for roles in AI operations, MLOps engineering, and data engineering.',
        topics: [
          'Model Deployment Strategies',
          'Cloud Platforms for AI (AWS, Azure, Google Cloud)',
          'MLOps (Machine Learning Operations)',
          'Model Monitoring and Maintenance',
          'Case Studies on Successful Deployments',
          'Final Deployment Project'
        ],
        nextStartDate: 'November 5, 2024'
      }
    ]
  };

  const handleTileClick = (courseTitle) => {
    setOpenCourse(openCourse === courseTitle ? null : courseTitle);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-green">Courses</h1>
      <p className="text-md mb-6 text-green">Explore our courses and choose the one that best fits your needs.</p>

      <section id="bootcamps" className="mb-12 bg-gray-100 p-6 rounded border">
        <h2 className="text-2xl font-bold mb-4 text-green">24-Week Bootcamps</h2>
        {courses.bootcamps.map((course, index) => (
          <CourseTile
            key={index}
            title={course.title}
            duration={course.duration}
            description={course.description}
            outcomes={course.outcomes}
            topics={course.topics}
            isOpen={openCourse === course.title}
            onClick={() => handleTileClick(course.title)}
            nextStartDate={course.nextStartDate}
          />
        ))}
      </section>

      <section id="skillups" className="mb-12 bg-gray-100 p-6 rounded border">
        <h2 className="text-2xl font-bold mb-4 text-green">12-Week Skill-ups</h2>
        {courses.skillUps.map((course, index) => (
          <CourseTile
            key={index}
            title={course.title}
            duration={course.duration}
            description={course.description}
            outcomes={course.outcomes}
            topics={course.topics}
            isOpen={openCourse === course.title}
            onClick={() => handleTileClick(course.title)}
            nextStartDate={course.nextStartDate}
          />
        ))}
      </section>

      <section id="shortcourses" className="mb-12 bg-gray-100 p-6 rounded border">
        <h2 className="text-2xl font-bold mb-4 text-green">12-Week Short Courses</h2>
        {courses.shortCourses.map((course, index) => (
          <CourseTile
            key={index}
            title={course.title}
            duration={course.duration}
            description={course.description}
            outcomes={course.outcomes}
            topics={course.topics}
            isOpen={openCourse === course.title}
            onClick={() => handleTileClick(course.title)}
            nextStartDate={course.nextStartDate}
          />
        ))}
      </section>
    </div>
  );
};

export default CoursesPage;
