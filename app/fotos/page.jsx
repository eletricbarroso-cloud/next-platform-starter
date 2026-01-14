export default function FotosPage() {
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
                Galeria de Fotos
            </h1>

            <p style={{ color: "white", marginBottom: "2rem" }}>
                Aqui vais poder adicionar fotos dos teus trabalhos, instalações, reparações e projetos intergalácticos.
            </p>

            <div
                style={{
                    color: "#F2C94C",
                    border: "2px dashed #F2C94C",
                    padding: "2rem",
                    borderRadius: "10px",
                }}
            >
                Área reservada para fotos (a integrar depois)
            </div>
        </div>
    );
}
