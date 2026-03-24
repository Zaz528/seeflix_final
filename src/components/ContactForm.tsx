import './ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="name">Nom</label>
        <input
          className="contact-form__input"
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom"
          autoComplete="name"
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="email">Email</label>
        <input
          className="contact-form__input"
          type="email"
          id="email"
          name="email"
          placeholder="votre@email.com"
          autoComplete="email"
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">Message</label>
        <textarea
          className="contact-form__textarea"
          id="message"
          name="message"
          rows={5}
          placeholder="Écrivez votre message ici..."
        />
      </div>

      <button className="contact-form__submit" type="submit">
        Envoyer le message
      </button>
    </form>
  );
}

export default ContactForm;
