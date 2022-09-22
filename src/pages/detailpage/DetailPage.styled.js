import styled from 'styled-components';


export const DetailExplanation = styled.div` 
    width:1024px;
    height:447px;
    margin: 0 auto;

    .item-wrapper{
        display:flex;
        justify-content: space-around;
        margin-top: 100px;
    }

    .size{
        width: 490px;
        height: 348px;
    }

    .type{
        vertical-align: top;
        line-height: 27px;
        color: #ffffff;
        background-color: ${({theme}) => theme.colors.lowRating};
        font-size: 20px;
        
    }
    .title{
        display: inline;
        margin: 9px 0 0 0;
        font-size:28px;
        font-weight: bold;
    }
    .recommend{
        color: ${({theme}) => theme.colors.yellow};
        font-size: 15px;
    }

    .icon-flex{
        display: flex;
        justify-content: space-between;
    }
    .address{
        margin: 6px 0 8px 0;
        padding-top: 6px;
        color : ${({theme}) => theme.colors.text};
        font-size: 18px;
    }
    .event{
        display: block;
        position: relative;
        width: 100%;
        padding: 12px 44px 12px 12px;
        border-radius: 4px;
        border: none;
        background: linear-gradient(to right, #009abd 0%,#12b1a2 100%);
    }
    .li-style{
        padding-left:16px;
        color : #ffffff;
        text-align: left;
        list-style: inside;
    }
    .comment-ceo{
    display: block;
    position: relative;
    width: 424px;
    margin-top: 16px;
    padding: 26px 24px;
    background: #fafafa;
    }
    .ceo{
        display: block;
        margin-bottom: 15px;
        font-size: 16px;
        color: ${({theme}) => theme.colors.bkText};
        font-weight: bold;
    }
    .ripple{
        display: block;
        height: auto;
        line-height: 26px;
        color: #8c8c8c;
        font-size: 16px;
        overflow: hidden;
    }
`;

export const MenuBar = styled.div`
    margin-top: 38px;
    padding-top: 15px;
    border-bottom: 1px solid ${({theme}) => theme.colors.greyBg};

    .button {
        margin-right: 24px;
        margin-top: 38px;
        padding-bottom: 15px;
        border: none;
        background-color: inherit;
        color: ${({theme}) => theme.colors.text};
        font-size: 18px;
        font-weight: 500;

    &:focus {
        border-bottom: 4px solid ${({theme}) => theme.colors.mainColor};
        color: ${({theme}) => theme.colors.mainColor};
        outline: none;
    }
    }
`;

export const Context = styled.div`
    width : 100%
`;
