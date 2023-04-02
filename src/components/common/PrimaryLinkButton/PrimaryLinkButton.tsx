import { AnchorHTMLAttributes, DetailedHTMLProps, FC, forwardRef } from 'react';
import primaryButtonStyles from './PrimaryLinkButton.module.scss';
type PrimaryLinkButtonProps = {} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

/**
 * Sample Component with Ref(s)
 */
export const PrimaryLinkButton = forwardRef<HTMLAnchorElement, PrimaryLinkButtonProps>(
  function LinkButtonTemplate(props, ref) {
    return <a ref={ref} {...props} className={primaryButtonStyles.primaryButton} />;
  }
);
