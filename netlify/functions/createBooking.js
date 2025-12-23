import { Client } from "pg";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const data = JSON.parse(event.body);

  const client = new Client({
    connectionString: process.env.NEON_DATABASE_URL,
  });

  try {
    await client.connect();

    await client.query(
      `INSERT INTO bookings (name, phone, service, date)
       VALUES ($1, $2, $3, $4)`,
      [data.name, data.phone, data.service, data.date]
    );

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
