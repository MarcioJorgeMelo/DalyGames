import { redirect } from "next/navigation";
import Image from "next/image";
import { GameProps } from "@/utils/types/game";
import { Container } from "@/components/container";
import { Label } from "./components/label";
import { GameCard } from "@/components/gameCard";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  props: Props,
  parent?: ResolvingMetadata | undefined
): Promise<Metadata> {
  const params = await props.params;
  const res = await fetch(
    `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return {
    title: data.title,
    description: data.description.slice(0, 100) + "...",
    openGraph: {
      title: data.title,
      images: [data.image_url],
    },
  };
}

async function getData(id: string): Promise<GameProps> {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Falha ao carregar dados do jogo");
    }

    return await res.json();
  } catch (error) {
    redirect("/");
  }
}

async function getGameDay(): Promise<GameProps> {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function GameDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const data = await getData(params.id);
  const gameDay = await getGameDay();

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full text-black">
      <div className="w-full h-80 sm:h-96 relative bg-black">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-85"
          src={data.image_url}
          alt={data.title}
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        />
      </div>

      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label data={item} key={item} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label data={item} key={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento:</strong> {data.release}
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado:</h2>

        <div className="flex">
          <div className="flex-grow">
            <GameCard
              data={
                gameDay || {
                  title: "Sem recomendação",
                  description: "Nenhuma recomendação disponível.",
                }
              }
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
