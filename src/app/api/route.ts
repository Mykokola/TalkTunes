import { sql } from "@vercel/postgres";
export async function GET(request: Request){
    try {
        const result = await sql`SELECT id, type FROM car`;
        return new Response(JSON.stringify( result.rows), {
            status: 200,
        });
    } catch (error) {
        console.error("Помилка при виконанні запиту до бази даних:", error);
        
        // Відправка помилки клієнту
    }
}
// export default async function Cart({
//   params
// } : {
//   params: { user: string }
// }): Promise<JSX.Element> {
//   const data= await sql`SELECT id,type FROM car`;
//   const { rows } = data
//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.type}
//         </div>
//       ))}
//     </div>
//   );
// }
