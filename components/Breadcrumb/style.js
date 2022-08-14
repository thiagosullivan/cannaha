import darken from "polished/lib/color/darken";
import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
    max-width: 1650px;
    width: 100%;
    margin: 0 auto 3.1rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;

    .breadcrumb__link {
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.primary};
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => darken(0.2, theme.primary)};
        }

        a {
            font-family: 'Lora', serif;
            margin-left: 10px;
    
            &:first-child {
                margin-left: 0;
            }
        }
    }

`;