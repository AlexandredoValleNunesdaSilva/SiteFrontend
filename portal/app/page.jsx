const unidades = [
  {
    nome: "Informações Gerais",
    ordem: "1/18",
    categorias: [{ nome: "Fórum - Esclareça suas dúvidas", status: "" }],
  },
  {
    nome: "Unidade 1",
    ordem: "2/18",
    categorias: [
      { nome: "New Nexus: bem-vindo à Era das inteligências artificiais", status: "Visualizada há 3 meses" },
      { nome: "Problematização", status: "Visualizada há 3 meses" },
      { nome: "Conceito", status: "Visualizada há 3 meses" },
      { nome: "Imersão", status: "Visualizada há 3 meses" },
      { nome: "Referências bibliográficas", status: "Visualizada há 3 meses" },
    ],
  },
  {
    nome: "Unidade 2",
    ordem: "3/18",
    categorias: [
      { nome: "Coded Bias: o papel dos dados na Era das IAs", status: "Visualizada há 3 meses" },
      { nome: "Problematização", status: "Visualizada há 3 meses" },
      { nome: "Conceito", status: "Visualizada há 3 meses" },
      { nome: "Imersão", status: "Visualizada há 3 meses" },
      { nome: "Referências bibliográficas", status: "Visualizada há 3 meses" },
    ],
  },
  {
    nome: "Unidade 3",
    ordem: "4/18",
    categorias: [
      { nome: "Working Machines: Aprendizagem de IA e no futuro do trabalho", status: "Visualizada há 3 meses" },
      { nome: "Problematização", status: "Visualizada há 3 meses" },
      { nome: "Conceito", status: "Visualizada há 3 meses" },
      { nome: "Imersão", status: "Visualizada há 3 meses" },
      { nome: "Referências bibliográficas", status: "Visualizada há 3 meses" },
    ],
  },
  {
    nome: "Unidade 4",
    ordem: "5/18",
    categorias: [
      { nome: "Smart cities: Cidades e sociedades inteligentes com IA", status: "Visualizada há 3 meses" },
      { nome: "Problematização", status: "Visualizada há 3 meses" },
      { nome: "Conceito", status: "Visualizada há 3 meses" },
      { nome: "Imersão", status: "Visualizada há 3 meses" },
      { nome: "Referências bibliográficas", status: "Visualizada há 3 meses" },
    ],
  },
  {
    nome: "Unidade 5",
    ordem: "6/18",
    categorias: [
      { nome: "Deep AI: Ética, democracia e desinformação, justiça, diversidade, e inclusão e o papel das IAs", status: "Visualizada há 3 meses" },
      { nome: "A guerra da desinformação", status: "Visualizada há 3 meses" },
      { nome: "Conceito", status: "Visualizada há 3 meses" },
      { nome: "Imersão", status: "Visualizada há 3 meses" },
      { nome: "Referências bibliográficas", status: "Visualizada há 3 meses" },
    ],
  },
  {
    nome: "Unidade 6",
    ordem: "7/18",
    categorias: [
      { nome: "Beyond: Novas fronteiras entre o humano e o artificial", status: "Visualizada há 3 meses" },
      { nome: "Problematização", status: "Visualizada há 3 meses" },
      { nome: "Conceito", status: "Visualizada há 3 meses" },
      { nome: "Imersão", status: "Visualizada há 3 meses" },
      { nome: "Referências bibliográficas", status: "Visualizada há 3 meses" },
    ],
  },
  {
    nome: "Unidade 7",
    ordem: "8/18",
    categorias: [
      { nome: "Curso 1 - A história da IA", status: "Visualizada há 3 meses" },
      { nome: "Curso 2 - Inteligencia Artificial Generativa", status: "Visualizada há 2 meses" },
      { nome: "Curso 3 - A Evolução das Buscas Online", status: "Visualizada há 2 meses" },
      { nome: "Curso 4 - FluencIA para Estudantes", status: "Visualizada há 2 meses" },
      { nome: "Curso 5 - Ética em IA", status: "Visualizada há 1 mes" },
      { nome: "Sintese", status: "Visualizada há 3 semanas" },
    ],
  },
  {
    nome: "UC Inteligencia Artificial e Sociedade: Soluções e desafios para o futuro",
    ordem: "9/18",
    categorias: [
      { nome: "UC Inteligencia Artificial e Sociedade: Soluções e desafios para o futuro", status: "Visualizada há 2 meses" },
    ],
  },
  {
    nome: "A1_26/1.1 - NAPI_Prova On-Line",
    ordem: "10/18",
    categorias: [
      { nome: "A1_26/1.1 - NAPI_Prova On-Line - Nota: 100%", status: "Visualizada há 9 dias" },
    ],
  },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#5b1a8a" }}>Minhas UCs</h1>

      {unidades.map((u) => (
        <div key={u.nome} style={{ borderBottom: "1px solid #ddd", marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", padding: "8px 0" }}>
            <span>{u.nome}</span>
            <span style={{ color: "#999" }}>{u.ordem}</span>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {u.categorias.map((c) => (
              <li
                key={c.nome}
                style={{ display: "flex", justifyContent: "space-between", padding: "10px 8px", borderTop: "1px solid #f0f0f0" }}
              >
                <span>{c.nome}</span>
                <span style={{ color: "#999", fontSize: 13 }}>{c.status}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}