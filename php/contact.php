<style>
    body {
    margin: 0;
    padding: 0;
    max-width: 1600px;
    background-color: #F1FAEE;
    display: flex; 
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    }
    
    p {
        text-align: center;
        font-family: Helvetica;
        font-weight: bold;
        font-size: 4rem;
        padding: 20px;
        margin: 500px 100px 100px 100px;
    }
    
    a {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 9rem;
        color:#13CF93;
        text-decoration: none;
        padding: 25px;
        border: 5px solid #12a476;
    }
    
    a:hover {
        font-family: Helvetica;
        font-weight: bold;
        font-size: 9.1rem;
        color:#707070;
        text-decoration: none;
        padding: 25px;
        border: 5px solid #707070; 
    }
    

</style>

<html>
 <!--First Sphere -->   
        <div  style=" position: absolute;
                    margin-top: -1150px;
                    margin-left: -900px;" 
                    class="ballDiv12">
            <figure style=" display: block;
                            background: black;
                            margin: 0;
                            border-radius: 50%;
                            height: 400px;
                            width: 400px;
                            background: radial-gradient(circle at 200px 100px, #a5a5a5, #000);"
                            class="ball12">
                <span stlye="  background: radial-gradient(circle at 50% 50%,               rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba             (0, 0, 0, 0) 50%);
                                transform: rotateX(90deg) translateZ(-150px);" 
                                class="shadow12">
                </span>
            </figure>
        </div>
        
         <!--Second Sphere -->   
        <div  style=" position: absolute;
                    margin-top: 350px;
                    margin-left: 1350px;" 
                    class="ballDiv12">
            <figure style=" display: block;
                            background: black;
                            margin: 0;
                            border-radius: 50%;
                            height: 300px;
                            width: 300px;
                            background: radial-gradient(circle at 200px 130px, #a5a5a5, #000);"
                            class="ball12">
                <span stlye="  background: radial-gradient(circle at 50% 50%,               rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba             (0, 0, 0, 0) 50%);
                                transform: rotateX(90deg) translateZ(-150px);" 
                                class="shadow12">
                </span>
            </figure>
        </div>
        
        
<!--Third Sphere -->   
        <div  style=" position: absolute;
                    margin-top: 1550px;
                    margin-left: -200px;" 
                    class="ballDiv12">
            <figure style=" display: block;
                            background: black;
                            margin: 0;
                            border-radius: 50%;
                            height: 500px;
                            width: 500px;
                            background: radial-gradient(circle at 80px 120px, #a5a5a5, #000);"
                            class="ball12">
                <span stlye="  background: radial-gradient(circle at 50% 50%,               rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba             (0, 0, 0, 0) 50%);
                                transform: rotateX(90deg) translateZ(-150px);" 
                                class="shadow12">
                </span>
            </figure>
        </div>
</html>

<?php
 
if($_POST) {
    $visitor_name = "";
    $visitor_email = "";
    $email_title = "";
    $visitor_message = "";
    $email_body = "<div>";
     
    if(isset($_POST['visitor_name'])) {
        $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div> 
<label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span> 
</div>";
    }
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div> 
<label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span> 
</div>";
    }
     
    if(isset($_POST['email_title'])) {
        $email_title = filter_var($_POST['email_title'], FILTER_SANITIZE_STRING);
        $email_body .= "<div> 
<label><b>Reason For Contacting Us:</b></label>&nbsp;<span>".$email_title."</span> 
</div>";
    }

     
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
        $email_body .= "<div> 
<label><b>Visitor Message:</b></label> 
<div>".$visitor_message."</div> 
</div>";
    }

        $recipient = "tilly.jay.portfolio@gmail.com";

     
    $email_body .= "</div>";
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
     
    if(mail($recipient, $email_title, $email_body, $headers)) {
        echo "<p>Thanks .$visitor_name for dropping me a line. Expect a reply soon.</p>";
    } else {
        echo '<p>So sorry, something seems to have gone wrong</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
?>

<html>
    <a href="index.html">Home</a>
</html>
