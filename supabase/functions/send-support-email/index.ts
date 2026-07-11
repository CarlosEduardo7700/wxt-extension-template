import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const ALLOWED_EXTENSION_ORIGIN = Deno.env.get('ALLOWED_EXTENSION_ORIGIN')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      headers: { 
        'Access-Control-Allow-Origin': ALLOWED_EXTENSION_ORIGIN,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      } 
    })
  }

  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': ALLOWED_EXTENSION_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  try {
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      })
    }

    const { subject, message, userEmail, userName } = await req.json()

    if (typeof subject !== "string" || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      })
    }
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: Deno.env.get("SUPPORT_FROM_EMAIL") ?? "Support <onboarding@resend.dev>",
        to: Deno.env.get("SUPPORT_TO_EMAIL") ?? "support@example.com",
        subject: `[Suporte App] ${subject}`,
        html: `
          <h3>Novo contato recebido da extensão!</h3>
          <p><strong>Usuário:</strong> ${userName} (${userEmail})</p>
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      }),
    })

    const data = await res.json()

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: corsHeaders,
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: corsHeaders,
    })
  }
})
