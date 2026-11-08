# Portfólio de Pedro Vendrame

Site estático (HTML, CSS e JavaScript puros) com visual do Windows XP.
Não precisa instalar nada: abra o `index.html` no navegador.

## Estrutura de arquivos

```
index.html        Conteúdo do site: textos, links, fotos (a parte que você mais edita)
CSS/estilo.css    Visual: cores, fontes, tamanhos, celular
JS/script.js      Relógio, ano do rodapé e destaque das abas da barra de tarefas
IMAGENS/
  background.jpg  Fundo do Windows XP (topo e grama)
  pedro.jpg       Sua foto na seção "Quem sou eu"
  IconePasta.png  Ícone das pastas
  favicon.ico     Ícone da aba do navegador (pasta do XP)
  favicon-180.png Versão do ícone para celular/iPhone
  hero-bg.png     Sem uso no momento (pode apagar)
  icones/         Ícones das redes (gmail, linkedin, github, instagram)
```

## Tarefas comuns

| Quero...                       | Onde mexer                                                                 |
|--------------------------------|----------------------------------------------------------------------------|
| Mudar um texto                 | `index.html`, edite entre as tags                                          |
| Trocar a foto                  | Substitua `IMAGENS/pedro.jpg` (ajuste `object-position` no CSS se precisar) |
| Adicionar um projeto           | `index.html`, copie um `<article class="projeto">` e troque os dados       |
| Adicionar uma tecnologia       | `index.html`, copie um `<li>` da lista `chips`                             |
| Atualizar link de rede social  | `index.html`, seção "Trabalhe comigo", mude o `href`                       |
| Adicionar rede social          | Coloque o `.svg` em `IMAGENS/icones/` e copie um `<li>` da lista `redes`   |
| Mudar cores                    | `CSS/estilo.css`, bloco `:root` no começo                                  |
| Adicionar nova seção           | Passo a passo comentado no `index.html`, logo antes do rodapé              |
| Atualizar o número do semestre | Adicione um cartão em `.numeros` ou um item em "O que estudo"              |

## Como as peças se conectam

- Cada seção tem um `id` (ex.: `id="projetos"`).
- A pasta do topo (`href="#projetos"`) e a aba da barra de tarefas
  (`href="#projetos"` e `data-alvo="projetos"`) precisam ter o mesmo nome.
  É assim que o clique rola até a seção e que a aba certa fica destacada.

## Publicar na internet (GitHub Pages)

1. Suba os arquivos para o repositório no GitHub.
2. Em **Settings > Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. O site fica disponível em `https://pedrovendramedev.github.io/NOME-DO-REPOSITORIO/`.

## Créditos dos ícones

- GitHub, Instagram e Gmail: [Simple Icons](https://simpleicons.org) (CC0)
- LinkedIn: [Devicon](https://devicon.dev) (MIT)
- Fundo e pasta: estilo Windows XP (imagens já presentes no projeto)
