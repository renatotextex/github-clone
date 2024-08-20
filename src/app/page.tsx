"use client";

import React, {useEffect, useState} from "react";
import {LogoMd} from "@/components/Atoms/Logo";
import {MenuVert} from "@/components/Molecules/MenuVert";
import {MenuCredentials} from "@/components/Molecules/MenuCredentials";
import {SubHeader} from "@/components/Molecules/SubHeader";
import {ButtonsSubHeader} from "@/components/Molecules/ButtonsSubHeader";
import {IconCodeTabBar} from "@/components/Atoms/IconCodeTabBar";
import {IconIssuesTabBar} from "@/components/Atoms/IconIssuesTabBar";
import {IconPullRequestsTabBar} from "@/components/Atoms/IconPullRequestsTabBar";
import {IconActionsTabBar} from "@/components/Atoms/IconActionsTabBar";
import {IconProjectsTabBar} from "@/components/Atoms/IconProjectsTabBar";
import {IconSecurityTabBar} from "@/components/Atoms/IconSecurityTabBar";
import {IconInsightsTabBar} from "@/components/Atoms/IconInsightsTabBar";

interface User {
    name: string;
    login: string;
    avatar_url: string;
    html_url: string;
}

interface Repo {
    id: number;
    name: string;
    html_url: string;
    stargazers_count: number;
}

interface Fork {
    id: number;
}

export default function Home() {
    const [user, setUser] = useState<User | undefined>();
    const [repo, setRepo] = useState<Repo | undefined>();
    const [forks, setForks] = useState<Fork[] | undefined>([]);
    const [forksCount, setForksCount] = useState<number>(0);


    useEffect(() => {
        async function loadData() {

            const responseUser = await fetch('https://api.github.com/users/michdess');
            const dataUser = await responseUser.json();
            setUser(dataUser);

            const responseRepo = await fetch('https://api.github.com/repos/michdess/tailwind');
            const dataRepo = await responseRepo.json();
            setRepo(dataRepo);

            const responseForks = await fetch('https://api.github.com/repos/michdess/tailwind/forks');
            const dataForks = await responseForks.json();
            setForks(dataForks);

            setForksCount(dataForks.length);

        }

        loadData();
    }, []);

  return (
      <main>
          <header className="bg-customHeader flex items-center py-5 px-8">
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
              <LogoMd height={32} width={32}/>
              <MenuVert/>
              <div className="ml-auto">
                  <MenuCredentials/>
              </div>
          </header>
          <div className="flex items-center justify-between mr-8">
              <SubHeader html_user={user?.html_url} html_repo={repo?.html_url} name={repo?.name} login={user?.login}/>
              <ButtonsSubHeader forksCount={forksCount} starCount={repo?.stargazers_count}/>
          </div>
          <div className="flex items-center gap-2 py-5 px-8 font-light text-[15px] ">
              <IconCodeTabBar/>
              <IconIssuesTabBar/>
              <IconPullRequestsTabBar/>
              <IconActionsTabBar/>
              <IconProjectsTabBar/>
              <IconSecurityTabBar/>
              <IconInsightsTabBar/>
          </div>
          <div>
              <div className="w-full h-px bg-gray-700 opacity-70 -mt-3"/>
          </div>
      </main>
  );
}
