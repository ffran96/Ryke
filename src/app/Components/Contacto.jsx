"use client";
import React, { useState } from "react";
import ContentSection from "./ContentSection";
import Image from "next/image";
import ContactToRyke from "../../../public/ryke-contactame.jpg";
import Title2 from "./Title2";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    cell: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      setSubmitted(true);
      setFormData({ name: "", mail: "", cell: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContentSection SectionId={"contacto"}>
      <article className="mb-8 pt-[65px]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dcd9d1b8]">
              Contacto
            </span>
            <Title2>Cuéntame tu idea</Title2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#f2efe8b8] sm:text-right">
            Videoclips, piezas para marca, eventos o una producción desde cero.
            Escríbeme y le damos forma.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[8px] bg-[#ffffff0d]">
            <Image
              src={ContactToRyke}
              alt="Enrique Ferri revisando correo trípode en mano"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="max-w-xs text-sm leading-6 text-white">
                Respuesta directa para proyectos que necesitan una imagen
                cuidada y una producción ágil.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="flex min-h-[320px] flex-col justify-center rounded-[8px] bg-[#ffffff0d] p-6 text-center">
              <p className="text-2xl font-bold text-[#ffffff]">
                ¡Mensaje enviado con éxito!
              </p>
              <p className="mt-4 text-base text-[#f2efe8b8]">
                Gracias por contactarme, pronto me comunicaré contigo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 rounded-[8px] bg-[#ffffff0d] p-4 text-[#000000] sm:p-5 [&>input]:h-12 [&>input]:rounded-[8px] [&>input]:bg-[#ffffff] [&>input]:p-4 [&>input]:text-md [&>input]:text-[#111111] [&>input]:placeholder-[#363636] [&>input]:outline-none [&>input]:ring-1 [&>input]:ring-[#00000014] [&>input]:transition-all [&>input]:duration-300 focus:[&>input]:ring-[#dcd9d1] [&>textarea]:h-44 [&>textarea]:rounded-[8px] [&>textarea]:bg-[#ffffff] [&>textarea]:p-4 [&>textarea]:text-md [&>textarea]:text-[#111111] [&>textarea]:placeholder-[#363636] [&>textarea]:outline-none [&>textarea]:ring-1 [&>textarea]:ring-[#00000014] [&>textarea]:transition-all [&>textarea]:duration-300 focus:[&>textarea]:ring-[#dcd9d1]"
            >
              <input
                id="name"
                type="text"
                placeholder="Nombre *"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                id="mail"
                type="email"
                placeholder="Correo electrónico *"
                required
                value={formData.mail}
                onChange={handleChange}
              />
              <input
                id="cell"
                type="tel"
                placeholder="Número de teléfono"
                value={formData.cell}
                onChange={handleChange}
              />
              <textarea
                id="message"
                placeholder="Cuerpo del mensaje *"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 w-fit rounded-full bg-[#dcd9d1] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#000000] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffffff] disabled:pointer-events-none disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          )}
        </div>
      </article>
    </ContentSection>
  );
}
