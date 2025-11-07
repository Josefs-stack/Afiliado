import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";
import { products } from "@/data/products";

export async function GET() {
  const result = [];

  for (const { url, affiliate, image } of products) {
    try {
      const { data } = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        },
      });

      const $ = cheerio.load(data);

      const title = $("h1.ui-pdp-title").text().trim();
      const price = $("span.andes-money-amount__fraction").first().text().trim();
      const category = $("a.ui-pdp-breadcrumb__link").last().text().trim();

      result.push({
        title,
        price,
        category,
        affiliate,
        image, // 👈 usa só a imagem do data.ts
      });
    } catch (err: any) {
      console.error("Erro ao processar:", url, err.message);
    }
  }

  return NextResponse.json(result);
}
