<?php
header('Location: https://www.sapp.rocks');
       $phoneNumber = $_POST['phoneNumber'];
       $date = $_POST['date'];
       $fromTime = $_POST['fromTime'];
       $toTime = $_POST['toTime'];
       $message = 'Call me back';
       $to = 'v@sapp.rocks';
       $subject = 'sapp.rocks: callback schedule';

       $body = "I scheduled a a callback. Please call this number: $phoneNumber. \n On date: $date from $fromTime to $toTime";
       mail ($to, $subject, $body);
           if (mail ($to, $subject, $body)) {
           echo '<p>Callback scheduled Successfully!</p>';
           } else {
           echo '<p>Ah! Try again, please?</p>';
           }
    ?>