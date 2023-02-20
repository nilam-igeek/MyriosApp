import React from 'react';
import { COLORS } from '../../../common/style/Colors';
import BaseStyle from '../../../common/style/BaseStyle';
import Button from '../Button';
import EditSvg from '../../../common/svgs/EditSvg';

const ButtonWithIcon = ({
    title,onPress
}) => {
    return (
        <>
            <Button
                bgColor={COLORS.lemonchiffon}
                width={(BaseStyle.WIDTH / 100) * 80}
                title={title}
                fontSize={14}
                color={COLORS.black}
                height={45}
                marginTop={30}
                onPress={onPress}
                isRight>
                <EditSvg />
            </Button>
        </>
    );
};

export default ButtonWithIcon;
