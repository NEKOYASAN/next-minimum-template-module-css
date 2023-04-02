import homeStyles from '~/styles/Home.module.scss';
import { PrimaryLinkButton } from '~/components/common/PrimaryLinkButton/PrimaryLinkButton';
import { SecondaryLinkButton } from '~/components/common/SecondaryLinkButton/SecondaryLinkButton';

export default function Home() {
  return (
    <div className={homeStyles.base}>
      <div className={homeStyles.container}>
        <div className={homeStyles.content}>
          <h2 className={homeStyles.title}>
            テストメッセージです
            <br />
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className={homeStyles.subtitle}>
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
            proident excepteur commodo do ea.
          </p>
          <div className={homeStyles.buttons}>
            <PrimaryLinkButton href={'#'}>Get Started</PrimaryLinkButton>
            <SecondaryLinkButton href={'#'}>
              Learn more <span aria-hidden="true">→</span>
            </SecondaryLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
