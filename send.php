<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sccode";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

$sql = "INSERT INTO Contatos (nome, email, telefone, mensagem)
VALUES ('$nome', '$email', '$telefone', '$mensagem')";

if ($conn->query($sql) === TRUE) {
    echo "<script type='text/javascript'>alert('Mensagem enviada com sucesso!'); window.location.href = '.';</script>";
  } else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();
  ?>
