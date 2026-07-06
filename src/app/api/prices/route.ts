export const dynamic = "force-dynamic";

export async function GET() {
  const [solRes, fxRes] = await Promise.all([
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
      { next: { revalidate: 60 } }
    ),
    fetch("https://open.er-api.com/v6/latest/USD"),
  ]);

  if (!solRes.ok || !fxRes.ok) {
    return Response.json(
      { error: "Failed to fetch prices" },
      { status: 502 }
    );
  }

  const solData = await solRes.json();
  const fxData = await fxRes.json();

  return Response.json({
    solPrice: solData.solana.usd,
    rates: {
      KES: fxData.rates.KES,
      NGN: fxData.rates.NGN,
      GHS: fxData.rates.GHS,
      USD: 1,
    },
  });
}
