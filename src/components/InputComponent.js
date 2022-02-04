export default function InputComponent({
  value,
  nameInput,
  setUser,
  user,
  title,
  type = "text",
  min = 0,
  disabled = false,
}) {
  return (
    <label className="ContainerFormRight__label">
      <span>{title}</span>
      <input
        min={min}
        disabled={disabled}
        id="name"
        type={type}
        name={nameInput}
        value={value}
        onChange={({ target }) =>
          setUser && setUser({ ...user, [target.name]: target.value })
        }
      />
    </label>
  );
}
