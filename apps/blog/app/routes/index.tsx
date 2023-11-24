import { CounterButton } from 'ui/counter-button';
import { Link } from 'ui/link/subpath';

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
      </p>
    </div>
  );
}
