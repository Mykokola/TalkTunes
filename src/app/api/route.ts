import { sql } from "@vercel/postgres";
export async function GET(request: Request){
    try {
        const result = await sql`SELECT id, type FROM car`;
        return new Response(JSON.stringify( result.rows), {
            status: 200,
        });
    } catch (error) {
        console.error("Помилка при виконанні запиту до бази даних:", error);
    }
}