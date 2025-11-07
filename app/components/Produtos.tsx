"use client";
import { useEffect, useState } from "react";
import MagneticWrapper from "./MagneticWrapper";

type Product = {
  title: string;
  price: string;
  image?: string;
  category: string;
  affiliate: string;
};

export default function HomePage() {
  const [data, setData] = useState<Record<string, Product[]>>({});

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/products");
      const json: Product[] = await res.json();

      // Agrupa por categoria
      const grouped: Record<string, Product[]> = {};
      json.forEach((p) => {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p);
      });

      setData(grouped);
    }
    load();
  }, []);

  return (
    <div className="p-8 min-h-screen max-w-6xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-8">Produtos do Mercado Livre</h1>

      {Object.keys(data).length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        Object.entries(data).map(([category, products]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
              {category}
            </h2>
            <div className="flex flex-wrap gap-6">
              {products.map((p, i) => (
                <MagneticWrapper key={i}>
                  <a 
                  href={p.affiliate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border w-70 flex flex-col justify-around items-center rounded-2xl shadow-sm p-4 hover:shadow-md group hover:bg-neutral-950 transition"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-contain mb-3 bg-white"
                    />
                  <h3 className="font-semibold text-lg group-hover:text-neutral-50 line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-green-600 text-2xl font-bold my-5">
                    R$ {p.price}
                  </p>
                </a>
                </MagneticWrapper>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
