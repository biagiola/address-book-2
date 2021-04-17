import React from 'react'

const ToggleTab = ({toggleTab, toggleState}) => {
  return (
    <div className="bloc-tabs">
      <button
        className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(0)}
      >
        Show All
      </button>
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        Search
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        Add
      </button>
    </div>
  )
}

export default ToggleTab
