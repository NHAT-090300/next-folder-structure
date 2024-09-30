interface IfProps {
  Then?;
  Else?;
  condition;
  destroyed?: boolean;
}

export function If(props: IfProps) {
  const { condition, Then, Else, destroyed = true } = props;
  if (destroyed) return condition ? Then : Else || '';
  else {
    return (
      <>
        <div className={condition ? 'bock' : 'hidden'}>{Then}</div>
        <div className={!condition ? 'bock' : 'hidden'}>{Else}</div>
      </>
    );
  }
}
