<?php


$userName = $_POST['userNameFooter'];
$userPhone = $_POST['userPhoneFooter'];
$userQuestion = $_POST['userQuestionFooter'];


// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'ssl://smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'hyardlung@gmail.com';                     // SMTP username
    $mail->Password   = 'SiDD0804';                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('hyardlung@gmail.com', 'Dmitry');      //ящик, с которого приходят письма клиентам
    $mail->addAddress('mitrey.hurd@ya.ru');     // почта заказчика, куда падают заявки с сайта (например)

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}, его вопрос: ${userQuestion}";

    $mail->send();
    header('Location: thanks.html');      //куда пользователь попадёт после отправки формы
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}