import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    .title {
        font-size: 28px;
        margin-bottom: 25px;
        cursor: pointer;   
    }
    .preview {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;

        @media screen and (max-width: 768px) {
            grid-template-columns: none;
        }
    }
 
`;

