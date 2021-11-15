<?php
header('Location: https://www.sapp.rocks');
       $name = $_POST['name'];
       $email = $_POST['email'];
       $firma = $_POST['firma'];
       $plans = $_POST['plansInput'];
       $message = $_POST['message'];
       $from = 'From: My Contact Form';
       $to = 'v@sapp.rocks';
       $subject = 'sapp.rocks: Anfrage';

       $body = "From: $name\n E-Mail: $email\n Firma: $firma\n Plans: $plans\n Message:\n $message";
       mail ($to, $subject, $body);
           if (mail ($to, $subject, $body)) {
           echo '<p>Message Sent Successfully!</p>';
           } else {
           echo '<p>Ah! Try again, please?</p>';
           }
    ?>