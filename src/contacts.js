import {useNavigate} from "react-router-dom";
import './contacts.css'

function Contacts() {
    function toinstagram(){
        window.location="https://www.instagram.com/jasxv9/";
    }
    function tolinkedin(){
        window.location="https://www.linkedin.com/in/jason-chen-395523221/";
    }
    function togithub(){
        window.location="https://github.com/1509075677";
    }
    function toresume(){
        window.location="https://drive.google.com/file/d/1uk7q6qIARsacXUagzf7K8fTx7tMaO2l2/view";
    }
    return(
        <div>
            <div class="title"><img src={require('./images/contacts/contactstitle.svg').default}/></div>
            <div class="name"><img src={require('./images/contacts/contactsname.svg').default}/></div>
            <div class='icon'>
                <div class="iconp" onClick={togithub}>
                    <img src={require('./images/contacts/contactsgithub.svg').default}/></div>
                <div class="iconp" onClick={toinstagram}>
                    <img src={require('./images/contacts/contactsinstagram.svg').default}/></div>
                <div class="iconp" onClick={tolinkedin}>
                    <img src={require('./images/contacts/contactslinkedin.svg').default}/></div>
            </div>
        </div>
    );
}
export default Contacts;