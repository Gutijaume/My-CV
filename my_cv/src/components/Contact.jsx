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
      <p>🗺️{contact.city} </p>
      <p>🗓️{contact.birthDate}</p>
      <p>
        📧
        <a href={"mailto:" + contact.email}>
        gutijaume@hotmail.com
        </a>
      </p>
      <p>📱 {contact.phone}</p>
      <p>💾<a href={contact.gitHub}>
          GitHub
        </a></p>
    </div>
  </div>
);
};

