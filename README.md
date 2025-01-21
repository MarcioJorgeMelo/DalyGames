# DalyGames

![project-image](public/read_me_images/home.PNG)

O **DalyGames** é uma rede social no qual você compartilha e demostra seu perfil de jogos para seus amigos. Desenvolvido com _Next, Tailwind, e TypeScript_, o site utiliza API padrão RESTFUL para gerenciamento de dados.
## Sumário

1. [Visão Geral do Projeto](#visão-geral-do-projeto-funcionalidades-principais)
   - [Destaque de jogos](#1-destaque-de-jogos)
   - [Dados Detalhados](#2-dados-detalhados)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas-linguagens-e-ferramentas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Screenshots](#screenshots)
   - [Iphone 14 pro max](#iphone-14-pro-max)
   - [Ipad pro](#ipad-pro)
   - [Mobile](#mobile)
   - [Desk](#desktop)
6. [Requisitos para Rodar o Projeto Localmente](#requisitos-para-rodar-o-projeto-localmente)
7. [Rodar o Projeto Localmente](#rodar-o-projeto-localmente)
8. [Autores](#autores)
9. [Licença](#licença)

## Visão Geral do Projeto (Funcionalidades Principais)

### 1. Destaque de jogos:

- Os usuários podem acessar os jogos nos quais encontra-se em destaque em todas as páginas do site para conhecê-los.

### 2. Dados Detalhados:

- **Capa:** Mostra a capa do jogos de uma forma elegante.
- **Nome:** Exibe o nome principal do game selecionado.
- **Descrição:** Acesso direto a descrição total, resumindo a premissa do jogo.
- **Plataformas:** Destaque das plataformas disponíveis para jogabilidade dos jogos.
- **Categorias:** Mostra todas as categorias que se encaixa no game.
- **Data de lançamento:** Exibe a data de lançamento do jogo.

## Tecnologias Utilizadas (Linguagens e ferramentas)

<table>
    <tr>
      <td align="center">
        <a href="https://nextjs.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="40px" alt="Next logo" />
          <br />
          <sub>
            <b>Next.JS</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://tailwindcss.com/">
          <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/tailwindcss/tailwindcss-original.svg" width="40px" alt="Tailwind CSS logo" />
          <br />
          <sub>
            <b>Tailwind CSS</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://www.typescriptlang.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" width="40px" alt="TypeScript logo" />
          <br />
          <sub>
            <b>TypeScript</b>
          </sub>
        </a>
      </td>
    </tr>
</table>
<table border-style="none">
  <tr>
    <td align="center">
      <a href="https://git-scm.com/">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="35px;" alt="logo git"/><br />
        <sub>
          <b>Git</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="35px;" alt="logo github"/>
        <br />
        <sub margin-top="50px;">
          <b>Github</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## Estrutura do Projeto

O projeto é organizado em vários arquivos para melhor organização do código e separação de interesses:

- `public/`: A pasta serve como o local para armazenar arquivos estáticos que não passam pelo processo de build do React e podem ser acessados diretamente no navegador.
- `src/`: Onde encontra-se o processo de desenvolvimento de todo o código-fonte do sistema.
- `components/`: A pasta contém todos os componentes utilizados na aplicação.
- `utils/`: A pasta contém toda lógica que é compartilhada e utiliza em todo código.
- `layout/`: Onde encontra-se a configuração de estruturação do layout e metadatas do site.
- `index.css`: Onde encontra-se a estilização global da aplicação.

## Screenshots

### Iphone 14 pro max

![App mobile Screenshot](public/read_me_images/iphone.PNG)

### Ipad pro

![App ipad Screenshot](public/read_me_images/ipad.PNG)

### Mobile

![App mobile Screenshot](public/read_me_images/mobile.PNG)

### Desktop

![App desktop Screenshot](public/read_me_images/home.PNG)
![App desktop Screenshot](public/read_me_images/search.PNG)
![App desktop Screenshot](public/read_me_images/gameDetail.PNG)
![App desktop Screenshot](public/read_me_images/profile.PNG)

## Requisitos para Rodar o Projeto Localmente

### Node.js e npm:

- Verifique se você tem o Node.js instalado. Caso contrário, faça o download e instale a versão mais recente do Node.js.
- O npm (Node Package Manager) é instalado automaticamente com o Node.js.

### Git:

- Certifique-se de ter o Git instalado em sua máquina. Se não tiver, você pode baixá-lo aqui.

### Editor de Texto ou IDE:

- Escolha um editor de texto ou uma IDE (Ambiente de Desenvolvimento Integrado) para trabalhar no código. Alguns exemplos populares incluem o Visual Studio Code, Sublime Text e Atom.

### Navegador Web:

- Você precisará de um navegador web para visualizar o aplicativo localmente. Recomendamos o uso do Google Chrome, Mozilla Firefox ou Microsoft Edge.

## Rodar o Projeto Localmente

**Clone o projeto**

```bash
  git clone https://github.com/MarcioJorgeMelo/DalyGames.git
```

**Vá para a pasta do projeto**

```bash
  cd DalyGames
```

**Abra o projeto no VSCode**

```bash
  code .
```

**Instale as dependências**

```bash
  npm install # Instala as dependências (se ainda não tiver feito)
```

**Abra com o React Server**

```bash
  npm run dev # Inicia o servidor NextJS
```

## Autores

- [@MarcioJorgeMelo](https://github.com/MarcioJorgeMelo)

## Licença

- [MIT](https://choosealicense.com/licenses/mit/)
