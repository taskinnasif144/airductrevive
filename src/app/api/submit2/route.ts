import { google } from "googleapis";

type upperForm = {
  name: string;
  email: string;
  phone: string;
  Zipcode: string;
  message: string;
};

export const POST = async (req: Request) => {
  console.log(
    "_____________________________ Enters API ________________________________________"
  );
  const body: upperForm = await req.json();
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID_2,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [body.name, body.email, body.phone, body.Zipcode, body.message],
        ],
      },
    });

    return new Response(JSON.stringify({ data: response.data }), {
      status: 201,
    });
  } catch (e: any) {
    return new Response(JSON.stringify(body), { status: 405 });
  }
};
