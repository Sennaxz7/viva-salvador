const http = require('http')
const path = require('path')
const fs = require("fs")

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const pageRoutes = {
  '/': 'pages/index.html',
  '/historia': 'pages/historia.html',
  '/pontos-turisticos': 'pages/pontos-turisticos.html',
  '/cultura': 'pages/cultura.html',
  '/gastronomia': 'pages/gastronomia.html',
  '/galeria': 'pages/galeria.html',
  '/informacoes': 'pages/informacoes.html'
};

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

const cidadeData = {
  cidade: {
    nome: 'Salvador',
    estado: 'Bahia',
    pais: 'Brasil',
    fundacao: 1549,
    descricao: 'Capital baiana marcada pela Baía de Todos-os-Santos, pelo Centro Histórico e por uma das expressões culturais afro-brasileiras mais influentes do país.'
  },
  historia: {
    primeiraCapital: true,
    periodoCapital: '1549–1763',
    patrimonioMundial: 'Centro Histórico inscrito pela UNESCO em 1985',
    descricao: 'Fundada como sede do Governo-Geral, Salvador teve papel político, portuário, econômico e cultural central na formação do Brasil.'
  },
  turismo: {
    pontosTuristicos: [
      { nome: 'Pelourinho', categoria: 'História e Cultura', descricao: 'Núcleo de ruas, largos, igrejas e casario do Centro Histórico.' },
      { nome: 'Farol da Barra', categoria: 'Mar e História', descricao: 'Farol e fortificação na entrada da Baía de Todos-os-Santos.' },
      { nome: 'Elevador Lacerda', categoria: 'Arquitetura', descricao: 'Marco urbano que conecta a Cidade Alta à Cidade Baixa.' },
      { nome: 'Mercado Modelo', categoria: 'Cultura e Artesanato', descricao: 'Espaço tradicional de compras, artesanato e cultura na Cidade Baixa.' },
      { nome: 'Igreja do Senhor do Bonfim', categoria: 'Fé e Patrimônio', descricao: 'Um dos principais símbolos religiosos e culturais de Salvador.' },
      { nome: 'Dique do Tororó', categoria: 'Cultura e Paisagem', descricao: 'Espelho d’água urbano conhecido pelas esculturas dos orixás.' },
      { nome: 'Rio Vermelho', categoria: 'Gastronomia e Vida Noturna', descricao: 'Bairro boêmio com restaurantes, praias e intensa vida cultural.' },
      { nome: 'Porto da Barra', categoria: 'Praia', descricao: 'Praia urbana de águas mais tranquilas e pôr do sol marcante.' }
    ]
  },
  gastronomia: [
    { nome: 'Acarajé', descricao: 'Bolinho de feijão-fradinho frito em azeite de dendê, tradicionalmente servido com acompanhamentos como vatapá e camarão.' },
    { nome: 'Abará', descricao: 'Massa de feijão-fradinho temperada, envolvida em folha de bananeira e cozida no vapor.' },
    { nome: 'Moqueca baiana', descricao: 'Preparação de peixe ou frutos do mar com temperos, leite de coco e azeite de dendê.' },
    { nome: 'Vatapá', descricao: 'Creme de sabor intenso associado à tradição culinária afro-baiana.' },
    { nome: 'Caruru', descricao: 'Prato à base de quiabo, temperos e ingredientes característicos da cozinha baiana.' },
    { nome: 'Cocada', descricao: 'Doce de coco em diferentes texturas e versões, muito presente na Bahia.' }
  ],
  cultura: [
    'Capoeira',
    'Carnaval',
    'Samba-reggae',
    'Blocos afro',
    'Festas populares',
    'Artesanato',
    'Arquitetura histórica',
    'Música e literatura afro-brasileiras'
  ]
};