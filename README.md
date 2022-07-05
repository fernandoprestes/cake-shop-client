# cake-shop-client

Repositório `client` do projeto [cake-shop](cake-shop-client.vercel.app/). Repositório foi gerado através do [boilerpate-vue-js](https://github.com/fernandoprestes/boilerplate-vue3-js).

## Descrição

O repositório contem os códigos que faz parte do `Projeto Integrador II`, disciplina do curso de Bacharelado em Tecnologia da Informação da [UNIVESP](https://univesp.br/). O projeto simula uma loja de bolos com listagem, filtro, e busca de produtos através de uma API, contem um carrinho para armazenar o pedido usando o gerenciador de estado e uma página de pagamento e finalização do pedido.

## Tecnologias

A aplicação foi desenvolvida com:

- [Vite](https://vitejs.dev/)
- [Vue3](https://vuejs.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Tailwindcss](https://tailwindcss.com/)
- [Eslint](https://eslint.org/)
- [Eslint-plugin-vue](https://eslint.vuejs.org/)
- [Prettier](https://prettier.io/)
- [Vue Router](https://router.vuejs.org/)
- [icones.js](https://icones.js.org/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/)
- [Animate.css](https://animate.style/)

### Estrutura de Pastas

- `.vscode`: Settings para facilitar o desenvolvimento
- `assets/`: Recursos de css, img
  - `img`: Upload de imagens
- `components/`: Componentes da aplicação
  - `icon`: Componentes de icon
- `composables`: Funções encapsuladas reutilizáveis
- `pages/`: Páginas da aplicação
  - `Home`: Página principal `("/")`
  - `Checkout`: Página de agradecimento `("/checkout")`
  - `Payment`: Página de pagamento `("/payment")`
  - `Store`: Página com o menu de compras `("/store")`
- `router`: Rotas das pages
- `services`: Conexão com a API
- `store`: Store Pinia, objetos com o estado da aplicação
- `.eslintrc`: Configurações do ESLint
- `.prettierrc`: Configurações do Prettier
- `tailwind.config.js`: Configurações do tailwind
- `vite.config.js`: Configurações do vite

## Configurações do Projeto

```bash
# Clone o projeto
$ git clone https://github.com/fernandoprestes/cake-shop-client.git

# Acesse a pasta do projeto no cmd
$ cd cake-shop-client

# Abra o projeto no vscode
$ code .

# Instale as dependências
$ yarn install

# O servidor rodara na porta 3000
$ yarn dev

# acesse a aplicação http://localhost:3000

```

## Extensões recomendadas para o VScode

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Vue 3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

2022 - [github.com/fernandoprestes](https://github.com/fernandoprestes)
