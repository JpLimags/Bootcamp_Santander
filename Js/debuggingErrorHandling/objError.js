new Error(message, fileName, lineNumber);

const MyError = new Error('Mensagem Inválida');

throw MyError;