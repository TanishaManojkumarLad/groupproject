
import "./contact.css";

function Form() {
  

  return (
    <div>
   
      <div className="container">
        <div className="contact-box">
          <div className="contact-leftside">
            <h3>Contact us!</h3>
            <form>
              <div className="contact-row">
                <div className="contact-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" name="name" />
                </div>
                <div className="contact-group">
                  <label>Phone </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    name="phone"
                  />
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" name="email" />
                </div>
                
                </div>
         
              <label>Message</label>
              <textarea rows="5" placeholder="Enter your message..."></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Us Here!</h3>
            <table>
              <tr className="data1">
                <td>Email:</td>
                <td>fakeemail@gmail.com</td>
              </tr>
              <tr className="data2">
                <td>Phone:</td>
                <td>4735745785873</td>
              </tr>
              <tr className="data3">
                <td>Adress:</td>
                <td>
                  kuufhhjfjkdhfj
                  <br />
                  djsfhjdfhdjsf
                  <br />
                 sdjkfhkjsd{" "}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};



export default function Contact(){
    return<div><Form/> </div>
}

