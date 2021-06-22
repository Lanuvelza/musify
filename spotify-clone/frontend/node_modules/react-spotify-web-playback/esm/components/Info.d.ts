import * as React from 'react';
import { StylesOptions } from '../types/common';
import { SpotifyPlayerTrack } from '../types/spotify';
interface Props {
    onFavoriteStatusChange: (status: boolean) => any;
    isActive: boolean;
    showSaveIcon: boolean;
    track: SpotifyPlayerTrack;
    token: string;
    styles: StylesOptions;
    updateSavedStatus?: (fn: (status: boolean) => any) => any;
}
interface State {
    isSaved: boolean;
}
export default class Info extends React.PureComponent<Props, State> {
    private isActive;
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: Props): Promise<void>;
    componentWillUnmount(): void;
    private handleClickIcon;
    private setStatus;
    private updateState;
    render(): JSX.Element;
}
export {};
