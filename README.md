# Agile Solution – Website Institucional

## Visão geral

Este repositório contém o site institucional da **Agile Solution**, empresa especializada em desenvolvimento de software, integrações entre sistemas, automações com IA e soluções conectadas a ERP.  
O foco do projeto é **apresentar a empresa de forma clara, transmitir credibilidade e gerar leads qualificados** por meio de formulários, chamadas para ação e contato direto via WhatsApp.

- **Acesso ao site em produção:** https://www.agilesolution.com.br  
- **Objetivo principal:** ser um hub institucional moderno, voltado a negócios B2B, mostrando serviços, cases, tecnologias e um canal simples de contato.

## Objetivos do projeto

- Criar um **site institucional enxuto e direto**, pensado para gestores, diretores e times de TI.
- **Gerar leads** por meio de formulário de contato integrado (FormSubmit) e botão flutuante de WhatsApp.
- Reforçar **autoridade e confiança** com seções de clientes, certificações e tecnologias utilizadas.
- Servir como **vitrine de habilidades front-end** (HTML5, CSS3 e JavaScript) para recrutadores e parceiros.

## Principais funcionalidades e destaques

- **Hero section com efeito de typing** no título, destacando a proposta de valor da marca.
- **Navegação suave** entre seções (scroll suave e âncoras sem recarregar a página).
- **Sessão de serviços** com carrossel horizontal contínuo, destacando soluções em desenvolvimento, integrações e automações.
- **Carrossel infinito de clientes**, com logos em movimento e pausa ao passar o mouse.
- **Seção de tecnologias** com as principais stacks utilizadas no dia a dia (Oracle, Java, JS, Python, React, etc.).
- **Seção de certificações**, reforçando credenciais e conformidade com LGPD.
- **Formulário de contato completo**, captando e-mail, nome, telefone e mensagem, integrado ao FormSubmit.
- **Botão flutuante de WhatsApp**, facilitando o contato rápido e aumentando a taxa de conversão.
- **Link direto para Agile Robots**, destacando o serviço de automação via agentes digitais.

## Efeitos visuais e experiência de usuário

- **Animações de entrada suaves** (fade-in, zoom-in, slide-left, drop-in, blur-in) acionadas via `IntersectionObserver`, deixando a experiência mais fluida sem exageros.
- **Carrosséis horizontais** (serviços e clientes) implementados em JavaScript puro, com rolagem contínua, pausa em hover e ajuste dinâmico em `resize`.
- **Menu responsivo** com abertura/fechamento em telas menores e foco em acessibilidade (atributos ARIA).
- **Scroll suave** até seções específicas ao clicar nos itens de menu e botões de chamada para ação.
- **Tipografia e layout responsivo**, utilizando Google Fonts (Montserrat) e CSS organizado por seções.

## Tecnologias utilizadas

- **HTML5** – Estrutura semântica, metadados completos e marcação organizada por seções.
- **CSS3 (modularizado)** – Arquivos separados por área (`base`, `header`, `secao-principal`, `secao-servicos`, `secao-clientes`, `secao-contato`, etc.).
- **JavaScript Vanilla** – Interações de UI (menu responsivo, scroll suave, carrosséis, typing effect, animações com `IntersectionObserver`).
- **SEO & Analytics**
  - Metatags de descrição, palavras-chave e autor.
  - Metatags Open Graph e Twitter para compartilhamento em redes sociais.
  - Marcações **JSON-LD (Schema.org)** para organização/empresa.
  - Integração com **Google Analytics (gtag.js)**.
- **FormSubmit** – Integração simples para envio de formulários sem backend próprio.

## Como executar localmente

1. Faça o download ou clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   cd agile-website
   ```
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou via servidor local simples).
3. Opcionalmente, utilize uma extensão/servidor estático (como Live Server) para recarregamento automático durante o desenvolvimento.

> Observação: o formulário em produção envia os dados via FormSubmit. Em ambiente local, o comportamento é o mesmo, desde que haja conexão com a internet.

## Deploy

- **Hospedagem:** GitHub Pages com domínio customizado.
- **Domínio configurado:** `agilesolution.com.br` (arquivo `CNAME` na raiz do projeto).

---

# Agile Solution – Institutional Website (EN)

## Overview

This repository contains the institutional website for **Agile Solution**, a Brazilian company focused on software development, system integrations, AI automations and ERP–connected solutions.  
The main goal is to **present the company, build trust and generate qualified leads** through contact forms, CTAs and direct WhatsApp contact.

- **Live site:** https://www.agilesolution.com.br  
- **Core purpose:** a clean and modern B2B institutional website showcasing services, clients, technologies and an easy way to get in touch.

## Project goals

- Build a **straightforward institutional website** aimed at managers, directors and tech teams.
- **Generate leads** through a contact form (FormSubmit) and a floating WhatsApp button.
- Reinforce **authority and credibility** with sections for clients, certifications and technologies.
- Work as a **front-end portfolio piece**, highlighting HTML5, CSS3 and vanilla JavaScript skills.

## Main features and highlights

- **Hero section with typing effect** on the main title to reinforce the brand message.
- **Smooth navigation between sections** (anchor-based scrolling without full page reload).
- **Services section** with a continuous horizontal carousel, showcasing development, integration and automation solutions.
- **Infinite client logo carousel**, with subtle movement and hover pause.
- **Technologies section** listing the key stacks used daily (Oracle, Java, JS, Python, React, etc.).
- **Certifications section**, highlighting credentials and compliance with LGPD.
- **Full contact form**, collecting email, name, phone and message, integrated with FormSubmit.
- **Floating WhatsApp button**, encouraging quick contact and improving conversion.
- **Direct link to Agile Robots** service, presenting the automation solution with digital agents.

## Visual effects & UX

- **Subtle entrance animations** (fade-in, zoom-in, slide-left, drop-in, blur-in) powered by `IntersectionObserver`, improving perceived quality without harming performance.
- **Horizontal carousels** (services and clients) implemented with vanilla JavaScript, continuous scroll, hover pause and dynamic resize handling.
- **Responsive navigation menu** with open/close behavior on mobile and ARIA attributes for better accessibility.
- **Smooth scrolling** to specific sections when clicking menu items and CTAs.
- **Responsive layout and typography**, using Google Fonts (Montserrat) and section-based CSS organization.

## Tech stack

- **HTML5** – Semantic structure, complete metadata and sectioned markup.
- **CSS3 (modular)** – Styles split by area (`base`, `header`, main sections, services, clients, contact, etc.).
- **Vanilla JavaScript** – UI interactions (responsive header, smooth scroll, carousels, typing effect, intersection-based animations).
- **SEO & Analytics**
  - Description and keywords meta tags.
  - Open Graph and Twitter meta tags for social sharing.
  - **JSON-LD (Schema.org)** organization markup.
  - **Google Analytics (gtag.js)** integration.
- **FormSubmit** – Lightweight solution for form submission without a custom backend.

## Running locally

1. Download or clone this repository:
   ```bash
   git clone <repository-url>
   cd agile-website
   ```
2. Open `index.html` directly in your browser, or serve the folder with a simple static server (e.g. Live Server).
3. Interact with the sections, animations and carousels as in production.

> Note: the contact form posts to FormSubmit. As long as you are online, it works the same locally as it does in production.

## Deployment

- **Hosting:** GitHub Pages with a custom domain.
- **Configured domain:** `agilesolution.com.br` (via `CNAME` at the project root).

---

## Créditos

**Developed by:** Filipe Scandiani  
**Designed by:** Hugo Soave



