import { NextResponse } from "next/server";

type ReservaPayload = {
  nom?: string;
  email?: string;
  telefon?: string;
  data?: string;
  comensals?: string;
  poblacio?: string;
  tipus?: string;
  sabor?: string;
  notes?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ReservaPayload;

  if (!payload.nom || !payload.email || !payload.data || !payload.comensals || !payload.poblacio || !payload.tipus) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  // No email provider is configured yet (pending decision, see PRODUCT.md).
  // Logging keeps the request visible until Resend or an equivalent is wired in.
  console.log("Nova sol·licitud de reserva:", payload);

  return NextResponse.json({ ok: true });
}
