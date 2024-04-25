const e=`import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';
import './custom.scss';
import CustomSlotHandle from './CustomHandle';

const CustomSliderDemo = () => {
	const [sliderCustomLabelControl, setSliderCustomLabelControl] = useState([70]);
	const [sliderCustomHandleControl, setSliderCustomHandleControl] = useState([50]);

	return (
		<>
			<h2>Slider with custom labels</h2>
			<Slider
				min={0}
				max={100}
				stepSize={1}
				values={sliderCustomLabelControl}
				onValuesChange={setSliderCustomLabelControl}
				slotLabel={({value}: {value: number}) => '' + value + '%'}
				className="au-custom-slider-container"
			/>
			<hr />
			<h2>Slider with custom handle</h2>
			<Slider
				min={0}
				max={100}
				stepSize={1}
				values={sliderCustomHandleControl}
				onValuesChange={setSliderCustomHandleControl}
				slotHandle={CustomSlotHandle}
				className="au-custom-slider-container"
			/>
		</>
	);
};
export default CustomSliderDemo;
`;export{e as default};
