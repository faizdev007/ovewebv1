import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { urlList } = await request.json();

    if (!urlList || !Array.isArray(urlList)) {
      return NextResponse.json({ error: "urlList must be an array" }, { status: 400 });
    }

    const data = {
      host: "optimalvirtualemployee.com/", // change this
      key: "8c72bf045adb4e5c97a221b9ec714552", // your key
      keyLocation: "https://optimalvirtualemployee.com/8c72bf045adb4e5c97a221b9ec714552.txt",
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    return NextResponse.json({ message: "URLs submitted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
