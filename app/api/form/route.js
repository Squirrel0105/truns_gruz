import { NextResponse } from 'next/server';
import { db } from '../../DB/db'; 

export async function POST(req) {
    try {
        const data = await req.json();
        const {
            pickupAddress,
            deliveryAddress,
            transportType,
            loaders,
            phone,
            userId, 
        } = data;

        await db.query(
            'INSERT INTO orders (pickup_address, delivery_address, transport_type, loaders, phone, user_id) VALUES (?, ?, ?, ?, ?, ?)',
            [pickupAddress, deliveryAddress, transportType, loaders, phone, userId]
        );

        return NextResponse.json({ message: 'Заявка успешно сохранена' });
    } catch (error) {
        console.error('Ошибка при сохранении заказа:', error);
        return NextResponse.json({ error: 'Ошибка при сохранении' }, { status: 500 });
    }
}
