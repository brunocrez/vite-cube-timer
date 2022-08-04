import { useContext, useEffect, useState } from "react";
import { TableWrapper } from "../TableWrapper/styles";
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
  CopyIcon,
} from "./styles";

// types
import { ITimeListContext } from "../../@types/timeList";

// context
import { TimeListContext } from "../../contexts/TimeListContext";

// components
import { TimeListTable } from "../TimeListTable";
import { Stopwatch } from "../Stopwatch";

// 3rd lib & utils
import { ALLOWED_MOVES_LIST as MOVES_LIST } from "../../utils";
import _ from "lodash";
import BrasilFlag from "../../assets/flags/brasil.png";

export function Main() {
  const [shuffle, setShuffle] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [keyPressed, setKeyPressed] = useState<KeyboardEvent | null>(null);
  const [shouldGenScramble, setShouldGenScramble] = useState(false);

  const { timeList, calcAverage5, calcAverage12, calcAverage100 } = useContext(
    TimeListContext,
  ) as ITimeListContext;

  useEffect(() => {
    generateScramble();

    document.addEventListener("keydown", handleKeyDown);
    return () => removeEventListener("keydown", handleKeyDown);
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

  function handleKeyDown(event: KeyboardEvent) {
    setKeyPressed(event);
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
        {shuffle}
        <div>
          <RefreshIcon onClick={() => generateScramble()} />
          <CopyIcon onClick={copyToClipboard} />
          {isCopied && <span>Scramble Copied!</span>}
        </div>
      </Scramble>

      <TimerDisplay>
        <Stopwatch
          keyPressed={keyPressed}
          genScramble={setShouldGenScramble}
          currentScramble={shuffle}
        />
      </TimerDisplay>

      <Average>
        <span>ao5: {calcAverage5(timeList.length - 1).stringAverage}</span>
        <span>ao12: {calcAverage12(timeList.length - 1).stringAverage}</span>
        <span>ao100: {calcAverage100(timeList.length - 1).stringAverage}</span>
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
