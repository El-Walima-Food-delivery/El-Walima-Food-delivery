const ContactUs = () => {
  return (
    <div>
      <h2>Get in Touch with Us!</h2>
      <p>
        We'd love to hear from you. Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default ContactUs;
