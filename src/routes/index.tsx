import { createFileRoute } from "@tanstack/react-router";
import acaiImg from "@/assets/acai.jpg";
import tacasImg from "@/assets/tacas.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Super Chaumas - Sorvetes e Açaí" },
      { name: "description", content: "Cardápio Super Chaumas: açaí, taças, milk shakes e picolés. Sabor que refresca seu dia!" },
    ],
  }),
});

const acaiItems = [
  { name: "Açaí P", size: "300ml", price: "15,00", desc: "Sucrilhos, leite condensado e creme de leite." },
  { name: "Açaí M", size: "300ml", price: "20,00", desc: "Sucrilhos, farinha de tapioca, amendoim, leite em pó, leite condensado e creme de leite." },
  { name: "Açaí G", size: "500ml", price: "25,00", desc: "Sucrilhos, tapioca, chantilly, farinha láctea, amendoim, leite em pó, leite condensado, creme de leite e banana." },
  { name: "Açaí Tropical", size: "500ml", price: "27,00", desc: "Creme de leite, leite condensado, amendoim, kiwi e banana." },
  { name: "Barca de Açaí P", size: "500ml", price: "50,00", desc: "Completa: sucrilhos, tapioca, amendoim, leites, chantilly, banana, pêssego, kiwi e cereja." },
  { name: "Barca de Açaí G", size: "800ml", price: "55,00", desc: "Completa: sucrilhos, tapioca, amendoim, leites, chantilly, banana, pêssego, kiwi e cereja." },
];

const tacas = [
  { name: "Taça Simples", price: "14,00", desc: "2 bolas de sorvete, amendoim, disquete, waffer e calda quente." },
  { name: "Vaca Preta", price: "16,00", desc: "2 bolas de sorvete e Coca-Cola." },
  { name: "Sundae", price: "18,00", desc: "2 bolas de sorvete, chantilly, amendoim, cobertura, calda, waffer e disquete." },
  { name: "Taça do Amor", price: "24,00", desc: "2 bolas de sorvete, chantilly, calda e waffer." },
  { name: "Colegial", price: "15,00", desc: "1 bola de sorvete, amendoim, calda, waffer e disquete." },
  { name: "Banana Split", price: "22,00", desc: "3 bolas de sorvete, chantilly, amendoim, calda, waffer e cereja." },
];

const classicos = [
  { name: "Picolé Simples", price: "4,00" },
  { name: "Crocante Especial", price: "8,00" },
  { name: "Sorvete na Casquinha", price: "6,00" },
  { name: "Sorvete no Cascão", price: "8,00" },
];

const milkshakes = [
  { name: "Milk Shake Tradicional", price: "15,00", desc: "500ml cremoso e clássico." },
  { name: "Milk Shake com Chantilly", price: "18,00", desc: "500ml com chantilly fresquinho." },
  { name: "Milk Chaumas Especial", price: "20,00", desc: "500ml — Nutella ou Doce de Leite." },
];

const WHATSAPP = "https://wa.me/5568999508822?text=Olá!%20Quero%20fazer%20um%20pedido%20no%20Super%20Chaumas";

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-extrabold tracking-tight text-xl sm:text-2xl">
          <span className="text-secondary drop-shadow-sm">Super</span> Chaumas
        </a>
        <nav className="hidden gap-6 text-sm font-semibold md:flex">
          <a href="#acai" className="hover:text-secondary transition">Açaí</a>
          <a href="#tacas" className="hover:text-secondary transition">Taças</a>
          <a href="#milkshakes" className="hover:text-secondary transition">Milk Shakes</a>
          <a href="#classicos" className="hover:text-secondary transition">Picolés</a>
          <a href="#contato" className="hover:text-secondary transition">Contato</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer"
           className="rounded-full bg-secondary px-4 py-2 text-xs sm:text-sm font-bold text-secondary-foreground shadow hover:scale-105 transition">
          Pedir agora
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:py-20 items-center">
        <div>
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
            Sorvetes & Açaí
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Super <span className="text-secondary">Chaumas</span>
          </h1>
          <p className="mt-4 max-w-md text-base sm:text-lg text-primary-foreground/90">
            O verdadeiro sabor do verão: açaí cremoso, taças irresistíveis e milk shakes que viciam.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#acai" className="rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground shadow-lg hover:scale-105 transition">
              Ver Cardápio
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
               className="rounded-full border-2 border-secondary px-6 py-3 font-bold text-secondary hover:bg-secondary hover:text-secondary-foreground transition">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-secondary/30 blur-3xl" />
          <img src={acaiImg} alt="Açaí Super Chaumas" loading="eager"
               className="relative rounded-3xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8 text-center">
      <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
        {kicker}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary">{title}</h2>
    </div>
  );
}

function PriceCard({ name, size, price, desc }: { name: string; size?: string; price: string; desc?: string }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border-2 border-primary/10 bg-card p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-extrabold text-lg text-foreground">{name}</h3>
          {size && <p className="text-xs font-semibold text-muted-foreground">{size}</p>}
        </div>
        <span className="shrink-0 rounded-lg bg-secondary px-3 py-1 text-sm font-extrabold text-secondary-foreground shadow">
          R$ {price}
        </span>
      </div>
      {desc && <p className="mt-3 text-sm text-muted-foreground">{desc}</p>}
    </div>
  );
}

function AcaiSection() {
  return (
    <section id="acai" className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
            A estrela da casa
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Cardápio de Açaí</h2>
          <p className="mt-2 text-primary-foreground/80">Cremoso, gelado e cheio de complementos.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {acaiItems.map((it) => (
            <PriceCard key={it.name} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TacasSection() {
  return (
    <section id="tacas" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Sobremesas" title="Taças & Especiais" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" />
            <img src={tacasImg} alt="Taças Super Chaumas"
                 className="relative rounded-3xl shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tacas.map((it) => (
              <PriceCard key={it.name} {...it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilkshakeSection() {
  return (
    <section id="milkshakes" className="bg-secondary py-16 text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            500ml
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary">Milk Shakes</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {milkshakes.map((it) => (
            <PriceCard key={it.name} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClassicosSection() {
  return (
    <section id="classicos" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Clássicos" title="Picolés & Casquinhas" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {classicos.map((it) => (
            <PriceCard key={it.name} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-12">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-extrabold">Peça já o seu!</h2>
        <p className="mt-2 text-primary-foreground/80">Atendimento rápido pelo WhatsApp.</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer"
           className="mt-6 inline-block rounded-full bg-secondary px-8 py-3 font-extrabold text-secondary-foreground shadow-lg hover:scale-105 transition">
          Falar no WhatsApp
        </a>
        <p className="mt-8 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Super Chaumas — Sorvetes e Açaí
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"
       className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition">
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.42 5.33L5 27l5.78-1.51a10.62 10.62 0 005.24 1.34h.01c5.88 0 10.67-4.78 10.67-10.67 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 00-7.55-3.13z"/>
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AcaiSection />
        <TacasSection />
        <MilkshakeSection />
        <ClassicosSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
