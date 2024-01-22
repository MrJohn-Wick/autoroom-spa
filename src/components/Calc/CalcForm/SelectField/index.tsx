export function SelectField({
  name,
  label,
  value,
  options,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  options: Array<string>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <label>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </>
  );
}
