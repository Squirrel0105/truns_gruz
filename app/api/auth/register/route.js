import { NextResponse } from "next/server";
import { db } from "../../../DB/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { login, password, phone } = await req.json();

    const [existingUsers] = await db.query(
      "SELECT * FROM user WHERE login = ?",
      [login]
    );

    if (existingUsers.length > 0) {
      return NextResponse.json(
        { message: "Пользователь с таким логином уже существует" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO user (login, password, phone) VALUES (?, ?, ?)",
      [login, hashedPassword, phone]
    );

    return NextResponse.json({ message: "Регистрация успешна" });
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    return NextResponse.json(
      { error: "Ошибка при регистрации" },
      { status: 500 }
    );
  }
}
