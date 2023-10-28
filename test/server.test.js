const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../server'); // Importe o seu servidor aqui

describe('Servidor', function () {
  it('Deve retornar uma resposta válida na raiz (/)', function (done) {
    request(app)
      .get('/')
      .end(function (err, res) {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('Deve retornar uma mensagem de "Hello, World!"', function (done) {
    request(app)
      .get('/')
      .end(function (err, res) {
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});
