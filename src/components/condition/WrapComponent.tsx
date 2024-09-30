import React, { ReactNode } from 'react';

export interface ICondition {
  condition: boolean;
  component: React.ComponentType;
  props: object;
}

interface Props {
  conditions: ICondition[];
  children?: ReactNode;
  className?: string;
}

export function WrapComponent(props: Props) {
  const { conditions, children = '', className = '' } = props;

  // Find the first condition that matches
  const matchedCondition = conditions?.find((condition) => condition?.condition);

  if (matchedCondition) {
    const { component: Component, props: componentProps } = matchedCondition;
    return <Component {...componentProps} />;
  }

  // If no conditions match, render children
  return <div className={className}>{children}</div>;
}
