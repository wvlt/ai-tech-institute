import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CourseTile from './CourseTile';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CoursesPage = () => {
  const [openCourse, setOpenCourse] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
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
    oneDay: [
      {
        title: 'AI Basics in One Day',
        duration: '1 day',
        description: 'An intensive one-day course on AI basics.',
        outcomes: 'Understanding the fundamentals of AI.',
        topics: [
          'Introduction to AI',
          'Basic Machine Learning Concepts',
          'Real-world AI Applications'
        ],
        nextStartDate: new Date('2024-09-01')
      }
    ],
    oneWeek: [
      {
        title: 'Introduction to Data Science',
        duration: '1 week',
        description: 'A comprehensive one-week course on data science.',
        outcomes: 'Basic knowledge of data science concepts.',
        topics: [
          'Data Analysis',
          'Data Visualization',
          'Introduction to Machine Learning'
        ],
        nextStartDate: new Date('2024-10-15')
      }
    ],
    sixWeek: [
      {
        title: 'Machine Learning Crash Course',
        duration: '6 weeks',
        description: 'An accelerated six-week course on machine learning.',
        outcomes: 'Proficiency in basic machine learning techniques.',
        topics: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Model Evaluation and Tuning'
        ],
        nextStartDate: new Date('2024-11-05')
      }
    ],
    twelveWeek: [
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
        nextStartDate: new Date('2024-10-15')
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
        nextStartDate: new Date('2024-10-15')
      }
    ],
    twentyFourWeek: [
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
        nextStartDate: new Date('2024-09-01')
      }
    ]
  };

  const handleTileClick = (courseTitle) => {
    setOpenCourse(openCourse === courseTitle ? null : courseTitle);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4 text-theme-color1">Courses</h1>
        <p className="text-md mb-6 text-theme-color3">Explore our courses and choose the one that best fits your needs.</p>

        <button
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          className="bg-theme-color1 text-white px-4 py-2 rounded hover:bg-theme-color2 hover:text-theme-color1 mb-6"
        >
          {isCalendarOpen ? 'Close Calendar' : 'Open Calendar'}
        </button>

        <section id="one-day" className="mb-12 bg-gray-100 p-6 rounded border">
          <h2 className="text-2xl font-bold mb-4 text-theme-color1">1-Day Courses</h2>
          {courses.oneDay.map((course, index) => (
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

        <section id="one-week" className="mb-12 bg-gray-100 p-6 rounded border">
          <h2 className="text-2xl font-bold mb-4 text-theme-color1">1-Week Courses</h2>
          {courses.oneWeek.map((course, index) => (
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

        <section id="six-week" className="mb-12 bg-gray-100 p-6 rounded border">
          <h2 className="text-2xl font-bold mb-4 text-theme-color1">6-Week Courses</h2>
          {courses.sixWeek.map((course, index) => (
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

        <section id="twelve-week" className="mb-12 bg-gray-100 p-6 rounded border">
          <h2 className="text-2xl font-bold mb-4 text-theme-color1">12-Week Courses</h2>
          {courses.twelveWeek.map((course, index) => (
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

        <section id="twenty-four-week" className="mb-12 bg-gray-100 p-6 rounded border">
          <h2 className="text-2xl font-bold mb-4 text-theme-color1">24-Week Bootcamps</h2>
          {courses.twentyFourWeek.map((course, index) => (
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

      {isCalendarOpen && (
        <div className="flex-1 md:pl-12">
          <h2 className="text-2xl font-bold mb-4 text-theme-color1">Course Calendar</h2>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
