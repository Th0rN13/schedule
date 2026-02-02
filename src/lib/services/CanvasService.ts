import type { ScheduleItem } from "$lib/stores/schedule";
import type { HexColor } from "$lib/types";

export interface Position {
    x: number;
    y: number;
}

export interface TextConfig {
    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
    fontSize: number;
    fontFamily: string;
    fill: HexColor;
    align: CanvasTextAlign;
    verticalAlign: CanvasTextBaseline;
    rotation?: number;
    shadowColor?: string;
    shadowBlur?: number;
    shadowOpacity?: number;
}

export class CanvasService {
    static createTextConfig(options: Partial<TextConfig>): TextConfig {
        return {
            text: '',
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            fontSize: 12,
            fontFamily: 'Arial',
            fill: '#000000',
            align: 'left',
            verticalAlign: 'top',
            ...options
        }
    }

    static calculatePosition(index: number, isSmall: boolean): Position {
        return {
            x: 0,
            y: 0
        }
    }

    static generateTextConfigs(data: ScheduleItem, isSmall: boolean): TextConfig {
        return {
            text: '',
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            fontSize: 12,
            fontFamily: 'Arial',
            fill: '#000000',
            align: 'left',
            verticalAlign: 'top',

        }
    }
}