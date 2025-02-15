export function EmailTemplate({ firstName, email, phone, message }) {
  return (
    <div>
      <h1>Nuevo mensaje de {firstName}</h1>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Teléfono:</strong> {phone || "No proporcionado"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>{message}</p>
    </div>
  );
}
