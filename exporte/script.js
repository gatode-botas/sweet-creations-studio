const WHATSAPP_PHONE = "5568999795350";
const WHATSAPP_MESSAGE = "Olá! Quero fazer um pedido no Super Chaumas";
const WHATSAPP = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

["header-wpp","hero-wpp","footer-wpp","float-wpp"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = WHATSAPP;
});
document.getElementById("year").textContent = new Date().getFullYear();

const acaiItems = [
  { name: "Açaí P", size: "300ml", price: "15,00", desc: "Sucrilhos, leite condensado e creme de leite." },
  { name: "Açaí M", size: "300ml", price: "20,00", desc: "Sucrilhos, farinha de tapioca, amendoim, leite em pó, leite condensado e creme de leite." },
  { name: "Açaí G", size: "500ml", price: "25,00", desc: "Sucrilhos, tapioca, chantilly, farinha láctea, amendoim, leite em pó, leite condensado, creme de leite e banana." },
  { name: "Açaí Tropical", size: "500ml", price: "27,00", desc: "Creme de leite, leite condensado, amendoim, kiwi e banana." },
  { name: "Barca de Açaí P", size: "500ml", price: "50,00", desc: "Completa: sucrilhos, tapioca, amendoim, leites, chantilly, banana, morango, pêssego, kiwi e cereja." },
  { name: "Barca de Açaí G", size: "800ml", price: "55,00", desc: "Completa: sucrilhos, tapioca, amendoim, leites, chantilly, banana, morango, pêssego, kiwi e cereja." },
];
const tacas = [
  { name: "Taça Simples", price: "14,00", desc: "2 bolas de sorvete, amendoim, disquete, waffer e calda quente." },
  { name: "Vaca Preta", price: "16,00", desc: "2 bolas de sorvete e Coca-Cola." },
  { name: "Sundae", price: "18,00", desc: "2 bolas de sorvete, chantilly, amendoim, cobertura, calda, waffer e disquete." },
  { name: "Taça do Amor", price: "24,00", desc: "2 bolas de sorvete, chantilly, calda e waffer." },
  { name: "Colegial", price: "15,00", desc: "1 bola de sorvete, amendoim, calda, waffer e disquete." },
  { name: "Banana Split", price: "22,00", desc: "3 bolas de sorvete, chantilly, amendoim, calda, waffer e cereja." },
];
const milkshakes = [
  { name: "MILK SHAKE", price: "15,00", desc: "500ml cremoso e clássico." },
  { name: "MILK SHAKE COM CHANTILLY", price: "18,00", desc: "500ml com chantilly fresquinho." },
  { name: "MILK CHAUMAS", price: "20,00", desc: "500ml — Nutella ou Doce de Leite." },
];
const classicos = [
  { name: "Picolé Simples", price: "4,00" },
  { name: "Crocante Especial", price: "8,00" },
  { name: "Sorvete na Casquinha", price: "6,00" },
  { name: "Sorvete no Cascão", price: "8,00" },
];

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function card(it){
  return `<div class="card">
    <div class="card-head">
      <div>
        <h3>${esc(it.name)}</h3>
        ${it.size?`<p class="size">${esc(it.size)}</p>`:""}
      </div>
      <span class="price">R$ ${esc(it.price)}</span>
    </div>
    ${it.desc?`<p class="desc">${esc(it.desc)}</p>`:""}
  </div>`;
}
function render(id,items){document.getElementById(id).innerHTML = items.map(card).join("")}
render("grid-acai",acaiItems);
render("grid-tacas",tacas);
render("grid-milk",milkshakes);
render("grid-classicos",classicos);