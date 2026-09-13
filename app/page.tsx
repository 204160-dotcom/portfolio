const projects = [
  {
    title: "Projeto 01",
    category: "Direção de arte",
    year: "2026",
    description: "Um case para apresentar conceito, processo criativo e resultado final.",
  },
  {
    title: "Projeto 02",
    category: "Branding",
    year: "2026",
    description: "Identidade visual construída a partir de estratégia, linguagem e sistema gráfico.",
  },
  {
    title: "Projeto 03",
    category: "Campanha",
    year: "2026",
    description: "Campanha integrada com foco em ideia central, desdobramentos e execução visual.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">K.</a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Publicidade · Direção de arte · Criação</p>
        <h1>
          Ideias com
          <span> intenção.</span>
        </h1>
        <div className="hero-footer">
          <p>
            Um portfólio em construção para reunir projetos, campanhas, identidades e trabalhos que mostram não só o resultado, mas o raciocínio por trás dele.
          </p>
          <a href="#projetos">Ver projetos ↓</a>
        </div>
      </section>

      <section className="about section" id="sobre">
        <p className="section-index">01 / Sobre</p>
        <div className="section-content about-grid">
          <h2>Criação visual com estratégia, repertório e personalidade.</h2>
          <div>
            <p>
              Sou estudante de Publicidade e Propaganda e gosto de transformar referências, comportamento e estratégia em comunicação visual clara e marcante.
            </p>
            <p>
              Este espaço foi pensado como um portfólio vivo: menos currículo engessado e mais projetos contados como cases, com contexto, processo e escolhas criativas.
            </p>
          </div>
        </div>
      </section>

      <section className="projects section" id="projetos">
        <p className="section-index">02 / Projetos selecionados</p>
        <div className="section-content">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <div>
                <p className="project-meta">{project.category} · {project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contato">
        <p className="section-index">03 / Contato</p>
        <div className="section-content contact-content">
          <h2>Tem uma ideia? Vamos conversar.</h2>
          <p>Adicione aqui seu e-mail, LinkedIn e Instagram quando quiser.</p>
          <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com ↗</a>
        </div>
      </section>

      <footer>
        <span>Portfolio © 2026</span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
