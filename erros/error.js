const MeuErro = new Error("Mensagem inválida");
MeuErro.name = "InvalidMessage";

throw MeuErro;