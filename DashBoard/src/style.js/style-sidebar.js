import styled from "styled-components";

export const SidebarStyle = styled.div`
    margin: 2rem;
    padding: 2rem 1rem;
    border: solid 2px var(--primary-color-dark);
    border-radius: var(--radius-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: fit-content;
    gap: 2rem;
`;

export const SidebarButton = styled.div`
    height: 1rem;
    width: 250px;
    border: solid 1px var(--primary-color-dark);
    border-radius: var(--radius-lg);
    background-color: var(--primary-color);
    padding: 1rem;
    font-size: large;
    font-weight: bold;
    color: var(--secondary-color);
    display: flex;
    gap: 1.5rem;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: var(--primary-color-dark);
    }
`;