// Seleciona os elementos do DOM
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

// Função principal solicitada
function convertMarkdown() {
  let text = markdownInput.value;

  // Headings (h1, h2, h3)
  text = text.replace(/^\s*###\s+(.*)$/gm, "<h3>$1</h3>"); //# heading 1
  text = text.replace(/^\s*##\s+(.*)$/gm, "<h2>$1</h2>"); //## heading 2
  text = text.replace(/^\s*#\s+(.*)$/gm, "<h1>$1</h1>"); //### heading 3

  // Blockquote
  text = text.replace(/^\s*>\s+(.*)$/gm, "<blockquote>$1</blockquote>"); //> quote

  // Imagens
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">'); //![alt-text](image-source)

  // Links
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>'); //[link text](URL)

  // Negrito (**texto** ou __texto__)
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // Itálico (*texto* ou _texto_)
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
  text = text.replace(/_(.*?)_/g, "<em>$1</em>");

  return text;
}

// Evento input
markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  // Exibe HTML cru
  htmlOutput.textContent = html;

  // Exibe HTML renderizado
  preview.innerHTML = html;
});
