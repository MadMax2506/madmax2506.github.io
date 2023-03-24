import { Link } from '@mui/material';
import { PropsWithChildren, ReactNode, useMemo } from 'react';

/**
 * Props for {@link TodoLink}
 */
type TodoLinkProps = PropsWithChildren<
  | {
      type: 'default' | never;
      href: string;
    }
  | {
      type: 'ticket';
      ticketId: number;
    }
>;

/**
 * Generate link to the issue
 */
function getLinkData(props: TodoLinkProps): [string, ReactNode] {
  switch (props.type) {
    case 'ticket':
      return [`https://github.com/<USER>/<PROJECT>/issues/${props.ticketId}`, `#${props.ticketId}`];
    case 'default':
    default:
      return [props.href, props.children];
  }
}

/**
 * Display link for the issue
 * @param props {@link TodoLinkProps}
 */
export function TodoLink(props: TodoLinkProps): JSX.Element {
  const [link, label] = useMemo(() => getLinkData(props), [props]);

  return (
    <Link target="_blank" fontWeight={600} href={link}>
      {label}
    </Link>
  );
}
