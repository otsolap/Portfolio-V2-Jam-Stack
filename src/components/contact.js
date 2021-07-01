import React from "react"
import { RiSendPlane2Line } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <div className="grids col-1 sm-2">
        <h2>Ota yhteyttä!</h2>
        <div className="description" />
        <form
          className="contact-form"
          action="/kiitos"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><input name="bot-field" /></p>
          <p>
            <label><input required placeholder="Nimi *" type="text" name="name" /></label>
          </p>
          <p>
            <label><input required placeholder="Puhelin *" type="number" name="phone" /></label>
          </p>
          <p>
            <label><input required placeholder="Sähköposti *" type="email" name="email" /></label>
          </p>
          <p>
            <label><input
              placeholder="Aihe *"
              type="text"
              name="subject" /></label>
          </p>
          <p>
            <label><textarea placeholder="Viesti" name="message"></textarea></label>
          </p>
          <p className="text-align-center">
            <button className="button" type="submit">Lähetä<span className="icon -right"><RiSendPlane2Line /></span></button>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact