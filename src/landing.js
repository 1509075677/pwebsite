import './main.css';

function Landing() {
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
    function a(){
        window.scrollTo(0,1200);
    }
    function c(){
        window.scrollTo(0,3500);
    }
    function w(){
        window.scrollTo(0,2000);
    }
    return(
        <div class="main">
            <style>{'body{background-color:#303231}'}</style>
            <div class='bar'>
                <div class="e1" onClick={a}>
                    <img src={require('./images/main/mainabout.svg').default} width="100" height="20"/></div>
                <div class="e2" onClick={c}>
                    <img src={require('./images/main/maincontact.svg').default}width="100" height="20"/></div>
                <div class="e3" onClick={w}>
                    <img src={require('./images/main/mainwork.svg').default} width="100" height="20"/></div>
            </div>
            <div class='name'>
                <img src={require('./images/main/mainname.svg').default}width="500" height="200"/></div>
            <div class='line'></div> 


            <div class='mainpageabout'>
                <img src={require('./images/main/mainpageabout.svg').default}width="400" height="100"/></div>
            <div class='mainpageabout2'>
                <img src={require('./images/main/mainpageabout2.svg').default}width="400" height="100"/></div>
            <div class='aboutquote'>
                <img src={require('./images/main/mainaboutquote.svg').default}width="900" height="600"/></div>
            <div class='line2'></div>


            <div class='mainexp'>
                <img src={require('./images/main/mainexp.svg').default}width="500" height="120"/></div>
            <div class='mainexp2'>
                <img src={require('./images/main/mainexp2.svg').default}width="500" height="120"/></div>
            <div class='line3'></div> 


            <div class='mainpagecontact'>
                <img src={require('./images/main/mainpagecontacts.svg').default} width="500" height="120"/></div>
            <div class='mainpagecontact2'>
                <img src={require('./images/main/mainpagecontacts2.svg').default} width="500" height="120"/></div>
            <div class='mainpagecontactquote'>
                <img src={require('./images/main/maincontactquote.svg').default} width="900" height="520"/></div>
            
            <div class='icon'>
                <div class="iconp" onClick={togithub}>
                    <img src={require('./images/contacts/contactsgithub.svg').default} width="90" height="52"/></div>
                <div class="iconp" onClick={toinstagram}>
                    <img src={require('./images/contacts/contactsinstagram.svg').default} width="90" height="52"/></div>
                <div class="iconp" onClick={tolinkedin}>
                    <img src={require('./images/contacts/contactslinkedin.svg').default} width="90" height="52"/></div>
            </div>

            <div class='line4'></div>
            

            
        </div>
    );
}
export default Landing;