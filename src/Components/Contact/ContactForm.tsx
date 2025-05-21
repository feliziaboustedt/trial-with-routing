import "./ContactForm.css"

export const ContactForm = () => {

      const sendMail = () => {

    }

    return <>
     <div className="ContactForm">
        <form onSubmit={sendMail}>
            <label htmlFor="name">Namn:</label>
            <input type="text" name="name" id="name" placeholder="t.ex. Felizia" />
            <label htmlFor="company">Företag:</label>
            <input type="text" name="company" id="company" />
            <label htmlFor="textbox">Fyll i ditt meddelande:</label>
            <input type="textbox" name="textbox" id="textbox" />
            <button>Skicka</button>
        </form>
    </div>
    </>
}