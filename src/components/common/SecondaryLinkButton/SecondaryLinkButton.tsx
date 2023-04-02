import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import secondaryButtonStyles from './SecondaryLinkButton.module.scss';

type SecondaryLinkButtonProps = {} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

/**
 * Sample Component without Ref(s)
 */
export const SecondaryLinkButton: FC<SecondaryLinkButtonProps> = (props) => {
  return <a {...props} className={secondaryButtonStyles.secondaryButton} />;
};
