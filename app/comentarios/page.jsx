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
