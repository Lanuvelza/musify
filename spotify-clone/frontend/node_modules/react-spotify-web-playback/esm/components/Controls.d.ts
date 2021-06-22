/// <reference types="react" />
import { StylesOptions } from '../types/common';
import { WebPlaybackTrack } from '../types/spotify';
interface Props {
    isExternalDevice: boolean;
    isPlaying: boolean;
    onClickNext: () => void;
    onClickPrevious: () => void;
    onClickTogglePlay: () => void;
    nextTracks: WebPlaybackTrack[];
    previousTracks: WebPlaybackTrack[];
    styles: StylesOptions;
}
export default function Controls(props: Props): JSX.Element;
export {};
