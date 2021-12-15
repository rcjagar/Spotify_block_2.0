import React from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  MusicNoteIcon,
} from "@heroicons/react/Outline";
import useSpotify from "../../Hooks/useSpotify";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function Sidebar() {
  const SpotifyApi = useSpotify();
  const { data: session, status } = useSession();
  console.log(session);
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId ] = useState(null);

  console.log("you pick play list >>>>", playlistId)

  useEffect(() => {
    if (SpotifyApi.getAccessToken()) {
      SpotifyApi.getUserPlaylists().then((data) => {
        console.log("data", data.body.items);
        setPlaylists(data.body.items);
      });
    }
  }, [session, SpotifyApi]);

  // console.log(playlists);

  return (
    <div className="text-gray-500 p-5 text-sm border-r overflow-y-scroll h-screen scrollbar-hide border-gray-900">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Log Out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create PlayList</p>
        </button>

        <Link href="./Radio">
          <button className="flex items-center space-x-2 hover:text-white">
            <MusicNoteIcon className="h-5 w-5" />
            <p>FM-Radio</p>
          </button>
        </Link>

        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Likes</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Epsodes</p>
        </button>

        {playlists.map((item) => (
          <button onClick={() => setPlaylistId(item.id)} className="flex items-center space-x-2 hover:text-white">
            <p>{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
