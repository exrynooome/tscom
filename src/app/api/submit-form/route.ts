import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { validateFormData } from '@/utils/validate';
import type { FormSubmitData } from '@/types/form';

async function getGoogleSheetsClient() {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
}

export async function POST(request: NextRequest) {
    try {
        const data: FormSubmitData = await request.json();

        const validationErrors = validateFormData({
            name: data.name,
            phone: data.phone,
            email: data.email,
            agreedToPolicy: data.agreedToPolicy,
        });

        if (Object.keys(validationErrors).length > 0) {
            return NextResponse.json(
                {
                    error: 'Ошибка валидации данных',
                    fieldErrors: validationErrors
                },
                { status: 400 }
            );
        }

        const sheets = await getGoogleSheetsClient();
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
        const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1';

        if (!spreadsheetId) {
            throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID не настроен');
        }

        const values = [
            [
                new Date(data.timestamp).toLocaleString('ru-RU', {
                    timeZone: 'Europe/Moscow',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }),
                data.name,
                data.phone,
                data.email,
            ],
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: `${sheetName}!A:G`,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        return NextResponse.json(
            { success: true, message: 'Заявка успешно отправлена!' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Ошибка при отправке формы. Попробуйте позже.' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'API роут работает' },
        { status: 200 }
    );
}