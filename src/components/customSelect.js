import React from "react";
import Select from "react-select";
import Fuse from "fuse.js";

// Wraps the react-select to use a better filter method, current one relies on indexOf which isn't great for searching large lists
// New custom search matches if all words in box are found anywhere in the option.label, case in-sensitive
const filterOptions = () => {
  return function(options, filter) {
    var fuseOptions = {
      shouldSort: true,
      tokenize: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["label"]
    };
    var fuse = new Fuse(options, fuseOptions);
    return fuse.search(filter);
  };
};

const CustomReactSelect = props => (
  <Select filterOption={filterOptions} {...props} />
);

export default CustomReactSelect;
