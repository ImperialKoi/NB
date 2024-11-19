import React, { useEffect, useRef } from 'react';
import LiveIcon from './assets/Live.svg';
import LearningIcon from './assets/Leaning.svg';
import RecordIcon from './assets/Record.svg';
import AnalyticsIcon from './assets/Analytics.svg';
import LockIcon from './assets/Lock.svg';
import Elipse from './assets/Elipse-Bottom.svg';
import Game from './assets/Game.svg'
import './Landing.css';

const features = [
  {
    icon: <img src={LiveIcon} alt="Personalized Profile Management" className="object-contain transition-transform duration-300" />,
    title: 'Personalized Profile Management',
    description: 'Define and manage your goals, projects, and interests all in one organized profile section.',
  },
  {
    icon: <img src={LearningIcon} alt="Curated Content Feed" className="object-contain transition-transform duration-300" />,
    title: 'Curated Content Feed',
    description: 'Receive a personalized feed of videos, live streams, and articles tailored to your interests.',
  },
  {
    icon: <img src={RecordIcon} alt="Interactive Progression Tree" className="object-contain transition-transform duration-300 " />,
    title: 'Interactive Progression Tree',
    description: 'Explore and learn new skills with a visual roadmap tailored to your chosen topics.',
  },
  {
    icon: <img src={AnalyticsIcon} alt="Dynamic Quiz Creator" className="object-contain transition-transform duration-300" />,
    title: 'Dynamic Quiz Creator',
    description: 'Test your knowledge with automatically generated quizzes based on your learning path.',
  },
  {
    icon: <img src={LockIcon} alt="Goal-Oriented Learning" className="object-contain transition-transform duration-300" />,
    title: 'Goal-Oriented Learning',
    description: 'Align your learning activities with your personal and professional goals, and track your progress.',
  },
  {
    icon: <img src={Game} alt="Gamified Learning Experience" className="object-contain transition-transform duration-300" />,
    title: 'Gamified Learning Experience',
    description: 'Enhance your learning with interactive challenges and achievements that make studying fun and engaging.',
  },
];

const Features: React.FC = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 10% of the element is visible
      }
    );

    featureRefs.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="bg-white h-screen flex flex-col justify-center pt-16 relative">
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center">
        {/* Section title */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-gray-900">Our Features</h2>
          <p className="text-lg text-gray-600 mt-4">Explore the powerful features that make learning personal, engaging, and goal-driven.</p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div className='hover:scale-105'>
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="feature-card flex flex-col items-center text-center bg-white p-8 shadow-lg rounded-lg slide-in transition-transform duration-300 h-56 hover:bg-gray-50"
              >
                {feature.icon}
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 mt-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Ellipse */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
        <img src={Elipse} alt="Decorative Ellipse" className="w-full max-w-none" style={{ marginBottom: '-10%' }} />
      </div>
    </section>
  );
};

export default Features;