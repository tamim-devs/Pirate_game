import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const GameDetailsPage = async ({ params }) => {
  const { id } = await params;

  try {
    const res = await fetch(
      `https://www.freetogame.com/api/game?id=${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return (
        <div className="text-center text-red-500 text-xl mt-10">
          Server Error
        </div>
      );
    }

    const game = await res.json();

    if (!game || game.status === 0) {
      return (
        <div className="text-center text-red-500 text-xl mt-10">
          Game not found
        </div>
      );
    }

    const image =
      game.thumbnail && game.thumbnail.startsWith("http")
        ? game.thumbnail
        : "/placeholder.jpg";

    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border rounded-3xl p-6 shadow-lg bg-white">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={image}
              alt={game.title || "Game"}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <Chip className="mb-4">{game.genre || "N/A"}</Chip>

            <h1 className="text-5xl font-extrabold mb-4">
              {game.title}
            </h1>

            <p className="text-gray-500 mb-6">
              {game.short_description || "No description"}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Server Error
      </div>
    );
  }
};

export default GameDetailsPage;