<?php

    if(isset($_POST["email"]) &&empty($_POST["email"])){

        $nome = addslashes($_POST['name']);
        $email = addslashes($_POST['email']);
        $message = addslashes($_POST['message']);

        $to = 're.fbarcellos@hotmail.com';
        $subject = 'Contato Profissional - Desenvolvedor';
        $body = 'nome: '.$nome '\n'.
                'Email: '.$email'\n'.
                'Mensagem: '.$message;
        $header = "From: re.fbarcellossg@gmail.com".'\r\n'
                    .'Replay-To: '.$email'\r\n'
                    ."X=Mailer: PHP/".phpversion();

        if (mail($to, $subject, $body, $header)){
            echo("Email enviado");
        }else{echo("email não foi enviado, tente novamente");}
        
    }
        
?>