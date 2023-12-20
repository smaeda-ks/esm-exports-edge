// works
import { CounterButton } from 'ui/CounterButton';
import { Link } from 'ui/Link';

// doesn't work
import { Link2 } from 'ui/Link/subfolder';

// works
// import { Link2 } from 'ui/dist/Link/subfolder';

export default function Index() {
  return (
    <div className="container">
      <h1 className="title">
        Blog <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With <Link href="https://turbo.build/repo">Turborepo</Link>
        {' & '}
        <Link href="https://remix.run/">Remix</Link>
        <Link2 href="https://remix.run/">Link2</Link2>
      </p>
    </div>
  );
}
