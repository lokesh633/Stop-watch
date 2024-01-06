import React from "react";
export default function Button({ start, stop, reset, button }) {
  return (
    <>
      <div className="display-btn">
        {button === 0 && (
          <button type="button" class="btn btn-primary" onClick={start}>
            START
          </button>
        )}
        {button === 1 && (
          <>
            <button type="button" class="btn btn-warning" onClick={stop}>
              STOP
            </button>
            <button type="button" class="btn btn-danger" onClick={reset}>
              RESET
            </button>
          </>
        )}
      </div>
    </>
  );
}
