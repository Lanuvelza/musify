import * as React from 'react';
import { StylesOptions } from '../types/common';
interface Props {
    isMagnified: boolean;
    onToggleMagnify: () => void;
    onChangeRange: (position: number) => void;
    position: number;
    styles: StylesOptions;
}
export default class Slider extends React.PureComponent<Props> {
    private handleChangeRange;
    render(): JSX.Element;
}
export {};
