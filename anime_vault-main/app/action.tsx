"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchanime = async(page :number)=>{
    const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);
    const data = await res.json();

    return  data.map((item: AnimeProp, index:number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
}