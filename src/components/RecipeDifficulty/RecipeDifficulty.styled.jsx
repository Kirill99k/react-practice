import styled from '@emotion/styled';

export const Badge = styled.div`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  background-color: ${({ theme, selected }) => {
    return selected ? theme.colors.accent : theme.colors.white;
  }};
  color: ${p => (p.selected ? p.theme.colors.white : p.theme.colors.text)};
`;

export const DifficultyTitle = styled.h3`
  display: flex;
  justify-content: center;
`;
