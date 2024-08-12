import { Resend } from "resend";
import { NextResponse } from "next/server";

// Asegúrate de configurar tu API key de Resend en las variables de entorno.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      projectTitle,
      projectDescription,
      musicReferences,
      otherCategory,
      selectedCategory,
    } = await req.json();

    // Aquí va la lógica para enviar el correo
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "juanjose.peralta92@gmail.com",
      subject: `New Project Submission - ${selectedCategory}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Title:</strong> ${projectTitle}</p>
        <p><strong>Project Description:</strong> ${projectDescription}</p>
        <p><strong>Music References:</strong> ${musicReferences}</p>
        <p><strong>Other Category:</strong> ${otherCategory || "N/A"}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}
