<?php
       $name = $_POST['name'];
       $email = $_POST['email'];
       $firma = $_POST['firma'];
       $plans = $_POST['plans'];
       $message = $_POST['message'];
       $from = 'From: My Contact Form';
       $to = 'v@sapp.rocks';
       $subject = 'testing php script Vince project website?';

       for ($x = 0; $x <= 10; $x++) {
        echo "The number is: $x <br>";
      }

       $body = "From: $name\n E-Mail: $email\n Firma: $firma\n Plans: $plans\n Message:\n $message";

       if ($_POST['submit']) {
           if (mail ($to, $subject, $body, $from)) {
           echo '<p>Message Sent Successfully!</p>';
           } else {
           echo '<p>Ah! Try again, please?</p>';
           }
       }
    ?>