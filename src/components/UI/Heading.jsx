export default function Heading({links}) {
    return (
      <h1>
        {links.map((link) => link)}
      </h1>
    );
}