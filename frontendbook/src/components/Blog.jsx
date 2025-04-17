
import React, { useState } from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Can Coffee Make You a Better Developer?",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Ammar",
      date: "Aug 18",
      description: "Exploring the connection between caffeine and productivity in coding. Can coffee really enhance your focus and make you a better developer? Many developers swear by their morning cup of coffee as the fuel to jump-start their day, but is there scientific evidence to back up the claim? In this post, we dive into research about caffeine's impact on focus, cognitive function, and overall productivity. We'll explore whether drinking coffee can indeed sharpen your problem-solving skills, improve your concentration, and increase the time you can spend in the 'flow' state while coding. But we'll also take a critical look at the downsides of excessive caffeine intake, such as jitters, anxiety, and disrupted sleep patterns. Finally, we provide tips on how to balance coffee consumption with a healthy work-life routine to maximize both productivity and well-being."
    },
    {
      id: 2,
      title: "The Pragmatic Programmer: Your Journey to Mastery",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Andrew Hunt & David Thomas",
      date: "Sep 2",
      description: "In 'The Pragmatic Programmer,' Andrew Hunt and David Thomas provide timeless wisdom on becoming a skilled software developer. The book covers a wide range of topics, from the importance of taking responsibility for your work to adopting pragmatic practices that lead to clean, maintainable code. With a focus on real-world examples and practical advice, the authors emphasize the importance of continuous learning and self-improvement. They introduce the concept of 'tools of the trade'—essential techniques and methodologies that help developers become more efficient, like version control, debugging techniques, and design patterns. Whether you're just starting out or have years of experience, this book offers valuable insights into how you can refine your skills, solve problems more effectively, and create high-quality software that stands the test of time. 'The Pragmatic Programmer' is a must-read for anyone looking to advance their career in software development and software engineering."
    },
    {
      id: 3,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      image: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Robert C. Martin",
      date: "Oct 10",
      description: "Robert C. Martin's 'Clean Code' is an essential guide for any developer who wants to write better, more readable code. The book covers the principles, patterns, and best practices for writing clean, efficient code that is easy to understand, maintain, and extend. Martin dives deep into the importance of writing code that communicates intent, keeps functions small and focused, and adheres to SOLID principles. 'Clean Code' provides numerous examples of bad code, showing how to refactor it into clean, effective solutions. The author argues that clean code isn't just about aesthetics—it's about creating a sustainable, high-quality product. In addition to technical advice, Martin also touches on the importance of developer ethics, collaboration, and discipline. Whether you're working alone or as part of a team, this book offers valuable lessons for creating software that is both functional and maintainable. For developers looking to level up their coding practices, 'Clean Code' is a must-read."
    },
    {
      id: 4,
      title: "The Mythical Man-Month: Essays on Software Engineering",
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Fred Brooks",
      date: "Nov 5",
      description: "Fred Brooks' 'The Mythical Man-Month' is a classic book on software engineering and project management. First published in 1975, it remains one of the most influential books in the field. Brooks delves into the complexities of software development, particularly the challenges that arise when scaling teams. The central idea of the book is that adding more people to a late software project only makes it later, a phenomenon known as 'Brooks' Law.' He argues that software engineering requires careful planning, communication, and the right balance between people and technology. The book is filled with insightful essays on the difficulties of managing large software projects, the importance of clear communication, and the need for realistic project estimates. Through his extensive experience as a software manager, Brooks emphasizes the importance of understanding the human aspects of software development and managing teams effectively. 'The Mythical Man-Month' is still relevant today and serves as a guide for software engineers, project managers, and anyone involved in large-scale software projects."
    },
    {
      id: 5,
      title: "You Don't Know JS: Scope & Closures",
      image: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Kyle Simpson",
      date: "Dec 12",
      description: "'You Don’t Know JS: Scope & Closures' is part of Kyle Simpson’s renowned 'You Don’t Know JS' series, which aims to provide a deep dive into JavaScript's most complex concepts. This particular volume focuses on understanding the often misunderstood topics of scope and closures in JavaScript. Simpson explains these concepts in clear, easy-to-understand language, breaking down the intricacies of how scope works in JavaScript and how closures enable powerful patterns like data encapsulation and functional programming. The book covers both lexical and dynamic scoping, providing practical examples of how closures are used in modern JavaScript development. Simpson also discusses the implications of closures for memory management and performance. By mastering scope and closures, developers can write more efficient, maintainable, and bug-free code. Whether you're a beginner or experienced developer, 'Scope & Closures' will give you a solid understanding of how these crucial JavaScript features work and how to use them effectively."
    },
    {
      id: 6,
      title: "JavaScript: The Good Parts",
      image: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Douglas Crockford",
      date: "Jan 3",
      description: "In 'JavaScript: The Good Parts,' Douglas Crockford takes a deep dive into the best features of JavaScript, focusing on the parts of the language that are most useful and powerful for developers. The book is a concise guide to writing clean and effective JavaScript code by highlighting the language’s strengths and showing how to avoid its pitfalls. Crockford explores features such as functions, objects, inheritance, and closures, providing practical examples of how these elements can be used to create well-structured, maintainable code. By emphasizing the good parts of JavaScript, Crockford enables developers to become more proficient in writing code that is both efficient and elegant. This book is an essential read for anyone looking to truly master JavaScript and unlock its full potential."
    },
    {
      id: 7,
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      date: "Feb 19",
      description: "'Design Patterns' is a seminal work that introduced developers to the concept of reusable solutions to common software design problems. Written by four experts in object-oriented programming, the book outlines 23 classic design patterns that have become a foundation for building scalable, maintainable, and flexible software. These patterns, such as Singleton, Factory Method, and Observer, provide developers with templates for solving common design issues while maintaining the principles of object-oriented programming. Each pattern is thoroughly explained with examples and use cases, allowing developers to understand how to apply these patterns in their own projects. This book is a must-read for software architects and developers who want to create more robust and efficient systems by leveraging proven design strategies."
    },
    {
      id: 8,
      title: "Refactoring: Improving the Design of Existing Code",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Martin Fowler",
      date: "Mar 1",
      description: "'Refactoring' by Martin Fowler is a comprehensive guide to improving the structure of existing code without changing its external behavior. The book covers the principles and techniques of refactoring, providing developers with a toolkit for making their code more readable, maintainable, and efficient. Fowler emphasizes the importance of code quality and explains how small, incremental changes can lead to significant improvements over time. The book includes numerous examples of refactorings, demonstrating how to identify areas of code that need improvement and how to apply refactorings to solve common problems. Whether you’re working on legacy code or striving to maintain high-quality code in a new project, 'Refactoring' provides the knowledge and techniques needed to keep your codebase clean and sustainable."
    },
    {
      id: 9,
      title: "The Clean Coder: A Code of Conduct for Professional Programmers",
      image: "https://images.pexels.com/photos/11035583/pexels-photo-11035583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Robert C. Martin",
      date: "Apr 12",
      description: "'The Clean Coder' by Robert C. Martin is a guide to professional software development practices and the code of ethics that every developer should follow. Martin emphasizes the importance of being disciplined, honest, and responsible when writing code, and he discusses how to develop a strong work ethic that leads to producing high-quality software. He also highlights the importance of communication and collaboration within teams, as well as time management and problem-solving skills. Through practical advice and real-world examples, 'The Clean Coder' teaches developers how to maintain their professionalism and improve their craft in an increasingly demanding field."
    },
    {
      id: 10,
      title: "Test-Driven Development: By Example",
      image: "https://images.pexels.com/photos/3772773/pexels-photo-3772773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Kent Beck",
      date: "May 23",
      description: "'Test-Driven Development: By Example' by Kent Beck is an essential book for software developers interested in adopting test-driven development (TDD) practices. The book explains the TDD methodology, which involves writing tests before writing the code that makes them pass. Beck demonstrates how TDD can improve the quality of software, make it easier to maintain, and reduce the number of bugs. Through detailed examples and case studies, he shows how TDD can be applied in real-world situations and why it’s a powerful approach to software development. This book is invaluable for developers looking to improve their testing practices and write more reliable code."
    },
    {
      id: 11,
      title: "Code Complete: A Practical Handbook of Software Construction",
      image: "https://images.pexels.com/photos/11035583/pexels-photo-11035583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      author: "Steve McConnell",
      date: "Jun 10",
      description: "'Code Complete' by Steve McConnell is a comprehensive guide to software construction that focuses on writing high-quality code. The book covers everything from design principles to coding techniques, with a focus on writing clear, readable, and maintainable code. McConnell also emphasizes the importance of testing, debugging, and refactoring, providing practical strategies for each stage of the development process. 'Code Complete' is a must-read for developers looking to improve their coding practices and produce reliable, well-structured software."
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-16  p-5 mt-16 w-[90%] m-auto">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const BlogCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);
   const id =post.id;
   console.log(id)
  return (
    <div className={`bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl items-center transition-shadow duration-300 
    flex flex-col md:${id % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-x-8`}>

      <img className=" w-full h-full md:h-96 md:w-[80%] object-cover" src={post.image} alt={post.title} />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="mt-2 text-gray-600 text-sm">
            {isExpanded ? post.description : `${post.description.substring(0, 150)}...`}
            <button 
            className="px-4 py-2 text-gray-900/70 text-[10px]  hover:text-gray-900/ transition"
            onClick={toggleReadMore}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
          </p>
          
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">By {post.author} • {post.date}</span>

        </div>
      </div>
    </div>
  );
};

export default Blog;
