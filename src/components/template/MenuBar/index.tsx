import * as S from "./styles";

import { TimerIcon, FriendshipIcon, ProfileIcon } from "@/styles/HeroIcons";

// types
import { IMenuItem } from "@/@types/menuItem";
import { Link } from "react-router-dom";

const menuItems: IMenuItem[] = [
  {
    code: 1,
    link: "/timer",
    text: "Timer",
    icon: TimerIcon,
  },
  {
    code: 2,
    link: "/friendship",
    text: "Friendship",
    icon: FriendshipIcon,
  },
  {
    code: 3,
    link: "/profile",
    text: "Profile",
    icon: ProfileIcon,
  },
];

export function MenuBar() {
  function handleClick(item: IMenuItem) {
    console.log(item);
  }

  return (
    <S.Container>
      <S.IconsWrapper>
        <S.Logo />
        {menuItems.map((item) => {
          return (
            <Link key={item.code} to={item.link}>
              <S.MenuButton onClick={() => handleClick(item)}>
                <div>{item.icon}</div>
                <span>{item.text}</span>
              </S.MenuButton>
            </Link>
          );
        })}
      </S.IconsWrapper>
    </S.Container>
  );
}
