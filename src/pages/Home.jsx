import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import "../App.css";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  useEffect(() => {
    const typingElement = document.querySelector('.typing-effect');
    
    const handleAnimationEnd = () => {
      typingElement.style.width = '0'; // Reset width
      setTimeout(() => {
        typingElement.style.animation = 'none'; // Reset animation
        // Trigger reflow to restart animation
        void typingElement.offsetWidth;
        typingElement.style.animation = 'typing 4s steps(30, end), blink 0.75s step-end infinite';
      }, 100); // Adjust the timeout as needed
    };

    typingElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      typingElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-4xl font-bold uppercase tracking-wider typing-container mt-20">
                <span className="typing-effect">Login to read posts.....</span>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
