import { useEffect, useState } from 'react';
import {
  Text,
  Flex,
  Heading,
  Divider,
  Input,
  Button,
  Tooltip,
  useDisclosure,
} from '@unllamas/lacrypta-ui';

import {
  getColorScale,
  hslToHex,
  getContrast,
  calculateContrast,
} from '@/utils/colorPick';
import { copy } from '@/utils/share';

import { appTheme } from '@/config/theme';

interface ColorPicker {
  defaultColor: string;
  onChange: (value: string) => void;
}

function ColorPicker(props: ColorPicker) {
  const { defaultColor, onChange } = props;

  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    onChange(color);
  }, [color, onChange]);

  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  return <Input type="color" value={color} onChange={handleChange} />;
}

interface Color {
  number: number;
  background: string;
  contrast: {
    ratio: string;
    AA: boolean;
    AAA: boolean;
  };
  textColor: string;
}

const Color = (props: Color) => {
  const { number, background, contrast, textColor } = props;

  const handleCopy = () => {
    copy(background).then((res) => {
      // setTimeout(() => {
      //   onClose();
      // }, 1200);
    });
  };

  return (
    <Flex direction="column" align="center" justify="space-between" flex={1}>
      <Tooltip label="copiado">
        <button
          onClick={handleCopy}
          style={{
            height: '100px',
            width: '100px',
            background: background,
          }}
        >
          <Flex direction="column" flex={1} align="center" justify="center">
            <Text color={textColor}>
              {contrast.AA && !contrast.AAA && 'AA '}
              {contrast.AAA && 'AAA '}
            </Text>
            <Text size="sm" isBold color={textColor}>
              {contrast.ratio}
            </Text>
          </Flex>
        </button>
      </Tooltip>
      <Flex direction="column" align="center">
        <Text isBold>{background}</Text>
        <Text size="sm" color={appTheme.colors.gray[500]}>
          {number}
        </Text>
      </Flex>
    </Flex>
  );
};

interface ColorType {
  title: string;
  value: string;
  isEdit?: boolean;
}

const ColorType = (props: ColorType) => {
  const { title, value, isEdit = false } = props;

  const [selectedColor, setSelectedColor] = useState(value);

  const colors = getColorScale(selectedColor);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // const handleCopy = () => {
  //   copy(colors).then((res) => {
  //     alert('copiado');
  //   });
  // };

  return (
    <Flex direction="column" flex={1}>
      <Flex justify="space-between" align="center">
        <Heading as="h4">{title}</Heading>
        {/* {isEdit && (
          <Button size="xs" variant="borderless">
            Copiar objeto
          </Button>
        )} */}
      </Flex>
      {isEdit && (
        <ColorPicker
          defaultColor={selectedColor}
          onChange={handleColorChange}
        />
      )}
      <Flex gap="xs">
        {colors.map((color, index) => {
          const hex = hslToHex(color);

          let textColor = hslToHex(colors[1000]);
          let backColor = hslToHex(color);

          // local test contrast
          const localContrast = calculateContrast(textColor, backColor);

          if (Number(localContrast.ratio) <= 4) {
            textColor = hslToHex(colors[100]);
          } else {
            textColor = hslToHex(colors[1000]);
          }

          // new contrast
          const newContrast = calculateContrast(textColor, backColor);

          return (
            <>
              <Color
                number={index}
                contrast={newContrast}
                textColor={textColor}
                background={hex}
              />
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};

export const List = () => {
  // const primaryColor = getColorScale('#9BF20D');
  // const secondaryColor = getColorScale('#E72DA1');
  // const grayColor = getColorScale('#858585');
  // const successColor = getColorScale('#2191F7');
  // const warningColor = getColorScale('#FD8000');
  // const errorColor = getColorScale('#FF1414');

  return (
    <Flex direction="column" gap="md">
      <ColorType title="Primary" value={'#9BF20D'} isEdit />
      <Divider y="xs" />
      <ColorType title="Secondary" value={'#E72DA1'} />
      <Divider y="xs" />
      {/* <ColorType title="Gray" value={'#858585'} />
      <Divider y="xs" /> */}
      <ColorType title="Success" value={'#099DF9'} />
      <Divider y="xs" />
      <ColorType title="Warning" value={'#F9D018'} />
      <Divider y="xs" />
      <ColorType title="Error" value={'#f91818'} />
      <Divider y="xs" />
    </Flex>
  );
};
