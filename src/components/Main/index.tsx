import { useEffect, useState } from "react";

import {
  Container,
  Header,
  Level,
  ProfileInfo,
  ExperienceBar,
  ExperienceInfo,
  Scramble,
  TimerDisplay,
  Average,
  BottomMenu,
  TimerIcon,
  FriendshipIcon,
  ProfileIcon,
  RefreshIcon,
} from "./styles";

import _ from "lodash";

import BrasilFlag from "../../assets/flags/brasil.png";

import { TimeListTable } from "../TimeListTable";
import { TableWrapper } from "../TableWrapper/styles";

import { ALLOWED_MOVES_LIST as MOVES_LIST } from "../../utils";

export function Main() {
  const [shuffle, setShuffle] = useState<string>("");

  useEffect(() => {
    generateScramble();
  }, []);

  function generateScramble(): string {
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

    return shuffle;
  }

  return (
    <Container>
      <Header>
        <ProfileInfo>
          <strong>brunocrez</strong>
          <img src={BrasilFlag} alt="flag" />
        </ProfileInfo>
        <ExperienceInfo>
          <ExperienceBar>
            <div></div>
          </ExperienceBar>
          <Level>42</Level>
        </ExperienceInfo>
      </Header>
      <Scramble>
        {/* <RefreshIcon onClick={() => generateScramble()} /> */}
        {shuffle}
      </Scramble>

      <TimerDisplay>26.89</TimerDisplay>

      <Average>
        <span>ao5: 12.99</span>
        <span>ao12: 18.99</span>
        <span>ao100: 12.99</span>
      </Average>

      <TableWrapper>
        <TimeListTable />
      </TableWrapper>

      <BottomMenu>
        <TimerIcon />
        <FriendshipIcon />
        <ProfileIcon />
      </BottomMenu>
    </Container>
  );
}
