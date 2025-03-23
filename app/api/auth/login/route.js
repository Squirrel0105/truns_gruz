import { NextResponse } from 'next/server';
import { db } from '../../../DB/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { login, password } = await req.json();

        const [users] = await db.query('SELECT * from user where login = ?', [
            login,
        ]);

        if (users.length === 0) {
            return NextResponse.json({
                message: 'Неверный логин или пароль'
            },
                { status: 404 });
        }

        const user = users[0];
        const passwordHech = await bcrypt.compare(password, user.password);

        if (!passwordHech) {
            return NextResponse.json(
                { message: 'Неверный логин или пароль' },
                { status: 404 }
            )
        }
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json(
            {error: 'Ошибка авторизации'},
            { status: 500 },
        )};
}

