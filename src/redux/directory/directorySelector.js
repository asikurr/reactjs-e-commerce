import {createSelector} from "reselect";

const selectorDirector = state => state.directory;

export const selectDirectorySection = createSelector(
    [selectorDirector],
    directory => directory.sections
);

