import Product from "../models/product";

const PRODUCTS = [
  new Product(
    "p1",
    "u1",
    "React Native & Redux MasterClass",
    "https://uditha.files.wordpress.com/2018/07/react-native.png",
    "This course will get you up and running with React Native quickly, and teach you the core knowledge you need to deeply understand and build React components for mobile devices.   We'll start by mastering the fundamentals of React, including JSX, 'props', 'state', and event handling. Source code is provided for each lecture, so you will always stay up-to-date with the course pacing.  Special attention has been paid to creating reusable components that you'll be able to make use of on your own fantastic projects.",

    1500
  ),
  new Product(
    "p2",
    "u1",
    "Complete Angular from Scratch 2019",
    "https://miro.medium.com/max/1899/1*eOE7VhXBlqdIJ9weEdHbQQ.jpeg",
    "Join the most comprehensive and popular Angular course on Udemy, because now is the time to get started! From Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!But that's not all! This course will also show you how to use the Angular CLI and feature a complete project, which allows you to practice the things learned throughout the course!",
    2000
  ),
  new Product(
    "p3",
    "u2",
    "MongoDB A-Z for Begineers",
    "https://i.udemycdn.com/course/480x270/1906852_93c6.jpg",
    "This course is a hands-on course - you'll learn by writing code/ commands. We'll work on a wide variety of example data and use-cases and by the end of the course, you'll have all the knowledge you need to work with MongoDB in your next project!This course is for you, no matter which programming language you plan on using, you'll learn a uniform way of interacting with MongoDB that can be easily applied to any language.",
    1200
  ),
  new Product(
    "p4",
    "u3",
    "Docker & Kubernetes for Begineers",
    "https://stalwartlearning.com/wp-content/uploads/2019/06/docker-kubernetes-training-Stalwart-Training.png",
    "In this course you'll learn Docker from absolute fundamentals, beginning by learning the answer to basic questions such as 'What is a container?' and 'How does a container work?'.  From the very first few lectures, we will do a deep dive on the inner workings of containers, so you get a core understanding of exactly how they are implemented.  Once you understand what a container is, you'll learn how to work with them using basic Docker CLI commands.  After that, you'll apply your new-found mastery of the Docker CLI to build your own custom images, effectively 'Dockerizing' your own personal applications. ",
    5000
  ),
  new Product(
    "p5",
    "u3",
    "A-Z on Cyber Security",
    "https://ebg1x6fwwx-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/shutterstock3-1080x675.jpg",
    "Learn a practical skill-set in defeating all online threats, including - advanced hackers, trackers, malware, zero days, exploit kits, cybercriminals and more.Become a Cyber Security Specialist - Go from a beginner to advanced in this easy to follow expert course. Covering all major platforms - Windows 7, Windows 8, Windows 10, MacOS and Linux.This course covers the fundamental building blocks of your required skill set - You will understand the threat and vulnerability landscape through threat modeling and risk assessments.We explore the Darknet and mindset of the cyber criminal. Covering malware, exploit kits, phishing, zero-day vulnerabilities and much more.",
    4000
  ),
  new Product(
    "p6",
    "u1",
    "Machine Learning with TensorFlow",
    "https://cognitiveclass.ai/wp-content/uploads/2016/11/Deep-Learning-with-TensorFlow-380x200.png",
    "TensorFlow 2.0 has just been released, and it introduced many features that simplify the model development and maintenance processes. From the educational side, it boosts people's understanding by simplifying many complex concepts. From the industry point of view, models are much easier to understand, maintain, and develop.",
    5000
  )
];

export default PRODUCTS;
