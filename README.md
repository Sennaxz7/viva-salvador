# Viva Salvador

Portal turístico multipágina sobre a cidade de Salvador, Bahia, desenvolvido como atividade prática do curso **Técnico em Desenvolvimento de Sistemas do SENAI**.

O projeto utiliza **Node.js com o módulo HTTP nativo**, HTML, CSS e JavaScript puro, sem frameworks de backend ou frontend. O objetivo principal da atividade foi compreender na prática o funcionamento de um servidor HTTP, roteamento, entrega de arquivos, códigos de status, Content-Types e APIs.

## 🌐 Projeto publicado

**Site:**  
https://viva-salvador.vercel.app

**API:**  
https://viva-salvador.vercel.app/api/cidade

---

## Sobre o projeto

O **Viva Salvador** é um portal turístico desenvolvido para apresentar diferentes aspectos da cidade de Salvador de forma moderna, responsiva e organizada.

A aplicação possui múltiplas páginas e um servidor próprio desenvolvido com Node.js, responsável por identificar as requisições recebidas e entregar o conteúdo correspondente.

O portal reúne conteúdos sobre:

- história de Salvador;
- principais pontos turísticos;
- cultura baiana;
- gastronomia;
- galeria de imagens;
- informações úteis para turistas;
- roteiros turísticos;
- mapa e localizações;
- API com informações estruturadas sobre a cidade.

Além da interface, o projeto explora conceitos importantes de desenvolvimento web no lado do servidor.

---

## Objetivo da atividade

A proposta da atividade foi desenvolver uma aplicação web utilizando o **módulo HTTP nativo do Node.js**, evitando frameworks como Express.

Com isso, funcionalidades que normalmente seriam abstraídas por frameworks foram implementadas diretamente no projeto, como:

- criação e inicialização do servidor HTTP;
- identificação de rotas;
- associação entre URLs e páginas HTML;
- leitura de arquivos com o módulo `fs`;
- manipulação de caminhos com o módulo `path`;
- entrega de arquivos estáticos;
- definição de MIME Types;
- tratamento de diferentes códigos HTTP;
- criação de uma API JSON;
- tratamento de páginas inexistentes com status `404`.

---

## Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| Node.js | Servidor da aplicação |
| HTTP nativo do Node.js | Recebimento e tratamento das requisições |
| File System (`fs`) | Leitura dos arquivos do projeto |
| Path | Manipulação dos caminhos dos arquivos |
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript | Interatividade da interface |
| IntersectionObserver | Animações durante o scroll |
| Lucide Icons | Ícones da interface |
| OpenStreetMap | Exibição do mapa |
| Vercel | Deploy da aplicação |

---

## Estrutura do projeto

```text
viva-salvador/
│
├── server.js
├── package.json
├── vercel.json
├── README.md
│
├── pages/
│   ├── index.html
│   ├── historia.html
│   ├── pontos-turisticos.html
│   ├── cultura.html
│   ├── gastronomia.html
│   ├── galeria.html
│   ├── informacoes.html
│   └── 404.html
│
└── public/
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── main.js
    │
    └── assets/
```

---

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Página inicial |
| GET | `/historia` | História de Salvador |
| GET | `/pontos-turisticos` | Principais pontos turísticos |
| GET | `/cultura` | Cultura e tradições |
| GET | `/gastronomia` | Gastronomia baiana |
| GET | `/galeria` | Galeria de imagens |
| GET | `/informacoes` | Informações úteis para turistas |
| GET | `/api/cidade` | API com informações de Salvador |

Qualquer rota inexistente retorna uma página personalizada juntamente com o status HTTP:

```text
404 Not Found
```

---

## Funcionamento do servidor

O servidor é criado utilizando diretamente o módulo HTTP do Node.js:

```js
const http = require('http');

const server = http.createServer((request, response) => {
    // tratamento das requisições
});
```

Cada requisição recebida possui sua URL analisada pelo servidor.

As páginas disponíveis são associadas às respectivas rotas:

```js
const pageRoutes = {
    '/': 'pages/index.html',
    '/historia': 'pages/historia.html',
    '/pontos-turisticos': 'pages/pontos-turisticos.html',
    '/cultura': 'pages/cultura.html',
    '/gastronomia': 'pages/gastronomia.html',
    '/galeria': 'pages/galeria.html',
    '/informacoes': 'pages/informacoes.html'
};
```

Ao encontrar uma rota válida, o servidor utiliza o módulo `fs` para ler o arquivo correspondente e enviá-lo como resposta HTTP.

Também existe tratamento específico para arquivos estáticos, JSON, erros e diferentes Content-Types.

---

## API

O projeto disponibiliza uma API através da rota:

```text
GET /api/cidade
```

A resposta possui o formato JSON e reúne informações sobre Salvador, incluindo dados da cidade, história, turismo, gastronomia e cultura.

Exemplo:

```json
{
  "cidade": {
    "nome": "Salvador",
    "estado": "Bahia",
    "pais": "Brasil",
    "fundacao": 1549
  },
  "historia": {
    "primeiraCapital": true
  },
  "turismo": {
    "pontosTuristicos": []
  },
  "gastronomia": [],
  "cultura": []
}
```

A API pode ser acessada em:

```text
https://viva-salvador.vercel.app/api/cidade
```

---

## Funcionalidades

- Portal com múltiplas páginas
- Navegação entre rotas reais do servidor
- Navbar fixa e responsiva
- Menu hambúrguer para dispositivos móveis
- Página atual destacada na navegação
- Cards de pontos turísticos
- Timeline da história de Salvador
- Seções sobre cultura e gastronomia
- Galeria responsiva de fotografias
- Lightbox para visualização de imagens
- Roteiros turísticos de 1, 2 e 3 dias
- Mapa integrado
- Animações durante o scroll
- API JSON
- Arquivos estáticos servidos pelo Node.js
- Tratamento de MIME Types
- Página de erro 404 personalizada
- Layout responsivo para desktop, tablet e smartphones

---

## Como executar localmente

### Pré-requisito

É necessário possuir o **Node.js** instalado.

### Clone o repositório

```bash
git clone https://github.com/Sennaxz7/viva-salvador.git
```

Entre na pasta:

```bash
cd viva-salvador
```

Execute o servidor:

```bash
npm start
```

ou:

```bash
node server.js
```

O projeto estará disponível em:

```text
http://localhost:3000
```

A API poderá ser acessada em:

```text
http://localhost:3000/api/cidade
```

---

## Conceitos praticados

Durante o desenvolvimento foram aplicados conceitos de:

- requisições e respostas HTTP;
- métodos HTTP;
- códigos de status;
- roteamento;
- manipulação de arquivos;
- MIME Types;
- APIs REST;
- JSON;
- organização de projetos;
- HTML semântico;
- CSS Grid;
- Flexbox;
- responsividade;
- manipulação do DOM;
- eventos em JavaScript;
- deploy de aplicações Node.js.

---

## Contexto acadêmico

Projeto desenvolvido como **atividade prática do curso Técnico em Desenvolvimento de Sistemas do SENAI**.

A atividade teve como foco a utilização do Node.js para compreender o funcionamento de servidores HTTP sem depender de frameworks de backend.

O desenvolvimento permitiu aplicar conceitos estudados durante o curso em uma aplicação web completa, desde o servidor até a interface apresentada ao usuário.

---

## Autor

**Mateus Sena**

GitHub:  
https://github.com/Sennaxz7

LinkedIn:  
https://www.linkedin.com/in/mateus-sena-480b0732a/