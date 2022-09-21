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
    color: rgba(255,255,255,1);
    background-color: rgba(148,160,178,1);
    vertical-align: top;
    font-size: 20px;
    line-height: 27px;
    }
    .title{
    font-size:28px;
    display: inline;
    margin: 9px 0 0 0;
    font-weight: bold;
    }
    .recommend{
    font-size: 15px;
    color: #ffa726;
    }
    .address{
    margin: 6px 0 8px 0;
    padding-top: 6px;
    font-size: 18px;
    color : #8c8c8c;
    }
    .event{
    width: 100%;
    display: block;
    position: relative;
    padding: 12px 44px 12px 12px;
    border-radius: 4px;
    border: none;
    background: linear-gradient(to right, #009abd 0%,#12b1a2 100%);
    }
    ::after{
    display: inline-block;
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    width: 12px;
    height: 24px;
    margin-top: -12px;
    background: url(//image.goodchoice.kr/images/web_v3/ico_arr_gt.png) right 50% no-repeat;
    background-size: 12px auto;
    }
    .li-style{
    color : white;
    text-align: left;
    padding-left:16px;
    }
    .comment-ceo{
    display: block;
    position: relative;
    width: 424px;
    margin-top: 16px;
    padding: 26px 24px;
    background: rgb(250,250,250);
    }
    .ceo{
    font-weight: bold;
    display: block;
    margin-bottom: 15px;
    font-size: 16px;
    color: rgba(0,0,0,0.87);
    }
    .ripple{
    display: block;
    overflow: hidden;
    height: auto;
    font-size: 16px;
    line-height: 26px;
    color: rgba(0,0,0,0.56);}
`;
