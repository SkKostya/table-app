import React, { useState } from "react";

import * as Styled from "./styles";

interface ISelect {
  options: string[];
  selected?: string;
  title: string;
  onChange?: (label: string) => void;
}

const InnerSelect = ({ options, title, selected = options[0], onChange = () => null }: ISelect) => {
  const [value, setValue] = useState(selected);
  const [dropdown, setDropdown] = useState(false);

  const handleChange = (label: string) => {
    setValue(label);
    onChange(label);
  };

  return (
    <Styled.Container>
      <Styled.TitleSelect onClick={() => setDropdown(!dropdown)}>
        {title}
        {!!value && ":"}
        <Styled.TitleItem>{value}</Styled.TitleItem>
        <Styled.Arrow />
      </Styled.TitleSelect>
      {!!dropdown && (
        <Styled.MenuBox>
          <ul>
            {options.map(item => (
              <li
                key={item}
                value={item}
                onClick={() => {
                  handleChange(item);
                  setDropdown(false);
                }}>
                {item}
              </li>
            ))}
          </ul>
        </Styled.MenuBox>
      )}
    </Styled.Container>
  );
};

export default InnerSelect;