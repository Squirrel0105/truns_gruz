import { NextResponse } from "next/server";
import { db } from "../../../DB/db";

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const data = await req.json();

    if (!data.pickup_address || !data.delivery_address || !data.phone) {
      return NextResponse.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      );
    }

    await db.query(
      `UPDATE orders SET
        pickup_address = ?,
        delivery_address = ?,
        phone = ?
      WHERE id = ?`,
      [data.pickup_address, data.delivery_address, data.phone, id]
    );

    return NextResponse.json({ message: "Заказ обновлен" });
  } catch (error) {
    console.error("Ошибка обновления:", error);
    return NextResponse.json(
      { error: "Ошибка при обновлении заказа" },
      { status: 500 }
    );
  }
}
