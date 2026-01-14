export default function Sucesso() {
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
                Comentário enviado
            </h1>

            <p style={{ color: "white" }}>
                Obrigado pelo seu comentário. Será analisado e publicado após aprovação.
            </p>
        </div>
    );
}
