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
                    Serviços de instalações elétricas, manutenção e reparações.
                    Trabalho profissional, seguro e realizado com rigor técnico.
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
                        Fotos
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
                        href="mailto:eletricbarroso@gmail.com?subject=Pedido%20de%20Contacto"
                        className="btn btn-lg"
                        style={{
                            color: "#F2C94C",
                            border: "2px solid #F2C94C",
                            background: "transparent",
                            fontWeight: "700",
                        }}
                    >
                        Contacto
                    </a>
                </div>
            </section>

            {/* SECÇÃO SOBRE */}
            <section className="p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
                <h2
                    style={{
                        color: "#F2C94C",
                        fontSize: "2rem",
                        fontWeight: "800",
                        marginBottom: "1rem",
                    }}
                >
                    Sobre Mim
                </h2>

                <p style={{ color: "white", marginBottom: "1.5rem" }}>
                    Trabalho na área das instalações elétricas e manutenção técnica.
                    Sou um profissional dedicado, focado na segurança, na qualidade e na resolução eficiente
                    de qualquer problema elétrico. Cada serviço é tratado com atenção ao detalhe e respeito
                    pelo espaço de quem me recebe.
                </p>

                <h2
                    style={{
                        color: "#F2C94C",
                        fontSize: "2rem",
                        fontWeight: "800",
                        marginBottom: "1rem",
                    }}
                >
                    Sobre a EletricBarroso
                </h2>

                <p style={{ color: "white" }}>
                    A EletricBarroso é uma empresa recente, criada com o objetivo de oferecer serviços elétricos
                    fiáveis, seguros e realizados com rigor técnico. Apesar de estar a dar os primeiros passos,
                    nasce com uma base sólida de experiência prática e compromisso profissional. O foco é simples:
                    garantir que cada cliente recebe um serviço claro, honesto e bem executado.
                </p>
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
