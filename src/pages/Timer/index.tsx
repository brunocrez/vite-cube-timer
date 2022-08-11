import * as S from "./styles";
import { useContext, useEffect, useState } from "react";

// types
import { ITimeListContext } from "@/@types/timeList";

// components
import { Layout } from "@/components/template/Layout";
import { SideBar } from "@/components/template/SideBar";
import { Stopwatch } from "@/components/Stopwatch";
import { TableWrapper } from "@/components/TableWrapper/styles";
import { TimeListTable } from "@/components/TimeListTable";

// context
import { TimeListContext } from "@/contexts/TimeListContext";

// utils & assets
import _ from "lodash";
import { ALLOWED_MOVES_LIST as MOVES_LIST } from "@/utils";
import BrasilFlag from "@/assets/flags/brasil.png";

export function Timer() {
  const [shuffle, setShuffle] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [shouldGenScramble, setShouldGenScramble] = useState(false);

  const { timeList, calcAverage5, calcAverage12, calcAverage100 } = useContext(
    TimeListContext,
  ) as ITimeListContext;

  useEffect(() => {
    generateScramble();
  }, []);

  useEffect(() => {
    if (shouldGenScramble) {
      generateScramble();
    }
  }, [shouldGenScramble]);

  function generateScramble(): void {
    const scramble: string[] = [];
    let sample = "";

    for (let i = 0; i < 20; i++) {
      sample = _.sample(MOVES_LIST) as string;

      while (sample?.charAt(0) === scramble[i - 1]?.charAt(0)) {
        sample = _.sample(MOVES_LIST) as string;
      }

      scramble.push(sample);
    }

    setShuffle(scramble.join(" "));
  }

  function copyToClipboard() {
    setIsCopied(true);
    navigator.clipboard.writeText(shuffle);

    setTimeout(() => {
      setIsCopied(false);
    }, 2 * 1000);
  }

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <S.ProfileInfo>
            <strong>brunocrez</strong>
            <img src={BrasilFlag} alt="flag" />
          </S.ProfileInfo>
          <S.ExperienceInfo>
            <S.ExperienceBar>
              <div></div>
            </S.ExperienceBar>
            <S.Level>42</S.Level>
          </S.ExperienceInfo>
        </S.Header>
        <S.Scramble>
          {shuffle}
          <div>
            <S.RefreshIcon onClick={() => generateScramble()} />
            <S.CopyIcon onClick={copyToClipboard} />
            {isCopied && <span>Scramble Copied!</span>}
          </div>
        </S.Scramble>

        <S.TimerDisplay>
          <Stopwatch
            currentScramble={shuffle}
            genScramble={setShouldGenScramble}
          />
        </S.TimerDisplay>

        <S.Average>
          <span>ao5: {calcAverage5(timeList.length - 1).stringAverage}</span>
          <span>ao12: {calcAverage12(timeList.length - 1).stringAverage}</span>
          <span>
            ao100: {calcAverage100(timeList.length - 1).stringAverage}
          </span>
        </S.Average>

        <TableWrapper>
          <TimeListTable />
        </TableWrapper>

        <S.BottomMenu>
          <S.TimerIcon />
          <S.FriendshipIcon />
          <S.ProfileIcon />
        </S.BottomMenu>
      </S.Container>
      <SideBar />
    </Layout>
  );
}
