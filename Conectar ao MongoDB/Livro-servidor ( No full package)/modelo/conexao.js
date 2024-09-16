const mongoose = require('mongoose');

const uri = '@@@@@@@@@@@@@@@@@@';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 
})
.then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
})
.catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);

  console.error('Detalhes do erro:', err.message);
  console.error('Detalhes do erro stack:', err.stack);
});
