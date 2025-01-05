
import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage(){
const names = ['Rei da Rima', 'Sofia Crazy', 'Receba'];




return(
  <div>
    <Header title="React" />
    <ul>
      {names.map((name) => (
      <li key={name}>{name}</li>
      ))}
    </ul>
    <LikeButton />
  </div>
);
}

