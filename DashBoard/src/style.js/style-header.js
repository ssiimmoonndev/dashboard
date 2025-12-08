import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 95%;
    border: solid 1px var(--primary-color-dark);
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    background-color: white;
    margin-top: 1rem;
    display: flex;
    justify-self: center;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--radius-sm);

    p {
        margin: 0;
    }
`;

export const Title = styled.h1`
    font-size: 4.5rem;
    font-weight: 600;
    color: var(--secondary-color-dark);
    display: flex;
    align-items: center;
    margin: 0 0 0 2rem;
`;

export const WeatherDate = styled.div`
    width: 10rem;
    border: solid 2px var(--secondary-color-light);
    border-radius: var(--radius-md);
    margin: 1rem;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const SelectLanguage = styled.select`
  margin-right: 2rem;
  padding: 0.5rem 1rem;
  border: solid 2px var(--secondary-color-light);
  border-radius: var(--radius-sm);

  &:hover {
    cursor: pointer;
    background-color: var(--secondary-color-light);
  }
`;