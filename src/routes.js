const express = require('express');

const routes  = express.Router();

const AuthController       = require('../Controllers/AuthController');
const UsuarioController    = require('../Controllers/ProfessorController');
const AlunoController      = require('../Controllers/AlunoController');
const CursoController      = require('../Controllers/CursoController');
const TurmaController      = require('../Controllers/TurmaController');
const MateriaController    = require('../Controllers/MateriaController');
const AtividadeController  = require('../Controllers/AtividadeController');
const ProvaController      = require('../Controllers/ProvaController');
const VideoController      = require('../Controllers/VideoController');
const FrequenciaController = require('../Controllers/FrequenciaController');
const ListaController      = require('../Controllers/ListaController');

// Autenticação
routes.post('/session',    AuthController.index);

// Cadastros
// routes.post('/professor',  ProfessorController.create);
// routes.post('/aluno',      AlunoController.create);
// routes.post('/curso',      CursoController.create);
// routes.post('/turma',      TurmaController.create);
// routes.post('/materia',    MateriaController.create);
// routes.post('/prova',      ProvaController.create);
// routes.post('/atividade',  AtividadeController.create);
// routes.post('/frequencia', FrequenciaController.create);
// routes.post('/videos',     VideoController.create);

// Lista de todos os dados atualizados e ativos
// routes.get('/professor',  ProfessorController.index);
// routes.get('/aluno',      AlunoController.index);
// routes.get('/curso',      CursoController.index);
// routes.get('/turma',      TurmaController.index);
// routes.get('/materia',    MateriaController.index);
// routes.get('/prova',      ProvaController.index);
// routes.get('/atividade',  AtividadeController.index);
// routes.get('/frequencia', FrequenciaController.index);
// routes.get('/videos',     VideoController.index);

// Lista específicas para professor e aluno
// routes.get('/curso',      CursoController.lista);
// routes.get('/materia',    MateriaController.lista);
// routes.get('/turma',      TurmaController.lista);
// routes.get('/frequencia', FrequenciaController.lista);
// routes.get('/atividade',  AtividadeController.lista);
// routes.get('/prova',      ProvaController.lista);
// routes.get('/videos',     VideosController.lista);
// routes.get('/professor',  ProfessorController.lista);

// Atualização
// routes.update('/professor',  ProfessorController.update);
// routes.update('/aluno',      AlunoController.update);
// routes.update('/curso',      CursoController.update);
// routes.update('/turma',      TurmaController.update);
// routes.update('/materia',    MateriaController.update);
// routes.update('/prova',      ProvaController.update);
// routes.update('/atividade',  AtividadeController.update);
// routes.update('/frequencia', FrequenciaController.update);
// routes.update('/videos',     VideoController.update);

// Desativar
// routes.update('/professor',  ProfessorController.deactivate);
// routes.update('/aluno',      AlunoController.deactivate);
// routes.update('/curso',      CursoController.deactivate);
// routes.update('/turma',      TurmaController.deactivate);
// routes.update('/materia',    MateriaController.deactivate);

// Lista de todos os dados dezatualizados e desativados
// routes.get('/professor',  ListaController.index);
// routes.get('/aluno',      ListaController.index);
// routes.get('/curso',      ListaController.index);
// routes.get('/turma',      ListaController.index);
// routes.get('/materia',    ListaController.index);
// routes.get('/prova',      ListaController.index);
// routes.get('/atividade',  ListaController.index);
// routes.get('/frequencia', ListaController.index);
// routes.get('/videos',     ListaController.index);

module.exports = routes;