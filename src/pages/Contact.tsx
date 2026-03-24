import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import './Contact.css';

function Contact() {
  return (
    <div>
      <Navbar />
      <main className="contact-page">
        <div className="contact-page__inner">
          <h1 className="contact-page__heading">Contactez-nous</h1>
          <p className="contact-page__sub">
            Une question, une suggestion ? Nous sommes là pour vous aider.
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
