# Meu espaço criativo

Site pessoal em Astro, com visual inspirado na energia independente do Newgrounds e um blog baseado em arquivos Markdown.

O tema claro é o padrão. Use o controle no canto superior direito para alternar entre claro e escuro; a preferência fica salva neste navegador.

## Desenvolvimento

```sh
npm install
npm run dev
```

Para gerar a versão de produção:

```sh
npm run build
```

## Publicar um artigo

Crie um arquivo `.md` dentro de `src/content/blog/`. O nome do arquivo vira o endereço do artigo. Inclua estes campos no frontmatter:

```md
---
title: "Título do artigo"
description: "Resumo curto que aparece na listagem."
publishedAt: 2026-10-20
tags:
  - criatividade
  - projetos
---

Escreva o artigo em Markdown abaixo do frontmatter.
```

Os artigos aparecem automaticamente na página `/blog/`. Cada tag também ganha uma página para filtrar artigos, e os links individuais usam o formato `/blog/nome-do-arquivo/`.

## Scripts

| Comando | Ação |
| --- | --- |
| `npm run dev` | Inicia o servidor local em `localhost:4321` |
| `npm run build` | Gera o site de produção em `./dist/` |
| `npm run preview` | Visualiza localmente a versão de produção |
| `npm run astro ...` | Executa comandos da CLI do Astro |
