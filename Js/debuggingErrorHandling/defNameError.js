const MyError = new Error('Mensagem inválida');
MyError.name = 'InvalidMessage'

throw MyError;