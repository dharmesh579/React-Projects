import NavBar from "./NavBar";

function Contact() {
  return (
    <>
      <div className="container">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
