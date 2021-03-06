import React from 'react'
import './Contact.css'


export default function Contact({contact}) {
  return (
    <div className="contact">
    <img src={contact.image} alt="Jaume profile" />
    <div className="card">
    <h2>
      {contact.name} {contact.surname}
    </h2>
      <p>πΊοΈ{contact.city} </p>
      <p>ποΈ{contact.birthDate}</p>
      <p>
        π§
        <a href={"mailto:" + contact.email}>
        gutijaume@hotmail.com
        </a>
      </p>
      <p>π± {contact.phone}</p>
      <p>πΎ<a href={contact.gitHub}>
          GitHub
        </a></p>
    </div>
  </div>
);
};

