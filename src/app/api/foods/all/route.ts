import { foods } from "@/src/data";

export async function GET() {
    return Response.json(foods);
}