<?php

	// Contact Landing Page API End Point
	header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Content-Type: application/json');

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require_once './autoload.php';


    $name       = addslashes( $_POST['Name'] );
    $email      = addslashes( $_POST['Email'] );
    $phone      = addslashes( $_POST['Phone'] );
    $chat       = addslashes( $_POST['Chat'] );
    
    if( strlen( $chat  ) <= 10 ){
        echo json_encode( ['error','Too short message! Please enter something.' ] );
        die();
    }

    $htmltemplate = '
        <html>
            <head>
                <title>Growth Ninjas Website</title>
            </head>
            <body>
                <p style="height:30px;line-height:50px;font-size:15px">Growth Ninjas Website Contact Form Data</p>

                    <table border="0" cellpadding="0" cellspacing="0" style="background-color: #FFF;width: 50%;">
                    <tr>
                        <td style="border:solid 1px #DDD;width: 50%;height:40px;padding: 0 10px;">Name</td>
                        <td style="border:solid 1px #DDD;width: 50%;height:40px;padding: 0 10px;">'.$name.'</td>
                    </tr>
                    <tr>
                        <td style="border:solid 1px #DDD;width: 50%;height:40px;padding: 0 10px;">Email</td>
                        <td style="border:solid 1px #DDD;width: 50%;height:40px;padding: 0 10px;">'.$email.'</td>
                    </tr>
                    <tr>
                        <td style="border:solid 1px #DDD;width: 50%;height:40px;padding: 0 10px;">Phone</td>
                        <td style="border:solid 1px #DDD;width: 50%;height:40px;padding: 0 10px;">'.$phone.'</td>
                    </tr>
                    <tr>
                        <td style="border:solid 1px #DDD;width: 50%;height:40px;padding: 0 10px;">Chat</td>
                        <td style="border:solid 1px #DDD;width: 50%;height:40px;padding: 0 10px;">'.$chat.'</td>
                    </tr>
                </table>
            </body>
        </html>';

        $mail = new PHPMailer;

        $mail->Host       = 'mail.growthninjas.agency';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'dev@growthninjas.agency';
        $mail->Password   = 'NinjaAdmin123##';
        $mail->SMTPSecure = 'TLS';
        $mail->Port       = 587;
        
        $mail->addCustomHeader('X-custom-header', 'custom-value');
        
        $mail->CharSet = 'UTF-8';
        $mail->setFrom('dev@growthninjas.agency', '');
        $mail->addReplyTo('dev@growthninjas.agency', '');

        // Add Email list here //
        $mail->AddAddress( 'info@growthninjas.ae' );
        // End

        $mail->Subject = 'Growth Ninjas Contact Form Data';

        $mail->isHTML(true);
        $mail->MsgHTML($htmltemplate);

        if (!$mail->send()) {
            echo json_encode( ['error','Mailer Error: ' . $mail->ErrorInfo] );
        } else {
            echo json_encode( ['success','Our Team will contact you shortly'] );
        }

    
?>