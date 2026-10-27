import { Fragment } from 'react';

/** Renders design copy that breaks onto set lines (the artboards use <br>). */
export default function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}
