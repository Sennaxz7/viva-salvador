# Viva Salvador

Portal turístico acadêmico sobre Salvador, Bahia, desenvolvido para demonstrar a criação de um servidor web usando **Node.js com o módulo HTTP nativo**, sem Express e sem frameworks de frontend.

## Tecnologias

- Node.js
- módulo nativo `http`
- módulos nativos `fs` e `path`
- HTML5
- CSS3 (Grid, Flexbox e Media Queries)
- JavaScript puro
- IntersectionObserver
- Lucide Icons via CDN
- Google Fonts
- OpenStreetMap (mapa incorporado)

## Estrutura

```text
viva-salvador/
├── server.js
├── package.json
├── README.md
├── pages/
│   ├── index.html
│   ├── historia.html
│   ├── pontos-turisticos.html
│   ├── cultura.html
│   ├── gastronomia.html
│   ├── galeria.html
│   ├── informacoes.html
│   └── 404.html
└── public/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── assets/
        └── logo-mark.svg
```

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Página inicial |
| `/historia` | História de Salvador |
| `/pontos-turisticos` | Pontos turísticos |
| `/cultura` | Cultura e tradições |
| `/gastronomia` | Gastronomia baiana |
| `/galeria` | Galeria de imagens |
| `/informacoes` | Informações úteis |
| `/api/cidade` | API JSON |

Rotas inexistentes retornam **HTTP 404** e exibem a página personalizada de erro.

## Como executar

O projeto não possui dependências de backend. É necessário apenas ter o Node.js instalado.

```bash
npm install
npm start
```

Ou diretamente:

```bash
node server.js
```

Depois acesse:

- `http://localhost:3000`
- `http://localhost:3000/api/cidade`

Se a variável de ambiente `PORT` estiver definida, o servidor usará esse valor; caso contrário, utilizará a porta `3000`.

## API

A rota `GET /api/cidade` retorna JSON contendo:

- dados básicos da cidade;
- resumo histórico;
- pontos turísticos;
- gastronomia;
- elementos culturais.

A resposta utiliza `Content-Type: application/json; charset=utf-8` e `JSON.stringify()`.

## Imagens e fontes de referência

As fotografias do projeto são carregadas a partir de arquivos públicos do **Wikimedia Commons** e mantêm seus respectivos créditos/licenças nas páginas de origem. Entre os arquivos utilizados estão imagens de Pelourinho, Farol da Barra, Elevador Lacerda, Mercado Modelo, Igreja do Bonfim, Dique do Tororó, Rio Vermelho, Porto da Barra, Baía de Todos-os-Santos, acarajé, moqueca e cocada.

Referências factuais principais:

- UNESCO — Historic Centre of Salvador de Bahia: https://whc.unesco.org/en/list/309
- Portal Salvador da Bahia — Centro Histórico: https://www.salvadordabahia.com/centro-historico/
- Wikimedia Commons — fotografias utilizadas no layout.

## Observações acadêmicas

O `server.js` utiliza uma tabela de rotas, funções auxiliares para arquivos, JSON, MIME types e erros. A implementação evita uma cadeia extensa de `if/else` e mantém a lógica legível para fins de estudo.
