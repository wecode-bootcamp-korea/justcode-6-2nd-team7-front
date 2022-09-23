import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const MySlider = styled(Slider)`
  color: #01aef0;

  :hover {
    color: #009fef;
  }

  & .MuiSlider-thumb {
    width: 1.6em;
    height: 1.6em;
    background-color: #009fef;
    border: 1px solid #fff;
    box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;

    &::after {
      content: '';
      width: 20%;
      height: 20%;
      background-color: #fff;
    }
  }

  & .MuiSlider-rail {
    height: 3px;
  }

  & .MuiSlider-track {
    height: 2.5px;
  }
`;

const CustomSilder = ({ value, handleChange }) => {
  return (
    <>
      <MySlider
        getAriaLabel={() => 'price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        max={30}
        min={1}
        stpe={1}
      />
    </>
  );
};

export default CustomSilder;
