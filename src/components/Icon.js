export default function Icon({ Element, link }) {
  return (
    <div>
      <a href={link} rel="noreferrer" target="_blank">
        <Element size="40" color="white" />
      </a>
    </div>
  );
}
