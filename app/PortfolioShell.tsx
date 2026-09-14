"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    title: "Curso de Direito",
    category: "Pesquisa",
    description:
      "Pesquisa de percepção de imagem e satisfação com metodologia mista, cruzando dados quantitativos, entrevistas em profundidade e análise estratégica.",
  },
  {
    title: "Doação de Livros",
    category: "Planejamento",
    description:
      "Campanha de mobilização criada a partir do conceito ‘Doar livros é começar novas histórias’, que resultou na arrecadação de mais de 4 mil livros.",
  },
  {
    title: "Powerade",
    category: "Estratégia",
    description:
      "Reposicionamento construído a partir de pesquisa, concorrência, comportamento e planejamento de campanha sob o conceito ‘Performance da Vida Real’.",
  },
];

export default function PortfolioShell() {
  const [photoSrc, setPhotoSrc] = useState("");

  useEffect(() => {
    const source = document.querySelector(
      ".legacy-source .about-photo img",
    ) as HTMLImageElement | null;

    if (source?.src) setPhotoSrc(source.src);
  }, []);

  return (
    <main className="portfolio-site">
      <header className="site-header">
        <a className="brand" href="#top">K.</a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Criatividade · Estratégia · Planejamento</p>
        <h1>
          Ideias com
          <span>intenção.</span>
        </h1>
        <div className="hero-footer">
          <p>
            Sou Kauany, publicitária em formação, e transformo pesquisa,
            comportamento e estratégia em comunicação efetiva.
          </p>
          <a href="#sobre">Conheça minha trajetória ↓</a>
        </div>
      </section>

      <section className="about section" id="sobre">
        <p className="section-index">01 / Sobre mim</p>
        <div className="about-wrap">
          <figure className="portrait-wrap">
            {photoSrc ? (
              <img className="portrait" src={photoSrc} alt="Retrato de Kauany Verdi Guerra" />
            ) : (
              <div className="portrait-placeholder" aria-hidden="true" />
            )}
          </figure>

          <div className="about-copy">
            <h2>Sou Kauany Verdi Guerra.</h2>
            <p className="about-lead">Oie, seja bem-vindo.</p>
            <p>
              Durante o ensino médio, descobri a publicidade a partir de um hobby:
              “cuidar do Instagram da escola”. O que parecia apenas uma tarefa simples
              se transformou na criação de um canal de comunicação de uma escola pública
              estadual que hoje alcança mais de 18 mil seguidores.
            </p>
            <p>
              Para mim, a publicidade é uma ciência que une minhas duas grandes paixões:
              criatividade e estratégia.
            </p>
            <p>
              Sou uma publicitária em formação, estou no 6º período de Publicidade e
              Propaganda na Universidade de Passo Fundo (UPF) e me identifico muito com
              a parte estratégica por trás de um case publicitário. Pesquisa,
              planejamento e marketing puro são as áreas que mais gosto de aprender e
              trabalhar.
            </p>
            <p>
              Atualmente, estagio na Be8 onde atuo com planejamento e atendimento de
              campanha de endomarketing e comunicação interna e coloco em prática tudo
              aquilo que aprendo na faculdade.
            </p>
            <p>
              É um prazer ter você por aqui, arraste e confira mais sobre os trabalhos
              que desenvolvi ao longo da minha trajetória.
            </p>
          </div>
        </div>
      </section>

      <section className="projects section" id="projetos">
        <p className="section-index">02 / Projetos selecionados</p>
        <div className="section-content">
          <h2>Projetos</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <div>
                  <p className="project-meta">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contato">
        <p className="section-index">03 / Contato</p>
        <div className="section-content contact-content">
          <h2>Vamos conversar.</h2>
          <p>
            Pesquisa, planejamento, estratégia e comunicação — com espaço para boas
            ideias e projetos interessantes.
          </p>
          <div className="contact-links">
            <a href="mailto:kauanyvguerra@gmail.com">kauanyvguerra@gmail.com ↗</a>
            <a href="https://wa.me/5554997124469" target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
            <a
              href="https://www.linkedin.com/in/kauany-verdi-guerra-1398a0352/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="https://www.instagram.com/kauverdi/" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>Portfolio © 2026</span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
