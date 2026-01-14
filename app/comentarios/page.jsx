export default function ComentariosPage() {
    return (
        <div
            className="min-h-screen p-6"
            style={{ backgroundColor: "#001F3F" }}
        >
            <h1
                style={{
                    color: "#F2C94C",
                    fontSize: "3rem",
                    fontWeight: "900",
                    marginBottom: "2rem",
                }}
            >
                Comentários
            </h1>

            <p style={{ color: "white", marginBottom: "2rem" }}>
                Deixe aqui o seu comentário. Todos os comentários serão revistos antes de serem publicados.
            </p>

            {/* FORMULÁRIO NETLIFY FORMS */}
            <form
                name="comentarios"
                method="POST"
                action="/sucesso"
                data-netlify="true"
                className="flex flex-col gap-4"
                style={{ maxWidth: "500px" }}
            >
                <input type="hidden" name="form-name" value="comentarios" />

                <input
                    type="text"
                    name="nome"
                    placeholder="O seu nome"
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "6px",
                        border: "2px solid #F2C94C",
                        background: "transparent",
                        color: "#F2C94C",
                    }}
                />

                <textarea
                    name="mensagem"
                    placeholder="O seu comentário"
                    rows="5"
                    required
                    style={{
                        padding: "10px",
                        borderRadius: "6px",
                        border: "2px solid #F2C94C",
                        background: "transparent",
                        color: "#F2C94C",
                    }}
                />

                <button
                    type="submit"
                    style={{
                        padding: "12px",
                        borderRadius: "6px",
                        border: "2px solid #F2C94C",
                        background: "transparent",
                        color: "#F2C94C",
                        fontWeight: "700",
                    }}
                >
                    Enviar Comentário
                </button>
            </form>

            <div
                style={{
                    marginTop: "3rem",
                    color: "#F2C94C",
                    border: "2px dashed #F2C94C",
                    padding: "2rem",
                    borderRadius: "10px",
                }}
            >
                Comentários aprovados serão exibidos aqui.
            </div>
        </div>
    );
}
