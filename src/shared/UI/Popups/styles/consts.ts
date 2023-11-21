import { DropDownDirections } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropDownDirections, string> = {
    bottomLeft: cls.optionsBottomLeft,
    bottomRight: cls.optionsBottomRight,
    topLeft: cls.optionsTopLeft,
    topRight: cls.optionsTopRight,
};
