
import type { Stage } from 'svelte-konva';
import { writable } from 'svelte/store';

export interface StageStore {
    stageLarge: Stage | undefined;
    stageSmall: Stage | undefined;
}

function createStore() {
    const { subscribe, set, update } = writable<StageStore>(
        {
            stageLarge: undefined,
            stageSmall: undefined,
        }
    );

    return {
        subscribe,
        updateLarge: (stage: Stage) => update((state) => {
            state.stageLarge = stage;
            return state;
        }),
        updateSmall: (stage: Stage) => update((state) => {
            state.stageSmall = stage;
            return state;
        })
    };
}

export const stageStore = createStore();
