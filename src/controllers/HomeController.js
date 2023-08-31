import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Silva',
      email: 'Maria@gmail.com',
      idade: 50,
      peso: 55.5,
      altura: 1.60,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
