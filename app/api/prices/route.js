import { db } from "../../DB/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [servicePrices] = await db.query("SELECT * FROM service_prices");
    const [loaderPrice] = await db.query(
      "SELECT price_per_loader FROM loader_prices"
    );

    return NextResponse.json({
      servicePrices: servicePrices,
      loader: loaderPrice[0].price_per_loader,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка получения цен" },
      { status: 500 }
    );
  }
}
