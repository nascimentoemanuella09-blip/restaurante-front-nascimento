import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <div className="mx-auto max-w-5xl">

       
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white">
            Sobre nós
          </h1>

          <p className="mt-3 text-zinc-400">
            Conheça um pouco mais sobre o nosso restaurante
          </p>
        </div>

    
        <div className="grid items-center gap-10 md:grid-cols-2">

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/logo-restaurante-manu.png"
              alt="Restaurante"
              width={600}
              height={400}
              className="h-100 w-full object-cover"
            />
          </div>

      
          <div>
            <h2 className="mb-5 text-3xl font-bold text-white">
              Bem-vindo ao nosso restaurante
            </h2>

            <p className="mb-5 text-lg leading-8 text-zinc-400">
              Somos um restaurante dedicado a oferecer comida saborosa,
              preparada com ingredientes selecionados e muito carinho.
            </p>

            <p className="mb-6 text-lg leading-8 text-zinc-400">
              Nosso compromisso é proporcionar uma experiência especial
              para nossos clientes, unindo qualidade, sabor e um
              atendimento acolhedor.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-zinc-950 p-4 text-center shadow-sm">
                <p className="mt-2 font-semibold text-white">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl bg-zinc-950 p-4 text-center shadow-sm">
                <p className="mt-2 font-semibold text-white">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl bg-zinc-950 p-4 text-center shadow-sm">
                <p className="mt-2 font-semibold text-white">
                  Carinho
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}