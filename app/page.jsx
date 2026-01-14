import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
O cartão abaixo é renderizado no servidor com base no valor de \`process.env.CONTEXT\`.
`;

const preDynamicContentExplainer = `
A frase abaixo é carregada do endpoint \`/quotes/random\`, mostrando uma diferente a cada carregamento.
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div
            className="flex flex-col gap-12 sm:gap-16 min-h-screen p-6"
            style={{ backgroundColor: "#001F3F" }}
        >
            {/* SECÇÃO PRINCIPAL */}
            <section className="p-6 rounded-lg">
                <ContextAlert className="mb-6" />

                <h1
                    className="mb-4"
                    style={{
                        color: "#F2C94C",
                        fontSize: "3.5rem",
                        fontWeight: "900",
                    }}
                >
                    EletricBarroso
                </h1>

                <p className="mb-6 text-lg" style={{ color: "white" }}>
                    Instalações elétricas, manutenção, reparações e soluções técnicas.
                    Serviço profissional, rápido.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <Link
                        href="/fotos"
                        className="btn btn-lg"
                        style={{
                            color: "#F2C94C",
                            border: "2px solid #F2C94C",
                            background: "transparent",
                            fontWeight: "700",
                        }}
                    >
                        Ver Fotos
                    </Link>

                    <Link
                        href="/comentarios"
                        className="btn btn-lg"
                        style={{
                            color: "#F2C94C",
                            border: "2px solid #F2C94C",
                            background: "transparent",
                            fontWeight: "700",
                        }}
                    >
                        Comentários
                    </Link>

                    <a
                        href="mailto:eletricbarroso@gmail.com?subject=Pedido%20de%20Contacto&body=Olá%20EletricBarroso,%0D%0A%0D%0AQuero%20pedir%20um%20contacto.%0D%0A%0D%0ANome:%0D%0AMorada:%0D%0ATelefone:%0D%0A%0D%0AObrigado!"
                        className="btn btn-lg"
                        style={{
                            color: "#F2C94C",
                            border: "2px solid #F2C94C",
                            background: "transparent",
                            fontWeight: "700",
                        }}
                    >
                        Pedir Contacto
                    </a>
                </div>
            </section>

            {/* CONTEXTO NETLIFY */}
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}

            {/* FRASE ALEATÓRIA */}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;

    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js irá reconstruir qualquer página que navegue, incluindo páginas estáticas.</p>
            </Card>
        );
    } else {
        const now = new Date().toISOString();
        return (
            <Card title={title}>
                <p>Esta página foi gerada estaticamente no build ({now}).</p>
            </Card>
        );
    }
}
