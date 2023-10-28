const chai = require('chai');
const expect = chai.expect;
const { JSDOM } = require('jsdom');
const jsdomGlobal = require('jsdom-global');
const fs = require('fs');
const path = require('path');

describe('Scripts do lado do cliente', function () {
  // Carrega o HTML em um ambiente jsdom antes de cada teste
  let cleanup;
  beforeEach(function () {
    cleanup = jsdomGlobal();
    const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8');
    global.document = new JSDOM(html).window.document;
  });

  // Desativa o ambiente jsdom após cada teste
  afterEach(function () {
    cleanup();
  });

  it('Deve fazer algo no lado do cliente', function () {
    // Seu código de teste para scripts do lado do cliente aqui
    // Por exemplo, selecione elementos no DOM e faça asserções
    const element = document.querySelector('#myElement');
    expect(element.textContent).to.equal('Hello, Client!');
  });
});
